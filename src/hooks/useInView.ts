'use client'

import { useRef, useState, useEffect, type RefObject } from 'react'

interface UseInViewOptions {
  once?: boolean
  margin?: string
  threshold?: number
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): { ref: RefObject<T | null>; isInView: boolean } {
  const { once = true, margin = '-80px', threshold = 0 } = options
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsInView(false)
        }
      },
      { rootMargin: margin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, margin, threshold])

  return { ref, isInView }
}
