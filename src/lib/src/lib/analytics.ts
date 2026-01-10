// src/lib/analytics.ts
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return

  ;(window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  })
}
