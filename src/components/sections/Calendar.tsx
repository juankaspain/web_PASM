'use client'

import { useInView } from '@/hooks/useInView'
import {
  CalendarDays,
  MapPin,
  Clock,
  ExternalLink,
  Ticket,
  Film,
  Tv,
  Theater as TheaterIcon,
  X,
  Info,
} from 'lucide-react'
import { useState } from 'react'

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
    description:
      'Continuación de la aclamada "Donde mueren las palabras". Comedia sobre el reencuentro de amigos de la infancia obligados a confinarse juntos durante la pandemia.',
    role: 'Protagonista',
    ticketsUrl:
      'https://www.elcorteingles.es/entradas/teatro/entradas-donde-nacen-las-palabras-madrid/',
    address: 'Corredera Baja de San Pablo, 15, 28004 Madrid',
    details:
      'Autor y dirección: Ángel Caballero. Con David Matarín, Iván Montes, Alejandro Vergara y Ángel Caballero. Duración: 1h 35min. DMLP Producciones.',
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
    description:
      'Estreno en Málaga dentro del 42 Festival de Teatro. La obra que continúa el éxito de "Donde mueren las palabras" (finalista Premio Nacional Literatura Dramática 2020).',
    role: 'Protagonista',
    ticketsUrl: 'https://www.teatrocervantes.com/donde-nacen-las-palabras',
    address: 'Calle Ramos Marín, s/n, 29012 Málaga',
    details:
      '42 Festival de Teatro de Málaga. Precio: 24€ (único). Estreno mundial en Málaga antes de la gira nacional.',
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
    description:
      'Temporada extendida en Madrid tras el éxito en Teatro Lara. Continuación de la gira nacional 2026.',
    role: 'Protagonista',
    address: 'Gran Vía, 32, 28013 Madrid',
    details:
      'Temporada primavera 2026. Funciones de jueves a domingo. Gira nacional visitando las principales ciudades españolas.',
  },
  {
    id: '4',
    title: 'Carta Blanca',
    type: 'cine',
    date: '2026-09-04',
    venue: 'Cines de toda España',
    city: 'Nacional',
    status: 'confirmado',
    description:
      'Película dirigida por Gerardo Herrero. Reparto: Iván Pellicer, Víctor Clavijo, Salva Reina, Joel Bosqued, Roberto Espinosa y Almagro San Miguel.',
    role: 'Papel Secundario',
    moreInfoUrl: 'https://en.wikipedia.org/wiki/List_of_Spanish_films_of_2026',
    details:
      'Director: Gerardo Herrero. Producción española 2026. Estreno en salas de cine el 4 de septiembre de 2026. Distribución nacional.',
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
    description:
      'Temporada final de la aclamada serie diaria. Íñigo Peñalver cierra su historia tras más de 350 episodios como protagonista.',
    role: 'Íñigo Peñalver (Protagonista)',
    moreInfoUrl: 'https://www.rtve.es/play/videos/salon-de-te-la-moderna/',
    details:
      'Serie nominada a Emmy Internacionales 2024 y ganadora Premio FICAL. Emisión de lunes a viernes en prime time. Disponible en RTVE Play.',
  },
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'teatro':
      return TheaterIcon
    case 'cine':
      return Film
    case 'tv':
      return Tv
    default:
      return CalendarDays
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'teatro':
      return 'text-purple-400 bg-purple-400/10 border-purple-400/30'
    case 'cine':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/30'
    case 'tv':
      return 'text-green-400 bg-green-400/10 border-green-400/30'
    default:
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'confirmado':
      return 'bg-green-400/20 text-green-400 border-green-400/30'
    case 'en-curso':
      return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30 animate-pulse'
    case 'proximamente':
      return 'bg-blue-400/20 text-blue-400 border-blue-400/30'
    default:
      return 'bg-slate-400/20 text-slate-400 border-slate-400/30'
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Calendar() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [filterType, setFilterType] = useState<string>('all')

  const filteredEvents =
    filterType === 'all' ? events : events.filter((event) => event.type === filterType)

  const types = ['all', 'teatro', 'cine', 'tv']

  return (
    <>
      <section
        id="calendar"
        className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950 py-24"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[120px]" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            ref={ref}
            className={`transition-all duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          >
            {/* Header */}
            <div className="mb-16 text-center">
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm transition-all delay-100 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
              >
                <CalendarDays className="h-4 w-4 text-yellow-400" strokeWidth={2} />
                <span className="text-sm font-medium tracking-wide text-slate-300">
                  Agenda Profesional
                </span>
              </div>

              <h2
                className={`mb-6 text-4xl font-bold tracking-tight text-white lg:text-5xl transition-all delay-200 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
              >
                Próximos Eventos
              </h2>

              <div
                className={`mx-auto mb-6 h-0.5 w-20 bg-yellow-400 transition-all delay-300 duration-[800ms] ${isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
              />

              <p
                className={`mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 transition-all delay-[400ms] duration-[500ms] ${isInView ? 'opacity-100' : 'opacity-0'}`}
              >
                Calendario de actuaciones, estrenos y eventos confirmados 2025-2026
              </p>
            </div>

            {/* Filters */}
            <div
              className={`mb-12 flex flex-wrap justify-center gap-3 transition-all delay-500 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              {types.map((type) => {
                const Icon = type === 'all' ? CalendarDays : getTypeIcon(type)
                return (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`flex items-center gap-2 rounded-xl px-6 py-2 text-sm font-medium transition-all ${
                      filterType === type
                        ? 'scale-105 bg-yellow-400 text-black'
                        : 'border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {type === 'all'
                      ? 'Todos'
                      : type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                )
              })}
            </div>

            {/* Events Timeline */}
            <div className="mx-auto max-w-5xl space-y-6">
              {filteredEvents.map((event, index) => {
                const TypeIcon = getTypeIcon(event.type)
                return (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className={`group hover-right cursor-pointer transition-all duration-[400ms] ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-yellow-400/30 hover:bg-white/[0.04] lg:p-8">
                      <div className="flex flex-col items-start gap-6 lg:flex-row">
                        <div className="flex-shrink-0">
                          <div
                            className={`flex h-16 w-16 items-center justify-center rounded-xl border ${getTypeColor(event.type)}`}
                          >
                            <TypeIcon className="h-8 w-8" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="mb-3 flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-bold text-white lg:text-2xl">
                              {event.title}
                            </h3>
                            <span
                              className={`rounded-full border px-3 py-1 text-xs font-bold ${getStatusColor(event.status)}`}
                            >
                              {event.status === 'en-curso'
                                ? 'EN CARTEL'
                                : event.status === 'confirmado'
                                  ? 'CONFIRMADO'
                                  : 'PRÓXIMAMENTE'}
                            </span>
                            <span
                              className={`rounded-full border px-3 py-1 text-xs font-semibold ${getTypeColor(event.type)}`}
                            >
                              {event.type.toUpperCase()}
                            </span>
                          </div>

                          <p className="mb-4 leading-relaxed text-slate-400">
                            {event.description}
                          </p>

                          <div className="grid gap-3 text-sm sm:grid-cols-2">
                            <div className="flex items-center gap-2 text-slate-500">
                              <CalendarDays className="h-4 w-4 text-yellow-400" />
                              <span>
                                {formatDate(event.date)}
                                {event.endDate && ` - ${formatDate(event.endDate)}`}
                              </span>
                            </div>
                            {event.time && (
                              <div className="flex items-center gap-2 text-slate-500">
                                <Clock className="h-4 w-4 text-yellow-400" />
                                <span>{event.time}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-slate-500">
                              <MapPin className="h-4 w-4 text-yellow-400" />
                              <span>
                                {event.venue} - {event.city}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-500">
                              <TheaterIcon className="h-4 w-4 text-yellow-400" />
                              <span className="font-semibold text-white">
                                {event.role}
                              </span>
                            </div>
                          </div>

                          <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                            {event.ticketsUrl && (
                              <a
                                href={event.ticketsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`Comprar Entradas para ${event.title} (se abre en nueva ventana)`}
                                className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-yellow-300"
                              >
                                <Ticket className="h-4 w-4" />
                                Comprar Entradas
                              </a>
                            )}
                            <button
                              onClick={() => setSelectedEvent(event)}
                              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10"
                            >
                              <Info className="h-4 w-4" />
                              Más Detalles
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-all duration-300 ${selectedEvent ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setSelectedEvent(null)}
      >
        <div
          className={`relative w-full max-w-3xl transition-all duration-300 ${selectedEvent ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {selectedEvent && (
            <>
              <button
                onClick={() => setSelectedEvent(null)}
                aria-label="Cerrar detalles del evento"
                className="group absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all hover:border-white/30 hover:bg-white/20"
              >
                <X className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-90" />
              </button>

              <div className="rounded-2xl border-2 border-yellow-400/30 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-sm">
                <div className="mb-6 flex items-start gap-4">
                  {(() => {
                    const TypeIcon = getTypeIcon(selectedEvent.type)
                    return (
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-xl border ${getTypeColor(selectedEvent.type)}`}
                      >
                        <TypeIcon className="h-8 w-8" />
                      </div>
                    )
                  })()}
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h2 className="text-3xl font-bold text-white">
                        {selectedEvent.title}
                      </h2>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-bold ${getStatusColor(selectedEvent.status)}`}
                      >
                        {selectedEvent.status === 'en-curso'
                          ? 'EN CARTEL'
                          : selectedEvent.status === 'confirmado'
                            ? 'CONFIRMADO'
                            : 'PRÓXIMAMENTE'}
                      </span>
                    </div>
                    <p className="font-semibold text-yellow-400">{selectedEvent.role}</p>
                  </div>
                </div>

                <div className="mb-6 space-y-4">
                  <p className="leading-relaxed text-slate-300">
                    {selectedEvent.description}
                  </p>

                  {selectedEvent.details && (
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <p className="text-sm leading-relaxed text-slate-400">
                        {selectedEvent.details}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mb-6 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CalendarDays className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="text-xs text-slate-500">Fecha</p>
                        <p className="text-sm font-medium text-white">
                          {formatDate(selectedEvent.date)}
                          {selectedEvent.endDate && (
                            <span className="text-slate-400">
                              {' '}
                              - {formatDate(selectedEvent.endDate)}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    {selectedEvent.time && (
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-yellow-400" />
                        <div>
                          <p className="text-xs text-slate-500">Horario</p>
                          <p className="text-sm font-medium text-white">
                            {selectedEvent.time}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-yellow-400" />
                      <div>
                        <p className="text-xs text-slate-500">Lugar</p>
                        <p className="text-sm font-medium text-white">
                          {selectedEvent.venue}
                        </p>
                        <p className="text-xs text-slate-300">{selectedEvent.city}</p>
                        {selectedEvent.address && (
                          <p className="mt-1 text-xs text-slate-500">
                            {selectedEvent.address}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  {selectedEvent.ticketsUrl && (
                    <a
                      href={selectedEvent.ticketsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Comprar Entradas para ${selectedEvent.title} (se abre en nueva ventana)`}
                      className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition-all hover:bg-yellow-300"
                    >
                      <Ticket className="h-5 w-5" />
                      Comprar Entradas
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {selectedEvent.moreInfoUrl && (
                    <a
                      href={selectedEvent.moreInfoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Más Información sobre ${selectedEvent.title} (se abre en nueva ventana)`}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition-all hover:bg-white/20"
                    >
                      Más Información
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
