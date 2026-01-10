'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sword, Music, Languages, Dumbbell, Heart, Sparkles, Award, Star, Zap } from 'lucide-react'

interface Skill {
  name: string
  proficiency: 'Experto' | 'Avanzado' | 'Competente'
  featured?: boolean
}

interface SkillCategory {
  category: string
  icon: any
  color: string
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    category: 'Combate & Acción',
    icon: Sword,
    color: 'from-red-500 to-rose-600',
    skills: [
      { name: 'Esgrima Teatral', proficiency: 'Avanzado', featured: true },
      { name: 'Lucha Escénica', proficiency: 'Avanzado' },
      { name: 'Equitación', proficiency: 'Avanzado', featured: true },
      { name: 'Especialista Cine', proficiency: 'Competente' },
      { name: 'Acrobacias', proficiency: 'Competente' },
    ],
  },
  {
    category: 'Música & Canto',
    icon: Music,
    color: 'from-purple-500 to-pink-600',
    skills: [
      { name: 'Violonchelo', proficiency: 'Avanzado', featured: true },
      { name: 'Viola', proficiency: 'Avanzado' },
      { name: 'Canto Lírico', proficiency: 'Avanzado' },
      { name: 'Teatro Musical', proficiency: 'Avanzado', featured: true },
    ],
  },
  {
    category: 'Idiomas & Dialectos',
    icon: Languages,
    color: 'from-blue-500 to-cyan-600',
    skills: [
      { name: 'Español Nativo', proficiency: 'Experto', featured: true },
      { name: 'Andaluz', proficiency: 'Experto' },
      { name: 'Inglés', proficiency: 'Avanzado' },
      { name: 'Verso Clásico', proficiency: 'Experto', featured: true },
      { name: 'Francés', proficiency: 'Competente' },
    ],
  },
  {
    category: 'Movimiento & Danza',
    icon: Dumbbell,
    color: 'from-green-500 to-emerald-600',
    skills: [
      { name: 'Danza Contemporánea', proficiency: 'Avanzado' },
      { name: 'Flamenco', proficiency: 'Avanzado' },
      { name: 'Mimo & Pantomima', proficiency: 'Avanzado' },
      { name: 'Expresión Corporal', proficiency: 'Avanzado' },
    ],
  },
  {
    category: 'Técnicas Actorales',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'Teatro Clásico', proficiency: 'Experto', featured: true },
      { name: 'Televisión', proficiency: 'Experto', featured: true },
      { name: 'Cine', proficiency: 'Avanzado' },
      { name: 'Improvisación', proficiency: 'Avanzado' },
    ],
  },
  {
    category: 'Especialidades',
    icon: Sparkles,
    color: 'from-yellow-500 to-orange-600',
    skills: [
      { name: 'Teatro de Calle', proficiency: 'Experto' },
      { name: 'Títeres', proficiency: 'Avanzado' },
      { name: 'Clown', proficiency: 'Competente' },
      { name: 'Caída Libre', proficiency: 'Competente' },
    ],
  },
]

const proficiencyColors = {
  'Experto': 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black',
  'Avanzado': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
  'Competente': 'bg-slate-700 text-slate-200',
}

export default function SkillsVisual() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills-visual" className="py-24 sm:py-32 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full mb-4"
            >
              <Zap className="w-4 h-4 text-slate-700" />
              <span className="text-slate-700 text-sm font-semibold">Competencias Técnicas</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Habilidades Profesionales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Capacidades desarrolladas a lo largo de 13+ años de formación y práctica profesional
            </p>
          </div>

          {/* Grid de categorías */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {skillsData.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Resplandor */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all h-full">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-900">{category.category}</h3>
                    </div>

                    {/* Skills como badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="relative group/skill"
                        >
                          <div className="relative px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition-all">
                            <div className="flex items-center gap-1.5">
                              <span className="text-sm font-semibold text-slate-800">{skill.name}</span>
                              {skill.featured && <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />}
                            </div>
                            <div className="mt-1">
                              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${proficiencyColors[skill.proficiency]}`}>
                                {skill.proficiency}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Barra decorativa inferior */}
                    <motion.div 
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} rounded-b-3xl`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Leyenda de niveles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-5 h-5 text-slate-700" />
                <h4 className="font-bold text-slate-900">Niveles de Competencia</h4>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200">
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black">Experto</span>
                  <span className="text-sm text-slate-600">Especialización profesional</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200">
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white">Avanzado</span>
                  <span className="text-sm text-slate-600">Alto nivel técnico</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200">
                  <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-slate-700 text-slate-200">Competente</span>
                  <span className="text-sm text-slate-600">Competencia funcional</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resumen formativo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-8 text-white text-center shadow-2xl"
          >
            <Award className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold mb-4">Formación Continua</h3>
            <p className="text-gray-300 leading-relaxed">
              Todas estas habilidades han sido desarrolladas a través de formación en <strong className="text-white">ESAD Sevilla</strong>, 
              <strong className="text-white"> Compañía Nacional de Teatro Clásico</strong>, <strong className="text-white">Work In Progress</strong> (Darío Facal), 
              y <strong className="text-white">NO-IDENTITY</strong> (Especialistas de Cine). Continúo formándome constantemente en nuevas 
              técnicas y disciplinas para ofrecer versatilidad en cada proyecto.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
