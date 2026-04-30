'use client'

import { useInView } from '@/hooks/useInView'
import { Play, Calendar, Film, X, Newspaper, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import Image from '@/components/ui/SafeImage'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'

interface ShowreelVideo {
  id: string
  year: string
  title: string
  description: string
  duration: string
  youtubeId: string
}

interface ClipVideo {
  title: string
  description: string
  project: string
  year: string
  duration: string
  youtubeId: string
}

interface PressInterview {
  title: string
  publication: string
  date: string
  excerpt: string
  url: string
}

const showreels: ShowreelVideo[] = [
  {
    id: '2026',
    year: '2026',
    title: 'Showreel Profesional 2026',
    description:
      'Nueva pieza de showreel profesional con material actualizado para casting, producción audiovisual y nuevos proyectos.',
    duration: 'Nuevo',
    youtubeId: 'Zxdbq6W4Go8',
  },
  {
    id: '2024',
    year: '2024',
    title: 'Showreel Profesional 2024',
    description:
      'Recopilación actualizada de mis mejores trabajos recientes en televisión y cine. Incluye escenas de La Moderna (TVE), Un fantasma en la batalla (Netflix) y otros proyectos destacados.',
    duration: '3:24',
    youtubeId: 'kS39Q8KXT1U',
  },
  {
    id: '2021',
    year: '2021',
    title: 'Showreel 2021',
    description:
      'Archivo de trabajos previos destacando interpretaciones en Vis a vis: El Oasis, La caza. Tramuntana y otros proyectos de televisión y cine.',
    duration: '2:45',
    youtubeId: 'x1ie5yWs5mQ',
  },
]

const clips: ClipVideo[] = [
  {
    title: 'La Caza: Guadiana',
    description: 'Actuación en la serie de TVE',
    project: 'La Caza (TVE)',
    year: '2024',
    duration: '2:11',
    youtubeId: 'AHUe0aYf9S8',
  },
  {
    title: 'La Moderna',
    description: 'Escenas destacadas de la serie',
    project: 'La Moderna (TVE)',
    year: '2024',
    duration: '4:02',
    youtubeId: 'ursuF5r4_Ms',
  },
  {
    title: 'Operación: Barrio Inglés',
    description: 'Participación en la serie de TVE',
    project: 'Operación: Barrio Inglés (TVE)',
    year: '2024',
    duration: '2:54',
    youtubeId: '1t0JcwYR-so',
  },
  {
    title: 'Honor',
    description: 'Escenas de la serie',
    project: 'Honor (Serie)',
    year: '2024',
    duration: '4:29',
    youtubeId: 'grtiShqUAkg',
  },
  {
    title: 'Desconocidas',
    description: 'Actuación en la serie',
    project: 'Desconocidas (Serie)',
    year: '2022',
    duration: '3:19',
    youtubeId: 'Xel0dzOmHLA',
  },
  {
    title: 'Vis a Vis: El Oasis',
    description: 'Diego Ramala - Escenas destacadas',
    project: 'Vis a Vis: El Oasis',
    year: '2021',
    duration: '2:30',
    youtubeId: 't4LYYroY5bo',
  },
  {
    title: 'Estoy Vivo T4',
    description: 'Mikel Uribe - Clip extendido',
    project: 'Estoy Vivo (TVE)',
    year: '2021',
    duration: '13:25',
    youtubeId: 'kw3SvwH4khQ',
  },
  {
    title: 'Hernán Cortés',
    description: 'Gonzalo de Sandoval - Escenas',
    project: 'Hernán Cortés',
    year: '2020',
    duration: '3:33',
    youtubeId: '2P7Ha4u3qBA',
  },
  {
    title: 'Centro Médico',
    description: 'Raúl Cuevas - Escena completa',
    project: 'Centro Médico (TVE)',
    year: '2017',
    duration: '7:55',
    youtubeId: '6YOHYHYj8Qk',
  },
  {
    title: 'Actuación Destacada',
    description: 'Escena de trabajo',
    project: 'Producción Audiovisual',
    year: '2020',
    duration: '3:15',
    youtubeId: 'xitfEzmseG4',
  },
]

const pressInterviews: PressInterview[] = [
  {
    title: '"Al principio tenía una voz en la cabeza que me decía que era muy mal actor"',
    publication: 'La Vanguardia',
    date: '17 de octubre, 2025',
    excerpt:
      'El actor sevillano habla sobre el síndrome del impostor, su papel en Un fantasma en la batalla y cómo las señoras mayores le hablan como a su personaje de La Moderna.',
    url: 'https://www.lavanguardia.com/gente/20251017/11166920/almagro-san-miguel-principio-tenia-voz-cabeza-me-decia-mal-actor-me-fustiga',
  },
  {
    title: 'Entrevista a Almagro San Miguel, el galán de La Moderna',
    publication: 'RTVE',
    date: '2 de diciembre, 2023',
    excerpt:
      '"Me trabajé mucho las audiciones porque la oportunidad así lo requería". Se siente muy agradecido con Boomerang y RTVE por la confianza depositada.',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    title: 'De La Moderna a la película sobre ETA producida por Bayona',
    publication: 'Diario de Sevilla',
    date: '17 de octubre, 2024',
    excerpt:
      'Almagro San Miguel habla sobre Un fantasma en la batalla. "Es un privilegio trabajar con Agustín Díaz Yanes. Crea un ambiente muy tranquilo, se percibe su experiencia".',
    url: 'https://www.diariodesevilla.es/television/almagro-san-miguel-moderna-pelicula_0_2004995240.html',
  },
  {
    title: '"Cuando llegué a La Moderna pensé: dónde me he metido, voy a morir"',
    publication: 'La Razón',
    date: '26 de noviembre, 2023',
    excerpt:
      'El actor sevillano explica cómo tuvo que cambiar su ritmo de vida para adaptarse a una serie diaria. El equipo de arte ha reconstruido el Madrid de los años 30.',
    url: 'https://www.larazon.es/television/series/almagro-san-miguel-cuando-llegue-moderna-pense-donde-metido-voy-morir_202311266562edda5',
  },
  {
    title: 'La pasión por actuar y el respeto a los clásicos del cine',
    publication: 'El Plural TV',
    date: '22 de diciembre, 2024',
    excerpt:
      'Descubre sus inicios en actuaciones callejeras, la irrupción de influencers en la industria y la idealización de la figura del actor.',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
  },
  {
    title: 'Un té con Almagro San Miguel en el Salón de La Moderna',
    publication: 'RTVE Play',
    date: '15 de noviembre, 2023',
    excerpt:
      'El actor habla de su paso por La Moderna, del personaje de Íñigo, de las tramas que más nos preocupan y del futuro que le espera.',
    url: 'https://www.rtve.es/play/videos/salon-de-te-la-moderna/almagro-san-miguel/16137829/',
  },
]

export default function Showreel() {
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })
  const [activeVideo, setActiveVideo] = useState<string>('2026')
  const [modalVideo, setModalVideo] = useState<ClipVideo | null>(null)

  const currentShowreel =
    showreels.find((reel) => reel.id === activeVideo) || showreels[0]

  const openModal = (clip: ClipVideo) => {
    setModalVideo(clip)
  }

  const closeModal = () => {
    setModalVideo(null)
  }

  return (
    <>
      <section
        id="showreel"
        className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950 py-24"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/3 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[120px]" />
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
                <Film className="h-4 w-4 text-yellow-400" strokeWidth={2} />
                <span className="text-sm font-medium tracking-wide text-slate-300">
                  Medios & Declaraciones
                </span>
              </div>

              <h2
                className={`mb-6 text-4xl font-bold tracking-tight text-white transition-all delay-200 duration-[500ms] lg:text-5xl ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
              >
                Entrevistas en Video
              </h2>

              <div
                className={`mx-auto mb-6 h-0.5 w-20 bg-yellow-400 transition-all delay-300 duration-[800ms] ${isInView ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
              />

              <p
                className={`mx-auto max-w-3xl text-lg leading-relaxed text-slate-400 transition-all delay-[400ms] duration-[500ms] ${isInView ? 'opacity-100' : 'opacity-0'}`}
              >
                Selección de mis mejores interpretaciones en televisión, cine y teatro
              </p>
            </div>

            {/* Year Selector */}
            <div
              className={`mb-12 flex justify-center gap-3 transition-all delay-500 duration-[500ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-2.5 opacity-0'}`}
            >
              {showreels.map((reel) => (
                <button
                  key={reel.id}
                  onClick={() => setActiveVideo(reel.id)}
                  className={`rounded-xl px-8 py-3 text-sm font-medium transition-all duration-300 ${
                    activeVideo === reel.id
                      ? 'scale-105 bg-yellow-400 text-black shadow-lg shadow-yellow-400/25'
                      : 'hover:scale-102 border border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white'
                  }`}
                >
                  Showreel {reel.year}
                </button>
              ))}
            </div>

            {/* Featured Video Player */}
            <div className="mx-auto mb-24 max-w-5xl">
              <div className="relative">
                <div className="absolute -inset-[2px] rounded-2xl bg-yellow-400/20 opacity-50 blur-xl" />

                <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-2 shadow-2xl backdrop-blur-sm">
                  <YouTubeEmbed
                    videoId={currentShowreel.youtubeId}
                    title={currentShowreel.title}
                    className="rounded-xl"
                  />

                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <h3 className="text-2xl font-bold text-white">
                            {currentShowreel.title}
                          </h3>
                          <span className="rounded-full border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-xs font-semibold text-yellow-300">
                            {currentShowreel.year}
                          </span>
                        </div>
                        <p className="leading-relaxed text-slate-400">
                          {currentShowreel.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="h-4 w-4" strokeWidth={1.5} />
                        <span>Año {currentShowreel.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Play className="h-4 w-4" strokeWidth={1.5} />
                        <span>{currentShowreel.duration} min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clips Section */}
            <div className="mx-auto mb-32 max-w-7xl">
              <div className="mb-16 text-center">
                <h3 className="mb-4 text-3xl font-bold text-white">
                  Clips de Actuaciones
                </h3>
                <div className="mx-auto mb-4 h-0.5 w-20 bg-yellow-400" />
                <p className="text-slate-400">
                  Escenas destacadas de mis principales trabajos en televisión y cine
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {clips.map((clip, index) => (
                  <div
                    key={clip.youtubeId}
                    className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]"
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onClick={() => openModal(clip)}
                  >
                    <div className="relative">
                      <div className="absolute -inset-[2px] rounded-2xl bg-yellow-400/30 opacity-0 blur-xl transition-opacity duration-[400ms] group-hover:opacity-100" />

                      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/30">
                        <div className="relative aspect-video overflow-hidden bg-black">
                          <Image
                            src={`https://img.youtube.com/vi/${clip.youtubeId}/mqdefault.jpg`}
                            alt={clip.title}
                            width={320}
                            height={180}
                            loading="lazy"
                            className="h-full w-full object-cover opacity-75 transition-all duration-500 group-hover:scale-[1.08] group-hover:opacity-100"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-50" />

                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-all duration-300 group-hover:scale-[1.2] group-hover:shadow-yellow-400/60">
                              <Play className="ml-1 h-7 w-7 fill-black text-black" />
                            </div>
                          </div>

                          <div className="absolute bottom-3 right-3 rounded-lg border border-white/10 bg-black/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md transition-all duration-200 group-hover:scale-105">
                            {clip.duration}
                          </div>
                        </div>

                        <div className="bg-gradient-to-b from-black/50 to-black/80 p-5">
                          <h4 className="mb-2 line-clamp-2 text-base font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-yellow-400">
                            {clip.title}
                          </h4>
                          <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-slate-300">
                            {clip.description}
                          </p>
                          <div className="flex items-center justify-between border-t border-white/10 pt-3">
                            <span className="text-xs font-medium text-slate-500">
                              {clip.project}
                            </span>
                            <span className="text-xs font-medium text-slate-600">
                              {clip.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Press Interviews Section */}
            <div className="mx-auto mb-32 max-w-7xl">
              <div className="mb-16 text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                  <Newspaper className="h-4 w-4 text-yellow-400" strokeWidth={2} />
                  <span className="text-sm font-medium tracking-wide text-slate-300">
                    Cobertura Mediática
                  </span>
                </div>

                <h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                  Entrevistas en Prensa
                </h3>
                <div className="mx-auto mb-4 h-0.5 w-20 bg-yellow-400" />
                <p className="text-slate-400">
                  Conversaciones en profundidad con medios nacionales e internacionales
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {pressInterviews.map((interview, index) => (
                  <a
                    key={interview.url}
                    href={interview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Leer entrevista en ${interview.publication}: ${interview.title} (se abre en nueva ventana)`}
                    className="group relative transition-all duration-[500ms] hover:-translate-y-1"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-[2px] rounded-2xl bg-yellow-400/30 opacity-0 blur-xl transition-opacity duration-[400ms] group-hover:opacity-100" />

                      <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-yellow-400/30">
                        <div className="mb-4 flex items-start gap-4">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400/10">
                            <Newspaper
                              className="h-5 w-5 text-yellow-400"
                              strokeWidth={2}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="mb-2 line-clamp-2 text-base font-semibold text-white transition-colors group-hover:text-yellow-400">
                              {interview.title}
                            </h4>
                            <div className="mb-3 flex items-center gap-2 text-xs text-slate-500">
                              <span className="font-medium">{interview.publication}</span>
                              <span>|</span>
                              <span>{interview.date}</span>
                            </div>
                          </div>
                        </div>

                        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-400">
                          {interview.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-sm font-medium text-yellow-400 transition-all group-hover:gap-3">
                          <span>Leer entrevista</span>
                          <ExternalLink className="h-4 w-4" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-all duration-300 ${modalVideo ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeModal}
      >
        <div
          className={`relative w-full max-w-6xl transition-all duration-300 ${modalVideo ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            aria-label="Cerrar reproductor de video"
            className="group absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all hover:border-white/30 hover:bg-white/20"
          >
            <X className="h-6 w-6 text-white transition-transform duration-300 group-hover:rotate-90" />
          </button>

          {modalVideo && (
            <div className="relative rounded-2xl border-2 border-yellow-400/30 bg-white/[0.02] p-2 shadow-2xl backdrop-blur-sm">
              <YouTubeEmbed
                videoId={modalVideo.youtubeId}
                title={modalVideo.title}
                autoplay
                className="rounded-xl"
              />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl font-semibold text-white">
                      {modalVideo.title}
                    </h3>
                    <p className="mb-3 text-slate-400">{modalVideo.description}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <span>{modalVideo.project}</span>
                      <span>|</span>
                      <span>{modalVideo.year}</span>
                      <span>|</span>
                      <span>{modalVideo.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
