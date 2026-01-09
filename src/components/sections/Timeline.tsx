'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Star, TrendingUp } from 'lucide-react'
import { useRef } from 'react'

interface TimelineEvent {
  year: string
  title: string
  subtitle: string
  description: string
  icon: any
  color: string
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
    color: 'text-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
    type: 'education',
  },
  {
    year: '2009-2012',
    title: 'Teatro de Calle',
    subtitle: 'Andalucía & Corral de Comedias',
    description: 'Experiencia en teatro de calle por diversos pueblos andaluces y actuaciones regulares en el Corral de Comedias de Isla Mágica.',
    icon: Briefcase,
    color: 'text-purple-500',
    gradient: 'from-purple-500 to-pink-500',
    type: 'work',
  },
  {
    year: '2013',
    title: 'Lapso (Cortometraje)',
    subtitle: 'Debut en Cine',
    description: 'Protagonista Rodolfo. Rating IMDb: 8.6/10. Primer trabajo profesional en cine que marcó el inicio de mi carrera audiovisual.',
    icon: Star,
    color: 'text-yellow-500',
    gradient: 'from-yellow-500 to-orange-500',
    type: 'milestone',
  },
  {
    year: '2014-2015',
    title: 'Work In Progress',
    subtitle: 'Formación con Darío Facal',
    description: 'Especialización en técnicas interpretativas avanzadas con uno de los formadores más reconocidos de España.',
    icon: GraduationCap,
    color: 'text-green-500',
    gradient: 'from-green-500 to-emerald-500',
    type: 'education',
  },
  {
    year: '2015',
    title: 'Fuente Ovejuna (CNTC)',
    subtitle: 'Nominación Mejor Actor Secundario',
    description: 'Compañía Nacional de Teatro Clásico bajo dirección de Helena Pimenta. Nominación de la Unión de Actores.',
    icon: Award,
    color: 'text-amber-500',
    gradient: 'from-amber-500 to-yellow-500',
    type: 'award',
  },
  {
    year: '2015-2017',
    title: 'CNTC',
    subtitle: 'Compañía Nacional Teatro Clásico',
    description: 'Formación y trabajo con la Compañía Nacional dirigida por Helena Pimenta. Especialización en verso clásico español.',
    icon: Star,
    color: 'text-red-500',
    gradient: 'from-red-500 to-rose-500',
    type: 'milestone',
  },
  {
    year: '2016',
    title: 'Oliver Twist (Musical)',
    subtitle: 'Premio Mejor Espectáculo del Año',
    description: 'Jefe de Policía Duff en producción de CIA La Tarasca. Premio al Mejor Espectáculo del Año.',
    icon: Award,
    color: 'text-purple-500',
    gradient: 'from-purple-500 to-pink-500',
    type: 'award',
  },
  {
    year: '2017',
    title: 'Debut en Televisión',
    subtitle: 'Centro Médico & Grupo 2',
    description: 'Primeros papeles en televisión nacional con La 1 (TVE). Inicio de carrera en series de televisión.',
    icon: TrendingUp,
    color: 'text-indigo-500',
    gradient: 'from-indigo-500 to-blue-500',
    type: 'milestone',
  },
  {
    year: '2019',
    title: 'Hernán (Prime Video)',
    subtitle: 'Gonzalo de Sandoval',
    description: 'Primera producción internacional para Amazon Prime Video. Serie histórica distribuida en toda Latinoamérica.',
    icon: Star,
    color: 'text-teal-500',
    gradient: 'from-teal-500 to-cyan-500',
    type: 'milestone',
  },
  {
    year: '2020',
    title: 'Vis a vis: El Oasis',
    subtitle: 'Primer Papel Protagonista',
    description: 'Diego "Dieguito" Ramala. Primera vez como protagonista en serie de Fox/Star Channel. Spin-off de la exitosa "Vis a vis".',
    icon: Star,
    color: 'text-yellow-500',
    gradient: 'from-yellow-500 to-orange-500',
    type: 'milestone',
  },
  {
    year: '2021',
    title: 'Estoy vivo (TVE)',
    subtitle: 'Mikel Uribe',
    description: '12 episodios en una de las series más vistas de La 1. Consolidación en televisión nacional.',
    icon: Briefcase,
    color: 'text-blue-500',
    gradient: 'from-blue-500 to-cyan-500',
    type: 'work',
  },
  {
    year: '2022',
    title: 'Desconocidas (Canal Sur)',
    subtitle: 'Ramón',
    description: '8 episodios en producción andaluza. Colaboración con Canal Sur Televisión.',
    icon: Briefcase,
    color: 'text-green-500',
    gradient: 'from-green-500 to-emerald-500',
    type: 'work',
  },
  {
    year: '2023',
    title: 'La Caza: Guadiana (TVE)',
    subtitle: 'Aurelio Santana',
    description: 'Papel destacado en thriller de éxito de La 1. Rating IMDb: 7.3/10.',
    icon: Briefcase,
    color: 'text-red-500',
    gradient: 'from-red-500 to-rose-500',
    type: 'work',
  },
  {
    year: '2023-2024',
    title: 'La Moderna (TVE)',
    subtitle: 'Protagonista - 236 Episodios',
    description: 'Íñigo Peñalver, galán protagonista en serie diaria de éxito de La 1. Más de 230 episodios consecutivos como protagonista.',
    icon: Star,
    color: 'text-amber-500',
    gradient: 'from-amber-500 to-yellow-500',
    type: 'milestone',
  },
  {
    year: '2024',
    title: 'Operación Barrio Inglés',
    subtitle: 'Toni - Serie de Espionaje',
    description: '8 episodios en serie de época ambientada en los años 40. Producción TVE.',
    icon: Briefcase,
    color: 'text-purple-500',
    gradient: 'from-purple-500 to-pink-500',
    type: 'work',
  },
  {
    year: '2025',
    title: 'Un fantasma en la batalla',
    subtitle: 'Próximo Estreno',
    description: 'Antonio. Película dirigida por Agustín Díaz Yanes sobre ETA basada en hechos reales. En postproducción.',
    icon: Star,
    color: 'text-indigo-500',
    gradient: 'from-indigo-500 to-blue-500',
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
    <section id="timeline" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full mb-4"
            >
              <Calendar className="w-4 h-4 text-slate-700" />
              <span className="text-slate-700 text-sm font-semibold">Cronología</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Trayectoria Profesional
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un recorrido de 13+ años desde la formación en ESAD Sevilla hasta convertirme
              en protagonista de series de éxito en televisión nacional.
            </p>
          </div>

          {/* Timeline */}
          <div ref={containerRef} className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block" />
            
            {/* Animated Progress Line */}
            <motion.div
              className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-slate-900 to-yellow-500 -translate-x-1/2 hidden md:block"
              style={{ height: lineHeight }}
            />

            {/* Events */}
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
                    {/* Desktop Layout */}
                    <div className="hidden md:block md:w-1/2 pr-8 md:pr-12">
                      {isLeft && (
                        <div className="text-right">
                          <TimelineCard event={event} Icon={Icon} />
                        </div>
                      )}
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 z-10">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.gradient} flex items-center justify-center shadow-xl`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        {/* Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} rounded-full blur-xl opacity-40 -z-10`} />
                      </motion.div>
                    </div>

                    <div className="hidden md:block md:w-1/2 pl-8 md:pl-12">
                      {!isLeft && (
                        <div className="text-left">
                          <TimelineCard event={event} Icon={Icon} />
                        </div>
                      )}
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden pl-24 w-full">
                      <TimelineCard event={event} Icon={Icon} />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TimelineCard({ event, Icon }: { event: TimelineEvent; Icon: any }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      {/* Type Badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${event.color} bg-opacity-10`} style={{ backgroundColor: `${event.color}15` }}>
          {event.type === 'education' && '🎓 Formación'}
          {event.type === 'work' && '💼 Trabajo'}
          {event.type === 'award' && '🏆 Premio'}
          {event.type === 'milestone' && '⭐ Hito'}
        </span>
        <span className="text-sm text-gray-500 font-semibold">{event.year}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
        {event.title}
      </h3>
      <p className={`font-semibold mb-2 ${event.color}`}>{event.subtitle}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>

      {/* Bottom accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </motion.div>
  )
}
