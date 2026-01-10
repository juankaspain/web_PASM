'use client'

import { motion, useInView } from 'framer-motion'
import { Film, Calendar, User, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const films = [
  {
    id: 1,
    title: 'Un fantasma en la batalla',
    year: '2025',
    yearSort: 2025,
    director: 'Agustín Díaz Yanes',
    role: 'Antonio',
    type: 'Largometraje',
    platform: 'Netflix',
    poster: 'https://github.com/user-attachments/assets/64e9e876-5ecc-452e-8be4-d7d5f7968ec9',
    description: 'Película sobre la Operación Santuario contra ETA. Interpreto al novio de la protagonista infiltrada.',
  },
  {
    id: 2,
    title: 'Carta Blanca',
    year: '2024',
    yearSort: 2024,
    director: 'Gerardo Herrero',
    role: 'Legionario',
    type: 'Largometraje',
    platform: 'Cine',
    poster: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1000',
    description: 'Film sobre la guerra en el Rif y el desastre de Annual. Rodaje en Ceuta con legionarios reales.',
  },
  {
    id: 3,
    title: 'Fueron los días',
    year: '2024',
    yearSort: 2024,
    director: '-',
    role: 'Personaje Principal',
    type: 'Largometraje',
    platform: 'Cine',
    poster: 'https://github.com/user-attachments/assets/c2fd3a19-ecb8-427c-ad8c-acfbc7a8df48',
    description: 'Largometraje estrenado en 2024.',
  },
  {
    id: 4,
    title: 'Mario, Kike y David',
    year: '2016',
    yearSort: 2016,
    director: '-',
    role: 'Kike',
    type: 'Cortometraje',
    platform: 'Festival',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000',
    description: 'Cortometraje donde interpreto al personaje Kike.',
  },
  {
    id: 5,
    title: 'Lapso',
    year: '2013',
    yearSort: 2013,
    director: '-',
    role: 'Rodolfo',
    type: 'Cortometraje',
    platform: 'Festival',
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1000',
    description: 'Uno de mis primeros trabajos en cine, interpretando a Rodolfo.',
  },
].sort((a, b) => b.yearSort - a.yearSort)

export default function Cinema() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
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
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <Film className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Filmografía</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
            >
              Cine & Cortometrajes
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Trabajos destacados en cine y cortometrajes
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {films.map((film, index) => (
              <motion.div
                key={film.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/[0.04] transition-all">
                  {/* Poster */}
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <Image
                      src={film.poster}
                      alt={`Póster de ${film.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    
                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full">
                        {film.type}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {film.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar className="w-4 h-4 text-yellow-400" />
                        <span>{film.year} • {film.platform}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <User className="w-4 h-4 text-yellow-400" />
                        <span>Rol: {film.role}</span>
                      </div>
                      {film.director !== '-' && (
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          <span>Dir: {film.director}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {film.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
