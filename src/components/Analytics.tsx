'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useReportWebVitals } from 'next/web-vitals'

// Google Analytics ID (replace with actual ID)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      const url = pathname + searchParams.toString()
      ;(window as any).gtag('config', GA_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  // Track Web Vitals for performance monitoring
  useReportWebVitals((metric) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      })
    }
  })

  // Only load in production
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <>
      {/* Google Analytics - Optimized with lazyOnload for better performance */}
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
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
              send_page_view: false
            });
          `,
        }}
      />

      {/* Plausible Analytics (Privacy-friendly alternative) */}
      {/* Uncomment to use Plausible instead of GA */}
      {/* <Script
        defer
        data-domain="almagrosanmiguel.com"
        src="https://plausible.io/js/script.js"
        strategy="lazyOnload"
      /> */}
    </>
  )
}
