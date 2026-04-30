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

const HERO_IMAGE =
  'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4'
const ABOUT_IMAGE =
  'https://github.com/user-attachments/assets/0c09e17f-1983-4ad0-8926-a0d6ef6ae5cf'

const TEMPORARY_ASSET_OVERRIDES: Record<string, string> = {
  '/assets/hero/main.jpg': HERO_IMAGE,
  '/assets/about/profile.jpg': ABOUT_IMAGE,
  '/assets/cinema/fantasma-en-la-batalla.jpg':
    'https://img.youtube.com/vi/R0ufJf5SFIU/hqdefault.jpg',
  '/assets/series/operacion-barrio-ingles.jpg':
    'https://img.youtube.com/vi/1t0JcwYR-so/hqdefault.jpg',
  '/assets/series/la-moderna.jpg': 'https://img.youtube.com/vi/ursuF5r4_Ms/hqdefault.jpg',
  '/assets/series/la-caza-guadiana.jpg':
    'https://img.youtube.com/vi/AHUe0aYf9S8/hqdefault.jpg',
  '/assets/series/honor.jpg': 'https://img.youtube.com/vi/grtiShqUAkg/hqdefault.jpg',
  '/assets/series/desconocidas.jpg':
    'https://img.youtube.com/vi/Xel0dzOmHLA/hqdefault.jpg',
  '/assets/series/estoy-vivo.jpg': 'https://img.youtube.com/vi/kw3SvwH4khQ/hqdefault.jpg',
  '/assets/series/vis-a-vis-el-oasis.jpg':
    'https://img.youtube.com/vi/t4LYYroY5bo/hqdefault.jpg',
  '/assets/series/hernan.jpg': 'https://img.youtube.com/vi/CRlE3_JI7ZY/hqdefault.jpg',
  '/assets/blog/la-moderna-rtve-2024.jpg': HERO_IMAGE,
  '/assets/blog/la-moderna-rtve-2023.jpg': HERO_IMAGE,
  '/assets/blog/la-moderna-20minutos.jpg': HERO_IMAGE,
  '/assets/blog/la-moderna-imdb.jpg': HERO_IMAGE,
}

function resolveTemporaryAsset(src: ImageProps['src']) {
  if (typeof src !== 'string' || !src.startsWith('/assets/')) {
    return src
  }

  if (TEMPORARY_ASSET_OVERRIDES[src]) {
    return TEMPORARY_ASSET_OVERRIDES[src]
  }

  if (src.includes('/headshots/') || src.includes('/gallery/')) {
    return HERO_IMAGE
  }

  if (src.includes('/press/') || src.includes('/cinema/')) {
    return ABOUT_IMAGE
  }

  return HERO_IMAGE
}

export default function SafeImage({ src, alt, onError, ...props }: ImageProps) {
  const srcKey = typeof src === 'string' ? src : JSON.stringify(src)
  const [failedSrcs, setFailedSrcs] = useState<ReadonlySet<string>>(() => new Set())
  const temporarySrc = useMemo(() => resolveTemporaryAsset(src), [src])
  const currentSrc = useMemo(
    () => (failedSrcs.has(srcKey) ? FALLBACK_SRC : temporarySrc),
    [failedSrcs, srcKey, temporarySrc]
  )

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      data-original-src={srcKey}
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
