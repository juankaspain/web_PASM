'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface YouTubeEmbedProps {
  videoId: string
  title: string
  autoplay?: boolean
  className?: string
}

export default function YouTubeEmbed({
  videoId,
  title,
  autoplay = false,
  className,
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  })

  if (autoplay && isLoaded) {
    params.set('autoplay', '1')
  }

  return (
    <div className={cn('relative aspect-video overflow-hidden bg-black', className)}>
      {isLoaded ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          aria-label={`Reproducir video: ${title}`}
          className="group absolute inset-0 flex items-center justify-center overflow-hidden"
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 960px"
            className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition duration-300 group-hover:scale-110">
            <Play className="ml-1 h-9 w-9 fill-white" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  )
}
