'use client'

import { motion, useInView } from 'framer-motion'
import { Award, GraduationCap, Heart, MapPin, Calendar, Users, Briefcase, Sparkles, ExternalLink, Drama, Sword, CircleDot, Music, Languages, Palette } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

// Habilidades reorganizadas sin porcentajes
const skillCategories = [
  {
    title: 'Interpretación',
    skills: [
      { name: 'Verso Clásico Español', icon: Drama },
      { name: 'TV & Cine', icon: Drama },
      { name: 'Teatro Musical', icon: Music },
      { name: 'Comedia', icon: Drama },
      { name: 'Drama', icon: Drama },
    ],
  },
  {
    title: 'Habilidades Físicas',
    skills: [
      { name: 'Esgrima Teatral', icon: Sword },
      { name: 'Combate Escénico', icon: Sword },
      { name: 'Equitación', icon: CircleDot },
      { name: 'Acrobacias', icon: CircleDot },
    ],
  },
  {
    title: 'Habilidades Artísticas',
    skills: [
      { name: 'Violonchelo', icon: Music },
      { name: 'Viola', icon: Music },
      { name: 'Canto', icon: Music },
    ],
  },
  {
    title: 'Idiomas',
    skills: [
      { name: 'Español (Nativo)', icon: Languages },
      { name: 'Inglés (Alto)', icon: Languages },
      { name: 'Francés (Medio)', icon: Languages },
    ],
  },
]

// Formación con enlaces oficiales actualizados
const education = [
  {
    icon: Award,
    title: 'Compañía Nacional de Teatro Clásico',
    period: '2015-2017',
    description: 'Formación especializada en verso clásico español con Helena Pimenta',
    url: 'https://teatroclasico.inaem.gob.es/',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Work In Progress',
    period: '2014-2015',
    description: 'Formación avanzada en interpretación con Darío Facal',
    url: 'https://estudio-workinprogress.com/',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: GraduationCap,
    title: 'ESAD Sevilla',
    period: '2008-2012',
    description: 'Graduado en Arte Dramático - Escuela Superior de Arte Dramático de Sevilla',
    url: 'https://www.esadsevilla.org',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'NO-IDENTITY',
    period: 'Especialista',
    description: 'Formación especializada en acrobacias y lucha escénica',
    url: null,
    gradient: 'from-red-500 to-rose-500',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-gray-100 rounded-full mb-4"
            >
              <Users className="w-4 h-4 text-slate-700" />
              <span className="text-slate-700 text-sm font-semibold">Sobre Mí</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent px-4">
              Pedro Francisco Almagro
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Actor profesional sevillano con vocación por el teatro clásico
              y experiencia consolidada en televisión y cine.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
            {/* Left: Image + Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-6 md:mb-8 group">
                <div className="relative h-[400px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://github.com/user-attachments/assets/0c09e17f-1983-4ad0-8926-a0d6ef6ae5cf"
                    alt="Almagro San Miguel - Actor profesional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 mb-2" />
                  <div className="text-xs sm:text-sm text-gray-500">Ubicación</div>
                  <div className="font-bold text-sm sm:text-base text-slate-900">Sevilla, España</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 mb-2" />
                  <div className="text-xs sm:text-sm text-gray-500">Nacimiento</div>
                  <div className="font-bold text-sm sm:text-base text-slate-900">7 Marzo 1990</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio Only */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              {/* Bio */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                  Biografía
                </h3>
                <div className="prose prose-slate max-w-none space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <p>
                    Nacido en <strong>Sevilla</strong> el 7 de marzo de 1990, <strong>Pedro Francisco Almagro Gordillo</strong>,
                    conocido artísticamente como <strong>Almagro San Miguel</strong>, es un actor profesional que ha
                    construido una sólida carrera en televisión, cine y teatro.
                  </p>
                  <p>
                    Graduado por la <strong>Escuela Superior de Arte Dramático de Sevilla (ESAD)</strong> entre
                    2008 y 2012, completó su formación con <strong>Darío Facal</strong> en Work In Progress (2014-2015)
                    y en la <strong>Compañía Nacional de Teatro Clásico (CNTC)</strong> bajo la dirección de 
                    <strong>Helena Pimenta</strong> (2015-2017), donde se especializó en verso clásico español.
                  </p>
                  <p>
                    Su debut televisivo llegó en 2019 con <strong>"Hernán"</strong> (Amazon Prime Video), interpretando
                    a Gonzalo de Sandoval junto a Óscar Jaenada. Desde entonces ha participado en <strong>más de 300 episodios</strong>
                    en series como <strong>"Vis a vis: El Oasis"</strong>, <strong>"La Moderna"</strong> (236 episodios como protagonista),
                    <strong>"Operación Barrio Inglés"</strong> y <strong>"La caza: Guadiana"</strong>.
                  </p>
                  <p>
                    En 2025 protagoniza la película <strong>"Un fantasma en la batalla"</strong>, dirigida por
                    Agustín Díaz Yanes, actualmente en cines y Netflix. Además de su trabajo actoral, domina
                    habilidades como <strong>esgrima</strong>, <strong>equitación</strong>, <strong>violonchelo</strong>
                    y <strong>viola</strong>, que enriquecen su versatilidad interpretativa.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section - Rediseñadas sin porcentajes */}
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10 flex items-center justify-center gap-2 px-4">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
              Habilidades Especiales
            </h3>
            <div className="max-w-5xl mx-auto space-y-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.5 + catIndex * 0.1 }}
                >
                  <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-slate-600" />
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = skill.icon
                      return (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.4, delay: 0.6 + catIndex * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="group relative"
                        >
                          {/* Subtle glow on hover */}
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-300 to-gray-300 rounded-full blur-sm opacity-0 group-hover:opacity-40 transition-opacity" />
                          
                          <div className="relative inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-slate-200 rounded-full text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-all shadow-sm">
                            <Icon className="w-4 h-4" />
                            {skill.name}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education/Training con enlaces actualizados */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-10 flex items-center justify-center gap-2 px-4">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-slate-700" />
              Formación Profesional
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {education.map((edu, index) => {
                const Icon = edu.icon
                const isClickable = edu.url !== null
                
                const CardContent = (
                  <>
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                    
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${edu.gradient} shadow-lg`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        {isClickable && (
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                        )}
                      </div>
                      <h4 className="font-bold text-base sm:text-lg mb-2 text-slate-900 group-hover:text-slate-700 transition-colors">{edu.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2 font-semibold">{edu.period}</p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{edu.description}</p>
                    </div>

                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`} />
                  </>
                )

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    {isClickable ? (
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 cursor-pointer"
                      >
                        {CardContent}
                      </a>
                    ) : (
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                        {CardContent}
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
