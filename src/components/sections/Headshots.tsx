'use client'

import { useInView } from '@/hooks/useInView'
import { Camera, X, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Headshot {
  url: string
  category: 'comercial' | 'dramatico' | 'personaje' | 'fullbody'
  alt: string
}

const headshots: Headshot[] = [
  // Comercial - Looks amigables y accesibles
  {
    url: '/assets/headshots/comercial-1.jpg',
    category: 'comercial',
    alt: 'Almagro San Miguel - Headshot Comercial 1',
  },
  {
    url: '/assets/headshots/comercial-2.jpg',
    category: 'comercial',
    alt: 'Almagro San Miguel - Headshot Comercial 2',
  },
  // Dramático - Looks intensos y serios
  {
    url: '/assets/headshots/dramatico-1.jpg',
    category: 'dramatico',
    alt: 'Almagro San Miguel - Headshot Dramático 1',
  },
  {
    url: '/assets/headshots/dramatico-2.jpg',
    category: 'dramatico',
    alt: 'Almagro San Miguel - Headshot Dramático 2',
  },
  // Personaje - Diferentes caracteres
  {
    url: '/assets/headshots/personaje-1.jpg',
    category: 'personaje',
    alt: 'Almagro San Miguel - Personaje 1',
  },
  {
    url: '/assets/headshots/personaje-2.jpg',
    category: 'personaje',
    alt: 'Almagro San Miguel - Personaje 2',
  },
  // Full Body - Cuerpo completo
  {
    url: '/assets/headshots/fullbody-1.jpg',
    category: 'fullbody',
    alt: 'Almagro San Miguel - Full Body 1',
  },
  {
    url: '/assets/headshots/fullbody-2.jpg',
    category: 'fullbody',
    alt: 'Almagro San Miguel - Full Body 2',
  },
]

const categories = [
  { id: 'all', label: 'Todas', color: 'yellow' },
  { id: 'comercial', label: 'Comercial', color: 'blue' },
  { id: 'dramatico', label: 'Dramático', color: 'red' },
  { id: 'personaje', label: 'Personaje', color: 'green' },
  { id: 'fullbody', label: 'Full Body', color: 'purple' },
]

export default function Headshots() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const filteredHeadshots =
    selectedCategory === 'all'
      ? headshots
      : headshots.filter((shot) => shot.category === selectedCategory)

  const selectedImage =
    selectedImageIndex !== null ? filteredHeadshots[selectedImageIndex] : null

  // Keyboard navigation
  useEffect(() => {
    if (selectedImageIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigatePrevious()
      } else if (e.key === 'ArrowRight') {
        navigateNext()
      } else if (e.key === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImageIndex, filteredHeadshots.length])

  const navigatePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? filteredHeadshots.length - 1 : (prev as number) - 1
      )
    }
  }

  const navigateNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev === filteredHeadshots.length - 1 ? 0 : (prev as number) + 1
      )
    }
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  // Prevent right-click and drag on images
  const handleImageProtection = (e: React.MouseEvent) => {
    e.preventDefault()
    return false
  }

  return (
    <>
      <section
        id="headshots"
        className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-900 py-24"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/3 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[120px]" />
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
            {/* Header ESTANDARIZADO */}
            <div className="mb-16 text-center">
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm transition-all delay-100 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
              >
                <Camera className="h-4 w-4 text-yellow-400" strokeWidth={2} />
                <span className="text-sm font-medium tracking-wide text-slate-300">
                  Fotografía Profesional
                </span>
              </div>

              <h2
                className={`mb-6 text-4xl font-bold tracking-tight text-white lg:text-5xl transition-all delay-200 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
              >
                Professional Headshots
              </h2>

              <div
                className={`mx-auto mb-6 h-0.5 w-20 bg-yellow-400 transition-all delay-300 duration-[800ms] ${isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
              />

              <p
                className={`mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 transition-all delay-[400ms] duration-[500ms] ${isInView ? 'opacity-100' : 'opacity-0'}`}
              >
                Selección de fotografías profesionales para casting directors y
                productoras
              </p>
            </div>

            {/* Category Filters */}
            <div
              className={`mb-12 flex flex-wrap justify-center gap-3 transition-all delay-500 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              <div className="mr-2 flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-400">Filtrar:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-xl px-6 py-2 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'scale-105 bg-yellow-400 text-black shadow-lg shadow-yellow-400/25'
                      : 'hover:scale-102 border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Headshots Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredHeadshots.map((headshot, index) => (
                <div
                  key={`${headshot.category}-${index}`}
                  className="group relative cursor-pointer select-none hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300"
                  onClick={() => setSelectedImageIndex(index)}
                  onContextMenu={handleImageProtection}
                >
                  <div className="relative">
                    <div className="absolute -inset-[2px] rounded-2xl bg-yellow-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]" />

                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-500 hover:border-yellow-400/30">
                      <Image
                        src={headshot.url}
                        alt={headshot.alt}
                        fill
                        className="pointer-events-none select-none object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        draggable={false}
                        onContextMenu={handleImageProtection}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase text-black">
                          {categories.find((c) => c.id === headshot.category)?.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div
              className={`mx-auto mt-16 max-w-4xl text-center transition-all delay-[700ms] duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <p className="text-slate-400">
                <span className="font-semibold text-white">Nota:</span> Headshots
                actualizados regularmente. Para solicitar fotografías en alta resolución o
                sesiones específicas, contactar a través de{' '}
                <a href="#contact" className="text-yellow-400 hover:underline">
                  representación
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Navigation */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-all duration-300 ${selectedImage && selectedImageIndex !== null ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeModal}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="group absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all hover:scale-110 hover:border-white/30 hover:bg-white/20 active:scale-90"
        >
          <X className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-90" />
        </button>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigatePrevious()
          }}
          className="group absolute left-4 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:-translate-x-1 hover:border-yellow-400 hover:bg-yellow-400 active:scale-90"
          aria-label="Imagen anterior"
        >
          <ChevronLeft
            className="h-8 w-8 text-white transition-colors group-hover:text-black"
            strokeWidth={3}
          />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigateNext()
          }}
          className="group absolute right-4 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:scale-110 hover:translate-x-1 hover:border-yellow-400 hover:bg-yellow-400 active:scale-90"
          aria-label="Siguiente imagen"
        >
          <ChevronRight
            className="h-8 w-8 text-white transition-colors group-hover:text-black"
            strokeWidth={3}
          />
        </button>

        {/* Image Counter */}
        <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="text-sm font-medium text-white">
            {selectedImageIndex !== null ? selectedImageIndex + 1 : 0} /{' '}
            {filteredHeadshots.length}
          </span>
        </div>

        {/* Image Container */}
        <div
          className={`relative max-h-[85vh] max-w-4xl select-none transition-all duration-300 ${selectedImage && selectedImageIndex !== null ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          onClick={(e) => e.stopPropagation()}
          onContextMenu={handleImageProtection}
        >
          {selectedImage && (
            <div className="relative overflow-hidden rounded-2xl border-2 border-yellow-400/30 shadow-2xl">
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                width={800}
                height={1200}
                className="pointer-events-none h-auto w-full select-none"
                priority
                draggable={false}
                onContextMenu={handleImageProtection}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold uppercase text-black">
                  {categories.find((c) => c.id === selectedImage.category)?.label}
                </span>
              </div>

              {/* Watermark overlay for extra protection */}
              <div
                className="pointer-events-none absolute inset-0 select-none"
                style={{ userSelect: 'none' }}
              />
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="text-xs font-medium text-white/60">
            Usa ← → o los botones para navegar • ESC para cerrar
          </span>
        </div>
      </div>

      {/* CSS for additional protection */}
      <style jsx global>{`
        #headshots img {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          pointer-events: none;
        }
      `}</style>
    </>
  )
}
