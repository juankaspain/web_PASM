// Google Analytics
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

type GTagEvent = {
  action: string
  category: string
  label: string
  value?: number
}

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID as string, {
      page_path: url,
    })
  }
}

// Log specific events
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track portfolio project views
export const trackProjectView = (projectName: string) => {
  event({
    action: 'view_project',
    category: 'Portfolio',
    label: projectName,
  })
}

// Track showreel plays
export const trackShowreelPlay = () => {
  event({
    action: 'play_showreel',
    category: 'Engagement',
    label: 'Showreel Video',
  })
}

// Track contact form submissions
export const trackContactSubmit = () => {
  event({
    action: 'submit_contact_form',
    category: 'Conversion',
    label: 'Contact Form',
  })
}

// Track external link clicks
export const trackExternalLink = (url: string, label: string) => {
  event({
    action: 'click_external_link',
    category: 'Outbound',
    label: `${label}: ${url}`,
  })
}
