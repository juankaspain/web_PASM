'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CalendarDays, MapPin, Clock, ExternalLink, Ticket, Film, Tv, Theater as TheaterIcon, X, Info } from 'lucide-react'
import { useRef, useState } from 'react'

interface CalendarEvent {
  id: string
  title: string
  type: 'teatro' | 'cine' | 'tv' | 'otro'
  date: string
  endDate?: string
  time?: string
  venue: string
  city: string
  status: 'confirmado' | 'proximamente' | 'en-curso'
  description: string
  role: string
  ticketsUrl?: string
  moreInfoUrl?: string
  address?: string
  details?: string
}

const events: CalendarEvent[] = [
  {
    id: '1',
    title: 'Donde nacen las palabras',
    type: 'teatro',
    date: '2025-04-18',
    endDate: '2026-06-30',
    time: 'Consultar programación',
    venue: 'Teatro Lara',
    city: 'Madrid',
    status: 'en-curso',
    description: 'Continuación de la aclamada "Donde mueren las palabras". Comedia sobre el reencuentro de amigos de la infancia obligados a confinarse juntos durante la pandemia.',
    role: 'Protagonista',
    ticketsUrl: 'https://www.elcorteingles.es/entradas/teatro/entradas-donde-nacen-las-palabras-madrid/',
    address: 'Corredera Baja de San Pablo, 15, 28004 Madrid',
    details: 'Autor y dirección: Ángel Caballero. Con David Matarín, Iván Montes, Alejandro Vergara y Ángel Caballero. Duración: 1h 35min. DMLP Producciones.',
  },
  {
    id: '2',
    title: 'Donde nacen las palabras - Teatro Cervantes',
    type: 'teatro',
    date: '2025-01-17',
    time: '20:30',
    venue: 'Teatro Cervantes',
    city: 'Málaga',
    status: 'confirmado',
    description: 'Estreno en Málaga dentro del 42 Festival de Teatro. La obra que continúa el éxito de "Donde mueren las palabras" (finalista Premio Nacional Literatura Dramática 2020).',
    role: 'Protagonista',
    ticketsUrl: 'https://www.teatrocervantes.com/donde-nacen-las-palabras',
    address: 'Calle Ramos Marín, s/n, 29012 Málaga',
    details: '42 Festival de Teatro de Málaga. Precio: 24€ (único). Estreno mundial en Málaga antes de la gira nacional.',
  },
  {
    id: '3',
    title: 'Donde nacen las palabras - Palacio de la Prensa',
    type: 'teatro',
    date: '2026-02-01',
    endDate: '2026-03-31',
    time: 'Varios horarios',
    venue: 'Palacio de la Prensa',
    city: 'Madrid',
    status: 'confirmado',
    description: 'Temporada extendida en Madrid tras el éxito en Teatro Lara. Continuación de la gira nacional 2026.',
    role: 'Protagonista',
    address: 'Gran Vía, 32, 28013 Madrid',
    details: 'Temporada primavera 2026. Funciones de jueves a domingo. Gira nacional visitando las principales ciudades españolas.',
  },
  {
    id: '4',
    title: 'Carta Blanca',
    type: 'cine',
    date: '2026-09-04',
    venue: 'Cines de toda España',
    city: 'Nacional',
    status: 'confirmado',
    description: 'Película dirigida por Gerardo Herrero. Reparto: Iván Pellicer, Víctor Clavijo, Salva Reina, Joel Bosqued, Roberto Espinosa y Almagro San Miguel.',
    role: 'Papel Secundario',
    moreInfoUrl: 'https://en.wikipedia.org/wiki/List_of_Spanish_films_of_2026',
    details: 'Director: Gerardo Herrero. Producción española 2026. Estreno en salas de cine el 4 de septiembre de 2026. Distribución nacional.',
  },
  {
    id: '5',
    title: 'La Moderna - Temporada Final',
    type: 'tv',
    date: '2025-12-01',
    endDate: '2026-03-01',
    time: 'Lunes a Viernes 17:30',
    venue: 'La 1 - TVE',
    city: 'Emisión Nacional',
    status: 'proximamente',
    description: 'Temporada final de la aclamada serie diaria. Íñigo Peñalver cierra su historia tras más de 350 episodios como protagonista.',
    role: 'Íñigo Peñalver (Protagonista)',
    moreInfoUrl: 'https://www.rtve.es/play/videos/salon-de-te-la-moderna/',
    details: 'Serie nominada a Emmy Internacionales 2024 y ganadora Premio FICAL. Emisión de lunes a viernes en prime time. Disponible en RTVE Play.',
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'teatro': return TheaterIcon
    case 'cine': return Film
    case 'tv': return Tv
    default: return CalendarDays
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'teatro': return 'text-purple-400 bg-purple-400/10 border-purple-400/30'
    case 'cine': return 'text-blue-400 bg-blue-400/10 border-blue-400/30'
    case 'tv': return 'text-green-400 bg-green-400/10 border-green-400/30'
    default: return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmado': return 'bg-green-400/20 text-green-400 border-green-400/30'
    case 'en-curso': return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30 animate-pulse'
    case 'proximamente': return 'bg-blue-400/20 text-blue-400 border-blue-400/30'
    default: return 'bg-slate-400/20 text-slate-400 border-slate-400/30'
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function Calendar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [filterType, setFilterType] = useState<string>('all')

  const filteredEvents = filterType === 'all' 
    ? events 
    : events.filter(event => event.type === filterType)

  const types = ['all', 'teatro', 'cine', 'tv']

  return (
    <>
      <section id="calendar" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
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
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <CalendarDays className="w-4 h-4 text-yellow-400" strokeWidth={2} />
                <span className="text-sm font-medium text-slate-300 tracking-wide">Agenda Profesional</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white"
              >
                Próximos Eventos
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-20 h-0.5 bg-yellow-400 mx-auto mb-6"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
              >
                Calendario de actuaciones, estrenos y eventos confirmados 2025-2026
              </motion.p>
            </div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {types.map((type) => {
                const Icon = type === 'all' ? CalendarDays : getTypeIcon(type)
                return (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium text-sm transition-all ${
                      filterType === type
                        ? 'bg-yellow-400 text-black scale-105'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {type === 'all' ? 'Todos' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                )
              })}
            </motion.div>

            {/* Events Timeline */}
            <div className="max-w-5xl mx-auto space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredEvents.map((event, index) => {
                  const TypeIcon = getTypeIcon(event.type)
                  return (
                    <motion.div
                      key={event.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ x: 4 }}
                      onClick={() => setSelectedEvent(event)}
                      className="group cursor-pointer"
                    >
                      <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/[0.04] hover:border-yellow-400/30 transition-all">
                        <div className="flex flex-col lg:flex-row items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center border ${getTypeColor(event.type)}`}>
                              <TypeIcon className="w-8 h-8" />
                            </div>
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <h3 className="text-xl lg:text-2xl font-bold text-white">{event.title}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(event.status)}`}>
                                {event.status === 'en-curso' ? 'EN CARTEL' : event.status === 'confirmado' ? 'CONFIRMADO' : 'PRÓXIMAMENTE'}
                              </span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(event.type)}`}>
                                {event.type.toUpperCase()}
                              </span>
                            </div>
                            
                            <p className="text-slate-400 mb-4 leading-relaxed">{event.description}</p>
                            
                            <div className="grid sm:grid-cols-2 gap-3 text-sm">
                              <div className="flex items-center gap-2 text-slate-500">
                                <CalendarDays className="w-4 h-4 text-yellow-400" />
                                <span>{formatDate(event.date)}{event.endDate && ` - ${formatDate(event.endDate)}`}</span>
                              </div>
                              {event.time && (
                                <div className="flex items-center gap-2 text-slate-500">
                                  <Clock className="w-4 h-4 text-yellow-400" />
                                  <span>{event.time}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-2 text-slate-500">
                                <MapPin className="w-4 h-4 text-yellow-400" />
                                <span>{event.venue} - {event.city}</span>
                              </div>
                              <div className="flex items-center gap-2 text-slate-500">
                                <TheaterIcon className="w-4 h-4 text-yellow-400" />
                                <span className="font-semibold text-white">{event.role}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
                              {event.ticketsUrl && (
                                <a
                                  href={event.ticketsUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-300 transition-all"
                                >
                                  <Ticket className="w-4 h-4" />
                                  Comprar Entradas
                                </a>
                              )}
                              <button
                                onClick={() => setSelectedEvent(event)}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
                              >
                                <Info className="w-4 h-4" />
                                Más Detalles
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all group"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="bg-white/[0.02] border-2 border-yellow-400/30 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  {(() => {
                    const TypeIcon = getTypeIcon(selectedEvent.type)
                    return (
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center border ${getTypeColor(selectedEvent.type)}`}>
                        <TypeIcon className="w-8 h-8" />
                      </div>
                    )
                  })()}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl font-bold text-white">{selectedEvent.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(selectedEvent.status)}`}>
                        {selectedEvent.status === 'en-curso' ? 'EN CARTEL' : selectedEvent.status === 'confirmado' ? 'CONFIRMADO' : 'PRÓXIMAMENTE'}
                      </span>
                    </div>
                    <p className="text-yellow-400 font-semibold">{selectedEvent.role}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <p className="text-slate-300 leading-relaxed">{selectedEvent.description}</p>
                  
                  {selectedEvent.details && (
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <p className="text-sm text-slate-400 leading-relaxed">{selectedEvent.details}</p>
                    </div>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CalendarDays className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-xs text-slate-500">Fecha</p>
                        <p className="text-sm text-white font-medium">
                          {formatDate(selectedEvent.date)}
                          {selectedEvent.endDate && (
                            <span className="text-slate-400"> - {formatDate(selectedEvent.endDate)}</span>
                          )}
                        </p>
                      </div>
                    </div>
                    {selectedEvent.time && (
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-yellow-400" />
                        <div>
                          <p className="text-xs text-slate-500">Horario</p>
                          <p className="text-sm text-white font-medium">{selectedEvent.time}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-xs text-slate-500">Lugar</p>
                        <p className="text-sm text-white font-medium">{selectedEvent.venue}</p>
                        <p className="text-xs text-slate-400">{selectedEvent.city}</p>
                        {selectedEvent.address && (
                          <p className="text-xs text-slate-500 mt-1">{selectedEvent.address}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                  {selectedEvent.ticketsUrl && (
                    <a
                      href={selectedEvent.ticketsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-all"
                    >
                      <Ticket className="w-5 h-5" />
                      Comprar Entradas
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {selectedEvent.moreInfoUrl && (
                    <a
                      href={selectedEvent.moreInfoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all"
                    >
                      Más Información
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
