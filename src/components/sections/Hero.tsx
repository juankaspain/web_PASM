'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Award, Play, TrendingUp, Film, Tv, Sparkles, MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { scrollY } = useScroll()
  // Scroll muy suave para que no “colapse” al hacer zoom
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

  // Ordenado cronológicamente, del más nuevo al más antiguo
  const recentWorks = [
    { title: 'Un fantasma en la batalla', info: 'Cine', network: 'Netflix', year: '2025' },
    { title: 'La Moderna', info: '236 ep.', network: 'TVE', year: '2024-2025' },
    { title: 'Vis a vis: El Oasis', info: '8 ep.', network: 'Fox', year: '2020' },
    { title: 'Hernán', info: 'Gonzalo de Sandoval', network: 'Prime', year: '2019' },
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
        {/* GRID ESTABLE QUE NO SE ROMPE CON ZOOM */}
        <div className="grid lg:grid-cols-[1.05fr_1.15fr] gap-10 xl:gap-16 items-center">
          {/* COLUMNA FOTO */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[520px] lg:max-w-[560px]">
              <div className="relative aspect-[3/4] rounded-[32px] lg:rounded-[40px] overflow-hidden border border-white/7 shadow-[0_40px_140px_rgba(0,0,0,0.9)] bg-black/60">
                <Image
                  src="https://private-user-images.githubusercontent.com/30146558/534179896-43e8482d-f288-4cd0-b1ad-31e054eafdf4.png?raw=1"
                  alt="Almagro San Miguel - Actor profesional de televisión, cine y teatro"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 520px, 90vw"
                  priority
                />
                {/* Gradiente para asegurar lectura siempre correcta */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/40" />
              </div>

              {/* Pequeño badge flotando sobre la foto */}
              <div className="absolute -bottom-4 left-4 right-4 flex justify-between gap-3">
                <div className="flex items-center gap-2 rounded-2xl bg-black/70 border border-yellow-500/30 px-3 py-2 backdrop-blur-md">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-300">
                    <Film className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-xs font-semibold text-yellow-200">En rodaje</p>
                    <p className="text-[11px] text-gray-300">Últimos proyectos 2025</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 rounded-2xl bg-slate-900/80 border border-slate-600/60 px-3 py-2 backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <p className="text-[11px] text-gray-300">Representación internacional disponible</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA CONTENIDO */}
          <motion.div
            className="order-1 lg:order-2 space-y-7 lg:space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {/* BADGE PROFESIONAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-yellow-600/15 to-orange-600/15 border border-yellow-500/40 px-5 py-2.5 backdrop-blur-md shadow-[0_12px_40px_rgba(250,204,21,0.25)]"
            >
              <svg
                className="w-5 h-5 text-yellow-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <circle cx="12" cy="12" r="3" fill="#020617" stroke="currentColor" strokeWidth="0.6" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.16em] text-yellow-100 uppercase">
                Actor profesional certificado
              </span>
            </motion.div>

            {/* NOMBRE EN UNA SOLA LÍNEA */}
            <div className="space-y-2">
              <motion.h1
                className="whitespace-nowrap text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[70px] 
                           font-serif font-bold tracking-tight 
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
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-4 py-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-4 h-4 text-yellow-300" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-400">
                    Ubicación
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">Sevilla, España</p>
              </div>
              <div className="rounded-2xl bg-slate-900/80 border border-slate-700/60 px-4 py-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1.5">
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
              className="flex flex-wrap gap-2.5"
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
                  className="rounded-full border border-slate-600/70 bg-slate-900/80 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-slate-100"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* TRABAJOS DESTACADOS */}
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
                    className="group rounded-2xl bg-slate-900/80 border border-slate-700/70 px-4 py-3.5 
                               backdrop-blur-md hover:border-yellow-400/60 hover:bg-slate-900/95 
                               transition-all shadow-[0_18px_50px_rgba(15,23,42,0.9)]"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <p className="text-xs sm:text-sm font-semibold text-slate-50 group-hover:text-yellow-300 transition-colors">
                        {work.title}
                      </p>
                      <span className="rounded-md bg-yellow-500/15 px-2 py-0.5 text-[11px] font-semibold text-yellow-300">
                        {work.year}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] sm:text-xs text-gray-300">
                      <span>{work.info}</span>
                      <span className="font-semibold text-gray-200">{work.network}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* LOGROS RÁPIDOS */}
            <motion.div
              className="grid grid-cols-2 gap-3 pt-1"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={achievement.label}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl border border-slate-700/70 bg-slate-950/80 px-4 py-3.5 
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

            {/* CTAS */}
            <motion.div
              className="flex flex-wrap gap-3 pt-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <motion.a
                href="#showreel"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 
                           px-7 py-3.5 text-sm font-semibold text-black shadow-[0_22px_60px_rgba(250,204,21,0.45)]"
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Ver showreel
              </motion.a>

              <motion.a
                href="https://www.imdb.com/name/nm9017709/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center rounded-full border border-slate-500/70 bg-slate-900/80 
                           px-6 py-3 text-sm font-semibold text-slate-50 hover:border-yellow-400/60 hover:bg-slate-900"
              >
                IMDb
              </motion.a>

              <motion.a
                href="https://es.wikipedia.org/wiki/Almagro_San_Miguel"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center rounded-full border border-slate-500/70 bg-slate-900/80 
                           px-6 py-3 text-sm font-semibold text-slate-50 hover:border-yellow-400/60 hover:bg-slate-900"
              >
                Wikipedia
              </motion.a>
            </motion.div>

            {/* INDICADOR DE SCROLL */}
            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 pt-3 text-xs font-medium text-gray-400 hover:text-yellow-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15, duration: 0.6 }}
            >
              Descubre más
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* VIGNETTE INFERIOR */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
