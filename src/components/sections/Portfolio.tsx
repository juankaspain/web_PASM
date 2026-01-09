'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Film, Tv, Theater, Play, Star, ExternalLink, Award, Calendar, Users, Clapperboard } from 'lucide-react'
import { useState } from 'react'

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
  trailer?: string
}

const projects: Project[] = [
  // TV
  {
    id: 'la-moderna',
    title: 'La Moderna',
    role: 'Íñigo Peñalver (Protagonista)',
    year: '2023-2024',
    platform: 'La 1 (TVE)',
    episodes: '236 episodios',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000',
    rating: '7.5',
    imdb: 'https://www.imdb.com/title/tt28688509/',
    category: 'tv',
    description: 'Serie diaria de época ambientada en los años 40-50 en Madrid. Papel protagonista como galán durante más de 230 episodios consecutivos.',
    director: 'Varios directores',
    coStars: ['Paula Ballesteros', 'Sebastián Haro', 'Sara Vidorreta'],
    highlights: ['Protagonista', '236 episodios', 'Prime time TVE'],
  },
  {
    id: 'operacion-barrio',
    title: 'Operación Barrio Inglés',
    role: 'Toni',
    year: '2024',
    platform: 'La 1 (TVE)',
    episodes: '8 episodios',
    image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec9cfd0?q=80&w=1000',
    rating: '7.5',
    imdb: 'https://www.imdb.com/title/tt30321421/',
    category: 'tv',
    description: 'Serie de espionaje ambientada en la España de los años 40, narrando operaciones encubiertas durante la Segunda Guerra Mundial.',
    highlights: ['Serie histórica', 'Producción TVE', 'Años 40'],
  },
  {
    id: 'la-caza',
    title: 'La Caza: Guadiana',
    role: 'Aurelio "Aure" Santana Mencía',
    year: '2023',
    platform: 'La 1 (TVE)',
    episodes: '6 episodios',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000',
    rating: '7.3',
    imdb: 'https://www.imdb.com/title/tt15398770/',
    category: 'tv',
    description: 'Thriller policíaco que investiga crímenes sin resolver. Papel destacado en uno de los formatos de más éxito de TVE.',
    director: 'Varios directores',
    highlights: ['Thriller', 'Rating 7.3', 'Formato éxito TVE'],
  },
  {
    id: 'honor',
    title: 'Honor',
    role: 'Federico "Fede"',
    year: '2023',
    platform: 'Atresplayer',
    episodes: '5 episodios',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000',
    rating: '6.9',
    imdb: 'https://www.imdb.com/title/tt21217236/',
    category: 'tv',
    description: 'Drama contemporáneo sobre temas de justicia y moral. Producción original Atresplayer Premium.',
    highlights: ['Atresplayer Premium', 'Drama'],
  },
  {
    id: 'desconocidas',
    title: 'Desconocidas',
    role: 'Ramón',
    year: '2022',
    platform: 'Canal Sur',
    episodes: '8 episodios',
    image: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1000',
    rating: '7.4',
    category: 'tv',
    description: 'Serie dramática andaluza. Colaboración con Canal Sur Televisión.',
    highlights: ['Producción andaluza', 'Canal Sur'],
  },
  {
    id: 'estoy-vivo',
    title: 'Estoy vivo',
    role: 'Mikel Uribe',
    year: '2021',
    platform: 'La 1 (TVE)',
    episodes: '12 episodios',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000',
    rating: '7.5',
    imdb: 'https://www.imdb.com/title/tt6155066/',
    category: 'tv',
    description: 'Drama fantástico con elementos sobrenaturales. Una de las series más vistas de La 1.',
    coStars: ['Javier Gutiérrez', 'Anna Castillo', 'Alejo Sauras'],
    highlights: ['12 episodios', 'Top series TVE', 'Javier Gutiérrez'],
  },
  {
    id: 'vis-a-vis',
    title: 'Vis a vis: El Oasis',
    role: 'Diego "Dieguito" Ramala (Protagonista)',
    year: '2020',
    platform: 'Fox España / Star Channel',
    episodes: '8 episodios',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000',
    rating: '6.8',
    imdb: 'https://www.imdb.com/title/tt11177074/',
    category: 'tv',
    description: 'Primer papel protagonista. Spin-off de la exitosa serie "Vis a vis". Thriller carcelario emitido en Fox y Star Channel.',
    director: 'Varios directores',
    coStars: ['Maggie Civantos', 'Najwa Nimri', 'Itziar Castro'],
    highlights: ['Protagonista', 'Fox/Star', 'Maggie Civantos'],
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
    description: 'Producción histórica de Amazon para Latinoamérica. Serie épica sobre la conquista de México.',
    director: 'Varios directores',
    coStars: ['Óscar Jaenada', 'Michel Brown', 'Víctor Clavijo'],
    highlights: ['Prime Video', 'Internacional', 'Producción épica'],
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
    highlights: ['Estreno 2025', 'Basada hechos reales', 'Agustín Díaz Yanes'],
  },
  {
    id: 'fueron-los-dias',
    title: 'Fueron los días',
    role: 'Reparto',
    year: '2023',
    platform: 'Cine',
    type: 'Largometraje',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000',
    category: 'film',
    description: 'Drama español. Participación en largometraje de producción nacional.',
    highlights: ['Largometraje', '2023'],
  },
  {
    id: 'mario-kike',
    title: 'Mario, Kike y David',
    role: 'Mario',
    year: '2016',
    platform: 'Cine',
    type: 'Cortometraje',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1000',
    category: 'film',
    description: 'Cortometraje independiente. Papel protagonista.',
    highlights: ['Protagonista', 'Cortometraje'],
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
    highlights: ['IMDb 8.6/10', 'Thriller', 'Debut cine'],
  },
  // Theater
  {
    id: 'oliver-twist',
    title: 'Oliver Twist (Musical)',
    role: 'Jefe de Policía Duff',
    year: '2016',
    platform: 'Teatro',
    type: 'Musical',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1000',
    category: 'theater',
    description: 'Musical producido por CIA La Tarasca. Premio al Mejor Espectáculo del Año.',
    highlights: ['Premio Mejor Espectáculo', 'Musical', '2016'],
  },
  {
    id: 'fuente-ovejuna',
    title: 'Fuente Ovejuna',
    role: 'Reparto CNTC',
    year: '2015',
    platform: 'Teatro',
    type: 'Teatro Clásico',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=1000',
    category: 'theater',
    description: 'Compañía Nacional de Teatro Clásico dirigida por Helena Pimenta. Nominación Mejor Actor Secundario (Unión de Actores).',
    director: 'Helena Pimenta',
    highlights: ['CNTC', 'Nominación Unión Actores', 'Helena Pimenta'],
  },
  {
    id: 'villana-getafe',
    title: 'La Villana de Getafe',
    role: 'Reparto CNTC',
    year: '2017',
    platform: 'Teatro',
    type: 'Teatro Clásico',
    image: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?q=80&w=1000',
    category: 'theater',
    description: 'Producción de la Compañía Nacional de Teatro Clásico. Verso clásico español.',
    highlights: ['CNTC', 'Teatro clásico', '2017'],
  },
]

