'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useReportWebVitals } from 'next/web-vitals'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'
const COOKIE_PREFERENCES_KEY = 'cookie-preferences-pasm'
const COOKIE_PREFERENCES_EVENT = 'pasm-cookie-preferences-change'

function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false

  try {
    const rawPreferences = window.localStorage.getItem(COOKIE_PREFERENCES_KEY)
    if (!rawPreferences) return false

    const preferences = JSON.parse(rawPreferences) as { analytics?: boolean }
    return preferences.analytics === true
  } catch {
    return false
  }
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false)

  useEffect(() => {
    const syncAnalyticsConsent = () => {
      setAnalyticsAllowed(hasAnalyticsConsent())
    }

    syncAnalyticsConsent()

    window.addEventListener(COOKIE_PREFERENCES_EVENT, syncAnalyticsConsent)
    window.addEventListener('storage', syncAnalyticsConsent)

    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_EVENT, syncAnalyticsConsent)
      window.removeEventListener('storage', syncAnalyticsConsent)
    }
  }, [])

  useEffect(() => {
    if (!analyticsAllowed || !window.gtag) return

    const query = searchParams.toString()
    const url = query ? `${pathname}?${query}` : pathname

    window.gtag('config', GA_ID, {
      page_path: url,
      anonymize_ip: true,
    })
  }, [pathname, searchParams, analyticsAllowed])

  useReportWebVitals((metric) => {
    if (!analyticsAllowed || !window.gtag) return

    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    })
  })

  if (
    process.env.NODE_ENV !== 'production' ||
    GA_ID === 'G-XXXXXXXXXX' ||
    !analyticsAllowed
  ) {
    return null
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              analytics_storage: 'granted',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied'
            });
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname + window.location.search,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
              send_page_view: false
            });
          `,
        }}
      />
    </>
  )
}
