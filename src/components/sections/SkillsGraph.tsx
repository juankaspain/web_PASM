'use client'

import { motion } from 'framer-motion'
import { Sword, Music, Theater, Film, Languages, Dumbbell, Horse, BookOpen } from 'lucide-react'

const skills = [
  {
    name: 'Esgrima',
    icon: Sword,
    level: 85,
    description: 'Formación especializada para escenas de combate y época',
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'Música (Violonchelo/Viola)',
    icon: Music,
    level: 70,
    description: 'Autodidacta, instrumento de cuerda',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Teatro Clásico',
    icon: Theater,
    level: 95,
    description: 'CNTC, ESAD Sevilla. Verso clásico español',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Especialista de Cine',
    icon: Film,
    level: 75,
    description: 'NO-IDENTITY. Acrobacias y lucha escénica',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    name: 'Verso & Diálogos',
    icon: BookOpen,
    level: 90,
    description: 'Calderón, Lope de Vega, Shakespeare',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Equitación',
    icon: Horse,
    level: 65,
    description: 'Para producciones de época histórica',
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Danza & Movimiento',
    icon: Dumbbell,
    level: 80,
    description: 'Flamenco, contemporánea, mimo, pantomima',
    color: 'from-pink-500 to-pink-600',
  },
  {
    name: 'Acentos & Dialectos',
    icon: Languages,
    level: 85,
    description: 'Andaluz, castellano neutro, acento época',
    color: 'from-indigo-500 to-indigo-600',
  },
]

const otherSkills = [
  'Canto', 'Títeres', 'Teatro de Calle', 'Improvisación',
  'Montura a Caballo', 'Lucha Escénica', 'Acrobacia Básica', 'Commedia dell\'arte'
]

export default function SkillsGraph() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Habilidades Profesionales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Herramientas técnicas y artísticas desarrolladas a lo largo de mi formación y carrera.
            </p>
          </div>

          {/* Main Skills */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-6 border border-gray-200 hover:border-slate-400 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg">{skill.name}</h3>
                          <span className="text-sm font-bold text-slate-700">{skill.level}%</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{skill.description}</p>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Other Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-center">
              Habilidades Adicionales
            </h3>
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-md">
              <div className="flex flex-wrap gap-3 justify-center">
                {otherSkills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-sm font-semibold text-slate-700 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Training Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-serif font-bold mb-4">
              Formación Continua
            </h3>
            <p className="text-gray-300 mb-4">
              "El aprendizaje nunca termina. Cada proyecto es una oportunidad para desarrollar nuevas habilidades 
              y perfeccionar las existentes. La técnica se construye día a día."
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/10 rounded-full">ESAD Sevilla</span>
              <span className="px-4 py-2 bg-white/10 rounded-full">CNTC</span>
              <span className="px-4 py-2 bg-white/10 rounded-full">Work In Progress</span>
              <span className="px-4 py-2 bg-white/10 rounded-full">NO-IDENTITY</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
