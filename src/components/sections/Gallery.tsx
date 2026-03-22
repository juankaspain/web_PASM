'use client'

import { useInView } from '@/hooks/useInView'
import { useState } from 'react'
import Image from 'next/image'
import {
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Sparkles,
} from 'lucide-react'

type Category = 'Todas' | 'TV' | 'Cine' | 'Teatro' | 'Behind the Scenes'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: Category
  title: string
  description: string
}

const images: GalleryImage[] = [
  {
    id: 1,
    src: '/assets/gallery/la-moderna.jpg',
    alt: 'La Moderna - Set de filmación',
    category: 'TV',
    title: 'La Moderna (TVE)',
    description: 'Protagonista Íñigo Peñalver - 236 episodios',
  },
  {
    id: 2,
    src: '/assets/gallery/vis-a-vis.jpg',
    alt: 'Vis a vis: El Oasis - Escena dramática',
    category: 'TV',
    title: 'Vis a vis: El Oasis',
    description: 'Diego "Dieguito" Ramala - Fox/Star Channel',
  },
  {
    id: 3,
    src: '/assets/gallery/hernan.jpg',
    alt: 'Hernán - Producción histórica',
    category: 'TV',
    title: 'Hernán (Prime Video)',
    description: 'Gonzalo de Sandoval - Serie histórica',
  },
  {
    id: 4,
    src: '/assets/gallery/fantasma-batalla.jpg',
    alt: 'Un fantasma en la batalla - Filming',
    category: 'Cine',
    title: 'Un fantasma en la batalla',
    description: 'Dir. Agustín Díaz Yanes - Estreno 2025',
  },
  {
    id: 5,
    src: '/assets/gallery/fuente-ovejuna.jpg',
    alt: 'Fuente Ovejuna - CNTC',
    category: 'Teatro',
    title: 'Fuente Ovejuna',
    description: 'CNTC - Nominación Mejor Actor Secundario',
  },
  {
    id: 6,
    src: '/assets/gallery/sesion-fotografica.jpg',
    alt: 'Headshot profesional',
    category: 'Behind the Scenes',
    title: 'Sesión Fotográfica',
    description: 'Headshots profesionales 2024',
  },
  {
    id: 7,
    src: '/assets/gallery/estoy-vivo.jpg',
    alt: 'Estoy vivo - Grabación',
    category: 'TV',
    title: 'Estoy vivo (TVE)',
    description: 'Mikel Uribe - 12 episodios',
  },
  {
    id: 8,
    src: '/assets/gallery/oliver-twist.jpg',
    alt: 'Oliver Twist - Musical',
    category: 'Teatro',
    title: 'Oliver Twist Musical',
    description: 'Jefe Policía Duff - Premio Mejor Espectáculo',
  },
  {
    id: 9,
    src: '/assets/gallery/la-caza.jpg',
    alt: 'La Caza Guadiana - Set',
    category: 'TV',
    title: 'La Caza: Guadiana (TVE)',
    description: 'Aurelio "Aure" Santana Mencía',
  },
  {
    id: 10,
    src: '/assets/gallery/behind-scenes.jpg',
    alt: 'Behind the scenes - Maquillaje',
    category: 'Behind the Scenes',
    title: 'Preparación de Personaje',
    description: 'Proceso de caracterización',
  },
  {
    id: 11,
    src: '/assets/gallery/desconocidas.jpg',
    alt: 'Desconocidas - Canal Sur',
    category: 'TV',
    title: 'Desconocidas (Canal Sur)',
    description: 'Ramón - 8 episodios',
  },
  {
    id: 12,
    src: '/assets/gallery/lapso.jpg',
    alt: 'Lapso - Cortometraje',
    category: 'Cine',
    title: 'Lapso (Cortometraje)',
    description: 'Rodolfo - IMDb 8.6/10',
  },
]

const categories: Category[] = ['Todas', 'TV', 'Cine', 'Teatro', 'Behind the Scenes']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todas')
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })

  const filteredImages =
    selectedCategory === 'Todas'
      ? images
      : images.filter((img) => img.category === selectedCategory)

  const currentIndex = lightboxImage
    ? images.findIndex((img) => img.id === lightboxImage.id)
    : -1

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setLightboxImage(images[currentIndex + 1])
    }
  }

  const prevImage = () => {
    if (currentIndex > 0) {
      setLightboxImage(images[currentIndex - 1])
    }
  }

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900 py-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
        >
          <div className="mb-20 text-center">
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm transition-all delay-100 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              <ImageIcon className="h-4 w-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium tracking-wide text-slate-300">
                Galería Visual
              </span>
            </div>

            <h2
              className={`mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl transition-all delay-200 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              Galería Profesional
            </h2>

            <p
              className={`mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 transition-all delay-300 duration-[500ms] ${isInView ? 'opacity-100' : 'opacity-0'}`}
            >
              Colección de momentos destacados de mi carrera en televisión, cine y teatro
            </p>
          </div>

          <div
            className={`mb-16 flex flex-wrap justify-center gap-3 transition-all delay-[400ms] duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative rounded-xl px-5 py-2.5 font-semibold transition-all hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg'
                      : 'border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-[400ms] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${isInView ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setLightboxImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  quality={80}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h3 className="mb-1 text-lg font-bold text-white">{image.title}</h3>
                    <p className="text-sm text-slate-300">{image.description}</p>
                  </div>

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400">
                    <ZoomIn className="h-5 w-5 text-black" />
                  </div>
                </div>

                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {image.category}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-16 text-center transition-all delay-[800ms] duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">
                {images.length} imágenes profesionales disponibles
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm transition-all duration-300 ${lightboxImage ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setLightboxImage(null)}
      >
        <button
          onClick={() => setLightboxImage(null)}
          aria-label="Cerrar visor de imagen"
          className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-colors hover:border-yellow-400 hover:bg-yellow-400"
        >
          <X className="h-6 w-6 text-white hover:text-black" />
        </button>

        {currentIndex > 0 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            aria-label="Imagen anterior"
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-colors hover:border-yellow-400 hover:bg-yellow-400"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            aria-label="Imagen siguiente"
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-colors hover:border-yellow-400 hover:bg-yellow-400"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        )}

        <div
          className={`relative w-full max-w-5xl transition-all duration-300 ${lightboxImage ? 'scale-100 opacity-100' : 'scale-90 opacity-0 translate-y-12'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {lightboxImage && (
            <>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  quality={90}
                  className="object-contain"
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {lightboxImage.title}
                </h3>
                <p className="mb-4 text-slate-300">{lightboxImage.description}</p>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <span className="text-sm font-semibold text-white">
                    {lightboxImage.category}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm text-slate-300">
                    {currentIndex + 1} / {images.length}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
