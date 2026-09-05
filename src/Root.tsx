import { AnimatePresence } from 'framer-motion'
import App from './App'
import { LoadingSkeleton } from './components/LoadingSkeleton'
import { PortfolioProvider } from './content/usePortfolio'
import { usePortfolioFetch } from './content/portfolioContext'

/**
 * Fetches live content and renders the app once it resolves.
 *
 * Kept out of main.tsx so the entry point only mounts: a file that defines a
 * component without exporting it is not a Fast Refresh boundary, so editing it
 * forced a full reload.
 */
export function Root() {
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
