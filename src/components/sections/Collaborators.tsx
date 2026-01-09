'use client'

import { motion } from 'framer-motion'
import { Users, Star, Award, Film } from 'lucide-react'

const directors = [
  {
    name: 'Agustín Díaz Yanes',
    project: 'Un fantasma en la batalla',
    year: '2025',
    quote: '"Es un privilegio trabajar con él. Crea un ambiente muy tranquilo, se percibe su experiencia."',
    category: 'Cine',
    notable: true,
  },
  {
    name: 'Helena Pimenta',
    project: 'Compañía Nacional Teatro Clásico',
    year: '2015-2017',
    quote: 'Directora de la CNTC que forjó las bases de su técnica interpretativa en teatro clásico.',
    category: 'Teatro',
    notable: true,
  },
  {
    name: 'Carlos Sedes',
    project: 'Vis a vis: El Oasis',
    year: '2020',
    quote: 'Director del spin-off que le dio su primer papel protagonista como Dieguito Ramala.',
    category: 'Televisión',
    notable: true,
  },
  {
    name: 'Jordi Frades',
    project: 'Hernán (Prime Video)',
    year: '2019',
    quote: 'Dirección de la superproducción histórica internacional de Amazon.',
    category: 'Televisión',
  },
  {
    name: 'Joaquín Llamas',
    project: 'La Moderna',
    year: '2023-2024',
    quote: 'Dirección de la serie diaria donde interpretó a Íñigo durante 236 episodios.',
    category: 'Televisión',
  },
  {
    name: 'Darío Facal',
    project: 'Work In Progress (Formación)',
    year: '2014-2015',
    quote: 'Formación actoral intensiva en Madrid que complementó sus estudios en ESAD.',
    category: 'Formación',
  },
]

const castmates = [
  { name: 'Maggie Civantos', project: 'Vis a vis: El Oasis' },
  { name: 'Najwa Nimri', project: 'Vis a vis: El Oasis' },
  { name: 'Óscar Jaénada', project: 'Hernán' },
  { name: 'Michel Brown', project: 'Hernán' },
  { name: 'Javier Gutiérrez', project: 'Estoy vivo' },
  { name: 'Anna Castillo', project: 'Estoy vivo' },
  { name: 'Adriana Torrebejano', project: 'La Moderna' },
  { name: 'Carmen Arriás', project: 'La Moderna' },
]

const stats = [
  { icon: Users, value: '50+', label: 'Directores' },
  { icon: Star, value: '100+', label: 'Compañeros de Reparto' },
  { icon: Film, value: '15+', label: 'Productoras' },
  { icon: Award, value: '6', label: 'Plataformas' },
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
            Directores, actores y profesionales con los que he tenido el honor de trabajar.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-lg p-6 text-center border border-slate-200 hover:border-slate-400 transition-all"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-slate-700" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold mb-8 text-center">
              Directores Destacados
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {directors.map((director, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-lg border-2 ${
                    director.notable
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-400'
                      : 'bg-white border-gray-200'
                  } hover:shadow-lg transition-all`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{director.name}</h4>
                      <p className="text-sm text-gray-600">{director.project}</p>
                    </div>
                    {director.notable && (
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-700 italic mb-3">{director.quote}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-1 bg-slate-200 rounded-full font-semibold">
                      {director.category}
                    </span>
                    <span className="text-gray-500">{director.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Castmates */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8 text-center">
              Compañeros de Reparto
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-slate-50 rounded-lg p-8 border border-slate-200"
            >
              <div className="grid md:grid-cols-2 gap-4">
                {castmates.map((castmate, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200"
                  >
                    <div>
                      <p className="font-bold text-slate-900">{castmate.name}</p>
                      <p className="text-sm text-gray-600">{castmate.project}</p>
                    </div>
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-6">
                Y muchos más talentosos actores y actrices a lo largo de mi carrera...
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
