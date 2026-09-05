import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// jsdom implements neither of these, and framer-motion's useInView /
// useReducedMotion call them during render. Elements are reported as visible so
// in-view animations settle and their content is queryable.
vi.stubGlobal(
  'IntersectionObserver',
  class {
    callback: IntersectionObserverCallback
    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback
    }
    observe(target: Element) {
      this.callback(
        [{ isIntersecting: true, target } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      )
    }
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  },
)

vi.stubGlobal('matchMedia', (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: () => {},
  removeListener: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => false,
}))

if (!window.HTMLElement.prototype.scrollIntoView) {
  window.HTMLElement.prototype.scrollIntoView = () => {}
}
