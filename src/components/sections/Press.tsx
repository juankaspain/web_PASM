'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Newspaper, Quote, Play, Calendar, Tv, ExternalLink, X } from 'lucide-react'
import { useRef, useState } from 'react'

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
  featured?: boolean
}

const interviews: Interview[] = [
  {
    title: 'La pasión por actuar y su paso por La Moderna',
    media: 'El Plural TV',
    production: 'La Moderna & Operación Barrio Inglés',
    year: '2024',
    duration: '14:09',
    youtubeId: 'ts2qSZpSO_I',
    description: 'Entrevista en profundidad sobre su trayectoria, sus inicios en actuaciones callejeras y su interés por producciones históricas.',
  },
  {
    title: 'Presenta Un fantasma en la batalla',
    media: 'Netflix España',
    production: 'Un fantasma en la batalla',
    year: '2025',
    duration: '8:32',
    youtubeId: 'cZSW_6X-Lzk',
    description: 'El actor sevillano habla sobre su papel de Antonio, novio de una joven guardia civil infiltrada en ETA.',
  },
  {
    title: 'Cómo ha sido trabajar en Un fantasma en la batalla',
    media: 'Entrevista Promoción',
    production: 'Un fantasma en la batalla',
    year: '2024',
    duration: '5:18',
    youtubeId: 'MV5kUBPfd9U',
    description: 'Detalla su experiencia interpretando al novio de una joven guardia civil en esta producción de Netflix.',
  },
  {
    title: 'Operación Barrio Inglés y La Moderna',
    media: 'TVE Promoción',
    production: 'Operación Barrio Inglés & La Moderna',
    year: '2024',
    duration: '18:45',
    youtubeId: 'mll_3Sj8kjg',
    description: 'Presenta su doble trabajo en TVE: la serie de espías en los años 40 y su papel protagonista en La Moderna.',
  },
  {
    title: 'Un té con Almagro San Miguel',
    media: 'RTVE - La Moderna',
    production: 'La Moderna',
    year: '2024',
    duration: '12:30',
    youtubeId: '16137829',
    description: 'Conversación sobre su personaje de Íñigo Peñalver, las tramas de la serie y su futuro en La Moderna.',
  },
  {
    title: 'Lunes Seriéfilos - Entrevista completa',
    media: 'Lunes Seriéfilos TV',
    production: 'La Moderna',
    year: '2024',
    duration: '53:48',
    youtubeId: 'Fh9WHJpDtV0',
    description: 'Entrevista extensa donde actualiza su trabajo y profundiza en su papel de Íñigo en La Moderna.',
  },
  {
    title: 'Vis a Vis: El Oasis y Hernán',
    media: 'La Caja de Música TV',
    production: 'Vis a Vis: El Oasis & Hernán',
    year: '2020',
    duration: '15:42',
    youtubeId: 'C211y0omwZ8',
    description: 'Habla sobre su primer papel protagonista como Diego Ramala y su experiencia en la producción histórica Hernán.',
  },
  {
    title: 'El Oasis - Vis a Vis',
    media: 'Rumbera Sevilla 93.4 FM',
    production: 'Vis a Vis: El Oasis',
    year: '2020',
    duration: '22:15',
    youtubeId: 'JnzoAOXccYg',
    description: 'Entrevista radiofónica sobre su participación en el spin-off de Vis a vis y su trabajo con el elenco femenino.',
  },
]

const pressQuotes: PressQuote[] = [
  {
    quote: 'Cada proyecto, personaje, es otra historia, otro mundo, otros conflictos. La posibilidad de aprender de la historia de mi país me llena mucho.',
    source: 'RTVE - Entrevista La Moderna',
    production: 'La Moderna',
    year: '2023',
    featured: true,
  },
  {
    quote: 'Me trabajé mucho las audiciones porque la oportunidad así lo requería. Estoy tremendamente agradecido con Boomerang y RTVE por la confianza.',
    source: 'RTVE - Sobre su casting',
    production: 'La Moderna',
    year: '2023',
    featured: true,
  },
  {
    quote: 'Es alucinante ver cómo los directores y el equipo técnico se desenvuelven. Siempre están abiertos a tus propuestas y el equipo salva cualquier problema en un abrir y cerrar de ojos.',
    source: 'RTVE - Sobre el equipo de La Moderna',
    production: 'La Moderna',
    year: '2023',
    featured: false,
  },
  {
    quote: 'Cada vez que me vienen nuevos guiones me sorprendo, me encanta que sea así. No te puedes quedar tranquilo pensando que todo está bien o mal, porque en un segundo cambia.',
    source: 'RTVE - Sobre las tramas',
    production: 'La Moderna',
    year: '2023',
    featured: false,
  },
  {
    quote: 'Venía de estar poniendo copas en discotecas. Hernán fue maravilloso, un proyecto que me cambió la vida profesionalmente.',
    source: 'La Caja de Música TV',
    production: 'Hernán Cortés',
    year: '2020',
    featured: false,
  },
  {
    quote: 'Mi personaje Diego es un guitarrista que trabaja con un narcotraficante mexicano. Fue fascinante explorar ese mundo y trabajar con el elenco femenino de Vis a vis.',
    source: 'Rumbera Sevilla FM',
    production: 'Vis a Vis: El Oasis',
    year: '2020',
    featured: false,
  },
]

