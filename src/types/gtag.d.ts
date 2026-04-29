export {}

type GtagCommand = 'config' | 'event' | 'js' | 'set' | 'consent'
type GtagTarget = string | Date
type GtagConfig = Record<string, unknown>

declare global {
  interface Window {
    gtag?: (command: GtagCommand, targetId: GtagTarget, config?: GtagConfig) => void
    dataLayer?: unknown[]
  }
}
