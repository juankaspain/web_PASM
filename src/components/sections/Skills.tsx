'use client'

import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Languages, Music, Swords, Horse, Drama, Mic, FileText, CheckCircle2, Star } from 'lucide-react'
import { useRef } from 'react'

const training = [
  {
    title: 'Compañía Nacional de Teatro Clásico',
    organization: 'CNTC - Ministerio de Cultura',
    period: '2015-2017',
    director: 'Helena Pimenta',
    description: 'Formación de élite en verso clásico español, comedia del Siglo de Oro y técnicas de interpretación profesional. Dos años intensivos en la compañía nacional.',
    featured: true,
  },
  {
    title: 'Escuela Superior de Arte Dramático',
    organization: 'ESAD Sevilla',
    period: '2008-2012',
    director: 'Titulación Oficial Universitaria',
    description: 'Formación completa en interpretación teatral, cine y televisión. Especialización en texto clásico y contemporáneo.',
    featured: true,
  },
  {
    title: 'Work In Progress',
    organization: 'Escuela de Actuación Madrid',
    period: '2013-2015',
    director: 'Darío Facal',
    description: 'Perfeccionamiento en técnicas de cámara, casting y preparación de personajes para cine y televisión.',
    featured: false,
  },
  {
    title: 'Especialización en Dobles de Acción',
    organization: 'NO-IDENTITY',
    period: '2012-2013',
    director: 'Formación en Especialistas de Acción',
    description: 'Formación en lucha escénica, control de nervios, coordinación de escenas de acción y trabajo de riesgo controlado.',
    featured: false,
  },
]

const skills = [
  {
    category: 'Interpretación',
    icon: Drama,
    items: [
      { name: 'Verso Clásico Español', level: 'Experto' },
      { name: 'Comedia del Siglo de Oro', level: 'Experto' },
      { name: 'Teatro Contemporáneo', level: 'Avanzado' },
      { name: 'Improvisación', level: 'Avanzado' },
      { name: 'Mimo y Pantomima', level: 'Intermedio' },
    ],
  },
  {
    category: 'Idiomas',
    icon: Languages,
    items: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio' },
      { name: 'Acento Andaluz', level: 'Nativo' },
      { name: 'Acento Castellano', level: 'Experto' },
    ],
  },
  {
    category: 'Habilidades Musicales',
    icon: Music,
    items: [
      { name: 'Canto', level: 'Avanzado' },
      { name: 'Viola (autodidacta)', level: 'Intermedio' },
      { name: 'Violonchelo (autodidacta)', level: 'Intermedio' },
      { name: 'Musicales', level: 'Avanzado' },
    ],
  },
  {
    category: 'Habilidades Físicas',
    icon: Swords,
    items: [
      { name: 'Esgrima', level: 'Avanzado' },
      { name: 'Lucha Escénica', level: 'Avanzado' },
      { name: 'Equitación', level: 'Intermedio' },
      { name: 'Dobles de Acción', level: 'Avanzado' },
    ],
  },
  {
    category: 'Danza & Movimiento',
    icon: Star,
    items: [
      { name: 'Flamenco', level: 'Intermedio' },
      { name: 'Danza Contemporánea', level: 'Básico' },
      { name: 'Coreografía Musical', level: 'Avanzado' },
    ],
  },
  {
    category: 'Otras Habilidades',
    icon: CheckCircle2,
    items: [
      { name: 'Carnet de Conducir B', level: 'Sí' },
      { name: 'Títeres', level: 'Básico' },
      { name: 'Control de Nervios', level: 'Experto' },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Nativo':
    case 'Experto':
      return 'text-green-400 bg-green-400/10 border-green-400/30'
    case 'Avanzado':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
    case 'Intermedio':
      return 'text-blue-400 bg-blue-400/10 border-blue-400/30'
    case 'Básico':
      return 'text-slate-400 bg-slate-400/10 border-slate-400/30'
    default:
      return 'text-slate-300 bg-slate-300/10 border-slate-300/30'
  }
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

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
          {/* Header ESTANDARIZADO */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <GraduationCap className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Formación & Habilidades</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white"
            >
              Skills & Training
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-20 h-0.5 bg-yellow-400 mx-auto mb-6"
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Formación profesional y habilidades especiales que complementan mi versatilidad como intérprete
            </motion.p>
          </div>

          {/* Training Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-2 text-white">
              <GraduationCap className="w-6 h-6 text-yellow-400" />
              Formación Profesional
            </h3>
            
            <div className="space-y-6">
              {training.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className={`relative border rounded-2xl p-6 lg:p-8 backdrop-blur-sm hover:border-white/20 transition-all ${
                    course.featured 
                      ? 'bg-gradient-to-br from-yellow-900/10 to-orange-900/5 border-yellow-500/30 hover:bg-yellow-900/15'
                      : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04]'
                  }`}>
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          course.featured 
                            ? 'bg-yellow-400/20 border border-yellow-400/30'
                            : 'bg-white/5 border border-white/10'
                        }`}>
                          <GraduationCap className={`w-7 h-7 ${course.featured ? 'text-yellow-400' : 'text-slate-400'}`} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h4 className="text-xl lg:text-2xl font-bold text-white">{course.title}</h4>
                          {course.featured && (
                            <span className="px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-bold">
                              DESTACADO
                            </span>
                          )}
                        </div>
                        <p className="text-base text-slate-300 mb-2">{course.organization}</p>
                        <p className="text-slate-400 leading-relaxed mb-3">{course.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {course.period}
                          </span>
                          <span>•</span>
                          <span>Dir: {course.director}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-2 text-white">
              <Star className="w-6 h-6 text-yellow-400" />
              Habilidades Especiales
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillCategory, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 + categoryIndex * 0.1 }}
                  className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-yellow-400/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center">
                      <skillCategory.icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{skillCategory.category}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between gap-3">
                        <span className="text-sm text-slate-300">{skill.name}</span>
                        <span className={`px-2 py-1 rounded-md text-xs font-semibold border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Note for Casting */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <FileText className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-slate-300 leading-relaxed">
                Estas habilidades están respaldadas por más de <span className="font-bold text-white">10 años de experiencia profesional</span> en teatro, cine y televisión. Disponible para proyectos que requieran formación adicional o especialización específica.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
