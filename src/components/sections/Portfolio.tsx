'use client'

import { motion } from 'framer-motion'
import { Film, TvMinimal, Theater, Calendar } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const categories = ['Todos', 'Cine', 'TV', 'Teatro']

const projects = [
  {
    id: 1,
    title: 'El Último Adiós',
    category: 'Cine',
    role: 'Protagonista',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800',
    description:
      'Drama intenso sobre pérdida y redención en la España contemporánea.',
    icon: Film,
    awards: ['Mejor Actor - Festival de Málaga 2024'],
  },
  {
    id: 2,
    title: 'Sombras de Medianoche',
    category: 'TV',
    role: 'Personaje Recurrente',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800',
    description:
      'Serie de suspense que cautivó a millones de espectadores.',
    icon: TvMinimal,
  },
  {
    id: 3,
    title: 'Hamlet',
    category: 'Teatro',
    role: 'Hamlet',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=800',
    description: 'Adaptación moderna del clásico de Shakespeare.',
    icon: Theater,
    awards: ['Nominación Mejor Actor - Premios Max 2023'],
  },
  {
    id: 4,
    title: 'Caminos Cruzados',
    category: 'Cine',
    role: 'Secundario',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800',
    description: 'Comedia dramática sobre encuentros fortuitos.',
    icon: Film,
  },
  {
    id: 5,
    title: 'La Casa de Bernarda Alba',
    category: 'Teatro',
    role: 'Pepe el Romano',
    year: 2022,
    image:
      'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800',
    description: 'Clásico de Lorca en el Teatro Lope de Vega.',
    icon: Theater,
  },
  {
    id: 6,
    title: 'Código Rojo',
    category: 'TV',
    role: 'Protagonista',
    year: 2022,
    image:
      'https://images.unsplash.com/photo-1574267432644-f046462e8e4d?q=80&w=800',
    description: 'Thriller policial con altos ratings.',
    icon: TvMinimal,
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold lg:text-5xl">
            Portafolio
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Una selección de mis trabajos más recientes en cine, televisión y
            teatro
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? 'rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-all'
                  : 'rounded-full border border-primary px-6 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground'
              }
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-card shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
                    <Icon size={14} />
                    <span className="text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {project.year}
                    </div>
                  </div>

                  <p className="mb-2 text-sm font-medium text-primary">
                    {project.role}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {project.awards && (
                    <div className="mt-4 rounded-lg bg-muted/50 p-3">
                      <p className="text-xs font-semibold">Premios:</p>
                      {project.awards.map((award, i) => (
                        <p key={i} className="text-xs text-muted-foreground">
                          • {award}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
