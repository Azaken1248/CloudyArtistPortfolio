
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { ContactSection } from './ContactSection'
import { PortfolioProvider } from '../content/usePortfolio'

/**
 * Regression cover for the crash that took the contact form down whenever the
 * relay was unhealthy: the relay returns `error` as an object, which was passed
 * straight into React as a child.
 */
function renderForm() {
  return render(
    <PortfolioProvider>
      <ContactSection />
    </PortfolioProvider>,
  )
}

async function submit() {
  const form = document.querySelector('#contact form') as HTMLFormElement
  form.querySelectorAll('input, textarea').forEach((el) => {
    const node = el as HTMLInputElement
    if (node.type === 'email') node.value = 'a@b.com'
    else if (node.tagName === 'TEXTAREA') node.value = 'Hello there'
    else node.value = 'Tester'
  })
  form.requestSubmit()
}

const originalFetch = globalThis.fetch
afterEach(() => { globalThis.fetch = originalFetch; vi.restoreAllMocks() })

function mockRelay(status: number, body: unknown, asJson = true) {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: asJson ? async () => body : async () => { throw new SyntaxError('not json') },
  } as Response)
}

describe('ContactSection relay responses', () => {
  beforeEach(() => { vi.spyOn(console, 'error').mockImplementation(() => {}) })

  it('renders an object-shaped error as text instead of crashing', async () => {
    mockRelay(502, { success: false, error: { message: 'Relay is offline right now.' } })
    renderForm()
    await submit()

    await waitFor(() => {
      expect(screen.getByText('Relay is offline right now.')).toBeInTheDocument()
    })
    // The form must survive; previously React threw and the section unmounted.
    expect(document.querySelector('#contact form')).toBeInTheDocument()
  })

  it('renders a string-shaped error (the rate limiter path)', async () => {
    mockRelay(429, { success: false, error: 'Too many messages sent.' })
    renderForm()
    await submit()
    await waitFor(() => {
      expect(screen.getByText('Too many messages sent.')).toBeInTheDocument()
    })
  })

  it('shows the server success message from data.message', async () => {
    mockRelay(200, { success: true, data: { message: 'Relayed successfully.' } })
    renderForm()
    await submit()
    await waitFor(() => {
      expect(screen.getByText('Relayed successfully.')).toBeInTheDocument()
    })
  })

  it('falls back cleanly when the response is not JSON', async () => {
    mockRelay(502, null, false)
    renderForm()
    await submit()
    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument()
    })
  })
})
