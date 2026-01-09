'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, GraduationCap, Star } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { icon: Briefcase, label: 'Proyectos', value: '50+' },
  { icon: Award, label: 'Premios', value: '12' },
  { icon: Star, label: 'Nominaciones', value: '25' },
  { icon: GraduationCap, label: 'Años', value: '15+' },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold lg:text-5xl">
            Sobre Mí
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                alt="Pedro Almagro - Behind the scenes"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4 font-serif text-3xl font-bold">
              Pasión por el Arte Escénico
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Nacido y criado en Sevilla, descubrí mi pasión por la
                actuación a los 12 años en una pequeña función escolar. Desde
                entonces, he dedicado mi vida a perfeccionar el arte de contar
                historias a través de la interpretación.
              </p>

              <p className="leading-relaxed">
                Mi formación incluye estudios en la Real Escuela Superior de
                Arte Dramático de Madrid y workshops internacionales en Nueva
                York y Londres. He trabajado en más de 50 producciones entre
                teatro, cine y televisión, colaborando con directores
                reconocidos nacional e internacionalmente.
              </p>

              <p className="leading-relaxed">
                Mi enfoque está en crear personajes auténticos y memorables que
                resuenen con el público. Creo en el poder transformador del
                teatro y el cine para generar empatía y comprensión en nuestra
                sociedad.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <Icon className="mx-auto mb-2 h-8 w-8 text-primary" />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
