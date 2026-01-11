'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Play, Calendar, Sparkles, Film, ExternalLink, Youtube, X } from 'lucide-react'
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
      <section id="showreel" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950">
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
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-orange-700/30 bg-gradient-to-r from-orange-900/30 to-yellow-900/30 backdrop-blur-sm"
              >
                <Film className="w-4 h-4 text-orange-400" strokeWidth={1.5} />
                <span className="text-sm font-light text-orange-200 tracking-wider">Video Profesional</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl lg:text-6xl font-light mb-4 tracking-tight bg-gradient-to-r from-white via-orange-100 to-yellow-200 bg-clip-text text-transparent"
              >
                Showreel
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
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
                      ? 'bg-gradient-to-r from-orange-600/30 to-yellow-600/30 border-2 border-orange-500/50 text-white shadow-lg scale-105'
                      : 'bg-neutral-900/50 border border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300 hover:scale-102'
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
                {/* Glow effect */}
                <div className="absolute -inset-[2px] bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl opacity-50" />
                
                <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800 rounded-2xl p-2 backdrop-blur-sm shadow-2xl">
                  {/* YouTube Embed */}
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${currentShowreel.youtubeId}?rel=0&modestbranding=1`}
                      title={currentShowreel.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-medium text-white">{currentShowreel.title}</h3>
                          <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs font-semibold">
                            {currentShowreel.year}
                          </span>
                        </div>
                        <p className="text-neutral-400 leading-relaxed font-light">
                          {currentShowreel.description}
                        </p>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-6 pt-4 border-t border-neutral-800">
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Calendar className="w-4 h-4" strokeWidth={1.5} />
                        <span className="font-light">Año {currentShowreel.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <Play className="w-4 h-4" strokeWidth={1.5} />
                        <span className="font-light">{currentShowreel.duration} min</span>
                      </div>
                      <a
                        href={`https://www.youtube.com/watch?v=${currentShowreel.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto px-4 py-2 rounded-lg bg-red-600/20 border border-red-500/30 hover:bg-red-600/30 hover:border-red-500/50 text-red-300 hover:text-red-200 text-sm font-medium transition-all"
                      >
                        Ver en YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Clips Section - Enhanced with Professional Transitions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-white mb-3">Clips de Actuaciones</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-4" />
                <p className="text-neutral-500 font-light">Escenas destacadas de mis principales trabajos en televisión y cine</p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {clips.map((clip, index) => (
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
                    className="group relative perspective-1000 cursor-pointer"
                    onClick={() => openModal(clip)}
                  >
                    <div className="relative transform-gpu">
                      {/* Enhanced Hover glow with smoother transition */}
                      <motion.div 
                        className="absolute -inset-[2px] bg-gradient-to-br from-orange-500/30 via-yellow-500/20 to-orange-500/30 rounded-2xl blur-xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                      
                      <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 backdrop-blur-xl shadow-2xl">
                        {/* Thumbnail with enhanced effects */}
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
                          
                          {/* Enhanced gradient overlay */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 0.5 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Play button with spring animation */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div 
                              className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-2xl"
                              whileHover={{ 
                                scale: 1.2,
                                backgroundColor: "rgba(255, 255, 255, 1)",
                                boxShadow: "0 0 30px rgba(251, 146, 60, 0.6)"
                              }}
                              transition={{ 
                                type: "spring",
                                stiffness: 400,
                                damping: 15
                              }}
                            >
                              <Play className="w-6 h-6 ml-1 fill-black text-black" />
                            </motion.div>
                          </div>
                          
                          {/* Duration badge with smooth transition */}
                          <motion.div 
                            className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/90 text-white text-xs font-bold backdrop-blur-md border border-white/10"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 0, 0, 0.95)" }}
                            transition={{ duration: 0.2 }}
                          >
                            {clip.duration}
                          </motion.div>
                        </div>

                        {/* Info section with enhanced transitions */}
                        <div className="p-4 bg-gradient-to-b from-neutral-900/50 to-neutral-900/80">
                          <motion.h4 
                            className="text-sm font-semibold text-white mb-1.5 line-clamp-2 leading-tight"
                            whileHover={{ color: "rgb(251, 146, 60)" }}
                            transition={{ duration: 0.2 }}
                          >
                            {clip.title}
                          </motion.h4>
                          <p className="text-xs text-neutral-400 mb-2 line-clamp-2 leading-relaxed">
                            {clip.description}
                          </p>
                          <div className="flex items-center justify-between pt-2.5 border-t border-neutral-800/70">
                            <span className="text-xs text-neutral-500 font-medium">{clip.project}</span>
                            <span className="text-xs text-neutral-600 font-medium">{clip.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Professional YouTube Channel Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="text-center mt-16"
              >
                <motion.a
                  href="https://www.youtube.com/@almagrosanmiguel7219/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 group-hover:from-red-600/30 group-hover:via-orange-600/30 group-hover:to-red-600/30 transition-all duration-300" />
                  
                  {/* Border with gradient */}
                  <div className="absolute inset-0 border-2 border-red-500/40 group-hover:border-red-500/60 rounded-2xl transition-all duration-300" />
                  
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-3">
                    <Youtube className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors" />
                    <span className="text-base font-semibold text-white">Explorar Canal de YouTube</span>
                    <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-300 transition-colors" />
                  </div>
                </motion.a>
              </motion.div>
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
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all group"
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Video container */}
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border-2 border-orange-500/30 rounded-2xl p-2 backdrop-blur-sm shadow-2xl">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={modalVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Video info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-white mb-2">{modalVideo.title}</h3>
                      <p className="text-neutral-400 mb-3">{modalVideo.description}</p>
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <span>{modalVideo.project}</span>
                        <span>•</span>
                        <span>{modalVideo.year}</span>
                        <span>•</span>
                        <span>{modalVideo.duration}</span>
                      </div>
                    </div>
                    <a
                      href={`https://www.youtube.com/watch?v=${modalVideo.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/20 border border-red-500/30 hover:bg-red-600/30 hover:border-red-500/50 text-red-300 hover:text-red-200 text-sm font-medium transition-all whitespace-nowrap"
                    >
                      <Youtube className="w-4 h-4" />
                      Ver en YouTube
                    </a>
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
