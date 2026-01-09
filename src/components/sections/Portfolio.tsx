'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Film, Tv, Theater } from 'lucide-react'

const tvProjects = [
  {
    title: 'La Moderna',
    role: 'Íñigo Peñalver (Protagonista)',
    year: '2023-2024',
    platform: 'La 1 (TVE)',
    episodes: '236 episodios',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1000',
    rating: '7.5',
    imdb: 'https://www.imdb.com/title/tt28688509/',
  },
  {
    title: 'Operación Barrio Inglés',
    role: 'Toni',
    year: '2024',
    platform: 'La 1 (TVE)',
    episodes: '8 episodios',
    image: 'https://images.unsplash.com/photo-1574267432644-f74f8ec9cfd0?q=80&w=1000',
    rating: '7.5',
    imdb: 'https://www.imdb.com/title/tt30321421/',
  },
  {
    title: 'La Caza: Guadiana',
    role: 'Aurelio "Aure" Santana Mencía',
    year: '2023',
    platform: 'La 1 (TVE)',
    episodes: '6 episodios',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1000',
    rating: '7.2',
    imdb: 'https://www.imdb.com/title/tt15398770/',
  },
  {
    title: 'Honor',
    role: 'Federico "Fede"',
    year: '2023',
    platform: 'Atresplayer',
    episodes: '5 episodios',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000',
    rating: '6.9',
    imdb: 'https://www.imdb.com/title/tt21217236/',
  },
  {
    title: 'Desconocidas',
    role: 'Ramón',
    year: '2022',
    platform: 'Canal Sur',
    episodes: '8 episodios',
    image: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?q=80&w=1000',
    rating: '7.4',
  },
  {
    title: 'Estoy vivo',
    role: 'Mikel Uribe',
    year: '2021',
    platform: 'La 1 (TVE)',
    episodes: '12 episodios',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000',
    rating: '7.5',
    imdb: 'https://www.imdb.com/title/tt6155066/',
  },
  {
    title: 'Vis a vis: El Oasis',
    role: 'Diego "Dieguito" Ramala (Protagonista)',
    year: '2020',
    platform: 'Fox España / Star Channel',
    episodes: '6 episodios',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000',
    rating: '7.8',
    imdb: 'https://www.imdb.com/title/tt11177074/',
  },
  {
    title: 'Hernán',
    role: 'Gonzalo de Sandoval',
    year: '2019',
    platform: 'Prime Video',
    episodes: '8 episodios',
    image: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=1000',
    rating: '7.4',
    imdb: 'https://www.imdb.com/title/tt8741704/',
  },
]

const filmProjects = [
  {
    title: 'Un fantasma en la batalla',
    role: 'Antonio',
    year: '2025',
    type: 'Largometraje',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000',
    rating: '6.8',
    imdb: 'https://www.imdb.com/title/tt28278100/',
  },
  {
    title: 'Fueron los días',
    role: 'Reparto',
    year: '2023',
    type: 'Largometraje',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000',
    rating: '6.4',
  },
  {
    title: 'Mario, Kike y David',
    role: 'Mario',
    year: '2016',
    type: 'Cortometraje',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1000',
    rating: '7.1',
  },
  {
    title: 'Lapso',
    role: 'Rodolfo',
    year: '2013',
    type: 'Cortometraje',
    image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1000',
    rating: '8.6',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Portfolio
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Una selección de mis trabajos en televisión, cine y teatro a lo largo de mi carrera profesional.
          </p>

          {/* TV Series */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Tv className="w-6 h-6 text-slate-700" />
              <h3 className="text-3xl font-serif font-bold text-center">Televisión</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tvProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {project.rating && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold">
                        ★ {project.rating}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-2">{project.role}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                      <span>{project.year}</span>
                      <span>{project.episodes}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{project.platform}</p>
                    {project.imdb && (
                      <a
                        href={project.imdb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white text-sm rounded transition-colors"
                      >
                        Ver en IMDb
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Film */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <Film className="w-6 h-6 text-slate-700" />
              <h3 className="text-3xl font-serif font-bold text-center">Cine</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filmProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {project.rating && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold">
                        ★ {project.rating}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{project.role}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                      <span>{project.year}</span>
                      <span className="text-xs">{project.type}</span>
                    </div>
                    {project.imdb && (
                      <a
                        href={project.imdb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1.5 bg-yellow-600 hover:bg-yellow-700 text-white text-xs rounded transition-colors"
                      >
                        IMDb
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Theater Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-slate-100 rounded-lg p-8 text-center"
          >
            <Theater className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold mb-3">Teatro Clásico</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Formación con la <strong>Compañía Nacional de Teatro Clásico</strong>, 
              donde desarrolló las bases de su técnica interpretativa en obras del repertorio clásico español.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
