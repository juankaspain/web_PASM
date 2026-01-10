'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { Film, Tv, Theater, Play, Star, ExternalLink, Calendar, Users, Clapperboard, X, Award as AwardIcon } from 'lucide-react'
import { useState, useRef } from 'react'

type Category = 'all' | 'tv' | 'film' | 'theater'

interface Project {
  id: string
  title: string
  role: string
  year: string
  platform: string
  episodes?: string
  type?: string
  image: string
  rating?: string
  imdb?: string
  category: 'tv' | 'film' | 'theater'
  description: string
  director?: string
  coStars?: string[]
  highlights?: string[]
  gradient: string
}

const projects: Project[] = [
  // TV
  {
    id: 'la-moderna',
    title: 'La Moderna',
    role: 'Íñigo Peñalver (Protagonista)',
    year: '2023-2024',
    platform: 'TVE',
    episodes: '236 episodios',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000',
    rating: '7.5',
    imdb: 'https://www.imdb.com/title/tt28688509/',
    category: 'tv',
    description: 'Serie diaria de época ambientada en los años 40-50 en Madrid. Papel protagonista como galán durante más de 230 episodios consecutivos en prime time.',
    director: 'Varios directores',
    coStars: ['Paula Ballesteros', 'Sebastián Haro', 'Sara Vidorreta'],
    highlights: ['Protagonista', '236 episodios', 'Prime time TVE'],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'vis-a-vis',
    title: 'Vis a vis: El Oasis',
    role: 'Diego Ramala (Protagonista)',
    year: '2020',
    platform: 'Fox/Star',
    episodes: '8 episodios',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000',
    rating: '6.8',
    imdb: 'https://www.imdb.com/title/tt11177074/',
    category: 'tv',
    description: 'Primer papel protagonista. Spin-off de la exitosa serie "Vis a vis". Thriller carcelario emitido en Fox y Star Channel con gran repercusión internacional.',
    director: 'Varios directores',
    coStars: ['Maggie Civantos', 'Najwa Nimri', 'Itziar Castro'],
    highlights: ['Protagonista', 'Fox/Star', 'Internacional'],
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    id: 'hernan',
    title: 'Hernán',
    role: 'Gonzalo de Sandoval',
    year: '2019',
    platform: 'Prime Video',
    episodes: '8 episodios',
    image: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=1000',
    rating: '6.2',
    imdb: 'https://www.imdb.com/title/tt8741704/',
    category: 'tv',
    description: 'Producción histórica de Amazon para Latinoamérica. Serie épica sobre la conquista de México con presupuesto millonario.',
    director: 'Varios directores',
    coStars: ['Óscar Jaenada', 'Michel Brown', 'Víctor Clavijo'],
    highlights: ['Prime Video', 'Internacional', 'Épica'],
    gradient: 'from-red-600 to-pink-600',
  },
  {
    id: 'operacion-barrio',
    title: 'Operación Barrio Inglés',
    role: 'Toni',
    year: '2024',
    platform: 'TVE',
    episodes: '8 episodios',
    image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec9cfd0?q=80&w=1000',
    rating: '7.5',
    imdb: 'https://www.imdb.com/title/tt30321421/',
    category: 'tv',
    description: 'Serie de espionaje ambientada en la España de los años 40, narrando operaciones encubiertas durante la Segunda Guerra Mundial.',
    highlights: ['Histórica', 'TVE', 'Años 40'],
    gradient: 'from-green-600 to-teal-600',
  },
  {
    id: 'la-caza',
    title: 'La Caza: Guadiana',
    role: 'Aurelio Santana',
    year: '2023',
    platform: 'TVE',
    episodes: '6 episodios',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000',
    rating: '7.3',
    imdb: 'https://www.imdb.com/title/tt15398770/',
    category: 'tv',
    description: 'Thriller policíaco que investiga crímenes sin resolver. Formato de gran éxito en TVE.',
    highlights: ['Thriller', 'Rating 7.3', 'TVE'],
    gradient: 'from-slate-600 to-gray-700',
  },
  // Film
  {
    id: 'fantasma',
    title: 'Un fantasma en la batalla',
    role: 'Antonio',
    year: '2025',
    platform: 'Cine',
    type: 'Largometraje',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000',
    imdb: 'https://www.imdb.com/title/tt28278100/',
    category: 'film',
    description: 'Thriller basado en hechos reales sobre ETA. Dirigida por el prestigioso Agustín Díaz Yanes.',
    director: 'Agustín Díaz Yanes',
    highlights: ['Estreno 2025', 'Hechos reales', 'Díaz Yanes'],
    gradient: 'from-yellow-600 to-red-600',
  },
  {
    id: 'lapso',
    title: 'Lapso',
    role: 'Rodolfo',
    year: '2013',
    platform: 'Cine',
    type: 'Cortometraje',
    image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1000',
    rating: '8.6',
    category: 'film',
    description: 'Thriller psicológico con rating excepcional en IMDb. Debut en cine.',
    highlights: ['IMDb 8.6', 'Thriller', 'Debut'],
    gradient: 'from-purple-600 to-indigo-700',
  },
  // Theater
  {
    id: 'oliver-twist',
    title: 'Oliver Twist',
    role: 'Jefe Policía Duff',
    year: '2016',
    platform: 'Teatro',
    type: 'Musical',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1000',
    category: 'theater',
    description: 'Musical producido por CIA La Tarasca. Premio al Mejor Espectáculo del Año 2016.',
    highlights: ['Premio', 'Musical', '2016'],
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 'fuente-ovejuna',
    title: 'Fuente Ovejuna',
    role: 'Reparto CNTC',
    year: '2015',
    platform: 'Teatro',
    type: 'Clásico',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1000',
    category: 'theater',
    description: 'CNTC dirigida por Helena Pimenta. Nominación Mejor Actor Secundario (Unión de Actores).',
    director: 'Helena Pimenta',
    highlights: ['CNTC', 'Nominación', 'Pimenta'],
    gradient: 'from-violet-600 to-purple-700',
  },
]

