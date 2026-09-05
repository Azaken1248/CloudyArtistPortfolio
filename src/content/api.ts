/**
 * Overridable so the site can be pointed at a local API during development.
 * Set VITE_API_BASE_URL in .env.local; production builds fall back to the
 * deployed API.
 */
const API_BASE =
  (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_API_BASE_URL ??
  'https://cloudyadminapi.azaken.com/api'

export async function fetchPortfolio(): Promise<unknown> {
  const res = await fetch(`${API_BASE}/portfolio`)

  if (!res.ok) {
    throw new Error(`Portfolio API responded with ${res.status}`)
  }

  const json = await res.json()

  if (!json.success) {
    throw new Error(json.error?.message ?? 'Unknown API error')
  }

  return json.data
}
