import { describe, it, expect, vi, beforeEach } from 'vitest'
import { trackEvent, trackPageView } from '@/lib/analytics'

describe('Analytics', () => {
  beforeEach(() => {
    // Reset window.gtag mock
    delete (window as any).gtag
    vi.clearAllMocks()
  })

  describe('trackEvent', () => {
    it('should not throw error when gtag is not defined', () => {
      expect(() => {
        trackEvent('test_action', 'test_category', 'test_label')
      }).not.toThrow()
    })

    it('should call gtag when defined', () => {
      const mockGtag = vi.fn()
      ;(window as any).gtag = mockGtag

      trackEvent('click_button', 'engagement', 'hero_cta')

      expect(mockGtag).toHaveBeenCalledWith('event', 'click_button', {
        event_category: 'engagement',
        event_label: 'hero_cta',
      })
    })

    it('should work without optional label parameter', () => {
      const mockGtag = vi.fn()
      ;(window as any).gtag = mockGtag

      trackEvent('page_view', 'navigation')

      expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', {
        event_category: 'navigation',
        event_label: undefined,
      })
    })
  })

  describe('trackPageView', () => {
    it('should not throw error when gtag is not defined', () => {
      expect(() => {
        trackPageView('/about')
      }).not.toThrow()
    })

    it('should call gtag with page_view event', () => {
      const mockGtag = vi.fn()
      ;(window as any).gtag = mockGtag

      trackPageView('/portfolio')

      expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', {
        page_path: '/portfolio',
      })
    })
  })
})