export default function Press() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [modalVideo, setModalVideo] = useState<Interview | null>(null)

  const openModal = (interview: Interview) => {
    setModalVideo(interview)
  }

  const closeModal = () => {
    setModalVideo(null)
  }

  return (
    <>
      <section id="press" className="relative py-24 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
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
            {/* Header ESTANDARIZADO */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <Newspaper className="w-4 h-4 text-yellow-400" strokeWidth={2} />
                <span className="text-sm font-medium text-slate-300 tracking-wide">Medios & Entrevistas</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white"
              >
                Prensa & Entrevistas
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
                Apariciones en medios, entrevistas y cobertura de sus principales producciones
              </motion.p>
            </div>

            {/* Featured Quotes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-5xl mx-auto mb-20"
            >
              <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-2 text-white">
                <Quote className="w-6 h-6 text-yellow-400" />
                Declaraciones Destacadas
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {pressQuotes.filter(q => q.featured).map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="relative bg-gradient-to-br from-yellow-900/10 to-orange-900/5 border border-yellow-500/30 rounded-2xl p-8 backdrop-blur-sm"
                  >
                    <Quote className="w-8 h-8 text-yellow-400/30 mb-4" />
                    <p className="text-lg text-white leading-relaxed mb-4 italic">
                      &ldquo;{quote.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{quote.source}</span>
                      <span className="text-slate-500">{quote.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Interviews Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-20"
            >
              <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-2 text-white">
                <Tv className="w-6 h-6 text-yellow-400" />
                Entrevistas en Video
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {interviews.map((interview, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1 
                    } : { 
                      opacity: 0, 
                      y: 20, 
                      scale: 0.95 
                    }}
                    transition={{ 
                      duration: 0.6,
                      delay: 0.8 + index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.03,
                      transition: { 
                        duration: 0.3,
                        ease: [0.34, 1.56, 0.64, 1]
                      }
                    }}
                    className="group relative cursor-pointer"
                    onClick={() => openModal(interview)}
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
                            src={`https://img.youtube.com/vi/${interview.youtubeId}/mqdefault.jpg`}
                            alt={interview.title}
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
                            {interview.duration}
                          </motion.div>
                        </div>

                        <div className="p-5 bg-gradient-to-b from-black/50 to-black/80">
                          <motion.h4 
                            className="text-base font-semibold text-white mb-2 line-clamp-2 leading-tight"
                            whileHover={{ color: "rgb(250, 204, 21)" }}
                            transition={{ duration: 0.2 }}
                          >
                            {interview.title}
                          </motion.h4>
                          <p className="text-xs text-slate-400 mb-3 line-clamp-2 leading-relaxed">
                            {interview.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between pt-3 border-t border-white/10">
                              <span className="text-xs text-slate-500 font-medium">{interview.media}</span>
                              <span className="text-xs text-slate-600 font-medium">{interview.year}</span>
                            </div>
                            <div className="text-xs text-slate-500">{interview.production}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional Quotes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {pressQuotes.filter(q => !q.featured).map((quote, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    className="bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:bg-white/[0.04] hover:border-yellow-400/30 transition-all"
                  >
                    <Quote className="w-6 h-6 text-yellow-400/40 mb-3" />
                    <p className="text-sm text-slate-300 leading-relaxed mb-3 italic">
                      &ldquo;{quote.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{quote.source}</span>
                      <span className="text-slate-600">{quote.year}</span>
                    </div>
                  </motion.div>
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
                        <span>{modalVideo.media}</span>
                        <span>•</span>
                        <span>{modalVideo.production}</span>
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
