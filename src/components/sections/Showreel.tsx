'use client'

import { motion, useInView } from 'framer-motion'
import { Play, Download, Film, Clock, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function Showreel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="showreel" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950">
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
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <Film className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Reel Profesional</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
            >
              Showreel
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Un vistazo a mi trabajo en acción
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="group relative aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200"
                  alt="Showreel thumbnail"
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 hover:bg-yellow-300 transition-all hover:scale-110 shadow-lg">
                    <Play className="ml-1 h-8 w-8 fill-black text-black" />
                  </button>
                </div>

                <div className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm border border-white/20">
                  3:24
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-2 text-xl font-bold text-white">Showreel 2024</h3>
                <p className="text-sm text-slate-400">
                  Recopilación de mis mejores trabajos recientes en cine, televisión y teatro
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-lg" />
                <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="mb-4 text-xl font-bold text-white">Materiales</h3>
                  <div className="space-y-3">
                    <button className="flex w-full items-center justify-between rounded-lg bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20">
                      <span className="font-semibold text-slate-200">Showreel HD</span>
                      <Download className="w-5 h-5 text-yellow-400" />
                    </button>
                    <button className="flex w-full items-center justify-between rounded-lg bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20">
                      <span className="font-semibold text-slate-200">CV Actoral</span>
                      <Download className="w-5 h-5 text-yellow-400" />
                    </button>
                    <button className="flex w-full items-center justify-between rounded-lg bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-white/20">
                      <span className="font-semibold text-slate-200">Headshots</span>
                      <Download className="w-5 h-5 text-yellow-400" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Clips Destacados</h3>

                {[
                  { title: 'Escena Dramática - El Último Adiós', duration: '1:12' },
                  { title: 'Monólogo - Hamlet', duration: '2:05' },
                  { title: 'Escena Cómica - Caminos Cruzados', duration: '0:58' },
                ].map((clip, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-lg bg-white/[0.02] border border-white/10 p-4 transition-all hover:bg-white/[0.04] hover:border-white/20"
                  >
                    <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded">
                      <Image
                        src={`https://images.unsplash.com/photo-${1485846234645 + index}?q=80&w=200`}
                        alt={clip.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play
                          size={20}
                          className="fill-white text-white opacity-80 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-200">{clip.title}</p>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Clock className="w-3 h-3" />
                        {clip.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">
                Material actualizado periódicamente con nuevos proyectos
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
