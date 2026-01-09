'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                    Llegó al mundo de la interpretación de manera casual y formó parte de la 
                    <strong> Compañía Nacional de Teatro Clásico</strong>, donde forjó las bases 
                    de su carrera artística.
                  </p>
                  <p>
                    Sus primeros trabajos televisivos fueron papeles episódicos en series como 
                    <em>Centro Médico</em> y <em>Grupo 2: Homicidios</em>. En 2020 consiguió su 
                    primer personaje protagonista en <strong>Vis a vis: El Oasis</strong>, interpretando 
                    a Diego "Dieguito" Ramala.
                  </p>
                  <p>
                    Desde entonces ha participado en producciones destacadas como <strong>Hernán</strong> (Prime Video), 
                    <strong> Estoy vivo</strong>, <strong>La Caza: Guadiana</strong> y <strong>Honor</strong>.
                  </p>
                  <p>
                    En 2023-2024 protagonizó <strong>La Moderna</strong>, la serie diaria de La 1, 
                    interpretando a Íñigo Peñalver durante 236 episodios.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-lg mb-3">Datos destacados</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Nombre real:</strong> Pedro Francisco Almagro Gordillo</li>
                  <li><strong>Nacimiento:</strong> 7 de marzo de 1990, Sevilla</li>
                  <li><strong>Formación:</strong> Compañía Nacional de Teatro Clásico</li>
                  <li><strong>Experiencia:</strong> +10 años en televisión, cine y teatro</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
