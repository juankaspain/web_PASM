'use client'

import { motion } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: '¿Cómo empezaste en el mundo de la actuación?',
    answer: 'Mi madre me pagó las pruebas de acceso a la ESAD de Sevilla cuando yo quería estudiar Derecho. Entré "por los pelos" y fue la mejor decisión de mi vida. Después de graduarme, empecé haciendo teatro de calle en pueblos andaluces y trabajando en Isla Mágica durante años antes de dar el salto a la televisión.',
  },
  {
    question: '¿Cuál ha sido tu papel más importante hasta ahora?',
    answer: 'Sin duda, mi papel protagonista de Íñigo Peñalver en "La Moderna" (TVE), donde interpreté 236 episodios consecutivos como el galán de las tardes. Fue un reto enorme por el ritmo frenético de grabación, pero también una experiencia increible que me permitió conectar con el público de forma muy especial.',
  },
  {
    question: '¿Qué tipo de formación tienes?',
    answer: 'Soy graduado en Arte Dramático por la ESAD de Sevilla. Formé parte de la Compañía Nacional de Teatro Clásico bajo la dirección de Helena Pimenta, donde trabajé obras como "Fuente Ovejuna" (por la que fui nominado a Mejor Actor Secundario). También he recibido formación en Work In Progress con Darío Facal y soy especialista de cine con el grupo NO-IDENTITY.',
  },
  {
    question: '¿Qué habilidades especiales tienes para roles?',
    answer: 'Tengo formación especializada en esgrima, equitación, verso clásico español (Calderón, Lope de Vega, Shakespeare), lucha escénica y acrobacias. También toco violonchelo y viola como autodidacta, y tengo experiencia en danza, flamenco, mimo y teatro de calle.',
  },
  {
    question: '¿Cuál es tu disponibilidad actual?',
    answer: 'Estoy disponible para nuevos proyectos a partir de mayo de 2026. Para fechas anteriores o proyectos urgentes, puedes consultar disponibilidad específica contactando directamente por email a info@almagrosanmiguel.com.',
  },
  {
    question: '¿Trabajaste con alguna plataforma internacional?',
    answer: 'Sí, he trabajado con Prime Video en la superproducción "Hernán" (2019) interpretando a Gonzalo de Sandoval. También participé en "Vis a vis: El Oasis" para Fox España/Star Channel, que fue mi primer papel protagonista como Diego "Dieguito" Ramala.',
  },
  {
    question: '¿Qué te gusta interpretar?',
    answer: 'Me apasionan especialmente las producciones de época, los años 30-40 en España, y el teatro clásico. Me interesa interpretar personajes complejos con conflictos internos profundos. Como digo siempre, "cuando aprendes de tu pasado, no cometes los mismos errores", por eso me atraen tanto los proyectos históricos.',
  },
  {
    question: '¿Qué premios has ganado?',
    answer: 'En 2016 gané el premio al Mejor Espectáculo del Año con el musical "Oliver Twist", interpretando al Jefe de Policía Duff. En 2015 fui nominado a Mejor Actor Secundario por la Unión de Actores por mi trabajo en "Fuente Ovejuna" con la Compañía Nacional de Teatro Clásico.',
  },
  {
    question: '¿Cómo te preparas para un personaje?',
    answer: 'Me gusta trabajar mucho las audiciones y separatas. Cuando me identifico con el personaje, la conexión es inmediata. Investigo el contexto histórico, leo sobre la época, y busco referencias visuales y emocionales. También trabajo codo con codo con directores y compañeros de reparto, porque creo que lo más importante es el trabajo en equipo.',
  },
  {
    question: '¿Qué consejo darías a actores que empiezan?',
    answer: '"Si decides estar en esto, trabaja. Esto no es un jiji ni un jaja, esto es trabajo duro. Hay que respetarnos entre nosotros porque no todo vale." Es muy difícil llegar, pero luego hay que mantenerse: otro año, otro año, otro año. Yo estuve poniendo copas, trabajando en discotecas, pasando Navidades solo en Madrid... Lo haces porque tienes un plan y crees en él.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
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
            Respuestas a las preguntas más comunes sobre mi carrera, formación y disponibilidad.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-slate-400 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-700 flex-shrink-0 transition-transform duration-300 ${
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
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
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
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              ¿No encuentras la respuesta que buscas?
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-colors font-semibold"
            >
              Contáctame Directamente
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
