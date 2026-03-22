'use client'

import { useEffect } from 'react'

/**
 * Patches addEventListener to default to passive for touch/wheel events.
 * This addresses Chrome DevTools warnings from libraries like Framer Motion
 * that add non-passive listeners to scroll-blocking events.
 *
 * Respects explicitly set passive: false (e.g., drag handlers that need preventDefault).
 */
export default function PassiveEvents() {
  useEffect(() => {
    const origAddEventListener = EventTarget.prototype.addEventListener
    EventTarget.prototype.addEventListener = function (
      type: string,
      listener: EventListenerOrEventListenerObject | null,
      options?: boolean | AddEventListenerOptions
    ) {
      const passiveEvents = ['touchstart', 'touchmove', 'wheel', 'mousewheel']
      if (passiveEvents.includes(type)) {
        if (options === undefined) {
          return origAddEventListener.call(this, type, listener, { passive: true })
        }
        if (typeof options === 'object' && options.passive === undefined) {
          return origAddEventListener.call(this, type, listener, {
            ...options,
            passive: true,
          })
        }
      }
      return origAddEventListener.call(this, type, listener, options)
    }

    return () => {
      EventTarget.prototype.addEventListener = origAddEventListener
    }
  }, [])

  return null
}
