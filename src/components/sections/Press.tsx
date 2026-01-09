'use client'

import { motion } from 'framer-motion'
import { Quote, ExternalLink, Newspaper, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import { pressArticles, testimonials } from '@/lib/data/press'

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

        {/* Press Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-2"
          >
            <Newspaper className="text-primary" size={24} />
            <h3 className="font-serif text-2xl font-bold">En los Medios</h3>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pressArticles.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-xl bg-card shadow-lg transition-all hover:shadow-2xl hover:scale-[1.02]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.publication}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize backdrop-blur-sm">
                    {item.category === 'interview'
                      ? 'Entrevista'
                      : item.category === 'review'
                        ? 'Crítica'
                        : 'Noticia'}
                  </div>
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

                  <h3 className="mb-3 line-clamp-2 font-serif text-lg font-bold leading-tight">
                    {item.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                    {item.excerpt}
                  </p>

                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    Leer artículo completo
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-2"
          >
            <MessageSquare className="text-primary" size={24} />
            <h3 className="font-serif text-2xl font-bold">
              Testimonios de Colegas
            </h3>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl bg-card p-8 shadow-lg"
              >
                <Quote className="absolute left-8 top-8 h-12 w-12 text-primary/20" />
                <p className="relative z-10 mb-6 text-lg italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  {testimonial.image && (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
