'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play, MapPin, Calendar, ExternalLink, Clapperboard, Tv, Star, Theater as TheaterIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0.95])
  const scale = useTransform(scrollY, [0, 200], [1, 0.98])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const professionalLinks = [
    { 
      name: 'IMDb', 
      url: 'https://www.imdb.com/name/nm9017709/',
      icon: '⭐',
      description: 'Perfil profesional'
    },
    { 
      name: 'FilmAffinity', 
      url: 'https://www.filmaffinity.com/es/name.php?name-id=231727420',
      icon: '🎬',
      description: 'Filmografía completa'
    },
    { 
      name: 'SensaCine', 
      url: 'https://www.sensacine.com/actores/actor-889713/',
      icon: '🎭',
      description: 'Proyectos y noticias'
    },
    { 
      name: 'Wikipedia', 
      url: 'https://es.wikipedia.org/wiki/Almagro_San_Miguel',
      icon: '📖',
      description: 'Biografía'
    },
  ]

  const quickHighlights = [
    {
      icon: Clapperboard,
      title: 'Un fantasma en la batalla',
      desc: 'Netflix 2025',
    },
    {
      icon: Tv,
      title: 'La Moderna',
      desc: '236 episodios TVE',
    },
    {
      icon: Star,
      title: 'Vis a vis: El Oasis',
      desc: 'Protagonista Fox',
    },
    {
      icon: TheaterIcon,
      title: 'CNTC',
      desc: 'Compañía Nacional',
    },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900" />

      {mounted && (
        <div className="pointer-events-none absolute inset-0 opacity-10">
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full blur-[1px]"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080)],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 12 + 14,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 6,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
        style={{ opacity, scale }}
      >
        <div className="grid lg:grid-cols-[0.95fr_1.25fr] gap-8 xl:gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px] lg:max-w-[520px]">
              <div className="absolute inset-0 rounded-[28px] lg:rounded-[36px] bg-yellow-400/10 blur-3xl" />
              
              <motion.div 
                className="relative aspect-[2.5/4] rounded-[28px] lg:rounded-[36px] overflow-hidden shadow-[0_50px_150px_rgba(0,0,0,0.95)]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src="https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4"
                  alt="Almagro San Miguel - Actor profesional de televisión, cine y teatro"
                  fill
                  className="object-cover object-[center_15%] scale-105"
                  sizes="(min-width: 1024px) 520px, 90vw"
                  priority
                  style={{
                    filter: 'brightness(1.05) contrast(1.08) saturate(0.95)',
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)]" />
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-600/5 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="order-1 lg:order-2 space-y-6 lg:space-y-7"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-[40px] sm:text-[48px] md:text-[54px] lg:text-[60px] xl:text-[66px] 
                           font-serif font-bold tracking-tight leading-[1.1] text-white"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
              >
                Almagro San Miguel
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                Actor de Televisión, Cine y Teatro
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                    Ubicación
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">Sevilla y Madrid</p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                    Nacimiento
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">7 Marzo 1990</p>
              </div>
            </motion.div>

            {/* Quick Highlights */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              {quickHighlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="rounded-xl bg-slate-900/80 border border-slate-700/60 px-3.5 py-3 backdrop-blur-md hover:border-yellow-400/30 transition-all"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs font-bold text-white leading-tight">{highlight.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium">{highlight.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
            >
              <motion.a
                href="#showreel"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-yellow-400
                           px-7 py-3.5 text-base font-semibold text-black shadow-[0_10px_30px_rgba(250,204,21,0.25)]"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver Showreel Profesional
              </motion.a>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-yellow-400" />
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Perfiles profesionales
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {professionalLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-slate-700/70 
                               bg-slate-900/80 px-3 py-3 backdrop-blur-md hover:border-white/20
                               hover:bg-slate-900/95 transition-all shadow-[0_12px_30px_rgba(15,23,42,0.8)]"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-slate-50 group-hover:text-white transition-colors">
                        {link.name}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{link.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="pt-3 flex justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.6 }}
            >
              <motion.a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full border border-slate-600/70 
                           bg-slate-900/60 px-5 py-2.5 backdrop-blur-md hover:border-white/20
                           hover:bg-slate-900/80 transition-all"
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  Explorar portfolio completo
                </span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowDown className="w-4 h-4 text-yellow-400" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
