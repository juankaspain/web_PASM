'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { X, ZoomIn, ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles } from 'lucide-react'

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
    src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
    alt: 'La Moderna - Set de filmación',
    category: 'TV',
    title: 'La Moderna (TVE)',
    description: 'Protagonista Íñigo Peñalver - 236 episodios',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800',
    alt: 'Vis a vis: El Oasis - Escena dramática',
    category: 'TV',
    title: 'Vis a vis: El Oasis',
    description: 'Diego "Dieguito" Ramala - Fox/Star Channel',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800',
    alt: 'Hernán - Producción histórica',
    category: 'TV',
    title: 'Hernán (Prime Video)',
    description: 'Gonzalo de Sandoval - Serie histórica',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800',
    alt: 'Un fantasma en la batalla - Filming',
    category: 'Cine',
    title: 'Un fantasma en la batalla',
    description: 'Dir. Agustín Díaz Yanes - Estreno 2025',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800',
    alt: 'Fuente Ovejuna - CNTC',
    category: 'Teatro',
    title: 'Fuente Ovejuna',
    description: 'CNTC - Nominación Mejor Actor Secundario',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    alt: 'Headshot profesional',
    category: 'Behind the Scenes',
    title: 'Sesión Fotográfica',
    description: 'Headshots profesionales 2024',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800',
    alt: 'Estoy vivo - Grabación',
    category: 'TV',
    title: 'Estoy vivo (TVE)',
    description: 'Mikel Uribe - 12 episodios',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800',
    alt: 'Oliver Twist - Musical',
    category: 'Teatro',
    title: 'Oliver Twist Musical',
    description: 'Jefe Policía Duff - Premio Mejor Espectáculo',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800',
    alt: 'La Caza Guadiana - Set',
    category: 'TV',
    title: 'La Caza: Guadiana (TVE)',
    description: 'Aurelio "Aure" Santana Mencía',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800',
    alt: 'Behind the scenes - Maquillaje',
    category: 'Behind the Scenes',
    title: 'Preparación de Personaje',
    description: 'Proceso de caracterización',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
    alt: 'Desconocidas - Canal Sur',
    category: 'TV',
    title: 'Desconocidas (Canal Sur)',
    description: 'Ramón - 8 episodios',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800',
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filteredImages = selectedCategory === 'Todas'
    ? images
    : images.filter((img) => img.category === selectedCategory)

  const currentIndex = lightboxImage ? images.findIndex(img => img.id === lightboxImage.id) : -1

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
    <section id="gallery" className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <ImageIcon className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Galería Visual</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
            >
              Galería Profesional
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Colección de momentos destacados de mi carrera en televisión, cine y teatro
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category
              return (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2.5 rounded-xl font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg'
                      : 'bg-white/[0.03] text-slate-300 border border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  {category}
                </motion.button>
              )
            })}
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                  onClick={() => setLightboxImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                      <p className="text-slate-300 text-sm">{image.description}</p>
                    </div>
                    
                    <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-black" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20">
                    {image.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">
                {images.length} imágenes profesionales disponibles
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-yellow-400 backdrop-blur-md rounded-full flex items-center justify-center transition-colors z-10 border border-white/20 hover:border-yellow-400"
            >
              <X className="w-6 h-6 text-white hover:text-black" />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-yellow-400 backdrop-blur-md rounded-full flex items-center justify-center transition-colors z-10 border border-white/20 hover:border-yellow-400"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}
            
            {currentIndex < images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-yellow-400 backdrop-blur-md rounded-full flex items-center justify-center transition-colors z-10 border border-white/20 hover:border-yellow-400"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{lightboxImage.title}</h3>
                <p className="text-slate-300 mb-4">{lightboxImage.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-sm text-white font-semibold">{lightboxImage.category}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm text-slate-300">{currentIndex + 1} / {images.length}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