const categories = [
  { id: 'all' as Category, label: 'Todos', icon: Clapperboard, count: projects.length },
  { id: 'tv' as Category, label: 'TV', icon: Tv, count: projects.filter(p => p.category === 'tv').length },
  { id: 'film' as Category, label: 'Cine', icon: Film, count: projects.filter(p => p.category === 'film').length },
  { id: 'theater' as Category, label: 'Teatro', icon: Theater, count: projects.filter(p => p.category === 'theater').length },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      
      {/* Grid decorativo */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(251,191,36,0.4) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm"
            >
              <Clapperboard className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-300 text-sm font-bold uppercase tracking-wider">Filmografía Completa</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
                Portfolio Profesional
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Más de <span className="font-bold text-yellow-300">300 episodios</span> en plataformas nacionales e internacionales. 
              TV, cine y teatro de máximo nivel profesional
            </motion.p>
          </div>

          {/* Filtros */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-[0_0_30px_rgba(251,191,36,0.5)]'
                      : 'bg-slate-900/80 text-slate-300 border border-slate-700/50 hover:border-yellow-500/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    selectedCategory === cat.id ? 'bg-black/20 text-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {cat.count}
                  </span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Grid de proyectos */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer"
                >
                  {/* Resplandor */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black/95 rounded-3xl overflow-hidden border border-slate-700/50 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.95)]">
                    {/* Imagen */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {/* Play button */}
                      <motion.div 
                        className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={false}
                      >
                        <motion.div 
                          className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(251,191,36,0.6)]`}
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                        </motion.div>
                      </motion.div>

                      {/* Rating */}
                      {project.rating && (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500 rounded-full font-bold text-black shadow-lg">
                          <Star className="w-4 h-4 fill-black" />
                          <span>{project.rating}</span>
                        </div>
                      )}

                      {/* Badge categoría */}
                      <div className={`absolute top-4 left-4 px-4 py-1.5 bg-gradient-to-r ${project.gradient} rounded-full text-white text-xs font-bold shadow-lg`}>
                        {project.category === 'tv' && 'TELEVISIÓN'}
                        {project.category === 'film' && 'CINE'}
                        {project.category === 'theater' && 'TEATRO'}
                      </div>

                      {/* Info en overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-300 text-sm mb-2">{project.role}</p>
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {project.year}
                          </span>
                          {project.episodes && (
                            <>
                              <span>•</span>
                              <span>{project.episodes}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="p-4 flex flex-wrap gap-2">
                        {project.highlights.slice(0, 3).map((highlight, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-800/80 border border-slate-700/50 text-slate-300 text-xs rounded-full font-semibold">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Barra inferior */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.gradient}`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal de detalle */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-3xl max-w-5xl w-full border border-slate-700/50 shadow-[0_0_100px_rgba(251,191,36,0.2)] my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-slate-900/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors group border border-slate-700/50"
              >
                <X className="w-6 h-6 text-slate-300 group-hover:text-black" />
              </button>

              {/* Imagen hero */}
              <div className="relative h-[50vh] rounded-t-3xl overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent`} />
                
                {/* Título sobre imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className={`inline-block px-4 py-1.5 bg-gradient-to-r ${selectedProject.gradient} rounded-full text-white text-sm font-bold mb-4`}>
                    {selectedProject.platform}
                  </div>
                  <h3 className="text-5xl font-bold text-white mb-3">{selectedProject.title}</h3>
                  <p className="text-2xl text-yellow-300 font-semibold">{selectedProject.role}</p>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-10">
                {/* Meta grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Año</div>
                      <div className="font-bold text-white">{selectedProject.year}</div>
                    </div>
                  </div>
                  
                  {selectedProject.rating && (
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">IMDb</div>
                        <div className="font-bold text-white">{selectedProject.rating}/10</div>
                      </div>
                    </div>
                  )}

                  {selectedProject.episodes && (
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                        <Tv className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Episodios</div>
                        <div className="font-bold text-white">{selectedProject.episodes}</div>
                      </div>
                    </div>
                  )}

                  {selectedProject.director && (
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Director</div>
                        <div className="font-bold text-white text-sm">{selectedProject.director}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Descripción */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
                    Descripción
                  </h4>
                  <p className="text-slate-300 text-lg leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Reparto */}
                {selectedProject.coStars && selectedProject.coStars.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
                      Reparto Destacado
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.coStars.map((star, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-800/80 border border-slate-700/50 text-slate-200 rounded-xl text-sm font-semibold">
                          {star}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
                      Destacados
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.highlights.map((highlight, i) => (
                        <span key={i} className={`px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-xl text-sm font-bold shadow-lg`}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Botón IMDb */}
                {selectedProject.imdb && (
                  <motion.a
                    href={selectedProject.imdb}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full font-bold text-lg shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:shadow-[0_0_50px_rgba(251,191,36,0.7)] transition-all"
                  >
                    <Star className="w-5 h-5" />
                    Ver en IMDb
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
