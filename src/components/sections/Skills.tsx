'use client'

import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Languages, Music, Swords, Star, FileText, CheckCircle2, ExternalLink } from 'lucide-react'
import { useRef } from 'react'

const training = [
  {
    title: 'Compañía Nacional de Teatro Clásico',
    organization: 'CNTC - Ministerio de Cultura',
    period: '2015-2017',
    director: 'Dir: Helena Pimenta',
    description: 'Formación de élite en verso clásico español, comedia del Siglo de Oro y técnicas de interpretación profesional. Dos años intensivos en la compañía nacional.',
    featured: true,
    url: 'https://teatroclasico.inaem.gob.es/',
  },
  {
    title: 'Escuela Superior de Arte Dramático',
    organization: 'ESAD Sevilla',
    period: '2008-2012',
    director: 'Titulación Oficial Universitaria',
    description: 'Formación completa en interpretación teatral, cine y televisión. Especialización en texto clásico y contemporáneo.',
    featured: true,
    url: 'https://www.esadsevilla.org',
  },
  {
    title: 'Work In Progress',
    organization: 'Escuela de Actuación Madrid',
    period: '2013-2015',
    director: 'Dir: Darío Facal',
    description: 'Perfeccionamiento en técnicas de cámara, casting y preparación de personajes para cine y televisión.',
    featured: false,
    url: 'https://estudio-workinprogress.com/',
  },
  {
    title: 'Especialización en Dobles de Acción',
    organization: 'NO-IDENTITY',
    period: '2012-2013',
    director: 'Formación en Especialistas de Acción',
    description: 'Formación en lucha escénica, control de nervios, coordinación de escenas de acción y trabajo de riesgo controlado.',
    featured: false,
    url: 'https://www.noidentity.es/',
  },
]

const skills = [
  {
    category: 'Combate & Acción',
    icon: Swords,
    color: 'yellow',
    items: [
      { name: 'Esgrima Teatral', level: 'Avanzado', icon: '⚔️' },
      { name: 'Lucha Escénica', level: 'Avanzado' },
      { name: 'Equitación', level: 'Avanzado' },
      { name: 'Especialista Cine', level: 'Competente' },
      { name: 'Acrobacias', level: 'Competente' },
    ],
  },
  {
    category: 'Música & Canto',
    icon: Music,
    color: 'yellow',
    items: [
      { name: 'Violonchelo', level: 'Avanzado', icon: '🎻' },
      { name: 'Viola', level: 'Avanzado' },
      { name: 'Canto Lírico', level: 'Avanzado' },
      { name: 'Teatro Musical', level: 'Avanzado', icon: '🎭' },
    ],
  },
  {
    category: 'Idiomas & Dialectos',
    icon: Languages,
    color: 'yellow',
    items: [
      { name: 'Español Nativo', level: 'Experto', icon: '🌟' },
      { name: 'Andaluz', level: 'Experto' },
      { name: 'Inglés', level: 'Avanzado' },
      { name: 'Verso Clásico', level: 'Experto', icon: '🌟' },
      { name: 'Francés', level: 'Competente' },
    ],
  },
  {
    category: 'Movimiento & Danza',
    icon: Star,
    color: 'yellow',
    items: [
      { name: 'Danza Contemporánea', level: 'Avanzado' },
      { name: 'Flamenco', level: 'Avanzado' },
      { name: 'Mimo & Pantomima', level: 'Avanzado' },
      { name: 'Expresión Corporal', level: 'Avanzado' },
    ],
  },
  {
    category: 'Técnicas Actorales',
    icon: CheckCircle2,
    color: 'yellow',
    items: [
      { name: 'Teatro Clásico', level: 'Experto', icon: '🌟' },
      { name: 'Televisión', level: 'Experto', icon: '🌟' },
      { name: 'Cine', level: 'Avanzado' },
      { name: 'Improvisación', level: 'Avanzado' },
    ],
  },
  {
    category: 'Especialidades',
    icon: Star,
    color: 'yellow',
    items: [
      { name: 'Teatro de Calle', level: 'Experto', icon: '🌟' },
      { name: 'Títeres', level: 'Avanzado' },
      { name: 'Cine', level: 'Avanzado' },
      { name: 'Clown', level: 'Competente' },
      { name: 'Caída Libre', level: 'Competente' },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Nativo':
    case 'Experto':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
    case 'Avanzado':
      return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
    case 'Competente':
      return 'text-slate-400 bg-slate-400/10 border-slate-400/30'
    case 'Intermedio':
      return 'text-slate-400 bg-slate-400/10 border-slate-400/30'
    default:
      return 'text-slate-300 bg-slate-300/10 border-slate-300/30'
  }
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
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
          {/* PRIMERO: Training Section */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center mb-12"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">Formación Profesional</h3>
              <p className="text-slate-400 text-lg">Instituciones de prestigio donde he desarrollado mi carrera</p>
            </motion.div>
            
            <div className="max-w-5xl mx-auto space-y-6">
              {training.map((course, index) => (
                <motion.a
                  key={index}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group block cursor-pointer"
                >
                  <div className={`relative border rounded-2xl p-6 lg:p-8 backdrop-blur-sm hover:border-white/20 transition-all ${course.featured ? 'bg-gradient-to-br from-yellow-900/10 to-orange-900/5 border-yellow-500/30 hover:bg-yellow-900/15 hover:border-yellow-400/50' : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-yellow-400/30'}`}>
                    <div className="flex flex-col lg:flex-row items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${course.featured ? 'bg-yellow-400/20 border border-yellow-400/30' : 'bg-white/5 border border-white/10'}`}>
                          <GraduationCap className={`w-7 h-7 ${course.featured ? 'text-yellow-400' : 'text-slate-400'}`} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h4 className="text-xl lg:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">{course.title}</h4>
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
                          <span>{course.director}</span>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-all">
                          <ExternalLink className="w-5 h-5 text-yellow-400 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* SEGUNDO: Skills Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">Habilidades Artísticas</h3>
              <p className="text-slate-400 text-base lg:text-lg max-w-5xl mx-auto">
                Más de 13 años de formación y práctica profesional en las principales escuelas y compañías de España
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillCategory, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.7 + categoryIndex * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative"
                >
                  <div className="absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-yellow-400/30 transition-all backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <skillCategory.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white">{skillCategory.category}</h4>
                    </div>
                    
                    <div className="space-y-3">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-between gap-3">
                          <span className="text-sm text-slate-300 flex items-center gap-2">
                            {skill.icon && <span>{skill.icon}</span>}
                            {skill.name}
                          </span>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Note for Casting */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm text-center">
              <FileText className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <p className="text-slate-300 leading-relaxed">
                Estas habilidades están respaldadas por más de <span className="font-bold text-white">13 años de experiencia profesional</span> en teatro, cine y televisión. Disponible para proyectos que requieran formación adicional o especialización específica.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
