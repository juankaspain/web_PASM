'use client'

import { motion, useInView } from 'framer-motion'
import { Tv, Play, Star, ExternalLink, Film, Calendar, Globe, Award, Sparkles } from 'lucide-react'
import { useRef } from 'react'

const featuredRoles = [
  {
    title: 'La Moderna',
    role: 'Íñigo Peñalver',
    type: 'Protagonista',
    platform: 'TVE',
    episodes: '236 episodios',
    year: '2023-2024',
    description: 'Galán protagonista en la serie diaria de época de máxima audiencia en TVE. Personaje que consolidó mi reconocimiento a nivel nacional.',
    gradient: 'from-amber-500 to-orange-600',
    accentColor: 'amber',
    imdb: 'https://www.imdb.com/title/tt21867896/',
    wikipedia: 'https://es.wikipedia.org/wiki/La_Moderna_(serie_de_televisi%C3%B3n)',
    filmaffinity: 'https://www.filmaffinity.com/es/film481753.html',
  },
  {
    title: 'Vis a vis: El Oasis',
    role: 'Diego Ramala',
    type: 'Protagonista',
    platform: 'Fox/Star Channel',
    episodes: '8 episodios',
    year: '2020',
    description: 'Papel protagónico en el spin-off de la exitosa serie "Vis a vis". Producción internacional de alto nivel con distribución global.',
    gradient: 'from-blue-600 to-purple-600',
    accentColor: 'blue',
    imdb: 'https://www.imdb.com/title/tt11566954/',
    wikipedia: 'https://es.wikipedia.org/wiki/Vis_a_vis:_El_Oasis',
    filmaffinity: 'https://www.filmaffinity.com/es/film596738.html',
  },
  {
    title: 'Hernán',
    role: 'Gonzalo de Sandoval',
    type: 'Principal',
    platform: 'Amazon Prime Video',
    episodes: '8 episodios',
    year: '2019',
    description: 'Serie histórica protagonizada por Óscar Jaenada. Producción internacional de Amazon Prime con presupuesto millonario y distribución en más de 240 países.',
    gradient: 'from-red-600 to-orange-600',
    accentColor: 'red',
    imdb: 'https://www.imdb.com/title/tt9140786/',
    wikipedia: 'https://es.wikipedia.org/wiki/Hern%C3%A1n_(serie_de_televisi%C3%B3n)',
    filmaffinity: 'https://www.filmaffinity.com/es/film549817.html',
  },
  {
    title: 'Operación Barrio Inglés',
    role: 'Toni',
    type: 'Principal',
    platform: 'TVE',
    episodes: '8 episodios',
    year: '2024',
    description: 'Serie de acción y thriller policial ambientada en Sevilla. Papel con alto nivel de exigencia física y dramática.',
    gradient: 'from-green-600 to-teal-600',
    accentColor: 'green',
    imdb: 'https://www.imdb.com/title/tt28106426/',
    wikipedia: null,
    filmaffinity: 'https://www.filmaffinity.com/es/film634421.html',
  },
]

export default function FeaturedRoles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="featured-roles" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Patrón de fondo */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Roles Destacados</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Personajes Principales
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Protagonista y papeles principales en producciones de TVE, Amazon Prime Video, Fox y otras plataformas de prestigio internacional
            </motion.p>
          </div>

          {/* Grid de roles - Diseño limpio y profesional */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Resplandor sutil */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-br ${role.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Card */}
                  <div className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 shadow-xl">
                    {/* Header visual con gradiente */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-60`} />
                      
                      {/* Icono central */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Tv className="w-16 h-16 text-white/30" strokeWidth={1.5} />
                      </div>
                      
                      {/* Overlay con play en hover */}
                      <motion.div 
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={false}
                      >
                        <motion.div 
                          className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                        </motion.div>
                      </motion.div>

                      {/* Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                        <div className={`px-3 py-1 bg-gradient-to-r ${role.gradient} rounded-full text-white text-xs font-bold backdrop-blur-sm`}>
                          {role.type}
                        </div>
                        <div className="px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-semibold border border-white/20">
                          {role.platform}
                        </div>
                      </div>

                      {/* Gradiente inferior */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
                    </div>

                    {/* Contenido */}
                    <div className="p-7">
                      {/* Título */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-lg text-slate-300 mb-4">
                        <span className="font-semibold text-yellow-400">{role.role}</span>
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{role.year}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <Film className="w-4 h-4" />
                          <span>{role.episodes}</span>
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-slate-400 leading-relaxed mb-6">
                        {role.description}
                      </p>

                      {/* Enlaces */}
                      <div className="flex flex-wrap gap-3">
                        <motion.a
                          href={role.imdb}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg text-sm font-bold text-black shadow-lg hover:shadow-yellow-500/30 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          IMDb
                        </motion.a>

                        {role.wikipedia && (
                          <motion.a
                            href={role.wikipedia}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-semibold text-white transition-all"
                          >
                            <Globe className="w-4 h-4" />
                            Wiki
                          </motion.a>
                        )}

                        {role.filmaffinity && (
                          <motion.a
                            href={role.filmaffinity}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-semibold text-white transition-all"
                          >
                            <Film className="w-4 h-4" />
                            FA
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Barra decorativa inferior */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${role.gradient}`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">
                Personajes que han definido mi trayectoria profesional
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
