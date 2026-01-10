'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sword, Music, Languages, Dumbbell, Heart, Sparkles, Award, Star, Zap, Crown, Trophy } from 'lucide-react'

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

const proficiencyInfo = {
  'Experto': { color: 'from-yellow-400 to-amber-500', label: 'Especialización profesional' },
  'Avanzado': { color: 'from-blue-500 to-cyan-500', label: 'Alto nivel técnico' },
  'Competente': { color: 'from-slate-500 to-slate-600', label: 'Competencia funcional' },
}

export default function SkillsVisual() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills-visual" className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Patrón de fondo */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header minimalista */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 text-purple-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Competencias Técnicas</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Capacidades Artísticas
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Habilidades desarrolladas a través de más de <span className="text-purple-400 font-semibold">13 años</span> de formación 
              y práctica profesional en las principales escuelas y compañías de España
            </motion.p>
          </div>

          {/* Grid de categorías - Diseño limpio */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillsData.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <div className="relative h-full">
                    {/* Resplandor sutil */}
                    <div className={`absolute -inset-[1px] bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                    
                    {/* Card */}
                    <div className="relative h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                        <h3 className="font-bold text-lg text-white">{category.category}</h3>
                      </div>

                      {/* Skills list - Diseño vertical limpio */}
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ duration: 0.3, delay: 0.5 + categoryIndex * 0.08 + skillIndex * 0.03 }}
                            className="group/skill"
                          >
                            <div className="flex items-center justify-between gap-3 py-2 px-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-all">
                              <div className="flex items-center gap-2 flex-1">
                                <span className="text-sm font-medium text-slate-300">
                                  {skill.name}
                                </span>
                                {skill.featured && (
                                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                                )}
                              </div>
                              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${proficiencyInfo[skill.proficiency].color} text-white flex-shrink-0`}>
                                {skill.proficiency}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Línea decorativa inferior */}
                      <motion.div 
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${category.color} rounded-b-2xl`}
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Leyenda de niveles - Diseño horizontal minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold text-white">Niveles de Competencia</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(proficiencyInfo).map(([level, info]) => (
                  <div key={level} className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl border border-white/5">
                    <div className={`w-10 h-10 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xs font-bold text-white">{level.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white">{level}</p>
                      <p className="text-xs text-slate-400 truncate">{info.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card formativa - Diseño premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="max-w-5xl mx-auto"
          >
            <div className="group relative">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl blur-lg opacity-30" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center">
                        <Crown className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                      <Award className="w-5 h-5 text-purple-400" />
                      <h3 className="text-2xl font-bold text-white">Formación Continua</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      Habilidades desarrolladas en <span className="text-purple-400 font-semibold">ESAD Sevilla</span>, 
                      <span className="text-blue-400 font-semibold"> Compañía Nacional de Teatro Clásico</span>, 
                      <span className="text-cyan-400 font-semibold"> Work In Progress</span> (Darío Facal) y 
                      <span className="text-purple-400 font-semibold"> NO-IDENTITY</span> (Especialistas de Cine). 
                      Formación continua en nuevas técnicas para ofrecer máxima versatilidad profesional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
