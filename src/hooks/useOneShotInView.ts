'use client'

import { useCallback, useEffect, useState } from 'react'

interface UseOneShotInViewOptions extends IntersectionObserverInit {
  once?: boolean
}

export function useOneShotInView({
  once = true,
  root = null,
  rootMargin,
  threshold,
}: UseOneShotInViewOptions = {}) {
  const [node, setNode] = useState<Element | null>(null)
  const [isInView, setIsInView] = useState(false)

  const ref = useCallback((element: Element | null) => {
    setNode(element)
  }, [])

  useEffect(() => {
    if (!node || (once && isInView)) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)

          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      { root, rootMargin, threshold }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [isInView, node, once, root, rootMargin, threshold])

  return [ref, isInView] as const
}
