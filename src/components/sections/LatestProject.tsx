'use client'

import { motion, useInView } from 'framer-motion'
import { Play, Calendar, Film, Star, ExternalLink, Youtube } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function LatestProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 rounded-full mb-6"
          >
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">AHORA EN CINES Y NETFLIX</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Un fantasma en la batalla
              </h2>
              
              <div className="flex items-center gap-6 mb-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Film className="w-5 h-5" />
                  <span>Cine</span>
                </div>
              </div>

              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Película dramática dirigida por <strong>Agustín Díaz Yanes</strong> sobre ETA y sus consecuencias. 
                Estrenada en cines en octubre de 2025 y ahora disponible en Netflix.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 text-yellow-400">Reparto Destacado</h3>
                <p className="text-gray-300">
                  Junto a <strong>Aitor Luna</strong>, <strong>Luis Callejo</strong>, y <strong>Ruth Díaz</strong>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.netflix.com/title/81700950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  Ver en Netflix
                </a>
                <a
                  href="https://www.youtube.com/watch?v=R0ufJf5SFIU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-700 hover:bg-red-800 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <Youtube className="w-5 h-5" />
                  Ver Tráiler
                </a>
                <a
                  href="https://www.filmaffinity.com/es/film103750.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-full font-bold transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  Más Info
                </a>
              </div>
            </motion.div>

            {/* Right: Movie Poster */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                {/* Real Movie Poster */}
                <Image
                  src="https://github.com/user-attachments/assets/64e9e876-5ecc-452e-8be4-d7d5f7968ec9"
                  alt="Poster oficial de Un fantasma en la batalla"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl" />
                
                {/* Play button overlay on hover */}
                <a
                  href="https://www.youtube.com/watch?v=R0ufJf5SFIU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </a>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-slate-900 px-6 py-3 rounded-full font-bold shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
