const API_BASE = 'https://cloudyadminapi.azaken.com/api'

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