const categories = [
  { id: 'all' as Category, label: 'Todos los Proyectos', icon: Clapperboard, count: projects.length },
  { id: 'tv' as Category, label: 'Televisión', icon: Tv, count: projects.filter(p => p.category === 'tv').length },
  { id: 'film' as Category, label: 'Cine', icon: Film, count: projects.filter(p => p.category === 'film').length },
  { id: 'theater' as Category, label: 'Teatro', icon: Theater, count: projects.filter(p => p.category === 'theater').length },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full mb-4"
            >
              <Clapperboard className="w-4 h-4 text-slate-700" />
              <span className="text-slate-700 text-sm font-semibold">Trabajos Destacados</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Portfolio Profesional
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              12 series de televisión, 4 películas y múltiples obras de teatro. Más de 300 episodios
              en plataformas nacionales e internacionales.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-slate-900 to-slate-700 text-white shadow-xl scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 shadow-md hover:shadow-lg border border-slate-200'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {selectedCategory === cat.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{cat.label}</span>
                  <span className={`relative z-10 px-2 py-0.5 rounded-full text-xs font-bold ${
                    selectedCategory === cat.id ? 'bg-white/20' : 'bg-slate-100'
                  }`}>
                    {cat.count}
                  </span>
                </motion.button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Rating */}
                    {project.rating && (
                      <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-yellow-500 rounded-full font-bold text-white shadow-lg">
                        <Star className="w-4 h-4 fill-white" />
                        <span>{project.rating}</span>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-900">
                      {project.category === 'tv' && 'TV'}
                      {project.category === 'film' && 'Cine'}
                      {project.category === 'theater' && 'Teatro'}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.role}</p>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                      {project.episodes && (
                        <span className="text-xs">{project.episodes}</span>
                      )}
                    </div>

                    {/* Highlights */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-semibold">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-sm text-gray-500">{project.platform}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white text-center shadow-xl">
              <Tv className="w-10 h-10 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-sm opacity-90">Series de Televisión</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center shadow-xl">
              <Film className="w-10 h-10 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-sm opacity-90">Películas & Cortos</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 text-white text-center shadow-xl">
              <Theater className="w-10 h-10 mx-auto mb-3" />
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Obras de Teatro</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-white rounded-2xl max-w-4xl w-full my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative h-96 rounded-t-2xl overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-white rotate-45" />
                </button>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-xl text-gray-200">{selectedProject.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta info */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-slate-600" />
                    <div>
                      <div className="text-xs text-gray-500">Año</div>
                      <div className="font-semibold">{selectedProject.year}</div>
                    </div>
                  </div>
                  
                  {selectedProject.director && (
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-slate-600" />
                      <div>
                        <div className="text-xs text-gray-500">Director</div>
                        <div className="font-semibold">{selectedProject.director}</div>
                      </div>
                    </div>
                  )}

                  {selectedProject.rating && (
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <div>
                        <div className="text-xs text-gray-500">Rating IMDb</div>
                        <div className="font-semibold">{selectedProject.rating}/10</div>
                      </div>
                    </div>
                  )}

                  {selectedProject.episodes && (
                    <div className="flex items-center gap-3">
                      <Tv className="w-5 h-5 text-slate-600" />
                      <div>
                        <div className="text-xs text-gray-500">Episodios</div>
                        <div className="font-semibold">{selectedProject.episodes}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2">Descripción</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Co-stars */}
                {selectedProject.coStars && selectedProject.coStars.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Reparto Destacado</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.coStars.map((star, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                          {star}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Destacados</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.highlights.map((highlight, i) => (
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-semibold">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* IMDb Link */}
                {selectedProject.imdb && (
                  <a
                    href={selectedProject.imdb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-bold transition-colors"
                  >
                    Ver en IMDb
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
