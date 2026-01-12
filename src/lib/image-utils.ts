/**
 * Generate a blur placeholder data URL for images
 * This creates a low-quality placeholder that loads instantly while the full image loads
 */
export function generateBlurDataURL(
  width: number = 10,
  height: number = 10
): string {
  // Create a simple SVG blur placeholder
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#1a1a1a" offset="0%" />
          <stop stop-color="#0f172a" offset="50%" />
          <stop stop-color="#1e293b" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="#1a1a1a" />
      <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="opacity" values="0;0.5;1;0.5;0" dur="2s" repeatCount="indefinite" />
    </svg>
  `
  
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

/**
 * Generate a shimmer effect placeholder
 */
export function generateShimmerDataURL(
  width: number = 10,
  height: number = 10
): string {
  const svg = `
    <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#1e293b;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
          <animate attributeName="x1" values="-100%;200%" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="x2" values="0%;300%" dur="1.5s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#shimmer)" />
    </svg>
  `
  
  const base64 = Buffer.from(svg).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}

/**
 * Common image sizes for responsive images
 */
export const imageSizes = {
  thumbnail: '(max-width: 640px) 100vw, 640px',
  card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  hero: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw',
  full: '100vw',
  half: '(max-width: 768px) 100vw, 50vw',
  third: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}

/**
 * Optimized image loader configuration
 */
export const imageLoaderConfig = {
  quality: {
    thumbnail: 60,
    card: 75,
    hero: 90,
    full: 85,
  },
  formats: ['image/avif', 'image/webp'] as const,
}

/**
 * Get optimized image props
 */
export function getOptimizedImageProps({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 85,
  sizes = imageSizes.card,
}: {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  sizes?: string
}) {
  return {
    src,
    alt,
    ...(width && { width }),
    ...(height && { height }),
    quality,
    sizes,
    priority,
    placeholder: 'blur' as const,
    blurDataURL: generateShimmerDataURL(width || 10, height || 10),
    ...(priority && { fetchPriority: 'high' as const }),
  }
}
