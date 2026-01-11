'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Play, Calendar, Film, X, Newspaper, ExternalLink } from 'lucide-react'
import { useRef, useState } from 'react'

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
    id: '2024',
    year: '2024',
    title: 'Showreel Profesional 2024',
    description: 'Recopilación actualizada de mis mejores trabajos recientes en televisión y cine. Incluye escenas de La Moderna (TVE), Un fantasma en la batalla (Netflix) y otros proyectos destacados.',
    duration: '3:24',
    youtubeId: 'kS39Q8KXT1U',
  },
  {
    id: '2021',
    year: '2021',
    title: 'Showreel 2021',
    description: 'Archivo de trabajos previos destacando interpretaciones en Vis a vis: El Oasis, La caza. Tramuntana y otros proyectos de televisión y cine.',
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
    excerpt: 'El actor sevillano habla sobre el síndrome del impostor, su papel en Un fantasma en la batalla y cómo las señoras mayores le hablan como a su personaje de La Moderna.',
    url: 'https://www.lavanguardia.com/gente/20251017/11166920/almagro-san-miguel-principio-tenia-voz-cabeza-me-decia-mal-actor-me-fustiga',
  },
  {
    title: 'Entrevista a Almagro San Miguel, el galán de La Moderna',
    publication: 'RTVE',
    date: '2 de diciembre, 2023',
    excerpt: '"Me trabajé mucho las audiciones porque la oportunidad así lo requería". Se siente muy agradecido con Boomerang y RTVE por la confianza depositada.',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    title: 'De La Moderna a la película sobre ETA producida por Bayona',
    publication: 'Diario de Sevilla',
    date: '17 de octubre, 2024',
    excerpt: 'Almagro San Miguel habla sobre Un fantasma en la batalla. "Es un privilegio trabajar con Agustín Díaz Yanes. Crea un ambiente muy tranquilo, se percibe su experiencia".',
    url: 'https://www.diariodesevilla.es/television/almagro-san-miguel-moderna-pelicula_0_2004995240.html',
  },
  {
    title: '"Cuando llegué a La Moderna pensé: dónde me he metido, voy a morir"',
    publication: 'La Razón',
    date: '26 de noviembre, 2023',
    excerpt: 'El actor sevillano explica cómo tuvo que cambiar su ritmo de vida para adaptarse a una serie diaria. El equipo de arte ha reconstruido el Madrid de los años 30.',
    url: 'https://www.larazon.es/television/series/almagro-san-miguel-cuando-llegue-moderna-pense-donde-metido-voy-morir_202311266562edda5',
  },
  {
    title: 'La pasión por actuar y el respeto a los clásicos del cine',
    publication: 'El Plural TV',
    date: '22 de diciembre, 2024',
    excerpt: 'Descubre sus inicios en actuaciones callejeras, la irrupción de influencers en la industria y la idealización de la figura del actor.',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
  },
  {
    title: 'Un té con Almagro San Miguel en el Salón de La Moderna',
    publication: 'RTVE Play',
    date: '15 de noviembre, 2023',
    excerpt: 'El actor habla de su paso por La Moderna, del personaje de Íñigo, de las tramas que más nos preocupan y del futuro que le espera.',
    url: 'https://www.rtve.es/play/videos/salon-de-te-la-moderna/almagro-san-miguel/16137829/',
  },
]

