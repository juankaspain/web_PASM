'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Award, Briefcase, GraduationCap, Star, TrendingUp, Sparkles, Theater } from 'lucide-react'
import { useRef } from 'react'

interface TimelineEvent {
  year: string
  title: string
  subtitle: string
  description: string
  icon: any
  gradient: string
  type: 'education' | 'work' | 'award' | 'milestone'
}

const events: TimelineEvent[] = [
  {
    year: '2008-2012',
    title: 'ESAD Sevilla',
    subtitle: 'Graduación en Arte Dramático',
    description: 'Formación completa en interpretación, voz, movimiento y técnicas teatrales en la Escuela Superior de Arte Dramático de Sevilla.',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-cyan-500',
    type: 'education',
  },
  {
    year: '2009-2012',
    title: 'Teatro de Calle',
    subtitle: 'Andalucía & Corral de Comedias',
    description: 'Experiencia en teatro de calle por diversos pueblos andaluces y actuaciones regulares en el Corral de Comedias de Isla Mágica.',
    icon: Briefcase,
    gradient: 'from-purple-500 to-pink-500',
    type: 'work',
  },
  {
    year: '2013',
    title: 'Lapso (Cortometraje)',
    subtitle: 'Debut en Cine',
    description: 'Protagonista Rodolfo. Rating IMDb: 8.6/10. Primer trabajo profesional en cine que marcó el inicio de mi carrera audiovisual.',
    icon: Star,
    gradient: 'from-yellow-500 to-orange-500',
    type: 'milestone',
  },
  {
    year: '2014-2015',
    title: 'Work In Progress',
    subtitle: 'Formación con Darío Facal',
    description: 'Especialización en técnicas interpretativas avanzadas con uno de los formadores más reconocidos de España.',
    icon: GraduationCap,
    gradient: 'from-green-500 to-emerald-500',
    type: 'education',
  },
  {
    year: '2015',
    title: 'Fuente Ovejuna (CNTC)',
    subtitle: 'Nominación Mejor Actor Secundario',
    description: 'Compañía Nacional de Teatro Clásico bajo dirección de Helena Pimenta. Nominación de la Unión de Actores.',
    icon: Award,
    gradient: 'from-amber-500 to-yellow-500',
    type: 'award',
  },
  {
    year: '2015-2017',
    title: 'CNTC',
    subtitle: 'Compañía Nacional Teatro Clásico',
    description: 'Formación y trabajo con la Compañía Nacional dirigida por Helena Pimenta. Especialización en verso clásico español.',
    icon: Star,
    gradient: 'from-red-500 to-rose-500',
    type: 'milestone',
  },
  {
    year: '2016',
    title: 'Oliver Twist (Musical)',
    subtitle: 'Premio Mejor Espectáculo del Año',
    description: 'Jefe de Policía Duff en producción de CIA La Tarasca. Premio al Mejor Espectáculo del Año.',
    icon: Award,
    gradient: 'from-purple-500 to-pink-500',
    type: 'award',
  },
  {
    year: '2017',
    title: 'Debut en Televisión',
    subtitle: 'Centro Médico & Grupo 2',
    description: 'Primeros papeles en televisión nacional con La 1 (TVE). Inicio de carrera en series de televisión.',
    icon: TrendingUp,
    gradient: 'from-indigo-500 to-blue-500',
    type: 'milestone',
  },
  {
    year: '2019',
    title: 'Hernán (Prime Video)',
    subtitle: 'Gonzalo de Sandoval',
    description: 'Primera producción internacional para Amazon Prime Video. Serie histórica distribuida en toda Latinoamérica.',
    icon: Star,
    gradient: 'from-teal-500 to-cyan-500',
    type: 'milestone',
  },
  {
    year: '2020',
    title: 'Vis a vis: El Oasis',
    subtitle: 'Primer Papel Protagonista',
    description: 'Diego "Dieguito" Ramala. Primera vez como protagonista en serie de Fox/Star Channel. Spin-off de la exitosa "Vis a vis".',
    icon: Star,
    gradient: 'from-yellow-500 to-orange-500',
    type: 'milestone',
  },
  {
    year: '2023-2024',
    title: 'La Moderna (TVE)',
    subtitle: 'Protagonista - 236 Episodios',
    description: 'Íñigo Peñalver, galán protagonista en serie diaria de éxito de La 1. Más de 230 episodios consecutivos como protagonista.',
    icon: Star,
    gradient: 'from-amber-500 to-yellow-500',
    type: 'milestone',
  },
  {
    year: '2025',
    title: 'Un fantasma en la batalla',
    subtitle: 'Próximo Estreno',
    description: 'Antonio. Película dirigida por Agustín Díaz Yanes sobre ETA basada en hechos reales. Disponible en Netflix.',
    icon: Star,
    gradient: 'from-indigo-500 to-blue-500',
    type: 'milestone',
  },
  {
    year: '2025-2026',
    title: 'Donde nacen las palabras',
    subtitle: 'En Cartel - Gira Nacional',
    description: 'Comedia contemporánea producida por DMLP Producciones, dirigida por Ángel Caballero. Continuación de la aclamada "Donde mueren las palabras" (finalista al Premio Nacional de Literatura Dramática). Teatro Lara Madrid, Palacio de la Prensa y gira nacional 2026.',
    icon: Theater,
    gradient: 'from-green-500 to-emerald-500',
    type: 'milestone',
  },
]

export default function Timeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="timeline" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Trayectoria Profesional
              </span>
            </h2>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Calendar className="w-4 h-4 text-blue-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Cronología</span>
            </div>
            
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Un recorrido de 13+ años desde la formación en ESAD Sevilla hasta convertirme en protagonista de series de éxito en televisión nacional
            </p>
          </div>

          <div ref={containerRef} className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />
            
            <motion.div
              className="absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-blue-400 to-purple-500 -translate-x-1/2 hidden md:block"
              style={{ height: lineHeight }}
            />

            <div className="space-y-12">
              {events.map((event, index) => {
                const Icon = event.icon
                const isLeft = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className={`relative flex items-center ${
                      isLeft ? 'md:justify-end' : 'md:justify-start'
                    }`}
                  >
                    <div className="hidden md:block md:w-1/2 pr-12">
                      {isLeft && <TimelineCard event={event} Icon={Icon} />}
                    </div>

                    <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.gradient} flex items-center justify-center shadow-xl`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} rounded-full blur-xl opacity-40 -z-10`} />
                      </motion.div>
                    </div>

                    <div className="hidden md:block md:w-1/2 pl-12">
                      {!isLeft && <TimelineCard event={event} Icon={Icon} />}
                    </div>

                    <div className="md:hidden pl-24 w-full">
                      <TimelineCard event={event} Icon={Icon} />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-slate-300">
                Historia en constante evolución
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function TimelineCard({ event, Icon }: { event: TimelineEvent; Icon: any }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className={`absolute -inset-[1px] bg-gradient-to-br ${event.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
      
      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${event.gradient} text-white`}>
            {event.type === 'education' && '🎓 Formación'}
            {event.type === 'work' && '💼 Trabajo'}
            {event.type === 'award' && '🏆 Premio'}
            {event.type === 'milestone' && '⭐ Hito'}
          </span>
          <span className="text-sm text-slate-500 font-semibold">{event.year}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">
          {event.title}
        </h3>
        <p className={`font-semibold mb-2 bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
          {event.subtitle}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed">{event.description}</p>

        <motion.div 
          className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${event.gradient} rounded-b-2xl`}
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  )
}
