import { createContext, useContext, useEffect, useState } from 'react'
import { mapApiToPortfolio } from './adapter'
import { fetchPortfolio } from './api'
import type { ApiPortfolioResponse } from './apiTypes'
import { defaultPortfolio } from './portfolio'
import type { PortfolioData } from './types'

/**
 * Context and hooks, kept apart from the provider component.
 *
 * A module that exports both a component and a hook is not a Fast Refresh
 * boundary, so editing either one reloaded the whole tree and reset app state.
 */
export const PortfolioContext = createContext<PortfolioData>(defaultPortfolio)

export function usePortfolio(): PortfolioData {
  return useContext(PortfolioContext)
}

type FetchState = {
  data: PortfolioData | null
  isLoading: boolean
  error: Error | null
}

export function usePortfolioFetch(): FetchState & { data: PortfolioData } {
  const [state, setState] = useState<FetchState>({
    data: null,
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false

    fetchPortfolio()
      .then((raw) => {
        if (cancelled) return
        const mapped = mapApiToPortfolio(raw as ApiPortfolioResponse['data'])
        setState({ data: mapped, isLoading: false, error: null })
      })
      .catch((err) => {
        if (cancelled) return
        console.warn('Portfolio API fetch failed, using fallback:', err)
        setState({ data: null, isLoading: false, error: err })
      })

    return () => {
      cancelled = true
    }
  }, [])

  return {
    data: state.data ?? defaultPortfolio,
    isLoading: state.isLoading,
    error: state.error,
  }
}
