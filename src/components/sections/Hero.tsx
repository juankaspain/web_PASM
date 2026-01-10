'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Award, Play, TrendingUp, Film, Tv, Sparkles, MapPin, Calendar, ExternalLink } from 'lucide-react'
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

  const achievements = [
    { icon: Tv, label: '300+ Episodios', subtitle: 'TV Nacional' },
    { icon: Film, label: '12 Series', subtitle: 'Protagonista' },
    { icon: Award, label: '2 Premios', subtitle: 'Reconocimientos' },
    { icon: TrendingUp, label: '13 Años', subtitle: 'Experiencia' },
  ]

  // Trabajos destacados con información consistente y detallada
  const recentWorks = [
    { 
      title: 'Un fantasma en la batalla', 
      role: 'Largometraje', 
      details: 'Cine', 
      network: 'Netflix', 
      year: '2025' 
    },
    { 
      title: 'La Moderna', 
      role: 'Protagonista', 
      details: '236 episodios', 
      network: 'TVE', 
      year: '2024-2025' 
    },
    { 
      title: 'Vis a vis: El Oasis', 
      role: 'Esteban Kabila', 
      details: '8 episodios', 
      network: 'Fox', 
      year: '2020' 
    },
    { 
      title: 'Hernán', 
      role: 'Gonzalo de Sandoval', 
      details: 'Serie', 
      network: 'Prime Video', 
      year: '2019' 
    },
  ]

  // Enlaces profesionales ordenados: IMDb, FilmAffinity, SensaCine, Wikipedia (sin Instagram)
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* FONDO SENCILLO Y SÓLIDO */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-slate-900" />

      {/* Partículas muy suaves */}
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

      {/* CONTENEDOR PRINCIPAL */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
        style={{ opacity, scale }}
      >
        {/* GRID OPTIMIZADO PARA MEJOR BALANCE IMAGEN/CONTENIDO */}
        <div className="grid lg:grid-cols-[0.95fr_1.25fr] gap-8 xl:gap-12 items-center">
          {/* COLUMNA FOTO - TAMAÑO REDUCIDO PARA MEJOR PROPORCIÓN */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[480px] lg:max-w-[520px]">
              {/* Resplandor dorado sutil detrás de la imagen */}
              <div className="absolute inset-0 rounded-[28px] lg:rounded-[36px] bg-gradient-to-br from-yellow-500/20 via-orange-500/10 to-transparent blur-3xl" />
              
              <motion.div 
                className="relative aspect-[2.5/4] rounded-[28px] lg:rounded-[36px] overflow-hidden shadow-[0_50px_150px_rgba(0,0,0,0.95)] ring-1 ring-white/5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Imagen principal con mejor encuadre */}
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
                
                {/* Gradientes de superposición cinematográfica */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
                
                {/* Vignette cinematográfico */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)]" />
                
                {/* Resplandor interno dorado muy sutil */}
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-600/5 via-transparent to-transparent" />
              </motion.div>

              {/* Pequeño badge flotando sobre la foto */}
              <div className="absolute -bottom-3 left-3 right-3 flex justify-between gap-2">
                <motion.div 
                  className="flex items-center gap-2 rounded-xl bg-black/80 border border-yellow-500/40 px-2.5 py-1.5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/25 text-yellow-300">
                    <Film className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold text-yellow-200">En rodaje</p>
                    <p className="text-[10px] text-gray-300">Proyectos 2026</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="hidden sm:flex items-center gap-1.5 rounded-xl bg-slate-900/90 border border-slate-600/70 px-2.5 py-1.5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <p className="text-[10px] text-gray-200">Representación internacional</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* COLUMNA CONTENIDO - MÁS ESPACIO */}
          <motion.div
            className="order-1 lg:order-2 space-y-6 lg:space-y-7"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* NOMBRE */}
            <div className="space-y-2">
              <motion.h1
                className="text-[40px] sm:text-[48px] md:text-[54px] lg:text-[60px] xl:text-[66px] 
                           font-serif font-bold tracking-tight leading-[1.1]
                           bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
              >
                Almagro San Miguel
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-300/95"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                Actor de Televisión, Cine y Teatro
              </motion.p>
            </div>

            {/* INFO RÁPIDA */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-yellow-300" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                    Ubicación
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">Sevilla y Madrid</p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-yellow-300" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                    Nacimiento
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">7 Marzo 1990</p>
              </div>
            </motion.div>

            {/* FORMACIÓN */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              {[
                'ESAD Sevilla',
                'CNTC Helena Pimenta',
                'NO-IDENTITY Especialista',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-600/70 bg-slate-900/80 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-slate-100"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* TRABAJOS DESTACADOS - INFORMACIÓN CONSISTENTE */}
            <motion.div
              className="space-y-3 pt-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <h3 className="text-sm sm:text-base font-semibold text-white">
                    Trabajos destacados
                  </h3>
                </div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-gray-400">
                  2025 – 2019
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recentWorks.map((work, index) => (
                  <motion.div
                    key={work.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.07, duration: 0.4 }}
                    className="group rounded-2xl bg-slate-900/80 border border-slate-700/70 px-4 py-3 
                               backdrop-blur-md hover:border-yellow-400/60 hover:bg-slate-900/95 
                               transition-all shadow-[0_18px_50px_rgba(15,23,42,0.9)]"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-slate-50 group-hover:text-yellow-300 transition-colors truncate">
                          {work.title}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5">{work.role}</p>
                      </div>
                      <span className="flex-shrink-0 rounded-md bg-yellow-500/15 px-2 py-0.5 text-[11px] font-semibold text-yellow-300">
                        {work.year}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-300">
                      <span>{work.details}</span>
                      <span className="font-semibold text-gray-200">{work.network}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* LOGROS RÁPIDOS */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              {achievements.map((achievement) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={achievement.label}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-slate-700/70 bg-slate-950/80 px-3.5 py-3 
                               backdrop-blur-md shadow-[0_16px_40px_rgba(15,23,42,0.9)]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-800/80 text-yellow-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="leading-tight">
                        <p className="text-xs font-semibold text-slate-50">{achievement.label}</p>
                        <p className="text-[11px] text-gray-400">{achievement.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTAS - Ver showreel destacado */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <motion.a
                href="#showreel"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 
                           px-7 py-3.5 text-base font-semibold text-black shadow-[0_22px_60px_rgba(250,204,21,0.45)]"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver Showreel Profesional
              </motion.a>
            </motion.div>

            {/* ENLACES PROFESIONALES - SIN INSTAGRAM, ORDEN CORRECTO */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-yellow-300" />
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
                    transition={{ delay: 1.15 + index * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-slate-700/70 
                               bg-slate-900/80 px-3 py-3 backdrop-blur-md hover:border-yellow-400/60 
                               hover:bg-slate-900/95 transition-all shadow-[0_12px_30px_rgba(15,23,42,0.8)]"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-slate-50 group-hover:text-yellow-300 transition-colors">
                        {link.name}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{link.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* INDICADOR DE SCROLL MEJORADO */}
            <motion.div
              className="pt-3 flex justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <motion.a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full border border-slate-600/70 
                           bg-slate-900/60 px-5 py-2.5 backdrop-blur-md hover:border-yellow-400/60 
                           hover:bg-slate-900/80 transition-all"
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-sm font-medium text-gray-300 group-hover:text-yellow-300 transition-colors">
                  Explorar portfolio completo
                </span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowDown className="w-4 h-4 text-yellow-300" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* VIGNETTE INFERIOR */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
