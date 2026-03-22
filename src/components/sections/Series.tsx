'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import {
  Film,
  Tv,
  Play,
  Star,
  ExternalLink,
  Calendar,
  X,
  Sparkles,
  Youtube,
} from 'lucide-react'
import { useState, useRef } from 'react'

interface Project {
  id: string
  title: string
  role: string
  year: string
  yearSort: number
  platform: string
  episodes?: string
  type?: string
  image: string
  rating?: string
  imdb?: string
  youtube?: string
  filmaffinity?: string
  sensacine?: string
  category: string
  description: string
  director?: string
  coStars?: string[]
  highlights?: string[]
}

const projects: Project[] = [
  {
    id: 'operacion-barrio',
    title: 'Operación Barrio Inglés',
    role: 'Toni',
    year: '2024',
    yearSort: 2024,
    platform: 'TVE',
    episodes: '8 episodios',
    image:
      'https://github.com/user-attachments/assets/5fbf0580-cab5-4d3f-a835-74d9c121ef5f',
    rating: '7.5',
    imdb: 'https://www.imdb.com/title/tt27672403/',
    youtube: 'https://www.youtube.com/watch?v=1t0JcwYR-so',
    filmaffinity: 'https://www.filmaffinity.com/es/film704765.html',
    sensacine: 'https://www.sensacine.com/series/serie-36464/',
    category: 'tv',
    description:
      'Thriller de espionaje ambientado en la década de los 40 en Huelva. La serie narra las operaciones del servicio secreto británico en España durante la Segunda Guerra Mundial. Toni es un personaje clave en esta historia de espías.',
    highlights: ['Espionaje', 'Thriller', 'La 1'],
  },
  {
    id: 'la-moderna',
    title: 'La Moderna',
    role: 'Íñigo Peñalver (Protagonista)',
    year: '2023-2024',
    yearSort: 2023.5,
    platform: 'TVE',
    episodes: '236 episodios',
    image:
      'https://github.com/user-attachments/assets/d1a8381f-3ebe-4278-82e7-659e1158b282',
    rating: '7.5',
    imdb: 'https://www.imdb.com/title/tt28507389/',
    youtube: 'https://www.youtube.com/watch?v=ursuF5r4_Ms',
    filmaffinity: 'https://www.filmaffinity.com/es/film141429.html',
    sensacine: 'https://www.sensacine.com/series/serie-35252/',
    category: 'tv',
    description:
      'Serie diaria de época ambientada en el Madrid de los años 40-50. Interpreto a Íñigo Peñalver, uno de los protagonistas masculinos de la serie, un hombre honrado, generoso, bondadoso y muy romántico. Un papel que ha marcado un antes y un después en mi carrera.',
    highlights: ['Protagonista', '236 episodios', 'Prime Time La 1'],
  },
  {
    id: 'la-caza',
    title: 'La Caza: Guadiana',
    role: 'Aurelio "Aure" Santana Mencía',
    year: '2023',
    yearSort: 2023,
    platform: 'TVE',
    episodes: '6 episodios',
    image:
      'https://github.com/user-attachments/assets/c4e2e2ad-dbf6-4f95-a9b7-0e1a3b60c2f9',
    rating: '7.2',
    imdb: 'https://www.imdb.com/title/tt8787372/',
    youtube: 'https://www.youtube.com/watch?v=AHUe0aYf9S8',
    filmaffinity: 'https://www.filmaffinity.com/es/film558512.html',
    sensacine: 'https://www.sensacine.com/series/serie-30545/',
    category: 'tv',
    description:
      'Cuarta entrega de la exitosa franquicia "La Caza". Thriller policíaco que reabre casos sin resolver cuando una de las jóvenes desaparecidas hace cinco años en Monteperdido reaparece misteriosamente.',
    highlights: ['Thriller', '7.2 IMDb', 'La 1'],
  },
  {
    id: 'honor',
    title: 'Honor',
    role: 'Federico "Fede"',
    year: '2023',
    yearSort: 2023,
    platform: 'Atresplayer',
    episodes: '5 episodios',
    image:
      'https://github.com/user-attachments/assets/93c83137-53ad-4c49-854c-528a4974ad64',
    rating: '6.8',
    imdb: 'https://www.imdb.com/title/tt21374322/',
    youtube: 'https://www.youtube.com/watch?v=grtiShqUAkg',
    filmaffinity: 'https://www.filmaffinity.com/es/film984464.html',
    sensacine: 'https://www.sensacine.com/series/serie-32511/',
    category: 'tv',
    description:
      'Thriller dramático sobre un juez honesto que debe proteger a su hijo tras un trágico accidente con la mafia. La serie plantea temas como el poder, la corrupción, la venganza y el honor.',
    highlights: ['Atresplayer', 'Drama', 'Thriller'],
  },
  {
    id: 'desconocidas',
    title: 'Desconocidas',
    role: 'Ramón',
    year: '2022',
    yearSort: 2022,
    platform: 'Canal Sur',
    episodes: '8 episodios',
    image:
      'https://github.com/user-attachments/assets/7a047940-c1b5-4710-bb18-cd29a82d58ff',
    rating: '7.4',
    imdb: 'https://www.imdb.com/title/tt18074418/',
    youtube: 'https://www.youtube.com/watch?v=Xel0dzOmHLA',
    category: 'tv',
    description:
      'Serie andaluza producida por Canal Sur Televisión. Una historia de misterio y drama ambientada en Andalucía con gran acogida del público local.',
    highlights: ['Canal Sur', '8 episodios', 'Andalucía'],
  },
  {
    id: 'estoy-vivo',
    title: 'Estoy vivo',
    role: 'Mikel Uribe',
    year: '2021',
    yearSort: 2021,
    platform: 'TVE',
    episodes: '12 episodios',
    image: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=1000',
    rating: '7.1',
    imdb: 'https://www.imdb.com/title/tt7180852/',
    youtube: 'https://www.youtube.com/watch?v=kw3SvwH4khQ',
    filmaffinity: 'https://www.filmaffinity.com/es/film269606.html',
    sensacine: 'https://www.sensacine.com/series/serie-21983/',
    category: 'tv',
    description:
      'Temporada 4 de la popular serie de TVE. Interpreto a Mikel Uribe, un nuevo policía que se incorpora a la comisaría del barrio. Serie que mezcla policíaco, drama y toques de fantasía.',
    highlights: ['12 episodios', 'La 1', 'Temporada 4'],
  },
  {
    id: 'vis-a-vis',
    title: 'Vis a vis: El Oasis',
    role: 'Diego "Dieguito" Ramala (Protagonista)',
    year: '2020',
    yearSort: 2020,
    platform: 'Star Channel',
    episodes: '6 episodios',
    image:
      'https://github.com/user-attachments/assets/b5f1ac3c-fe6c-4a6f-b16e-e91a5881fd59',
    rating: '6.8',
    imdb: 'https://www.imdb.com/title/tt10375568/',
    youtube: 'https://www.youtube.com/watch?v=t4LYYroY5bo',
    filmaffinity: 'https://www.filmaffinity.com/es/film894080.html',
    sensacine: 'https://www.sensacine.com/series/serie-25156/',
    category: 'tv',
    description:
      'Spin-off de la exitosa serie "Vis a vis". Papel protagonista como Diego "Dieguito" Ramala en este thriller carcelario con distribución internacional en Fox/Star Channel. Una producción de alto nivel con gran seguimiento.',
    highlights: ['Protagonista', 'Star Channel', 'Internacional'],
  },
  {
    id: 'hernan',
    title: 'Hernán',
    role: 'Gonzalo de Sandoval',
    year: '2020',
    yearSort: 2020,
    platform: 'Prime Video',
    episodes: '8 episodios',
    image:
      'https://github.com/user-attachments/assets/992b31fe-c22d-4b9b-b522-f84ad34b6651',
    rating: '6.2',
    imdb: 'https://www.imdb.com/title/tt9645942/',
    youtube: 'https://www.youtube.com/watch?v=CRlE3_JI7ZY',
    filmaffinity: 'https://www.filmaffinity.com/es/film530592.html',
    sensacine: 'https://www.sensacine.com/series/serie-23708/',
    category: 'tv',
    description:
      'Serie histórica épica de Amazon Prime Video sobre la conquista de México. Interpreto a Gonzalo de Sandoval junto a Óscar Jaenada. Mi debut televisivo en una producción internacional de alto presupuesto, estrenada en más de 240 países.',
    highlights: ['Prime Video', '240+ países', 'Épica'],
  },
].sort((a, b) => b.yearSort - a.yearSort)

