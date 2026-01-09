'use client'

import { motion } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: '¿Cómo empezaste en la actuación?',
    answer: 'Mi madre me pagó las pruebas para Arte Dramático cuando yo quería estudiar Derecho. Entré "por los pelos" en la ESAD de Sevilla en 2008 y resultó ser la mejor decisión de mi vida. Mis inicios fueron haciendo teatro de calle por pueblos andaluces y trabajando en el Corral de Comedias de Isla Mágica.',
  },
  {
    question: '¿Cuál fue tu primer papel importante?',
    answer: 'Mi primer papel protagonista fue Diego "Dieguito" Ramala en Vis a vis: El Oasis (2020). Fue un punto de inflexión en mi carrera. Antes tuve papeles episódicos en series como Centro Médico y Amar es para siempre, pero El Oasis me dio la oportunidad de demostrar mi rango como actor.',
  },
  {
    question: '¿Qué formación tienes?',
    answer: 'Soy graduado en la Escuela Superior de Arte Dramático de Sevilla (ESAD). Formé parte de la Compañía Nacional de Teatro Clásico bajo la dirección de Helena Pimenta, donde interpreté obras como Fuente Ovejuna y La Villana de Getafe. También me formé en Work In Progress con Darío Facal y en NO-IDENTITY como especialista de cine.',
  },
  {
    question: '¿Qué habilidades especiales tienes?',
    answer: 'Tengo formación en esgrima, equitación, lucha escénica y soy especialista de cine. También toco el violonchelo y la viola de forma autodidacta, canto, bailo (flamenco y danza contemporánea), hago mimo y pantomima. Además, estoy especializado en verso clásico español gracias a mi formación en teatro clásico.',
  },
  {
    question: '¿Cuántos episodios has grabado en total?',
    answer: 'He grabado más de 300 episodios de televisión en total. Solo en La Moderna fueron 236 episodios consecutivos como protagonista. Esto incluye series como Estoy vivo (12 episodios), La Caza: Guadiana (6 episodios), Honor (5 episodios), Operación Barrio Inglés (8 episodios), entre otras.',
  },
  {
    question: '¿Has trabajado en producción internacional?',
    answer: 'Sí, participé en Hernán (2019), la superproducción histórica de Amazon Prime Video sobre la conquista de México. Interpreté a Gonzalo de Sandoval en 8 episodios. Fue una experiencia increíble trabajar en una producción internacional de ese calibre.',
  },
  {
    question: '¿Qué tipo de personajes prefieres?',
    answer: 'Me atraen especialmente los papeles de época histórica. "Tengo cara de época", como dicen. Me apasionan los años 30 y 40 en España porque "cuando aprendes de tu pasado, no cometes los errores". Pero soy muy versátil y disfruto tanto del drama como de la comedia, del teatro clásico como de la televisión contemporánea.',
  },
  {
    question: '¿Estás disponible para nuevos proyectos?',
    answer: 'Sí, estoy disponible para nuevos proyectos a partir de Mayo 2026. Para fechas anteriores o proyectos urgentes, puedes consultar mi disponibilidad específica contactando a través del formulario o email profesional (info@almagrosanmiguel.com).',
  },
  {
    question: '¿Has ganado algún premio?',
    answer: 'Sí, en 2016 el musical Oliver Twist donde interpretaba al Jefe de Policía Duff ganó el premio al Mejor Espectáculo del Año con CIA La Tarasca. También estuve nominado como Mejor Actor Secundario por la Unión de Actores en 2015 por mi trabajo en Fuente Ovejuna con la Compañía Nacional de Teatro Clásico.',
  },
  {
    question: '¿Cómo describen tu trabajo los directores?',
    answer: 'Soy conocido por mi profesionalismo, compromiso y versatilidad. Trabajo duro, respeto el oficio y me preparo exhaustivamente para cada papel. Como yo mismo digo: "Esto no es un jiji ni un jaja, esto es trabajo duro". Creo en la importancia de trabajar codo con codo con todo el equipo y en el respeto mutuo entre profesionales.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-slate-700" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              Preguntas Frecuentes
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Respuestas a las preguntas más comunes sobre mi carrera y trayectoria.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border-2 border-slate-200 overflow-hidden hover:border-slate-400 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-lg pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-700 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-4">
              ¿Tienes más preguntas? No dudes en contactarme.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-all hover:scale-105 font-bold"
            >
              Enviar Consulta
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
