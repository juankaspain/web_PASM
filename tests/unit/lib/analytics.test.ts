import { describe, it, expect, vi, beforeEach } from 'vitest'
import { trackEvent, trackPageView } from '@/lib/analytics'

type MockGtag = ReturnType<typeof vi.fn>
type WindowWithGtag = Window & { gtag?: MockGtag }

describe('Analytics', () => {
  beforeEach(() => {
    // Reset window.gtag mock
    delete (window as WindowWithGtag).gtag
    vi.clearAllMocks()
  })

  describe('trackEvent', () => {
    it('should not throw error when gtag is not defined', () => {
      expect(() => {
        trackEvent('test_action', {
          event_category: 'test_category',
          event_label: 'test_label',
        })
      }).not.toThrow()
    })

    it('should call gtag when defined', () => {
      const mockGtag = vi.fn()
      ;(window as WindowWithGtag).gtag = mockGtag

      trackEvent('click_button', {
        event_category: 'engagement',
        event_label: 'hero_cta',
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'click_button', {
        event_category: 'engagement',
        event_label: 'hero_cta',
      })
    })

    it('should work without optional label parameter', () => {
      const mockGtag = vi.fn()
      ;(window as WindowWithGtag).gtag = mockGtag

      trackEvent('page_view', {
        event_category: 'navigation',
      })

      expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', {
        event_category: 'navigation',
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
      ;(window as WindowWithGtag).gtag = mockGtag

      trackPageView('/portfolio')

      expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', {
        page_path: '/portfolio',
      })
    })
  })
})
