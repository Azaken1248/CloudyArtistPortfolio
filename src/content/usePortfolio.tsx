import { type ReactNode } from 'react'
import { PortfolioContext } from './portfolioContext'
import { defaultPortfolio } from './portfolio'
import type { PortfolioData } from './types'

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
