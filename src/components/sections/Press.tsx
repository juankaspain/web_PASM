'use client'

import { motion } from 'framer-motion'
import { Quote, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const pressItems = [
  {
    publication: 'El País',
    date: '15 de Marzo, 2024',
    title:
      'Pedro Almagro brilla en su interpretación de "El Último Adiós"',
    excerpt:
      'Una actuación magistral que confirma a Almagro como uno de los actores más talentosos de su generación.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400',
    link: '#',
  },
  {
    publication: 'ABC Sevilla',
    date: '8 de Febrero, 2024',
    title: 'El hijo pródigo del teatro sevillano',
    excerpt:
      'Pedro Almagro regresa a sus raíces con una interpretación emotiva y poderosa en el Teatro Lope de Vega.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400',
    link: '#',
  },
  {
    publication: 'Fotogramas',
    date: '22 de Enero, 2024',
    title: 'Los rostros del cine español a seguir en 2024',
    excerpt:
      'Almagro encabeza nuestra lista de actores emergentes con proyectos que prometen cautivar al público.',
    image:
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=400',
    link: '#',
  },
]

const testimonials = [
  {
    text: 'Pedro tiene esa rara habilidad de desaparecer completamente en sus personajes. Es un placer dirigirlo.',
    author: 'Carmen Martínez',
    role: 'Directora de Cine',
  },
  {
    text: 'Su compromiso con cada proyecto y su profesionalismo son ejemplares. Un verdadero artista.',
    author: 'Javier Sánchez',
    role: 'Director de Teatro',
  },
]

export default function Press() {
  return (
    <section id="press" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold lg:text-5xl">
            Prensa & Testimonios
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Lo que dicen los medios y colegas de la industria
          </p>
        </motion.div>

        {/* Press Articles */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pressItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl bg-card shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.publication}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-semibold text-primary">
                    {item.publication}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>

                <h3 className="mb-3 font-serif text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mb-4 text-sm text-muted-foreground">
                  {item.excerpt}
                </p>

                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Leer más
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-xl bg-card p-8 shadow-lg"
            >
              <Quote className="absolute left-8 top-8 h-12 w-12 text-primary/20" />
              <p className="relative z-10 mb-6 text-lg italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
