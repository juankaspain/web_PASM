'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, ExternalLink, Ticket } from 'lucide-react'

const upcomingEvents = [
  {
    id: 1,
    title: 'Estreno en Cines: "Un fantasma en la batalla"',
    type: 'Estreno',
    date: '2025-11-15',
    time: '20:00',
    location: 'Cines Avenida, Sevilla',
    description: 'Preestreno con presencia del equipo y alfombra roja. Film de Agustín Díaz Yanes sobre ETA.',
    status: 'upcoming',
    link: '#',
  },
  {
    id: 2,
    title: 'Casting Abierto: Nueva Serie TVE',
    type: 'Casting',
    date: '2026-02-10',
    time: '10:00 - 18:00',
    location: 'Madrid, España',
    description: 'Disponible para audiciones de nuevos proyectos de televisión. Contactar para más información.',
    status: 'upcoming',
    link: '#contact',
  },
  {
    id: 3,
    title: 'Encuentro con Fans en Sevilla',
    type: 'Evento',
    date: '2026-03-20',
    time: '18:00',
    location: 'Teatro de la Maestranza, Sevilla',
    description: 'Charla abierta sobre mi carrera, proyectos y respuestas a preguntas del público.',
    status: 'upcoming',
    link: '#',
  },
]

const pastEvents = [
  {
    title: 'Entrevista El Plural TV',
    date: '2024-12-23',
    location: 'Teatro de la Maestranza, Sevilla',
    link: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
  },
  {
    title: 'Fin de grabaciones "La Moderna"',
    date: '2024-06-15',
    location: 'Estudios TVE, Madrid',
    link: '#',
  },
  {
    title: 'Estreno "Operación Barrio Inglés"',
    date: '2024-05-13',
    location: 'TVE La 1',
    link: 'https://www.youtube.com/watch?v=mll_3Sj8kjg',
  },
  {
    title: 'Presentación "La Caza: Guadiana"',
    date: '2023-09-20',
    location: 'Madrid, España',
    link: 'https://www.imdb.com/title/tt15398770/',
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'upcoming':
      return 'bg-green-500'
    case 'today':
      return 'bg-yellow-500'
    default:
      return 'bg-gray-500'
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Estreno':
      return 'bg-red-500'
    case 'Casting':
      return 'bg-blue-500'
    case 'Evento':
      return 'bg-purple-500'
    default:
      return 'bg-gray-500'
  }
}

export default function Events() {
  return (
    <section id="events" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              Agenda & Eventos
            </h2>
          </div>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Próximos estrenos, eventos públicos y oportunidades para conocerme en persona.
          </p>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Ticket className="w-6 h-6 text-yellow-400" />
              Próximos Eventos
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-yellow-400/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 ${getTypeColor(event.type)} rounded-full text-xs font-bold`}>
                      {event.type.toUpperCase()}
                    </span>
                    <span className={`w-3 h-3 ${getStatusColor(event.status)} rounded-full animate-pulse`} />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4">{event.title}</h4>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2 text-sm">
                      <Calendar className="w-4 h-4 mt-0.5 text-yellow-400 flex-shrink-0" />
                      <span>
                        {new Date(event.date).toLocaleDateString('es-ES', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Clock className="w-4 h-4 mt-0.5 text-yellow-400 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="w-4 h-4 mt-0.5 text-yellow-400 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 mb-4">{event.description}</p>
                  
                  {event.link !== '#' && (
                    <a
                      href={event.link}
                      className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold text-sm transition-colors"
                    >
                      Más información
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8 text-center">
              Eventos Anteriores
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {pastEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center justify-center bg-white/10 rounded-lg p-3 min-w-[80px]">
                        <span className="text-2xl font-bold">
                          {new Date(event.date).getDate()}
                        </span>
                        <span className="text-xs text-gray-400">
                          {new Date(event.date).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{event.title}</h4>
                        <p className="text-sm text-gray-400 flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </p>
                      </div>
                    </div>
                    {event.link !== '#' && (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-300 mb-4">
              ¿Quieres que asista a tu evento o tienes una propuesta?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-full transition-colors font-bold"
            >
              Contáctame
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
