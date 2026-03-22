'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { generateShimmerDataURL, imageSizes } from '@/lib/image-utils'
import { X } from 'lucide-react'

interface GalleryImage {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: string
}

interface VirtualGalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  gap?: number
  threshold?: number // Number of images to render initially
  batchSize?: number // Number of images to load per batch
}

export default function VirtualGallery({
  images,
  columns = 3,
  gap = 16,
  threshold = 12,
  batchSize = 6,
}: VirtualGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(threshold)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for infinite loading
  useEffect(() => {
    if (!sentinelRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < images.length) {
          setVisibleCount((prev) => Math.min(prev + batchSize, images.length))
        }
      },
      {
        root: null,
        rootMargin: '400px', // Load images 400px before they come into view
        threshold: 0.1,
      }
    )

    observer.observe(sentinelRef.current)

    return () => observer.disconnect()
  }, [visibleCount, images.length, batchSize])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
      } else if (e.key === 'ArrowRight') {
        setSelectedImage((prev) =>
          prev !== null && prev < images.length - 1 ? prev + 1 : prev
        )
      } else if (e.key === 'ArrowLeft') {
        setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, images.length])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  const visibleImages = images.slice(0, visibleCount)
  const hasMore = visibleCount < images.length

  const columnClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  }[columns]

  return (
    <>
      <div ref={galleryRef} className={`grid ${columnClass}`} style={{ gap: `${gap}px` }}>
        {visibleImages.map((image, index) => (
          <div
            key={image.src}
            className="gallery-item group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-slate-900/50"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={imageSizes.card}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              placeholder="blur"
              blurDataURL={generateShimmerDataURL(400, 300)}
              quality={75}
              loading="lazy"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-white">{image.caption}</p>
                </div>
              )}
            </div>

            {/* Loading indicator */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="h-12 w-12 animate-spin rounded-full border-2 border-yellow-400 border-t-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Sentinel for infinite loading */}
      {hasMore && (
        <div ref={sentinelRef} className="mt-8 flex h-20 items-center justify-center">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-400 border-t-transparent" />
            <span className="text-sm">Cargando más imágenes...</span>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-slate-900/80 p-2 transition-colors hover:bg-slate-800"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Navigation buttons */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
              }}
              className="absolute left-4 z-10 rounded-full bg-slate-900/80 p-3 transition-colors hover:bg-slate-800"
              aria-label="Anterior"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {selectedImage < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) =>
                  prev !== null && prev < images.length - 1 ? prev + 1 : prev
                )
              }}
              className="absolute right-4 z-10 rounded-full bg-slate-900/80 p-3 transition-colors hover:bg-slate-800"
              aria-label="Siguiente"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Image container */}
          <div
            className="relative flex h-full max-h-[90vh] w-full max-w-7xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={images[selectedImage].width || 1920}
              height={images[selectedImage].height || 1080}
              className="max-h-full max-w-full object-contain"
              quality={90}
              priority
            />

            {/* Caption */}
            {images[selectedImage].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-center font-medium text-white">
                  {images[selectedImage].caption}
                </p>
              </div>
            )}

            {/* Counter */}
            <div className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-4 py-2">
              <span className="text-sm font-medium text-white">
                {selectedImage + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-item {
          transition: all 0.3s ease;
        }
        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  )
}
