'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { 
  Sparkles, Sword, Heart, Languages, Music, Activity, 
  Bike, Drama, Mic, Dumbbell, Target, Zap 
} from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: string
  icon: React.ElementType
  description: string
}

const skills: Skill[] = [
  // Interpretación
  { name: 'Verso Clásico Español', level: 95, category: 'Interpretación', icon: Drama, description: 'Especialización CNTC' },
  { name: 'Comedia', level: 90, category: 'Interpretación', icon: Heart, description: 'Timing y expresividad' },
  { name: 'Drama', level: 95, category: 'Interpretación', icon: Drama, description: 'Roles intensos' },
  { name: 'Galán Romántico', level: 92, category: 'Interpretación', icon: Heart, description: 'Especialidad en época' },
  
  // Físico y combate
  { name: 'Esgrima Teatral', level: 88, category: 'Físico', icon: Sword, description: 'Combate escénico' },
  { name: 'Equitación', level: 85, category: 'Físico', icon: Activity, description: 'Nivel avanzado' },
  { name: 'Ciclismo', level: 80, category: 'Físico', icon: Bike, description: 'Escenas de acción' },
  { name: 'Condición Física', level: 90, category: 'Físico', icon: Dumbbell, description: 'Entrenamiento regular' },
  
  // Técnicas especiales
  { name: 'Canto', level: 75, category: 'Musical', icon: Music, description: 'Teatro musical' },
  { name: 'Doblaje', level: 70, category: 'Técnico', icon: Mic, description: 'Experiencia en estudio' },
  
  // Idiomas
  { name: 'Inglés', level: 85, category: 'Idiomas', icon: Languages, description: 'Nivel alto' },
  { name: 'Francés', level: 60, category: 'Idiomas', icon: Languages, description: 'Nivel medio' },
]

const categories = [
  { name: 'Interpretación', color: 'from-yellow-500 to-orange-500', icon: Drama },
  { name: 'Físico', color: 'from-red-500 to-pink-500', icon: Zap },
  { name: 'Musical', color: 'from-purple-500 to-pink-500', icon: Music },
  { name: 'Técnico', color: 'from-blue-500 to-cyan-500', icon: Target },
  { name: 'Idiomas', color: 'from-green-500 to-teal-500', icon: Languages },
]

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-semibold text-slate-200">{skill.name}</span>
        </div>
        <span className="text-sm font-bold text-yellow-300">{skill.level}%</span>
      </div>
      
      <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
        />
        {/* Brillo animado */}
        <motion.div
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '200%' } : { x: '-100%' }}
          transition={{ 
            duration: 1.5, 
            delay: delay + 0.5,
            ease: 'easeInOut'
          }}
        />
      </div>
      
      <p className="text-xs text-slate-500 mt-1">{skill.description}</p>
    </motion.div>
  )
}

export default function SkillsGraph() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden bg-black">
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      
      {/* Patrón hexagonal sutil */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(251,191,36,0.3) 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }}
      />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-300 text-sm font-bold uppercase tracking-wider">Habilidades Profesionales</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
                Capacidades Artísticas
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Formación completa y especializada en múltiples disciplinas interpretativas y técnicas
            </motion.p>
          </div>

          {/* Grid de categorías con habilidades */}
          <div className="max-w-6xl mx-auto space-y-8">
            {categories.map((category, catIndex) => {
              const categorySkills = skills.filter(s => s.category === category.name)
              if (categorySkills.length === 0) return null
              
              const CategoryIcon = category.icon
              
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.7, delay: 0.5 + catIndex * 0.15 }}
                  className="relative"
                >
                  {/* Resplandor de categoría */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-3xl blur-2xl opacity-20`} />
                  
                  {/* Card de categoría */}
                  <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-black/90 rounded-3xl p-6 sm:p-8 border border-slate-700/50 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                    {/* Header de categoría */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    </div>
                    
                    {/* Grid de habilidades */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {categorySkills.map((skill, skillIndex) => (
                        <SkillBar 
                          key={skill.name} 
                          skill={skill} 
                          delay={0.6 + catIndex * 0.15 + skillIndex * 0.1} 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Destacados especiales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Sword, title: 'Combate Escénico', desc: 'Esgrima y peleas' },
                { icon: Activity, title: 'Equitación', desc: 'Nivel avanzado' },
                { icon: Drama, title: 'Verso Clásico', desc: 'Especialista CNTC' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity" />
                    <div className="relative bg-slate-900/80 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm text-center">
                      <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-black" />
                      </div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
