'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import { Film, Tv, Theater, Play, Star, ExternalLink, Calendar, Clapperboard, X, Sparkles } from 'lucide-react'
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
}

const projects: Project[] = [
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
    description: 'Serie diaria de época ambientada en los años 40-50. Papel protagonista como galán durante más de 230 episodios en prime time de TVE.',
    highlights: ['Protagonista', '236 episodios', 'Prime Time TVE'],
  },
  {
    id: 'vis-a-vis',
    title: 'Vis a vis: El Oasis',
    role: 'Diego "Dieguito" Ramala (Protagonista)',
    year: '2020',
    platform: 'Fox/Star',
    episodes: '6 episodios',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000',
    rating: '6.8',
    imdb: 'https://www.imdb.com/title/tt11177074/',
    category: 'tv',
    description: 'Papel protagonista en el spin-off de la exitosa serie "Vis a vis". Thriller carcelario con distribución internacional.',
    highlights: ['Protagonista', 'Fox/Star Channel', 'Internacional'],
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
    description: 'Serie histórica de Amazon Prime Video sobre la conquista de México. Producción internacional de alto presupuesto.',
    highlights: ['Prime Video', '240+ países', 'Épica'],
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
    description: 'Thriller policial ambientado en Sevilla. Serie de acción con alto nivel de exigencia física y dramática.',
    highlights: ['Acción', 'TVE 2024', 'Sevilla'],
  },
  {
    id: 'la-caza',
    title: 'La Caza: Guadiana',
    role: 'Aurelio "Aure" Santana Mencía',
    year: '2023',
    platform: 'TVE',
    episodes: '6 episodios',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000',
    rating: '7.3',
    imdb: 'https://www.imdb.com/title/tt15398770/',
    category: 'tv',
    description: 'Thriller policiaco de la exitosa franquicia La Caza. Investigación de crímenes sin resolver.',
    highlights: ['Thriller', '7.3 IMDb', 'TVE'],
  },
  {
    id: 'estoy-vivo',
    title: 'Estoy vivo',
    role: 'Mikel Uribe',
    year: '2021',
    platform: 'TVE',
    episodes: '12 episodios',
    image: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=1000',
    category: 'tv',
    description: 'Temporada 4 de la popular serie de TVE. Interpreto a Mikel Uribe, un nuevo policía de la comisaría.',
    highlights: ['12 episodios', 'TVE', 'Temporada 4'],
  },
  {
    id: 'desconocidas',
    title: 'Desconocidas',
    role: 'Ramón',
    year: '2022',
    platform: 'Canal Sur',
    episodes: '8 episodios',
    image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=1000',
    category: 'tv',
    description: 'Serie andaluza producida por Canal Sur. Papel destacado en los 8 episodios de la temporada.',
    highlights: ['Canal Sur', '8 episodios', 'Andalucía'],
  },
  {
    id: 'honor',
    title: 'Honor',
    role: 'Federico "Fede"',
    year: '2023',
    platform: 'Atresplayer',
    episodes: '5 episodios',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000',
    category: 'tv',
    description: 'Serie dramática de Atresplayer. Participación destacada como Federico en 5 episodios.',
    highlights: ['Atresplayer', '5 episodios', 'Drama'],
  },
  {
    id: 'centro-medico',
    title: 'Centro médico',
    role: 'Episodio invitado',
    year: '2017',
    platform: 'TVE',
    episodes: '1 episodio',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000',
    category: 'tv',
    description: 'Uno de mis primeros trabajos en televisión. Debut en la serie médica de La 1.',
    highlights: ['Debut TV', 'TVE', '2017'],
  },
  {
    id: 'grupo2',
    title: 'Grupo 2 Homicidios',
    role: 'Jorge de Haro',
    year: '2017',
    platform: 'Aragón TV / Cuatro',
    episodes: '1 episodio',
    image: 'https://images.unsplash.com/photo-1551379840-f0dd5920233c?q=80&w=1000',
    category: 'tv',
    description: 'Serie policiaca donde interpreté a Jorge de Haro en un episodio destacado.',
    highlights: ['Cuatro', 'Policiaca', '2017'],
  },
]

const categories = [
  { id: 'all' as Category, label: 'Todas', icon: Clapperboard, count: projects.length },
  { id: 'tv' as Category, label: 'Televisión', icon: Tv, count: projects.filter(p => p.category === 'tv').length },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
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
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <Tv className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Series de Televisión</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
            >
              Portfolio Televisión
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Más de <span className="text-white font-semibold">300 episodios</span> en series de televisión. 
              Plataformas: TVE, Prime Video, Fox/Star, Atresplayer, Canal Sur
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = selectedCategory === cat.id
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2.5 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-yellow-400 text-black shadow-lg'
                      : 'bg-white/[0.03] text-slate-300 border border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    isActive ? 'bg-black/20 text-black' : 'bg-white/5 text-slate-400'
                  }`}>
                    {cat.count}
                  </span>
                </motion.button>
              )
            })}
          </motion.div>

          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative bg-white/[0.02] border border-white/10 rounded-xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 overflow-hidden">
                      <div className="flex flex-col lg:flex-row">
                        <div className="relative w-full lg:w-80 h-48 lg:h-auto flex-shrink-0">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 lg:bg-gradient-to-r" />
                          
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                              <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                            </div>
                          </div>

                          <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 rounded-full text-black text-xs font-bold shadow-lg">
                            {project.platform}
                          </div>

                          {project.rating && (
                            <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-yellow-400 rounded-lg font-bold text-black text-xs shadow-lg">
                              <Star className="w-3 h-3 fill-black" />
                              {project.rating}
                            </div>
                          )}
                        </div>

                        <div className="flex-1 p-6 lg:p-8">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="text-2xl font-bold text-white">
                              {project.title}
                            </h3>
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-400 whitespace-nowrap">
                              {project.year}
                            </span>
                          </div>

                          <p className="text-lg text-slate-300 mb-3">
                            <span className="font-semibold text-white">{project.role}</span>
                            {project.episodes && <span className="text-slate-500"> • {project.episodes}</span>}
                          </p>

                          <p className="text-slate-400 leading-relaxed mb-4">
                            {project.description}
                          </p>

                          {project.highlights && project.highlights.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {project.highlights.map((highlight, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-slate-300">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <motion.div 
                        className="absolute bottom-0 left-0 h-[2px] bg-yellow-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">
                +300 episodios en televisión nacional e internacional
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl max-w-4xl w-full shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-80 rounded-t-2xl overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="inline-block px-3 py-1 bg-yellow-400 rounded-full text-black text-sm font-bold mb-3">
                    {selectedProject.platform}
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-xl text-slate-200 font-semibold">{selectedProject.role}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-xs text-slate-500 uppercase">Año</div>
                      <div className="font-semibold text-white">{selectedProject.year}</div>
                    </div>
                  </div>
                  
                  {selectedProject.rating && (
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <div>
                        <div className="text-xs text-slate-500 uppercase">IMDb</div>
                        <div className="font-semibold text-white">{selectedProject.rating}/10</div>
                      </div>
                    </div>
                  )}

                  {selectedProject.episodes && (
                    <div className="flex items-center gap-3">
                      <Tv className="w-5 h-5 text-yellow-400" />
                      <div>
                        <div className="text-xs text-slate-500 uppercase">Episodios</div>
                        <div className="font-semibold text-white">{selectedProject.episodes}</div>
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">{selectedProject.description}</p>

                {selectedProject.imdb && (
                  <motion.a
                    href={selectedProject.imdb}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-yellow-300 transition-all"
                  >
                    <Star className="w-5 h-5" />
                    Ver en IMDb
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
