'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Tv, Film, Award, Calendar, Users, Star, TrendingUp, Sparkles } from 'lucide-react'

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
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      const duration = 1800
      const steps = 50
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
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <div className="relative h-full">
        <div className="absolute -inset-[1px] bg-gradient-to-br from-yellow-400/0 via-yellow-400/20 to-amber-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
          <motion.div
            className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-yellow-400/10 to-amber-500/10 border border-yellow-500/20"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-7 h-7 text-yellow-400" strokeWidth={2} />
          </motion.div>

          <div className="mb-3">
            <h3 className="text-5xl font-bold bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              <AnimatedCounter value={value} suffix={suffix} delay={delay} />
            </h3>
          </div>

          <p className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">
            {label}
          </p>

          <p className="text-sm text-slate-400 leading-relaxed">
            {description}
          </p>

          <motion.div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-yellow-400 to-amber-500 rounded-b-2xl"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.4 }}
          />
        </div>
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
      description: 'En series de televisión nacionales e internacionales',
      delay: 0.1,
    },
    {
      value: 15,
      label: 'Producciones',
      suffix: '+',
      icon: Film,
      description: 'Series, películas y obras teatrales profesionales',
      delay: 0.2,
    },
    {
      value: 13,
      label: 'Años',
      suffix: '+',
      icon: Calendar,
      description: 'De experiencia profesional en el sector audiovisual',
      delay: 0.3,
    },
    {
      value: 5,
      label: 'Premios',
      suffix: '',
      icon: Award,
      description: 'Y nominaciones en festivales de prestigio',
      delay: 0.4,
    },
    {
      value: 20,
      label: 'Directores',
      suffix: '+',
      icon: Users,
      description: 'Colaboraciones con directores de renombre',
      delay: 0.5,
    },
    {
      value: 95,
      label: 'Satisfacción',
      suffix: '%',
      icon: Star,
      description: 'Valoración de directores y productores',
      delay: 0.6,
    },
  ]

  return (
    <section id="stats" className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" strokeWidth={2} />
            <span className="text-sm font-medium text-slate-300 tracking-wide">Trayectoria Profesional</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Números que Hablan
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Más de una década de dedicación profesional al arte dramático con resultados consolidados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-slate-300">
              Trayectoria en constante crecimiento
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
