'use client'

import { motion } from 'framer-motion'
import { Tv, Film, Theater, Award, Users, Calendar, TrendingUp, Star } from 'lucide-react'

const stats = [
  {
    icon: Calendar,
    value: '13+',
    label: 'Años de Experiencia',
    sublabel: '2013 - 2026',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Tv,
    value: '300+',
    label: 'Episodios en TV',
    sublabel: '12 series diferentes',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Star,
    value: '236',
    label: 'Episodios La Moderna',
    sublabel: 'Protagonista TVE',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Film,
    value: '4',
    label: 'Películas',
    sublabel: 'Cine y cortometrajes',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Theater,
    value: '10+',
    label: 'Obras de Teatro',
    sublabel: 'Clásico y contemporáneo',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Award,
    value: '2',
    label: 'Premios & Nominaciones',
    sublabel: 'Reconocimientos',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Users,
    value: '50+',
    label: 'Directores',
    sublabel: 'Colaboraciones',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: TrendingUp,
    value: '7.5',
    label: 'Rating IMDb Promedio',
    sublabel: 'Proyectos destacados',
    color: 'from-orange-500 to-orange-600',
  },
]

const platforms = [
  { name: 'TVE (La 1)', projects: 6 },
  { name: 'Prime Video', projects: 1 },
  { name: 'Fox España', projects: 1 },
  { name: 'Atresplayer', projects: 1 },
  { name: 'Canal Sur', projects: 1 },
  { name: 'Star Channel', projects: 1 },
]

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Estadísticas Profesionales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Números que reflejan mi compromiso y dedicación a la interpretación.
            </p>
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                    <Icon className="w-8 h-8 mb-4 opacity-80" />
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold mb-1">{stat.label}</div>
                    <div className="text-xs opacity-80">{stat.sublabel}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-serif font-bold text-center mb-8">
              Plataformas & Canales
            </h3>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-3 gap-6">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <span className="font-semibold text-slate-700">{platform.name}</span>
                    <span className="px-3 py-1 bg-slate-700 text-white rounded-full text-sm font-bold">
                      {platform.projects} {platform.projects === 1 ? 'proyecto' : 'proyectos'}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Career Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-serif font-bold mb-6">Datos Destacados</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">2020</div>
                <div className="text-sm">Primer papel protagonista</div>
                <div className="text-xs opacity-75 mt-1">Vis a vis: El Oasis</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">236</div>
                <div className="text-sm">Episodios consecutivos</div>
                <div className="text-xs opacity-75 mt-1">Record personal en La Moderna</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
                <div className="text-sm">Plataformas internacionales</div>
                <div className="text-xs opacity-75 mt-1">Prime Video, Fox, Star Channel</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
