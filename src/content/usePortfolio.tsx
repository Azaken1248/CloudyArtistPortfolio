import { createContext, useContext, type ReactNode } from 'react'
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
