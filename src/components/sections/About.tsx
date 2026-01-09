'use client'

import { motion } from 'framer-motion'
import { Award, Book, Film, Sword, Music, Theater } from 'lucide-react'
import Image from 'next/image'

const skills = [
  { icon: Sword, name: 'Esgrima' },
  { icon: Music, name: 'Violonchelo & Viola' },
  { icon: Theater, name: 'Teatro de Calle' },
  { icon: Film, name: 'Especialista de Cine' },
  { icon: Book, name: 'Verso Clásico' },
  { icon: Award, name: 'Equitación' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
            Sobre Mí
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974"
                alt="Almagro San Miguel - Actor"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">Biografía</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Pedro Francisco Almagro Gordillo</strong>, conocido artísticamente como 
                    <strong> Almagro San Miguel</strong>, nació en Sevilla el 7 de marzo de 1990.
                  </p>
                  <p>
                    Su camino hacia la interpretación fue casual: su madre le pagó las pruebas de 
                    <strong> Arte Dramático</strong> cuando él quería estudiar Derecho. "Entré por los pelos, 
                    pero fue la mejor decisión de mi vida", recuerda.
                  </p>
                  <p>
                    Se graduó en la <strong>Escuela Superior de Arte Dramático de Sevilla (ESAD)</strong> y 
                    formó parte de la <strong>Compañía Nacional de Teatro Clásico</strong> bajo la dirección 
                    de Helena Pimenta, donde interpretó obras como <em>Fuente Ovejuna</em> y <em>La Villana de Getafe</em>.
                  </p>
                  <p>
                    Sus inicios fueron haciendo <strong>teatro de calle</strong> en pueblos de la sierra 
                    andaluza: "Nadie nos contrataba, así que nos íbamos a las plazas a actuar". También trabajó 
                    varios años en <strong>Isla Mágica</strong> (Sevilla) con el Corral de Comedias.
                  </p>
                  <p>
                    En 2020 consiguió su primer protagonista en <strong>Vis a vis: El Oasis</strong> como Diego "Dieguito" Ramala. 
                    Desde entonces ha brillado en <strong>La Moderna</strong> (236 episodios como Íñigo Peñalver), 
                    <strong> Hernán</strong>, <strong>Estoy vivo</strong>, <strong>La Caza: Guadiana</strong> y <strong>Honor</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formación Especializada */}
          <div className="bg-slate-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-serif font-bold mb-6 text-center">Formación & Habilidades</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-slate-800">🎓 Estudios</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>ESAD Sevilla</strong> - Graduado en Arte Dramático</li>
                  <li><strong>Work In Progress</strong> (Madrid) - Darío Facal</li>
                  <li><strong>Compañía Nacional Teatro Clásico</strong> - Helena Pimenta</li>
                  <li><strong>NO-IDENTITY</strong> - Grupo de Especialistas de Cine</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-slate-800">🎪 Teatro Clásico</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><em>La vida es sueño</em> - Segismundo (Calderón)</li>
                  <li><em>Othello</em> - Othelo (Shakespeare)</li>
                  <li><em>Antígona</em> - Creonte (Sófocles)</li>
                  <li><em>Don Juan Tenorio</em> - Don Luis Mejía (Zorrilla)</li>
                  <li><em>Oliver Twist</em> - Jefe Policía Duff (musical)</li>
                </ul>
              </div>
            </div>

            <h4 className="font-bold text-lg mb-4 text-slate-800 text-center">🛠️ Habilidades Técnicas</h4>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <skill.icon className="w-8 h-8 text-slate-700 mb-2" />
                  <span className="text-sm text-center font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-6 text-center">
              También: Equitación • Esgrima • Danza • Flamenco • Mimo • Pantomima • Canto • Títeres • Lucha escénica
            </p>
          </div>

          {/* Filosofía */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg p-8 text-white text-center"
          >
            <blockquote className="text-xl md:text-2xl font-serif italic mb-4">
              "Mi único plan es ser actor. Trabajar duro, respetar el oficio y seguir aprendiendo."
            </blockquote>
            <p className="text-gray-300">
              Me apasiona la historia de España y las producciones de época. "Cuando aprendes de tu pasado, 
              no cometes los mismos errores", reflexiona sobre su interés por papeles históricos.
            </p>
          </motion.div>

          {/* Datos Personales */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h4 className="font-bold mb-2">📍 Origen</h4>
              <p className="text-gray-700">Sevilla, Andalucía</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h4 className="font-bold mb-2">🎂 Nacimiento</h4>
              <p className="text-gray-700">7 de marzo de 1990</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <h4 className="font-bold mb-2">🎬 Experiencia</h4>
              <p className="text-gray-700">+13 años (2013-2026)</p>
            </div>
          </div>

          {/* Entrevista Reciente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 bg-slate-100 rounded-lg p-8 text-center"
          >
            <h3 className="text-2xl font-serif font-bold mb-3">Entrevista Reciente 2024</h3>
            <p className="text-gray-700 mb-4">
              Conversación en el Teatro de la Maestranza (Sevilla) sobre su pasión por actuar, 
              su interés por la historia y los nuevos retos tras <em>La Moderna</em>.
            </p>
            <a
              href="https://www.youtube.com/watch?v=ts2qSZpSO_I"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors font-semibold"
            >
              Ver Entrevista Completa (El Plural TV - Dic 2024)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
