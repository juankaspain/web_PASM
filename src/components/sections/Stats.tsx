'use client'

import { motion, useInView } from 'framer-motion'
import { Tv, Film, Award, Users, Clock, Star, TrendingUp, Briefcase } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

interface Stat {
  icon: any
  value: string
  label: string
  description: string
  color: string
  gradient: string
}

const stats: Stat[] = [
  {
    icon: Tv,
    value: '300+',
    label: 'Episodios de TV',
    description: '12 series en plataformas nacionales e internacionales',
    color: 'text-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Film,
    value: '12',
    label: 'Series de TV',
    description: 'TVE, Prime Video, Fox, Atresplayer, Canal Sur',
    color: 'text-purple-500',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    value: '2',
    label: 'Premios & Nominaciones',
    description: 'Mejor Espectáculo 2016, Nominación Unión Actores',
    color: 'text-yellow-500',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Clock,
    value: '13+',
    label: 'Años de Experiencia',
    description: 'Desde 2013 en TV, cine y teatro profesional',
    color: 'text-green-500',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    value: '50+',
    label: 'Directores',
    description: 'Colaboraciones con profesionales de primer nivel',
    color: 'text-red-500',
    gradient: 'from-red-500 to-rose-500',
  },
  {
    icon: Star,
    value: '236',
    label: 'Episodios "La Moderna"',
    description: 'Protagonista galán en serie diaria de TVE',
    color: 'text-amber-500',
    gradient: 'from-amber-500 to-yellow-500',
  },
  {
    icon: TrendingUp,
    value: '6',
    label: 'Plataformas',
    description: 'TVE, Prime Video, Fox, Star, Atresplayer, Canal Sur',
    color: 'text-indigo-500',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Briefcase,
    value: '4',
    label: 'Películas',
    description: 'Incluyendo "Un fantasma en la batalla" (2025)',
    color: 'text-teal-500',
    gradient: 'from-teal-500 to-cyan-500',
  },
]

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stats" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
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
              <TrendingUp className="w-4 h-4 text-slate-700" />
              <span className="text-slate-700 text-sm font-semibold">Trayectoria Profesional</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Carrera en Números
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más de una década de experiencia profesional en televisión, cine y teatro,
              trabajando con las principales productoras y plataformas de España.
            </p>
          </div>

          {/* Stats Grid Enhanced */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              // Extract numeric value
              const numericValue = parseInt(stat.value.replace(/\D/g, '')) || 0
              const suffix = stat.value.replace(/\d/g, '')

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    {/* Background Gradient on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className="relative mb-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
                    </div>

                    {/* Value with Counter */}
                    <div className={`text-5xl font-bold mb-2 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                      {isInView && numericValue > 0 ? (
                        <>
                          <AnimatedCounter end={numericValue} />
                          {suffix}
                        </>
                      ) : (
                        stat.value
                      )}
                    </div>

                    {/* Label */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {stat.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6">
              ¿Interesado en colaborar? Descarga mi press kit completo
            </p>
            <a
              href="#presskit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white rounded-full transition-all font-bold shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Award className="w-5 h-5" />
              Ver Press Kit
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
