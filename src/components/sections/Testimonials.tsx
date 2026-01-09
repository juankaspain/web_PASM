'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      '"Es un caballero de los pies a la cabeza. Me gusta su sentido de la lealtad, su empatía con todos los que le rodean. Cuando ama, ama de verdad."',
    author: 'Almagro San Miguel',
    role: 'Sobre su personaje Íñigo Peñalver en La Moderna',
    source: 'Entrevista RTVE',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    quote:
      '"El amor tiende a no caber en definiciones. El que ama sabe que ama y punto. Yo me veo muy así, cuando ama Íñigo, yo también soy así."',
    author: 'Almagro San Miguel',
    role: 'Reflexionando sobre el amor y su personaje',
    source: 'Entrevista RTVE',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    quote:
      '"Al principio tenía una voz en la cabeza que me decía que era muy mal actor y me fustigaba mucho. Me paran señoras mayores y me hablan como a mi personaje de La Moderna."',
    author: 'Almagro San Miguel',
    role: 'Sobre el síndrome del impostor',
    source: 'La Vanguardia',
    url: 'https://www.lavanguardia.com/gente/20251017/11166920/almagro-san-miguel-principio-tenia-voz-cabeza-me-decia-mal-actor-me-fustiga',
  },
  {
    quote:
      '"No me pongo intenso solamente con la historia, también soy un intenso de la vida. Soy muy friki, a mí me gusta Star Wars y El Señor de los Anillos."',
    author: 'Almagro San Miguel',
    role: 'Sobre su personalidad',
    source: 'La Vanguardia',
    url: 'https://www.lavanguardia.com/gente/20251017/11166920/almagro-san-miguel-principio-tenia-voz-cabeza-me-decia-mal-actor-me-fustiga',
  },
  {
    quote:
      '"Es un privilegio trabajar con Agustín Díaz Yanes. Crea un ambiente muy tranquilo, se percibe su experiencia, te da dos o tres detalles. Saber hablarte, eso es sapiencia."',
    author: 'Almagro San Miguel',
    role: 'Sobre el director de Un fantasma en la batalla',
    source: 'Diario de Sevilla',
    url: 'https://www.diariodesevilla.es/television/almagro-san-miguel-moderna-pelicula_0_2004995240.html',
  },
  {
    quote:
      '"Cada vez que me vienen nuevos guiones me sorprendo. Me encanta que sea así, no te puedes quedar tranquilo pensando que todo está bien o mal, porque en un segundo cambia."',
    author: 'Almagro San Miguel',
    role: 'Sobre trabajar en La Moderna',
    source: 'Entrevista RTVE',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    quote:
      '"Lo más importante para que todo salga bien es trabajar codo con codo con todas las personas que conformamos la serie y a partir de ahí sumando siempre y aportando."',
    author: 'Almagro San Miguel',
    role: 'Sobre el trabajo en equipo',
    source: 'Entrevista RTVE',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    quote:
      '"España es muy rica en historia y tenemos mucho que enseñar al mundo, que aprender de nosotros mismo, de lo que enorgullecernos y otras en las que mirarnos y reflexionar."',
    author: 'Almagro San Miguel',
    role: 'Sobre su pasión por proyectos históricos',
    source: 'Entrevista RTVE',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    quote:
      '"Cada proyecto, personaje, es otra historia, otro mundo, otros conflictos, debilidades… La posibilidad también de aprender de la historia de tu país me llena mucho."',
    author: 'Almagro San Miguel',
    role: 'Sobre su amor por la interpretación',
    source: 'Entrevista RTVE',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    quote:
      '"Me trabajé mucho las audiciones porque la oportunidad así lo requería. Recuerdo que cuando leí las separatas, me sentía muy en sintonía con lo que ahí se reflejaba."',
    author: 'Almagro San Miguel',
    role: 'Sobre conseguir el papel de Íñigo',
    source: 'Entrevista RTVE',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="w-8 h-8 text-slate-700" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              En Sus Palabras
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Reflexiones y pensamientos sobre su carrera, personajes y visión del arte de la interpretación.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <Quote className="w-8 h-8 text-slate-300 mb-4" />
                <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                  <a
                    href={testimonial.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Fuente: {testimonial.source} →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-4">
              ¿Quieres saber más sobre mi trabajo y trayectoria?
            </p>
            <a
              href="#press"
              className="inline-block px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-colors font-semibold"
            >
              Ver todas las entrevistas
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
