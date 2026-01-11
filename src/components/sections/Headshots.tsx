'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Camera, X, Filter } from 'lucide-react'
import { useRef, useState } from 'react'
import Image from 'next/image'

interface Headshot {
  url: string
  category: 'comercial' | 'dramatico' | 'personaje' | 'fullbody'
  alt: string
}

const headshots: Headshot[] = [
  // Comercial - Looks amigables y accesibles
  {
    url: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    category: 'comercial',
    alt: 'Almagro San Miguel - Headshot Comercial 1',
  },
  {
    url: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    category: 'comercial',
    alt: 'Almagro San Miguel - Headshot Comercial 2',
  },
  // Dramático - Looks intensos y serios
  {
    url: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    category: 'dramatico',
    alt: 'Almagro San Miguel - Headshot Dramático 1',
  },
  {
    url: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    category: 'dramatico',
    alt: 'Almagro San Miguel - Headshot Dramático 2',
  },
  // Personaje - Diferentes caracteres
  {
    url: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    category: 'personaje',
    alt: 'Almagro San Miguel - Personaje 1',
  },
  {
    url: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    category: 'personaje',
    alt: 'Almagro San Miguel - Personaje 2',
  },
  // Full Body - Cuerpo completo
  {
    url: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
    category: 'fullbody',
    alt: 'Almagro San Miguel - Full Body 1',
  },
  {
    url: 'https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4',
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<Headshot | null>(null)

  const filteredHeadshots = selectedCategory === 'all' 
    ? headshots 
    : headshots.filter(shot => shot.category === selectedCategory)

  return (
    <>
      <section id="headshots" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-900">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
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
            {/* Header ESTANDARIZADO */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <Camera className="w-4 h-4 text-yellow-400" strokeWidth={2} />
                <span className="text-sm font-medium text-slate-300 tracking-wide">Fotografía Profesional</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white"
              >
                Professional Headshots
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-20 h-0.5 bg-yellow-400 mx-auto mb-6"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
              >
                Selección de fotografías profesionales para casting directors y productoras
              </motion.p>
            </div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              <div className="flex items-center gap-2 mr-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-400">Filtrar:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/25 scale-105'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:border-white/20 hover:text-white hover:scale-102'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>

            {/* Headshots Grid */}
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredHeadshots.map((headshot, index) => (
                  <motion.div
                    key={`${headshot.category}-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -8, scale: 1.03 }}
                    className="group relative cursor-pointer"
                    onClick={() => setSelectedImage(headshot)}
                  >
                    <div className="relative">
                      <motion.div 
                        className="absolute -inset-[2px] bg-yellow-400/30 rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-yellow-400/30 transition-all duration-500">
                        <Image
                          src={headshot.url}
                          alt={headshot.alt}
                          fill
                          className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-bold uppercase">
                            {categories.find(c => c.id === headshot.category)?.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 max-w-4xl mx-auto text-center"
            >
              <p className="text-slate-400">
                <span className="font-semibold text-white">Nota:</span> Headshots actualizados regularmente. Para solicitar fotografías en alta resolución o sesiones específicas, contactar a través de <a href="#contact" className="text-yellow-400 hover:underline">representación</a>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all group"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="relative border-2 border-yellow-400/30 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                  priority
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <span className="inline-block px-4 py-2 rounded-full bg-yellow-400 text-black text-sm font-bold uppercase">
                    {categories.find(c => c.id === selectedImage.category)?.label}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
