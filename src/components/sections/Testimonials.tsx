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
      '"Entré por los pelos en la carrera de Arte Dramático. Mi madre me pagó las pruebas cuando yo quería estudiar Derecho. Fue la mejor decisión de mi vida."',
    author: 'Almagro San Miguel',
    role: 'Sobre sus inicios',
    source: 'El Plural TV',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
  },
  {
    quote:
      '"Mis inicios fueron haciendo teatro de calle. No nos contrataba ni Cristo, entonces dijimos: vamos a juntarnos y nos íbamos a las plazas de los pueblos a actuar."',
    author: 'Almagro San Miguel',
    role: 'Sobre sus primeros trabajos',
    source: 'El Plural TV',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
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
      '"Es un privilegio trabajar con Agustín Díaz Yanes. Crea un ambiente muy tranquilo, se percibe su experiencia, te da dos o tres detalles. Saber hablarte, eso es sapiencia."',
    author: 'Almagro San Miguel',
    role: 'Sobre el director de Un fantasma en la batalla',
    source: 'Diario de Sevilla',
    url: 'https://www.diariodesevilla.es/television/almagro-san-miguel-moderna-pelicula_0_2004995240.html',
  },
  {
    quote:
      '"Me llama mucho la atención los años 40 y 30 en España. Al parecer tengo cara de época. Cuando aprendes de tu pasado, no cometes los errores."',
    author: 'Almagro San Miguel',
    role: 'Sobre su pasión por la época',
    source: 'El Plural TV',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
  },
  {
    quote:
      '"El amor tiende a no caber en definiciones. El que ama sabe que ama y punto. Yo me veo muy así, cuando ama Íñigo, yo también soy así."',
    author: 'Almagro San Miguel',
    role: 'Reflexionando sobre el amor',
    source: 'Entrevista RTVE',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
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
      '"Lo más importante es trabajar codo con codo con todas las personas que conformamos la serie. Es muy difícil llegar, pero luego mantente: otro año, otro año, otro año."',
    author: 'Almagro San Miguel',
    role: 'Sobre el trabajo en equipo y la perseverancia',
    source: 'El Plural TV',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
  },
  {
    quote:
      '"Si decides estar en esto, trabaja. Esto no es un jiji ni un jaja, esto es trabajo duro. Hay que respetarnos entre nosotros porque no todo vale."',
    author: 'Almagro San Miguel',
    role: 'Sobre los influencers en la actuación',
    source: 'El Plural TV',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
  },
  {
    quote:
      '"Cada proyecto, personaje, es otra historia, otro mundo, otros conflictos. La posibilidad de aprender de la historia de tu país me llena mucho."',
    author: 'Almagro San Miguel',
    role: 'Sobre su amor por la interpretación',
    source: 'Entrevista RTVE',
    url: 'https://www.rtve.es/television/20231202/moderna-entrevista-almagro-san-miguel-inigo-penalver/2463590.shtml',
  },
  {
    quote:
      '"Estuve poniendo copas y trabajando de lo que fuera. Me mamé muchas Navidades en Madrid solito, trabajando en discotecas mientras mi familia estaba de fiesta. Lo haces porque tienes un plan."',
    author: 'Almagro San Miguel',
    role: 'Sobre sacrificios antes del éxito',
    source: 'El Plural TV',
    url: 'https://www.youtube.com/watch?v=ts2qSZpSO_I',
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
