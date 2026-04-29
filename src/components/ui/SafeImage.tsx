'use client'

import Image, { type ImageProps } from 'next/image'
import { useMemo, useState } from 'react'

const FALLBACK_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#111827"/>
      <stop offset="0.55" stop-color="#1f2937"/>
      <stop offset="1" stop-color="#7c5f1f"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="38%" r="55%">
      <stop offset="0" stop-color="#facc15" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#facc15" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <rect width="1200" height="800" fill="url(#glow)"/>
  <rect x="42" y="42" width="1116" height="716" rx="28" fill="none" stroke="#facc15" stroke-opacity="0.55" stroke-width="6"/>
  <path d="M332 514 486 360l112 112 76-76 194 194H332Z" fill="#ffffff" fill-opacity="0.2"/>
  <circle cx="773" cy="268" r="58" fill="#facc15" fill-opacity="0.42"/>
</svg>`

const FALLBACK_SRC = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(FALLBACK_SVG)}`

export default function SafeImage({ src, alt, onError, ...props }: ImageProps) {
  const srcKey = typeof src === 'string' ? src : JSON.stringify(src)
  const [failedSrcs, setFailedSrcs] = useState<ReadonlySet<string>>(() => new Set())
  const currentSrc = useMemo(
    () => (failedSrcs.has(srcKey) ? FALLBACK_SRC : src),
    [failedSrcs, src, srcKey]
  )

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={(event) => {
        onError?.(event)
        setFailedSrcs((previous) => {
          if (previous.has(srcKey)) {
            return previous
          }

          const next = new Set(previous)
          next.add(srcKey)
          return next
        })
      }}
    />
  )
}
