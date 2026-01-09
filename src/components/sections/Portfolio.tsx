'use client'

import { motion } from 'framer-motion'
import { Calendar, User, Award } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { projects, categories } from '@/lib/data/projects'

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
                className="group relative overflow-hidden rounded-xl bg-card shadow-lg transition-all hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 backdrop-blur-sm">
                    <Icon size={14} />
                    <span className="text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    <Calendar size={12} />
                    {project.year}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 font-serif text-xl font-bold">
                    {project.title}
                  </h3>

                  <div className="mb-3 flex items-start gap-2 text-sm text-primary">
                    <User size={16} className="mt-0.5 flex-shrink-0" />
                    <p className="font-medium">{project.role}</p>
                  </div>

                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Director & Production */}
                  {(project.director || project.production) && (
                    <div className="mb-4 space-y-1 text-xs text-muted-foreground">
                      {project.director && (
                        <p>
                          <span className="font-semibold">Dirección:</span>{' '}
                          {project.director}
                        </p>
                      )}
                      {project.production && (
                        <p>
                          <span className="font-semibold">Producción:</span>{' '}
                          {project.production}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Awards */}
                  {project.awards && project.awards.length > 0 && (
                    <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-950/30">
                      <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400">
                        <Award size={14} />
                        Premios
                      </div>
                      {project.awards.map((award, i) => (
                        <p
                          key={i}
                          className="text-xs text-amber-600 dark:text-amber-300"
                        >
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

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          Mostrando {filteredProjects.length} de {projects.length} proyectos
        </motion.div>
      </div>
    </section>
  )
}
