
import { describe, it, expect } from 'vitest'
import { mapApiToPortfolio } from './adapter'
import { defaultPortfolio } from './portfolio'
import type { ApiPortfolioResponse } from './apiTypes'

/** Minimal well-formed API payload. */
function validPayload(): ApiPortfolioResponse['data'] {
  return {
    siteConfig: { siteName: 'S', siteSubtitle: 'sub', pageTitle: 'T', metaDescription: 'M', logoIcon: 'Cloud' },
    heroContent: {
      pillIcon: 'Star', pillLabel: 'p', eyebrow: 'e', headline: 'h', body: 'b',
      accent: 'a', image: 'https://x/i.webp', imageAlt: 'alt', statusPillLabel: 's', ctaButtons: [],
    },
    gallerySection: { eyebrow: 'e', title: 't', description: 'd' },
    commissions: { section: { eyebrow: 'e', title: 't', description: 'd' } },
    faqPage: { section: { eyebrow: 'e', title: 't', description: 'd' }, faqHeading: 'F', tosHeading: 'T', tosAcceptanceText: 'A' },
    contactContent: {
      section: { eyebrow: 'e', title: 't', description: 'd' },
      infoCard: { tag: 'g', title: 't', description: 'd', notes: [] },
      form: { fields: [], submitLabel: 'Send', disclaimer: 'D' },
    },
    footerContent: { copyright: 'c', tagline: 'tl' },
    nav: [{ id: 'home', label: 'Home', icon: 'House' }],
    socials: [],
    artworks: [], commissionTiers: [], faqItems: [], tosSections: [],
  } as unknown as ApiPortfolioResponse['data']
}

describe('mapApiToPortfolio', () => {
  it('maps a complete payload', () => {
    const out = mapApiToPortfolio(validPayload())
    expect(out.site.siteName).toBe('S')
    expect(out.hero.headline).toBe('h')
    expect(out.nav[0].id).toBe('home')
  })

  it('remaps the commissions nav id to the portfolio section id', () => {
    const p = validPayload() as unknown as Record<string, unknown>
    p.nav = [{ id: 'commissions', label: 'Commissions', icon: 'Palette' }]
    expect(mapApiToPortfolio(p as never).nav[0].id).toBe('commission')
  })

  it('tolerates absent collections rather than throwing', () => {
    const p = validPayload() as unknown as Record<string, unknown>
    delete p.artworks; delete p.faqItems; delete p.nav
    const out = mapApiToPortfolio(p as never)
    expect(out.artworks).toEqual([])
    expect(out.faqs).toEqual([])
    expect(out.nav).toEqual([])
  })

  it('names the missing section instead of throwing a TypeError', () => {
    const p = validPayload() as unknown as Record<string, unknown>
    delete p.heroContent
    // Previously this surfaced as "Cannot read properties of undefined",
    // and the whole site silently reverted to hardcoded defaults.
    expect(() => mapApiToPortfolio(p as never)).toThrow(/missing: heroContent/)
  })

  it('reports a missing nested section specifically', () => {
    const p = validPayload() as unknown as Record<string, unknown>
    ;(p.faqPage as Record<string, unknown>).section = undefined
    expect(() => mapApiToPortfolio(p as never)).toThrow(/faqPage\.section/)
  })

  it('rejects a non-object payload', () => {
    expect(() => mapApiToPortfolio(null as never)).toThrow(/no data object/)
  })
})

describe('defaultPortfolio fallback', () => {
  it('is shaped like the mapper output, so a fallback renders', () => {
    expect(defaultPortfolio.site.siteName).toBeTruthy()
    expect(Array.isArray(defaultPortfolio.artworks)).toBe(true)
    expect(defaultPortfolio.contact.form.fields.length).toBeGreaterThan(0)
  })
})
