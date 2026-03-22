'use client'

import { useInView } from '@/hooks/useInView'
import { Newspaper, Quote, Play, Tv, X } from 'lucide-react'
import { useState } from 'react'

interface Interview {
  title: string
  media: string
  production: string
  year: string
  duration: string
  youtubeId: string
  description: string
}

interface PressQuote {
  quote: string
  source: string
  production: string
  year: string
  category: string
}

const interviews: Interview[] = [
  {
    title: 'La pasión por actuar y su paso por La Moderna',
    media: 'El Plural TV',
    production: 'La Moderna',
    year: '2024',
    duration: '14:09',
    youtubeId: 'ts2qSZpSO_I',
    description:
      'Entrevista en profundidad sobre su trayectoria, desde actuaciones callejeras hasta La Moderna y Operación Barrio Inglés.',
  },
  {
    title: 'Un fantasma en la batalla - Netflix',
    media: 'Presentación Oficial',
    production: 'Un fantasma en la batalla',
    year: '2025',
    duration: '8:32',
    youtubeId: 'cZSW_6X-Lzk',
    description:
      'Presenta su papel de Antonio, novio de una joven guardia civil infiltrada en ETA.',
  },
  {
    title: 'Operación Barrio Inglés - Making Of',
    media: 'TVE Behind The Scenes',
    production: 'Operación Barrio Inglés',
    year: '2024',
    duration: '4:02',
    youtubeId: 'mll_3Sj8kjg',
    description:
      'Habla sobre la serie de espías ambientada en los años 40 y su doble trabajo en TVE.',
  },
  {
    title: 'Vis a Vis: El Oasis y Hernán',
    media: 'La Caja de Música TV',
    production: 'Vis a Vis: El Oasis',
    year: '2020',
    duration: '15:42',
    youtubeId: 'C211y0omwZ8',
    description:
      'Primer papel protagonista como Diego Ramala y su experiencia en la producción histórica de Prime Video.',
  },
  {
    title: 'Entrevista Almagro San Miguel',
    media: 'Canal Profesional',
    production: 'Trayectoria Completa',
    year: '2024',
    duration: '25:30',
    youtubeId: 'RfJU1SQJvMc',
    description:
      'Repaso completo de su carrera desde el teatro hasta las grandes producciones de televisión.',
  },
  {
    title: 'Lunes Seriéfilos - Especial',
    media: 'Lunes Seriéfilos',
    production: 'La Moderna',
    year: '2024',
    duration: '53:48',
    youtubeId: 'Fh9WHJpDtV0',
    description:
      'Entrevista extensa donde profundiza en su papel de Íñigo Peñalver y la dinámica de rodaje.',
  },
]

const pressQuotes: PressQuote[] = [
  // La Moderna - Televisión
  {
    quote:
      'Cada proyecto, personaje, es otra historia, otro mundo, otros conflictos. La posibilidad de aprender de la historia de mi país me llena mucho.',
    source: 'RTVE - Entrevista oficial',
    production: 'La Moderna',
    year: '2023',
    category: 'Televisión',
  },
  {
    quote:
      'Me trabajé mucho las audiciones porque la oportunidad así lo requería. Estoy tremendamente agradecido con Boomerang y RTVE por la confianza depositada.',
    source: 'RTVE - Sobre su casting',
    production: 'La Moderna',
    year: '2023',
    category: 'Televisión',
  },
  {
    quote:
      'Cada vez que me vienen nuevos guiones me sorprendo, me encanta que sea así. No te puedes quedar tranquilo pensando que todo está bien o mal, porque en un segundo cambia.',
    source: 'RTVE - Sobre las tramas',
    production: 'La Moderna',
    year: '2023',
    category: 'Televisión',
  },
  // Vis a vis - Televisión
  {
    quote:
      'Diego es un guitarrista que trabaja con un narcotraficante mexicano. Fue fascinante explorar ese mundo oscuro y trabajar con el increíble elenco femenino de Vis a vis.',
    source: 'Rumbera Sevilla FM',
    production: 'Vis a Vis: El Oasis',
    year: '2020',
    category: 'Televisión',
  },
  {
    quote:
      'Mi primer papel protagonista fue un reto enorme. Diego Ramala es un personaje complejo, con muchas capas. Me permitió demostrar mi rango como actor.',
    source: 'FOX España',
    production: 'Vis a Vis: El Oasis',
    year: '2020',
    category: 'Televisión',
  },
  // Hernán - Serie (Prime Video)
  {
    quote:
      'Venía de estar poniendo copas en discotecas. Hernán fue maravilloso, un proyecto que me cambió la vida profesionalmente. Trabajar en una producción histórica de Amazon fue un sueño.',
    source: 'La Caja de Música TV',
    production: 'Hernán Cortés',
    year: '2020',
    category: 'Series',
  },
  // Un fantasma en la batalla - Cine
  {
    quote:
      'Interpretar a Antonio en esta historia basada en hechos reales sobre ETA fue un honor y una responsabilidad. Es una historia que necesitaba ser contada.',
    source: 'Netflix España',
    production: 'Un fantasma en la batalla',
    year: '2025',
    category: 'Cine',
  },
  // Teatro - CNTC
  {
    quote:
      'La Compañía Nacional de Teatro Clásico fue mi escuela más importante. Aprender verso clásico con Helena Pimenta marcó mi carrera para siempre.',
    source: 'Gatropolis - Entrevista',
    production: 'Fuente Ovejuna (CNTC)',
    year: '2015',
    category: 'Teatro',
  },
]

