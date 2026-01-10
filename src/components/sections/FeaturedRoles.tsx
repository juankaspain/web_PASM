'use client'

import { motion, useInView } from 'framer-motion'
import { Tv, Play, Star, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const featuredRoles = [
  {
    title: 'La Moderna',
    role: 'Íñigo Peñalver',
    type: 'Protagonista',
    platform: 'TVE',
    episodes: '236 episodios',
    year: '2023-2024',
    description: 'Galán protagonista en la serie diaria de época de TVE. Papel que le dio reconocimiento masivo en España.',
    gradient: 'from-amber-500 to-orange-600',
    imdb: 'https://www.imdb.com/title/tt27688432/',
  },
  {
    title: 'Vis a vis: El Oasis',
    role: 'Diego Ramala',
    type: 'Protagonista',
    platform: 'Fox/Star Channel',
    episodes: '8 episodios',
    year: '2020',
    description: 'Spin-off de la exitosa serie "Vis a vis". Papel protagonista en producción internacional.',
    gradient: 'from-blue-600 to-purple-600',
    imdb: 'https://www.imdb.com/title/tt11566954/',
  },
  {
    title: 'Hernán',
    role: 'Gonzalo de Sandoval',
    type: 'Principal',
    platform: 'Amazon Prime Video',
    episodes: '8 episodios',
    year: '2019',
    description: 'Serie histórica sobre Hernán Cortés protagonizada por Óscar Jaenada. Producción internacional de Amazon.',
    gradient: 'from-red-600 to-pink-600',
    imdb: 'https://www.imdb.com/title/tt9140786/',
  },
  {
    title: 'Operación Barrio Inglés',
    role: 'Toni',
    type: 'Principal',
    platform: 'TVE',
    episodes: '8 episodios',
    year: '2024',
    description: 'Serie de acción y drama sobre una operación policial en Sevilla.',
    gradient: 'from-green-600 to-teal-600',
    imdb: 'https://www.imdb.com/title/tt28106426/',
  },
]

export default function FeaturedRoles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="featured-roles" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full mb-4"
            >
              <Star className="w-4 h-4 text-slate-700" />
              <span className="text-slate-700 text-sm font-semibold">Roles Destacados</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Personajes Principales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Protagonista y roles principales en series de TVE, Amazon Prime Video, 
              Fox y otras plataformas nacionales e internacionales.
            </p>
          </div>

          {/* Roles Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              >
                {/* Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                  {/* Placeholder */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-60 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <Tv className="w-16 h-16 mx-auto mb-2 opacity-50" />
                      <p className="text-sm font-semibold">{role.title}</p>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
                    {role.platform}
                  </div>

                  {/* Type Badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${role.gradient} px-3 py-1 rounded-full text-white text-xs font-bold shadow-lg`}>
                    {role.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-2xl text-slate-900 mb-1">
                        {role.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        <strong>{role.role}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{role.year}</span>
                    <span>•</span>
                    <span>{role.episodes}</span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {role.description}
                  </p>

                  {/* Link to IMDb */}
                  <a
                    href={role.imdb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors group/link"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    Ver en IMDb
                  </a>
                </div>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${role.gradient}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
