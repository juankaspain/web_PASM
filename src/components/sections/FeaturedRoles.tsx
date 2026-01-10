'use client'

import { motion, useInView } from 'framer-motion'
import { Tv, Play, Star, ExternalLink, Film, Award, Calendar, Globe } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const featuredRoles = [
  {
    title: 'La Moderna',
    role: 'Íñigo Peñalver',
    type: 'Protagonista',
    platform: 'TVE',
    episodes: '236 episodios',
    year: '2023-2024',
    description: 'Galán protagonista en la serie diaria de época de TVE que ha cautivado a millones de espectadores. Papel que le dio reconocimiento masivo en España.',
    gradient: 'from-amber-500 via-orange-500 to-red-600',
    imdb: 'https://www.imdb.com/title/tt21867896/',
    wikipedia: 'https://es.wikipedia.org/wiki/La_Moderna_(serie_de_televisi%C3%B3n)',
    filmaffinity: 'https://www.filmaffinity.com/es/film481753.html',
    imageUrl: '/roles/la-moderna.jpg',
  },
  {
    title: 'Vis a vis: El Oasis',
    role: 'Diego Ramala',
    type: 'Protagonista',
    platform: 'Fox/Star Channel',
    episodes: '8 episodios',
    year: '2020',
    description: 'Spin-off de la exitosa serie "Vis a vis". Papel protagónico en producción internacional con gran repercusión mediática.',
    gradient: 'from-blue-600 via-purple-600 to-pink-600',
    imdb: 'https://www.imdb.com/title/tt11566954/',
    wikipedia: 'https://es.wikipedia.org/wiki/Vis_a_vis:_El_Oasis',
    filmaffinity: 'https://www.filmaffinity.com/es/film596738.html',
    imageUrl: '/roles/vis-a-vis.jpg',
  },
  {
    title: 'Hernán',
    role: 'Gonzalo de Sandoval',
    type: 'Principal',
    platform: 'Amazon Prime Video',
    episodes: '8 episodios',
    year: '2019',
    description: 'Serie histórica sobre Hernán Cortés protagonizada por Óscar Jaenada. Producción internacional de Amazon Prime con presupuesto millonario.',
    gradient: 'from-red-600 via-orange-600 to-yellow-600',
    imdb: 'https://www.imdb.com/title/tt9140786/',
    wikipedia: 'https://es.wikipedia.org/wiki/Hern%C3%A1n_(serie_de_televisi%C3%B3n)',
    filmaffinity: 'https://www.filmaffinity.com/es/film549817.html',
    imageUrl: '/roles/hernan.jpg',
  },
  {
    title: 'Operación Barrio Inglés',
    role: 'Toni',
    type: 'Principal',
    platform: 'TVE',
    episodes: '8 episodios',
    year: '2024',
    description: 'Serie de acción y drama sobre una operación policial en Sevilla. Papel de alto nivel técnico con escenas de acción y drama intenso.',
    gradient: 'from-green-600 via-teal-600 to-cyan-600',
    imdb: 'https://www.imdb.com/title/tt28106426/',
    wikipedia: null,
    filmaffinity: 'https://www.filmaffinity.com/es/film634421.html',
    imageUrl: '/roles/barrio-ingles.jpg',
  },
]

export default function FeaturedRoles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="featured-roles" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Fondo cinematográfico con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      
      {/* Grid de puntos decorativo */}
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(251,191,36,0.5) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }} 
      />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header Premium */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-300 text-sm font-bold uppercase tracking-wider">Roles Destacados</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
                Personajes Principales
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Protagonista y papeles principales en series de TVE, Amazon Prime Video, 
              Fox y otras plataformas nacionales e internacionales de prestigio
            </motion.p>
          </div>

          {/* Grid de Roles - Diseño Premium */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {featuredRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.7, delay: 0.5 + index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Resplandor exterior */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${role.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                
                {/* Card Principal */}
                <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black/95 rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.95)]">
                  {/* Imagen / Placeholder */}
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    {/* Gradiente de fondo */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-70`} />
                    
                    {/* Icono central */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white/40">
                        <Tv className="w-20 h-20 mx-auto mb-3" strokeWidth={1.5} />
                        <p className="text-lg font-bold opacity-60">{role.title}</p>
                      </div>
                    </div>
                    
                    {/* Overlay con Play */}
                    <motion.div 
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      initial={false}
                    >
                      <motion.div 
                        className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.6)]"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Play className="w-10 h-10 text-black ml-1" fill="currentColor" />
                      </motion.div>
                    </motion.div>

                    {/* Badges superiores */}
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                      {/* Tipo de papel */}
                      <div className={`px-4 py-1.5 bg-gradient-to-r ${role.gradient} rounded-full text-white text-xs font-bold shadow-lg backdrop-blur-sm`}>
                        {role.type}
                      </div>
                      
                      {/* Plataforma */}
                      <div className="px-4 py-1.5 bg-black/80 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/20">
                        {role.platform}
                      </div>
                    </div>

                    {/* Gradiente inferior */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />
                  </div>

                  {/* Contenido de la card */}
                  <div className="p-7">
                    {/* Título y rol */}
                    <div className="mb-4">
                      <h3 className="font-bold text-2xl sm:text-3xl text-white mb-2 group-hover:text-yellow-300 transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-lg text-slate-300">
                        <span className="font-semibold text-yellow-300">{role.role}</span>
                      </p>
                    </div>

                    {/* Metadatos */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{role.year}</span>
                      </div>
                      <span className="text-slate-600">•</span>
                      <div className="flex items-center gap-1.5">
                        <Film className="w-4 h-4" />
                        <span>{role.episodes}</span>
                      </div>
                    </div>

                    {/* Descripción */}
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-5">
                      {role.description}
                    </p>

                    {/* Botones de enlaces profesionales */}
                    <div className="flex flex-wrap gap-3">
                      {/* IMDb */}
                      <motion.a
                        href={role.imdb}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-sm font-bold text-black shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all group/link"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                        IMDb
                      </motion.a>

                      {/* Wikipedia */}
                      {role.wikipedia && (
                        <motion.a
                          href={role.wikipedia}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/50 rounded-full text-sm font-bold text-white shadow-lg transition-all group/link"
                        >
                          <Globe className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                          Wiki
                        </motion.a>
                      )}

                      {/* FilmAffinity */}
                      {role.filmaffinity && (
                        <motion.a
                          href={role.filmaffinity}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-900/40 hover:bg-red-800/60 border border-red-700/50 rounded-full text-sm font-bold text-white shadow-lg transition-all group/link"
                        >
                          <Film className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                          FA
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Barra inferior decorativa */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${role.gradient}`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decoración inferior */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/60 border border-slate-700/50 backdrop-blur-md">
              <Award className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium text-slate-300">
                Roles que han marcado mi carrera profesional
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Vignette inferior */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