export default function Press() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })
  const [modalVideo, setModalVideo] = useState<Interview | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredQuotes =
    selectedCategory === 'all'
      ? pressQuotes
      : pressQuotes.filter((q) => q.category === selectedCategory)

  const categories = ['all', 'Televisión', 'Series', 'Cine', 'Teatro']

  const openModal = (interview: Interview) => {
    setModalVideo(interview)
  }

  const closeModal = () => {
    setModalVideo(null)
  }

  return (
    <>
      <section
        id="press"
        className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900 py-24"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[120px]" />
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
            className={`transition-all duration-[600ms] ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            {/* Header ESTANDARIZADO */}
            <div className="mb-16 text-center">
              <div
                className={`mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm transition-all duration-500 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              >
                <Newspaper className="h-4 w-4 text-yellow-400" strokeWidth={2} />
                <span className="text-sm font-medium tracking-wide text-slate-300">
                  Medios & Declaraciones
                </span>
              </div>

              <h2
                className={`mb-6 text-4xl font-bold tracking-tight text-white lg:text-5xl transition-all duration-500 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              >
                Prensa & Entrevistas
              </h2>

              <div
                className={`mx-auto mb-6 h-0.5 w-20 bg-yellow-400 transition-all duration-[800ms] delay-300 ${isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
              />

              <p
                className={`mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 transition-all duration-500 delay-[400ms] ${isInView ? 'opacity-100' : 'opacity-0'}`}
              >
                Cobertura profesional y declaraciones sobre sus principales producciones
              </p>
            </div>

            {/* Interviews Section */}
            <div
              className={`mb-20 transition-all duration-[600ms] delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <h3 className="mb-10 flex items-center justify-center gap-2 text-center text-2xl font-bold text-white">
                <Tv className="h-6 w-6 text-yellow-400" />
                Entrevistas en Video
              </h3>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {interviews.map((interview, index) => (
                  <div
                    key={interview.youtubeId}
                    className={`group relative cursor-pointer transition-all duration-[600ms] hover:-translate-y-2 hover:scale-[1.03] ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                    onClick={() => openModal(interview)}
                  >
                    <div className="relative">
                      <div className="absolute -inset-[2px] rounded-2xl bg-yellow-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/30">
                        <div className="relative aspect-video overflow-hidden bg-black">
                          <img
                            src={`https://img.youtube.com/vi/${interview.youtubeId}/mqdefault.jpg`}
                            alt={interview.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform duration-300 group-hover:scale-110">
                              <Play className="ml-1 h-7 w-7 fill-black text-black" />
                            </div>
                          </div>

                          <div className="absolute bottom-3 right-3 rounded-lg border border-white/10 bg-black/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                            {interview.duration}
                          </div>
                        </div>

                        <div className="bg-gradient-to-b from-black/50 to-black/80 p-5">
                          <h4 className="mb-2 line-clamp-2 text-base font-semibold text-white">
                            {interview.title}
                          </h4>
                          <p className="mb-3 line-clamp-2 text-xs text-slate-300">
                            {interview.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between border-t border-white/10 pt-3">
                              <span className="text-xs font-medium text-slate-500">
                                {interview.media}
                              </span>
                              <span className="text-xs font-medium text-slate-600">
                                {interview.year}
                              </span>
                            </div>
                            <div className="text-xs font-medium text-yellow-400">
                              {interview.production}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quotes Section */}
            <div
              className={`transition-all duration-[600ms] delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <div className="mb-10">
                <h3 className="mb-6 flex items-center justify-center gap-2 text-center text-2xl font-bold text-white">
                  <Quote className="h-6 w-6 text-yellow-400" />
                  Declaraciones Profesionales
                </h3>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                        selectedCategory === cat
                          ? 'bg-yellow-400 text-black'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      {cat === 'all' ? 'Todas' : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
                {filteredQuotes.map((quote, index) => (
                  <div
                    key={`${quote.production}-${index}`}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-yellow-400/30 hover:bg-white/[0.04]"
                  >
                    <Quote className="mb-3 h-6 w-6 text-yellow-400/40" />
                    <p className="mb-4 text-sm italic leading-relaxed text-slate-300">
                      &ldquo;{quote.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between gap-3 text-xs">
                      <div>
                        <p className="mb-1 text-slate-500">{quote.source}</p>
                        <p className="font-medium text-yellow-400">
                          {quote.production}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-600">{quote.year}</p>
                        <span className="mt-1 inline-block rounded bg-white/5 px-2 py-1 text-[10px] text-slate-300">
                          {quote.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="group absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all hover:border-white/30 hover:bg-white/20"
            >
              <X className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-90" />
            </button>

            <div className="relative rounded-2xl border-2 border-yellow-400/30 bg-white/[0.02] p-2 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={modalVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  {modalVideo.title}
                </h3>
                <p className="mb-3 text-slate-400">{modalVideo.description}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span>{modalVideo.media}</span>
                  <span>•</span>
                  <span className="text-yellow-400">{modalVideo.production}</span>
                  <span>•</span>
                  <span>{modalVideo.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
