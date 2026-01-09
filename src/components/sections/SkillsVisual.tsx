'use client'

import { motion } from 'framer-motion'
import { Sword, Music, Languages, Dumbbell, Heart, Sparkles } from 'lucide-react'

const skillsData = [
  {
    category: 'Combate & Acción',
    icon: Sword,
    color: 'from-red-500 to-red-600',
    skills: [
      { name: 'Esgrima', level: 90 },
      { name: 'Lucha Escénica', level: 85 },
      { name: 'Equitación', level: 75 },
      { name: 'Especialista Cine', level: 80 },
    ],
  },
  {
    category: 'Música & Canto',
    icon: Music,
    color: 'from-purple-500 to-purple-600',
    skills: [
      { name: 'Violonchelo', level: 70 },
      { name: 'Viola', level: 65 },
      { name: 'Canto', level: 75 },
      { name: 'Musical', level: 80 },
    ],
  },
  {
    category: 'Idiomas & Dialectos',
    icon: Languages,
    color: 'from-blue-500 to-blue-600',
    skills: [
      { name: 'Español Nativo', level: 100 },
      { name: 'Andaluz', level: 100 },
      { name: 'Inglés', level: 60 },
      { name: 'Verso Clásico', level: 90 },
    ],
  },
  {
    category: 'Movimiento & Danza',
    icon: Dumbbell,
    color: 'from-green-500 to-green-600',
    skills: [
      { name: 'Danza Contemporánea', level: 70 },
      { name: 'Flamenco', level: 75 },
      { name: 'Mimo & Pantomima', level: 80 },
      { name: 'Expresión Corporal', level: 85 },
    ],
  },
  {
    category: 'Técnicas Actorales',
    icon: Heart,
    color: 'from-pink-500 to-pink-600',
    skills: [
      { name: 'Teatro Clásico', level: 95 },
      { name: 'Televisión', level: 90 },
      { name: 'Cine', level: 85 },
      { name: 'Improvisación', level: 80 },
    ],
  },
  {
    category: 'Especialidades',
    icon: Sparkles,
    color: 'from-yellow-500 to-yellow-600',
    skills: [
      { name: 'Teatro de Calle', level: 90 },
      { name: 'Títeres', level: 70 },
      { name: 'Clown', level: 65 },
      { name: 'Caída Libre', level: 75 },
    ],
  },
]

export default function SkillsVisual() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">
            Habilidades Profesionales
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Competencias técnicas desarrolladas a lo largo de 13+ años de formación y práctica profesional.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillsData.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-xs font-bold text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-serif font-bold mb-4">Formación Continua</h3>
            <p className="text-gray-300 leading-relaxed">
              Todas estas habilidades han sido desarrolladas a través de formación en <strong>ESAD Sevilla</strong>, 
              <strong> Compañía Nacional de Teatro Clásico</strong>, <strong>Work In Progress</strong> (Darío Facal), 
              y <strong>NO-IDENTITY</strong> (Especialistas de Cine). Continúo formándome constantemente en nuevas 
              técnicas y disciplinas para ofrecer versatilidad en cada proyecto.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