export default function Showreel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeVideo, setActiveVideo] = useState<string>('2024')
  const [modalVideo, setModalVideo] = useState<ClipVideo | null>(null)

  const currentShowreel = showreels.find(reel => reel.id === activeVideo) || showreels[0]

  const openModal = (clip: ClipVideo) => {
    setModalVideo(clip)
  }

  const closeModal = () => {
    setModalVideo(null)
  }

  return (
    <>
      <section id="showreel" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
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
            {/* Header - Entrevistas en Video */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <Film className="w-4 h-4 text-yellow-400" strokeWidth={2} />
                <span className="text-sm font-medium text-slate-300 tracking-wide">Medios & Declaraciones</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white"
              >
                Entrevistas en Video
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
                Selección de mis mejores interpretaciones en televisión, cine y teatro
              </motion.p>
            </div>

            {/* Year Selector */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center gap-3 mb-12"
            >
              {showreels.map((reel) => (
                <button
                  key={reel.id}
                  onClick={() => setActiveVideo(reel.id)}
                  className={`px-8 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeVideo === reel.id
                      ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/25 scale-105'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:border-white/20 hover:text-white hover:scale-102'
                  }`}
                >
                  Showreel {reel.year}
                </button>
              ))}
            </motion.div>

            {/* Featured Video Player */}
            <motion.div
              key={activeVideo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto mb-24"
            >
              <div className="relative">
                <div className="absolute -inset-[2px] bg-yellow-400/20 rounded-2xl blur-xl opacity-50" />
                
                <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-2 backdrop-blur-sm shadow-2xl">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${currentShowreel.youtubeId}?rel=0&modestbranding=1`}
                      title={currentShowreel.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{currentShowreel.title}</h3>
                          <span className="px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-xs font-semibold">
                            {currentShowreel.year}
                          </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                          {currentShowreel.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4" strokeWidth={1.5} />
                        <span>Año {currentShowreel.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Play className="w-4 h-4" strokeWidth={1.5} />
                        <span>{currentShowreel.duration} min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Clips Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto mb-32"
            >
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-white mb-4">Clips de Actuaciones</h3>
                <div className="w-20 h-0.5 bg-yellow-400 mx-auto mb-4" />
                <p className="text-slate-400">Escenas destacadas de mis principales trabajos en televisión y cine</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {clips.map((clip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1 
                    }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.03,
                      transition: { 
                        duration: 0.3,
                        ease: [0.34, 1.56, 0.64, 1]
                      }
                    }}
                    className="group relative cursor-pointer"
                    onClick={() => openModal(clip)}
                  >
                    <div className="relative">
                      <motion.div 
                        className="absolute -inset-[2px] bg-yellow-400/30 rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                      
                      <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-500 backdrop-blur-xl shadow-2xl">
                        <div className="relative aspect-video overflow-hidden bg-black">
                          <motion.img
                            src={`https://img.youtube.com/vi/${clip.youtubeId}/mqdefault.jpg`}
                            alt={clip.title}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0.75, scale: 1 }}
                            whileHover={{ 
                              opacity: 1, 
                              scale: 1.08,
                              transition: { duration: 0.5, ease: "easeOut" }
                            }}
                          />
                          
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 0.5 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div 
                              className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl"
                              whileHover={{ 
                                scale: 1.2,
                                backgroundColor: "rgba(255, 255, 255, 1)",
                                boxShadow: "0 0 30px rgba(250, 204, 21, 0.6)"
                              }}
                              transition={{ 
                                type: "spring",
                                stiffness: 400,
                                damping: 15
                              }}
                            >
                              <Play className="w-7 h-7 ml-1 fill-black text-black" />
                            </motion.div>
                          </div>
                          
                          <motion.div 
                            className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs font-bold backdrop-blur-md border border-white/10"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.95)" }}
                            transition={{ duration: 0.2 }}
                          >
                            {clip.duration}
                          </motion.div>
                        </div>

                        <div className="p-5 bg-gradient-to-b from-black/50 to-black/80">
                          <motion.h4 
                            className="text-base font-semibold text-white mb-2 line-clamp-2 leading-tight"
                            whileHover={{ color: "rgb(250, 204, 21)" }}
                            transition={{ duration: 0.2 }}
                          >
                            {clip.title}
                          </motion.h4>
                          <p className="text-xs text-slate-400 mb-3 line-clamp-2 leading-relaxed">
                            {clip.description}
                          </p>
                          <div className="flex items-center justify-between pt-3 border-t border-white/10">
                            <span className="text-xs text-slate-500 font-medium">{clip.project}</span>
                            <span className="text-xs text-slate-600 font-medium">{clip.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* NUEVA SECCIÓN: Entrevistas en Prensa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto mb-32"
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <Newspaper className="w-4 h-4 text-yellow-400" strokeWidth={2} />
                  <span className="text-sm font-medium text-slate-300 tracking-wide">Cobertura Mediática</span>
                </motion.div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Entrevistas en Prensa</h3>
                <div className="w-20 h-0.5 bg-yellow-400 mx-auto mb-4" />
                <p className="text-slate-400">Conversaciones en profundidad con medios nacionales e internacionales</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {pressInterviews.map((interview, index) => (
                  <motion.a
                    key={index}
                    href={interview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group relative"
                  >
                    <div className="relative">
                      <motion.div 
                        className="absolute -inset-[2px] bg-yellow-400/30 rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-500">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center">
                            <Newspaper className="w-5 h-5 text-yellow-400" strokeWidth={2} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors line-clamp-2">
                              {interview.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                              <span className="font-medium">{interview.publication}</span>
                              <span>•</span>
                              <span>{interview.date}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-slate-400 mb-4 leading-relaxed line-clamp-3">
                          {interview.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm text-yellow-400 font-medium group-hover:gap-3 transition-all">
                          <span>Leer entrevista</span>
                          <ExternalLink className="w-4 h-4" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring", damping: 25 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all group"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="relative bg-white/[0.02] border-2 border-yellow-400/30 rounded-2xl p-2 backdrop-blur-sm shadow-2xl">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={modalVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-2">{modalVideo.title}</h3>
                      <p className="text-slate-400 mb-3">{modalVideo.description}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>{modalVideo.project}</span>
                        <span>•</span>
                        <span>{modalVideo.year}</span>
                        <span>•</span>
                        <span>{modalVideo.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
