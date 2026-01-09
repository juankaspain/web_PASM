'use client'

import { motion } from 'framer-motion'
import { Users, Award, Tv, Film } from 'lucide-react'

const directors = [
  { name: 'Agustín Díaz Yanes', project: 'Un fantasma en la batalla', type: 'Cine' },
  { name: 'Helena Pimenta', project: 'CNTC - Fuente Ovejuna', type: 'Teatro' },
  { name: 'Darío Facal', project: 'Work In Progress', type: 'Formación' },
  { name: 'Raúl Cerezo', project: 'La Moderna', type: 'TV' },
  { name: 'Iván Escobar', project: 'Vis a vis: El Oasis', type: 'TV' },
  { name: 'Jordi Frades', project: 'Hernán', type: 'TV' },
]

const actors = [
  { name: 'Maggie Civantos', project: 'Vis a vis: El Oasis' },
  { name: 'Najwa Nimri', project: 'Vis a vis: El Oasis' },
  { name: 'Paula Usero', project: 'Honor' },
  { name: 'Óscar Casas', project: 'Hernán' },
  { name: 'Ishak Feriç', project: 'Hernán' },
  { name: 'Javier Gutiérrez', project: 'Estoy vivo' },
]

const productions = [
  { name: 'TVE (La 1)', projects: 6, logo: '📺' },
  { name: 'Amazon Prime Video', projects: 1, logo: '🎬' },
  { name: 'Fox España', projects: 1, logo: '🦊' },
  { name: 'Atresmedia', projects: 1, logo: '📺' },
  { name: 'Canal Sur', projects: 1, logo: '🔆' },
  { name: 'Diagonal TV', projects: 2, logo: '🎬' },
]

export default function Collaborators() {
  return (
    <section id="collaborators" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-slate-700" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              Colaboraciones
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            He tenido el privilegio de trabajar con talentosos directores, actores y productoras.
          </p>

          {/* Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Film className="w-6 h-6 text-slate-700" />
              Directores
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {directors.map((director, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:border-slate-400 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {director.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{director.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{director.project}</p>
                      <span className="px-2 py-1 bg-slate-200 text-slate-700 text-xs rounded-full font-semibold">
                        {director.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Actors */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-slate-700" />
              Actores Destacados
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {actors.map((actor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-slate-200 rounded-full px-6 py-3 hover:border-slate-700 hover:shadow-md transition-all"
                >
                  <div className="text-center">
                    <p className="font-bold text-slate-900">{actor.name}</p>
                    <p className="text-xs text-gray-500">{actor.project}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Productions */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Tv className="w-6 h-6 text-slate-700" />
              Productoras & Plataformas
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {productions.map((prod, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-6 border border-slate-200 hover:shadow-xl transition-all text-center"
                >
                  <div className="text-4xl mb-3">{prod.logo}</div>
                  <h4 className="font-bold text-lg mb-2">{prod.name}</h4>
                  <p className="text-sm text-gray-600">
                    {prod.projects} {prod.projects === 1 ? 'proyecto' : 'proyectos'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl p-8 text-white text-center"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-sm">Directores</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">100+</div>
                <div className="text-sm">Compañeros de reparto</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">12+</div>
                <div className="text-sm">Productoras diferentes</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