export default function Series() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="series"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-black py-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-0 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
            >
              <Tv className="h-4 w-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium tracking-wide text-slate-300">
                Series de Televisión
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-6xl"
            >
              Series TV
            </motion.h2>

            {/* Golden line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mx-auto mb-6 h-0.5 w-20 bg-yellow-400"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-400"
            >
              Más de <span className="font-semibold text-white">300 episodios</span> en
              series de televisión nacional e internacional
            </motion.p>
          </div>

          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
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
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
                      <div className="flex flex-col lg:flex-row">
                        <div className="relative h-[480px] w-full flex-shrink-0 overflow-hidden lg:w-80">
                          <div className="relative aspect-[2/3] h-full w-full">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              priority
                              sizes="(max-width: 768px) 100vw, 400px"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 lg:bg-gradient-to-r" />

                          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 shadow-lg">
                              <Play
                                className="ml-0.5 h-6 w-6 text-black"
                                fill="currentColor"
                              />
                            </div>
                          </div>

                          <div className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black shadow-lg">
                            {project.platform}
                          </div>

                          {project.rating && (
                            <div className="absolute right-4 top-4 flex items-center gap-1 rounded-lg bg-yellow-400 px-2 py-1 text-xs font-bold text-black shadow-lg">
                              <Star className="h-3 w-3 fill-black" />
                              {project.rating}
                            </div>
                          )}
                        </div>

                        <div className="flex-1 p-6 lg:p-8">
                          <div className="mb-3 flex items-start justify-between gap-4">
                            <h3 className="text-2xl font-bold text-white">
                              {project.title}
                            </h3>
                            <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                              {project.year}
                            </span>
                          </div>

                          <p className="mb-3 text-lg text-slate-300">
                            <span className="font-semibold text-white">
                              {project.role}
                            </span>
                            {project.episodes && (
                              <span className="text-slate-500">
                                {' '}
                                • {project.episodes}
                              </span>
                            )}
                          </p>

                          <p className="mb-4 leading-relaxed text-slate-400">
                            {project.description}
                          </p>

                          {project.highlights && project.highlights.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {project.highlights.map((highlight, i) => (
                                <span
                                  key={i}
                                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                                >
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
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">
                8 series • +300 episodios • TVE, Prime Video, Star Channel, Atresplayer,
                Canal Sur
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
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative my-8 w-full max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md transition-colors hover:bg-yellow-400 hover:text-black"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-[650px] overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1000px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent backdrop-blur-sm" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-3 inline-block rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-black">
                    {selectedProject.platform}
                  </div>
                  <h3 className="mb-2 text-4xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xl font-semibold text-slate-200">
                    {selectedProject.role}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6 grid gap-6 md:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-yellow-400" />
                    <div>
                      <div className="text-xs uppercase text-slate-500">Año</div>
                      <div className="font-semibold text-white">
                        {selectedProject.year}
                      </div>
                    </div>
                  </div>

                  {selectedProject.rating && (
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-yellow-400" />
                      <div>
                        <div className="text-xs uppercase text-slate-500">IMDb</div>
                        <div className="font-semibold text-white">
                          {selectedProject.rating}/10
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProject.episodes && (
                    <div className="flex items-center gap-3">
                      <Tv className="h-5 w-5 text-yellow-400" />
                      <div>
                        <div className="text-xs uppercase text-slate-500">Episodios</div>
                        <div className="font-semibold text-white">
                          {selectedProject.episodes}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <p className="mb-6 leading-relaxed text-slate-300">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {selectedProject.youtube && (
                    <motion.a
                      href={selectedProject.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl"
                    >
                      <Youtube className="h-5 w-5" />
                      Ver en YouTube
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  )}

                  {selectedProject.imdb && (
                    <motion.a
                      href={selectedProject.imdb}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black shadow-lg transition-all hover:bg-yellow-300 hover:shadow-xl"
                    >
                      <Star className="h-5 w-5" />
                      Ver en IMDb
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  )}

                  {selectedProject.filmaffinity && (
                    <motion.a
                      href={selectedProject.filmaffinity}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold shadow-lg transition-all hover:shadow-xl"
                      style={{ backgroundColor: '#FA6432', color: 'white' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = '#E55A2B')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = '#FA6432')
                      }
                    >
                      <Film className="h-5 w-5" />
                      Ver en FilmAffinity
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  )}

                  {selectedProject.sensacine && (
                    <motion.a
                      href={selectedProject.sensacine}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold shadow-lg transition-all hover:shadow-xl"
                      style={{ backgroundColor: '#0066CC', color: 'white' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = '#0052A3')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = '#0066CC')
                      }
                    >
                      <Film className="h-5 w-5" />
                      Ver en SensaCine
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
