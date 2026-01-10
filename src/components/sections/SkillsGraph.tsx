'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Sparkles, Sword, Heart, Languages, Music, CircleDot, 
  Bike, Drama, Mic, Dumbbell, Target, Zap, Award, Star
} from 'lucide-react'

interface Skill {
  name: string
  level: 'Experto' | 'Avanzado' | 'Intermedio'
  category: string
  icon: React.ElementType
  highlight?: boolean
}

const skills: Skill[] = [
  // Interpretación
  { name: 'Verso Clásico Español', level: 'Experto', category: 'Interpretación', icon: Drama, highlight: true },
  { name: 'Drama Intenso', level: 'Experto', category: 'Interpretación', icon: Drama, highlight: true },
  { name: 'Galán Romántico', level: 'Experto', category: 'Interpretación', icon: Heart, highlight: true },
  { name: 'Comedia', level: 'Avanzado', category: 'Interpretación', icon: Heart },
  { name: 'Teatro Musical', level: 'Avanzado', category: 'Interpretación', icon: Music },
  
  // Físico y combate
  { name: 'Esgrima Teatral', level: 'Avanzado', category: 'Combate & Acción', icon: Sword, highlight: true },
  { name: 'Combate Escénico', level: 'Avanzado', category: 'Combate & Acción', icon: Sword },
  { name: 'Equitación', level: 'Avanzado', category: 'Combate & Acción', icon: CircleDot, highlight: true },
  { name: 'Acrobacias', level: 'Intermedio', category: 'Combate & Acción', icon: Dumbbell },
  { name: 'Ciclismo', level: 'Avanzado', category: 'Combate & Acción', icon: Bike },
  
  // Musicales
  { name: 'Violonchelo', level: 'Avanzado', category: 'Música & Canto', icon: Music, highlight: true },
  { name: 'Viola', level: 'Avanzado', category: 'Música & Canto', icon: Music },
  { name: 'Canto', level: 'Avanzado', category: 'Música & Canto', icon: Music },
  
  // Técnicas
  { name: 'Doblaje', level: 'Intermedio', category: 'Técnicas', icon: Mic },
  { name: 'Improvisación', level: 'Avanzado', category: 'Técnicas', icon: Target },
  
  // Idiomas
  { name: 'Español', level: 'Experto', category: 'Idiomas', icon: Languages, highlight: true },
  { name: 'Inglés', level: 'Avanzado', category: 'Idiomas', icon: Languages },
  { name: 'Francés', level: 'Intermedio', category: 'Idiomas', icon: Languages },
]

const categories = [
  { name: 'Interpretación', color: 'from-yellow-500 to-orange-500', icon: Drama },
  { name: 'Combate & Acción', color: 'from-red-500 to-pink-500', icon: Zap },
  { name: 'Música & Canto', color: 'from-purple-500 to-pink-500', icon: Music },
  { name: 'Técnicas', color: 'from-blue-500 to-cyan-500', icon: Target },
  { name: 'Idiomas', color: 'from-green-500 to-teal-500', icon: Languages },
]

const levelColors = {
  'Experto': 'from-yellow-500 to-orange-500',
  'Avanzado': 'from-blue-500 to-cyan-500',
  'Intermedio': 'from-slate-500 to-slate-600',
}

function SkillBadge({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative"
    >
      {/* Resplandor para destacados */}
      {skill.highlight && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      
      <div className="relative flex items-center gap-3 px-4 py-3 bg-slate-900/60 border border-slate-700/50 rounded-2xl backdrop-blur-sm hover:bg-slate-900/80 transition-all">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${levelColors[skill.level]} flex items-center justify-center shadow-lg flex-shrink-0`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-white text-sm truncate">{skill.name}</p>
            {skill.highlight && <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />}
          </div>
          <p className={`text-xs font-bold bg-gradient-to-r ${levelColors[skill.level]} bg-clip-text text-transparent`}>
            {skill.level}
          </p>
        </div>
      </div>
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
              Formación completa y especializada en múltiples disciplinas interpretativas
            </motion.p>
          </div>

          {/* Grid de categorías con habilidades */}
          <div className="max-w-7xl mx-auto space-y-8">
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
                      <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <CategoryIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    </div>
                    
                    {/* Grid de habilidades como badges */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categorySkills.map((skill, skillIndex) => (
                        <SkillBadge 
                          key={skill.name} 
                          skill={skill} 
                          delay={0.6 + catIndex * 0.15 + skillIndex * 0.05} 
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Leyenda de niveles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-slate-900/60 border border-slate-700/50 rounded-3xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-5 h-5 text-yellow-400" />
                <h4 className="text-lg font-bold text-white">Niveles de Dominio</h4>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500" />
                  <span className="text-sm text-slate-300"><strong className="text-white">Experto</strong> - Especialización profesional</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                  <span className="text-sm text-slate-300"><strong className="text-white">Avanzado</strong> - Alto nivel técnico</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-xl">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-slate-500 to-slate-600" />
                  <span className="text-sm text-slate-300"><strong className="text-white">Intermedio</strong> - Competencia funcional</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Destacados especiales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Drama, title: 'Verso Clásico', desc: 'Especialista CNTC', color: 'from-yellow-500 to-orange-500' },
                { icon: Sword, title: 'Combate Escénico', desc: 'Esgrima y peleas', color: 'from-red-500 to-pink-500' },
                { icon: Music, title: 'Música Clásica', desc: 'Violonchelo y Viola', color: 'from-purple-500 to-pink-500' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="relative group"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity`} />
                    <div className="relative bg-slate-900/80 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm text-center">
                      <div className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
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
