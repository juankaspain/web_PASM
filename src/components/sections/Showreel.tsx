'use client'

import { motion, useInView } from 'framer-motion'
import { Play, Calendar, Sparkles, Film, ExternalLink } from 'lucide-react'
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
    title: 'Proyecto Audiovisual',
    description: 'Trabajo destacado',
    project: 'Producción',
    year: '2021',
    duration: '3:15',
    youtubeId: 'xitfEzmseG4',
  },
  {
    title: 'Actuación Destacada',
    description: 'Escena de trabajo',
    project: 'Producción Audiovisual',
    year: '2021',
    duration: '2:45',
    youtubeId: '6YOHYHYj8Qk',
  },
]

export default function Showreel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeVideo, setActiveVideo] = useState<string>('2024')

  const currentShowreel = showreels.find(reel => reel.id === activeVideo) || showreels[0]

  return (
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

          {/* Clips Section - Enhanced */}
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
                <motion.a
                  key={index}
                  href={`https://www.youtube.com/watch?v=${clip.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative">
                    {/* Hover glow */}
                    <div className="absolute -inset-[1px] bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
                    
                    <div className="relative bg-gradient-to-br from-neutral-900/70 to-neutral-900/40 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all backdrop-blur-sm shadow-xl">
                      {/* Thumbnail */}
                      <div className="relative aspect-video overflow-hidden bg-black">
                        <img
                          src={`https://img.youtube.com/vi/${clip.youtubeId}/mqdefault.jpg`}
                          alt={clip.title}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all shadow-lg">
                            <Play className="w-5 h-5 ml-0.5 fill-black text-black" />
                          </div>
                        </div>
                        
                        {/* Duration badge */}
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-xs font-semibold backdrop-blur-sm">
                          {clip.duration}
                        </div>
                        
                        {/* External link icon */}
                        <ExternalLink className="absolute top-2 right-2 w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <h4 className="text-sm font-semibold text-white mb-1.5 line-clamp-2 leading-tight group-hover:text-orange-300 transition-colors">
                          {clip.title}
                        </h4>
                        <p className="text-xs text-neutral-500 mb-2 line-clamp-2 leading-relaxed">
                          {clip.description}
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-800/50">
                          <span className="text-xs text-neutral-600 font-light">{clip.project}</span>
                          <span className="text-xs text-neutral-700 font-light">{clip.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Link to channel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
              className="text-center mt-10"
            >
              <a
                href="https://www.youtube.com/@almagrosanmiguel7219/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/70 text-neutral-400 hover:text-neutral-200 transition-all font-light"
              >
                <span>Ver todos los videos en YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Footer Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 border border-neutral-800 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-orange-400" strokeWidth={1.5} />
              <span className="text-sm font-light text-neutral-300">
                Material actualizado con nuevos proyectos
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
