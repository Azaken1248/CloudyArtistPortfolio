import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { mapApiToPortfolio } from './adapter'
import { fetchPortfolio } from './api'
import type { ApiPortfolioResponse } from './apiTypes'
import { defaultPortfolio } from './portfolio'
import type { PortfolioData } from './types'

const PortfolioContext = createContext<PortfolioData>(defaultPortfolio)

type PortfolioProviderProps = {
  children: ReactNode
  data?: PortfolioData
}

export function PortfolioProvider({ children, data }: PortfolioProviderProps) {
  return (
    <PortfolioContext value={data ?? defaultPortfolio}>
      {children}
    </PortfolioContext>
  )
}

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
