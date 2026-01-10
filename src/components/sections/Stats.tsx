'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Tv, Film, Award, TrendingUp, Users, Calendar, Star, Sparkles } from 'lucide-react'

interface StatProps {
  value: number
  label: string
  suffix?: string
  icon: React.ElementType
  description: string
  delay: number
}

function AnimatedCounter({ value, suffix = '', delay }: { value: number; suffix?: string; delay: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <div ref={ref}>
      {count}{suffix}
    </div>
  )
}

function StatCard({ value, label, suffix, icon: Icon, description, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Resplandor de fondo */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-yellow-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card principal */}
      <div className="relative h-full rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-black/90 border border-slate-700/50 backdrop-blur-xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Gradiente decorativo */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-bl-full" />
        
        {/* Icono */}
        <motion.div
          className="relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl blur-lg opacity-30" />
          <Icon className="relative w-8 h-8 text-yellow-300" strokeWidth={2} />
        </motion.div>

        {/* Número */}
        <div className="mb-3">
          <h3 className="text-5xl sm:text-6xl font-bold bg-gradient-to-br from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
            <AnimatedCounter value={value} suffix={suffix} delay={delay} />
          </h3>
        </div>

        {/* Label */}
        <p className="text-lg sm:text-xl font-semibold text-slate-100 mb-2 group-hover:text-yellow-300 transition-colors">
          {label}
        </p>

        {/* Descripción */}
        <p className="text-sm text-slate-400 leading-relaxed">
          {description}
        </p>

        {/* Línea decorativa */}
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  )
}

export default function Stats() {
  const stats: StatProps[] = [
    {
      value: 300,
      label: 'Episodios',
      suffix: '+',
      icon: Tv,
      description: 'En series nacionales e internacionales de máxima audiencia',
      delay: 0.1,
    },
    {
      value: 15,
      label: 'Producciones',
      suffix: '+',
      icon: Film,
      description: 'Entre series, películas y obras de teatro profesionales',
      delay: 0.2,
    },
    {
      value: 13,
      label: 'Años',
      suffix: '+',
      icon: Calendar,
      description: 'De experiencia profesional consolidada en el sector',
      delay: 0.3,
    },
    {
      value: 5,
      label: 'Premios',
      suffix: '',
      icon: Award,
      description: 'Y nominaciones en festivales y certamînes teatrales',
      delay: 0.4,
    },
    {
      value: 20,
      label: 'Directores',
      suffix: '+',
      icon: Users,
      description: 'Colaboraciones con directores de prestigio nacional',
      delay: 0.5,
    },
    {
      value: 95,
      label: 'Satisfacción',
      suffix: '%',
      icon: Star,
      description: 'Valoración positiva de directores y productores',
      delay: 0.6,
    },
  ]

  return (
    <section id="stats" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Fondo cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      
      {/* Partículas doradas flotantes */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -500],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold text-yellow-300 uppercase tracking-wider">Trayectoria Profesional</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
              Números que Hablan
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Más de una década dedicada al arte dramático con resultados excepcionales
          </p>
        </motion.div>

        {/* Grid de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Decoración inferior */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/60 border border-slate-700/50 backdrop-blur-md">
            <TrendingUp className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium text-slate-300">
              En constante crecimiento profesional
            </span>
          </div>
        </motion.div>
      </div>

      {/* Vignette inferior */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
