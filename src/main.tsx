import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PortfolioProvider, usePortfolioFetch } from './content/usePortfolio.tsx'
import { LoadingSkeleton } from './components/LoadingSkeleton.tsx'
import { AnimatePresence } from 'framer-motion'

function Root() {
  const { data, isLoading } = usePortfolioFetch()

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingSkeleton key="skeleton" />
      ) : (
        <PortfolioProvider data={data} key="app">
          <App />
        </PortfolioProvider>
      )}
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
