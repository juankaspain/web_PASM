'use client'

import { motion, useInView } from 'framer-motion'
import { Play, Calendar, Film, Star, ExternalLink, Youtube, Heart, Users, Sparkles } from 'lucide-react'
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold text-slate-900">ÚLTIMO TRABAJO</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
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
                Estrenada en cines en octubre de 2025 y disponible en Netflix.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 text-yellow-400">Reparto Destacado</h3>
                <p className="text-gray-300">
                  Junto a <strong>Susana Abaitua</strong>, <strong>Aitor Luna</strong>, <strong>Luis Callejo</strong> y <strong>Ruth Díaz</strong>
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

          {/* Character Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full mb-4">
                <Users className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 text-sm font-semibold">Mi Personaje</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3">
                Antonio
              </h3>
              <p className="text-gray-400 text-lg">Agente de apoyo en la Operación Santuario</p>
            </div>

            {/* Character Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Left Card - Character Description */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold">El Novio de Amaia</h4>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Antonio es <strong>el novio de Amaia</strong>, la joven guardia civil que se infiltra en ETA 
                    durante más de una década. Su personaje representa <strong>el amor incondicional</strong> y 
                    el apoyo emocional en medio de una operación extremadamente peligrosa.
                  </p>
                  <p>
                    Interpreta a un hombre que debe enfrentar la decisión más difícil: <strong>dejar ir al amor 
                    de su vida</strong> por el bien de la misión y la seguridad nacional. Un papel cargado de 
                    emoción, sacrificio y tensión dramática.
                  </p>
                </div>
              </motion.div>

              {/* Right Card - Actor's Perspective */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold">Sobre el Personaje</h4>
                </div>
                
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-300">
                    "Yo al amor de mi vida la esperaría lo que fuera necesario. Es un personaje que se mueve 
                    entre la lealtad y la duda, con una presencia sobria y contenida."
                  </blockquote>
                  
                  <div className="bg-slate-700/50 rounded-xl p-4 space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-300">
                        <strong>Contexto histórico:</strong> Basado en la Operación Santuario, la mayor operación 
                        encubierta contra ETA
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-300">
                        <strong>Trabajo de investigación:</strong> Hablé con personas que vivieron los atentados 
                        para entender el contexto emocional
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-gray-300">
                        <strong>Reto interpretativo:</strong> Trabajar la química con Susana Abaitua para que se 
                        viera que están muy enamorados
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 text-center"
            >
              <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl px-8 py-6 max-w-3xl">
                <p className="text-gray-300 text-lg leading-relaxed">
                  <span className="text-yellow-400 font-bold">“</span>
                  Es un proyecto que me gustó desde el primer momento. La historia sobre la lucha contra ETA es cruda. 
                  El trabajo de Susana Abaitua es de Goya. Ella tiene que rechazar la vida familiar que tenía previsto, 
                  soy su pareja.
                  <span className="text-yellow-400 font-bold">”</span>
                </p>
                <p className="text-orange-400 font-semibold mt-3">— Almagro San Miguel</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
