/**
 * Analytics Tracking Library
 * 
 * Custom event tracking for Google Analytics 4
 * Usage: Import and call tracking functions throughout the app
 * 
 * @example
 * ```typescript
 * import { analytics } from '@/lib/analytics'
 * 
 * // Track form submission
 * analytics.trackFormSubmit('contact_form')
 * 
 * // Track external link click
 * analytics.trackExternalLink('https://imdb.com/...', 'imdb')
 * ```
 */

// Type definitions
interface GTMWindow extends Window {
  gtag?: (
    command: string,
    action: string,
    params?: Record<string, any>
  ) => void
  dataLayer?: any[]
}

declare const window: GTMWindow

/**
 * Generic event tracking function
 * @param eventName - Name of the event to track
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
): void => {
  if (typeof window === 'undefined') return
  
  // Check if gtag is available
  if (window.gtag) {
    window.gtag('event', eventName, eventParams)
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', eventName, eventParams)
    }
  }
}

/**
 * Track page view
 * @param url - Page URL
 * @param title - Page title
 */
export const trackPageView = (url: string, title?: string): void => {
  trackEvent('page_view', {
    page_path: url,
    page_title: title,
  })
}

/**
 * Analytics tracking functions
 */
export const analytics = {
  /**
   * Track video reel play
   * @param videoProvider - Video hosting provider ('vimeo', 'youtube', etc.)
   * @param videoDuration - Duration in seconds
   */
  trackReelPlay: (videoProvider: string = 'vimeo', videoDuration?: number) => {
    trackEvent('reel_play', {
      video_provider: videoProvider,
      video_duration: videoDuration || 180,
      content_type: 'showreel',
    })
  },

  /**
   * Track video reel progress milestones
   * @param percentage - Progress percentage (25, 50, 75, 100)
   * @param videoProvider - Video hosting provider
   */
  trackReelProgress: (
    percentage: number,
    videoProvider: string = 'vimeo'
  ) => {
    trackEvent('reel_progress', {
      milestone: `${percentage}%`,
      video_provider: videoProvider,
      content_type: 'showreel',
    })
  },

  /**
   * Track form submission
   * @param formType - Type of form ('contact_form', 'newsletter', etc.)
   * @param success - Whether submission was successful
   */
  trackFormSubmit: (formType: string, success: boolean = true) => {
    trackEvent('form_submit', {
      form_type: formType,
      form_location: 'contact_section',
      success,
    })
    
    // Mark as conversion if successful
    if (success) {
      trackEvent('conversion', {
        conversion_type: 'form_submission',
        form_type: formType,
      })
    }
  },

  /**
   * Track press kit download
   * @param fileType - Type of file ('pdf', 'zip', 'jpg', etc.)
   * @param fileName - Name of the file
   */
  trackPressKitDownload: (fileType: string, fileName?: string) => {
    trackEvent('press_kit_download', {
      file_type: fileType,
      file_name: fileName || `press-kit-${fileType}`,
      content_type: 'press_material',
    })
    
    // Mark as conversion
    trackEvent('conversion', {
      conversion_type: 'press_kit_download',
      file_type: fileType,
    })
  },

  /**
   * Track portfolio project view
   * @param projectName - Name of the project
   * @param projectType - Type of project ('tv_series', 'film', 'theater', etc.)
   */
  trackProjectView: (projectName: string, projectType?: string) => {
    trackEvent('project_view', {
      project_name: projectName,
      content_type: 'portfolio_item',
      project_type: projectType || 'unknown',
    })
  },

  /**
   * Track external link clicks
   * @param destination - URL destination
   * @param linkType - Type of link ('imdb', 'instagram', 'wikipedia', etc.)
   */
  trackExternalLink: (destination: string, linkType: string) => {
    trackEvent('external_link_click', {
      destination,
      link_type: linkType,
      outbound: true,
    })
  },

  /**
   * Track social media clicks
   * @param platform - Social media platform ('instagram', 'twitter', 'facebook', etc.)
   * @param action - Action performed ('profile_click', 'share', etc.)
   */
  trackSocialClick: (
    platform: string,
    action: string = 'profile_click'
  ) => {
    trackEvent('social_interaction', {
      platform,
      action,
      content_type: 'social_media',
    })
  },

  /**
   * Track social sharing
   * @param platform - Platform where content is shared
   * @param contentType - Type of content shared
   */
  trackSocialShare: (platform: string, contentType: string = 'portfolio') => {
    trackEvent('social_share', {
      platform,
      content_type: contentType,
      method: 'web_share_api',
    })
  },

  /**
   * Track navigation menu interactions
   * @param menuItem - Menu item clicked
   * @param location - Location of the menu ('header', 'footer', 'mobile', etc.)
   */
  trackNavigation: (menuItem: string, location: string = 'header') => {
    trackEvent('navigation_click', {
      menu_item: menuItem,
      menu_location: location,
    })
  },

  /**
   * Track search queries (if search feature is implemented)
   * @param query - Search query string
   * @param resultsCount - Number of results found
   */
  trackSearch: (query: string, resultsCount?: number) => {
    trackEvent('search', {
      search_term: query,
      results_count: resultsCount,
    })
  },

  /**
   * Track user engagement with content
   * @param contentType - Type of content ('gallery', 'timeline', 'testimonials', etc.)
   * @param action - Action performed ('view', 'expand', 'scroll', etc.)
   */
  trackEngagement: (contentType: string, action: string) => {
    trackEvent('user_engagement', {
      content_type: contentType,
      action,
    })
  },

  /**
   * Track scroll depth
   * @param percentage - Scroll depth percentage (25, 50, 75, 100)
   */
  trackScrollDepth: (percentage: number) => {
    trackEvent('scroll_depth', {
      percent_scrolled: percentage,
    })
  },

  /**
   * Track file preview/view
   * @param fileType - Type of file viewed ('cv', 'bio', 'headshot', etc.)
   */
  trackFileView: (fileType: string) => {
    trackEvent('file_view', {
      file_type: fileType,
      content_type: 'document',
    })
  },

  /**
   * Track error events
   * @param errorType - Type of error
   * @param errorMessage - Error message
   */
  trackError: (errorType: string, errorMessage?: string) => {
    trackEvent('error', {
      error_type: errorType,
      error_message: errorMessage,
      fatal: false,
    })
  },

  /**
   * Track custom conversion events
   * @param conversionType - Type of conversion
   * @param value - Optional value associated with conversion
   */
  trackConversion: (conversionType: string, value?: number) => {
    trackEvent('conversion', {
      conversion_type: conversionType,
      value,
      currency: 'EUR',
    })
  },

  /**
   * Track performance metrics
   * @param metricName - Name of the metric
   * @param value - Metric value
   * @param unit - Unit of measurement
   */
  trackPerformance: (metricName: string, value: number, unit?: string) => {
    trackEvent('performance_metric', {
      metric_name: metricName,
      value,
      unit: unit || 'ms',
    })
  },
}

/**
 * Initialize analytics with user properties
 * @param userId - User ID (if applicable)
 * @param properties - Additional user properties
 */
export const initAnalytics = (
  userId?: string,
  properties?: Record<string, any>
): void => {
  if (typeof window === 'undefined' || !window.gtag) return

  if (userId) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      user_id: userId,
      ...properties,
    })
  }
}

/**
 * Set user properties
 * @param properties - User properties to set
 */
export const setUserProperties = (
  properties: Record<string, any>
): void => {
  if (typeof window === 'undefined' || !window.gtag) return

  window.gtag('set', 'user_properties', properties)
}

// Export default analytics object
export default analytics
