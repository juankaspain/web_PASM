'use client'

import { motion, useInView } from 'framer-motion'
import { Play, Calendar, Film, Star, ExternalLink, Youtube, Heart, Users, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function LatestProject() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px]" />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-red-600 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-white" strokeWidth={2} />
            <span className="text-sm font-bold text-white tracking-wide">ÚLTIMO TRABAJO</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Un fantasma en la batalla
              </h2>
              
              <div className="flex items-center gap-6 mb-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Film className="w-5 h-5" />
                  <span>Cine</span>
                </div>
              </div>

              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                Película dramática dirigida por <span className="text-white font-semibold">Agustín Díaz Yanes</span> sobre ETA y sus consecuencias. 
                Estrenada en cines en octubre de 2025 y <span className="text-white font-semibold">disponible en Netflix</span>.
              </p>

              <div className="mb-8 bg-white/[0.03] border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-3 text-white">Reparto Destacado</h3>
                <p className="text-slate-300">
                  Junto a <span className="text-white font-semibold">Susana Abaitua</span>, <span className="text-white font-semibold">Aitor Luna</span>, <span className="text-white font-semibold">Luis Callejo</span> y <span className="text-white font-semibold">Ruth Díaz</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://www.netflix.com/title/81700950"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-bold transition-all shadow-xl text-white"
                >
                  <Play className="w-5 h-5" />
                  Ver en Netflix
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/watch?v=R0ufJf5SFIU"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] rounded-full font-bold transition-all text-white"
                >
                  <Youtube className="w-5 h-5" />
                  Ver Tráiler
                </motion.a>
                <motion.a
                  href="https://www.filmaffinity.com/es/film103750.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] rounded-full font-bold transition-all text-white"
                >
                  <ExternalLink className="w-5 h-5" />
                  Más Info
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-[1px] bg-red-600/20 rounded-2xl blur-xl opacity-60" />
              <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://github.com/user-attachments/assets/64e9e876-5ecc-452e-8be4-d7d5f7968ec9"
                  alt="Poster oficial de Un fantasma en la batalla"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
                
                <a
                  href="https://www.youtube.com/watch?v=R0ufJf5SFIU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </a>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>2025</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <Users className="w-4 h-4 text-slate-400" strokeWidth={2} />
                <span className="text-sm font-medium text-slate-300 tracking-wide">Mi Personaje</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
                Antonio
              </h3>
              <p className="text-slate-400 text-lg">Agente de apoyo en la Operación Santuario</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-[1px] bg-white/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.05] transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">El Novio de Amaia</h4>
                  </div>
                  
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Antonio es <span className="text-white font-semibold">el novio de Amaia</span>, la joven guardia civil que se infiltra en ETA 
                      durante más de una década. Su personaje representa <span className="text-white font-semibold">el amor incondicional</span> y 
                      el apoyo emocional en medio de una operación extremadamente peligrosa.
                    </p>
                    <p>
                      Interpreta a un hombre que debe enfrentar la decisión más difícil: <span className="text-white font-semibold">dejar ir al amor 
                      de su vida</span> por el bien de la misión y la seguridad nacional. Un papel cargado de 
                      emoción, sacrificio y tensión dramática.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative group"
              >
                <div className="absolute -inset-[1px] bg-white/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.05] transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Sobre el Personaje</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-white/20 pl-4 italic text-slate-300">
                      “Yo al amor de mi vida la esperaría lo que fuera necesario. Es un personaje que se mueve 
                      entre la lealtad y la duda, con una presencia sobria y contenida.”
                    </blockquote>
                    
                    <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-slate-300">
                          <span className="text-white font-semibold">Contexto histórico:</span> Basado en la Operación Santuario, la mayor operación 
                          encubierta contra ETA
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-slate-300">
                          <span className="text-white font-semibold">Trabajo de investigación:</span> Hablé con personas que vivieron los atentados 
                          para entender el contexto emocional
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-slate-300">
                          <span className="text-white font-semibold">Reto interpretativo:</span> Trabajar la química con Susana Abaitua para que se 
                          viera que están muy enamorados
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 max-w-3xl backdrop-blur-sm">
                <p className="text-slate-300 text-lg leading-relaxed">
                  <span className="text-white font-bold text-2xl">“</span>
                  Es un proyecto que me gustó desde el primer momento. La historia sobre la lucha contra ETA es cruda. 
                  El trabajo de Susana Abaitua es de Goya. Ella tiene que rechazar la vida familiar que tenía previsto, 
                  soy su pareja.
                  <span className="text-white font-bold text-2xl">”</span>
                </p>
                <p className="text-slate-400 font-semibold mt-4">— Almagro San Miguel</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
