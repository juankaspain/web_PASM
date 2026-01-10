'use client'

import { motion, useInView } from 'framer-motion'
import { Award, GraduationCap, Heart, MapPin, Calendar, Sparkles, ExternalLink, Drama, Sword, Music, Languages, Crown } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

// Habilidades organizadas por categorías
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
      { name: 'Equitación', icon: Sword },
      { name: 'Acrobacias', icon: Sword },
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

// Formación con enlaces oficiales
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
    icon: Crown,
    title: 'NO-IDENTITY',
    period: 'Especialista',
    description: 'Formación especializada en acrobacias y lucha escénica',
    url: 'https://www.noidentity.es/',
    gradient: 'from-red-500 to-rose-500',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
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
              <Heart className="w-4 h-4 text-purple-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Sobre Mí</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Pedro Francisco Almagro
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Actor profesional sevillano con vocación por el teatro clásico y experiencia consolidada en televisión y cine
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {/* Imagen + Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative mb-8 group">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://github.com/user-attachments/assets/0c09e17f-1983-4ad0-8926-a0d6ef6ae5cf"
                    alt="Almagro San Miguel - Actor profesional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1200px) 100vw, 600px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-purple-400 mb-2" />
                  <div className="text-xs text-slate-500">Ubicación</div>
                  <div className="font-bold text-white">Madrid / Sevilla</div>
                </div>
                <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <Calendar className="w-5 h-5 text-purple-400 mb-2" />
                  <div className="text-xs text-slate-500">Nacimiento</div>
                  <div className="font-bold text-white">7 Marzo 1990</div>
                </div>
              </div>
            </motion.div>

            {/* Biografía */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Nacido en <span className="text-white font-semibold">Sevilla</span> el 7 de marzo de 1990, <span className="text-white font-semibold">Pedro Francisco Almagro Gordillo</span>,
                  conocido artísticamente como <span className="text-purple-400 font-semibold">Almagro San Miguel</span>, es un actor profesional que ha
                  construido una sólida carrera en televisión, cine y teatro.
                </p>
                <p>
                  Graduado por la <span className="text-blue-400 font-semibold">Escuela Superior de Arte Dramático de Sevilla (ESAD)</span> entre
                  2008 y 2012, completó su formación con <span className="text-yellow-400 font-semibold">Darío Facal</span> en Work In Progress (2014-2015)
                  y en la <span className="text-purple-400 font-semibold">Compañía Nacional de Teatro Clásico (CNTC)</span> bajo la dirección de 
                  <span className="text-purple-400 font-semibold"> Helena Pimenta</span> (2015-2017), donde se especializó en verso clásico español.
                </p>
                <p>
                  Su debut televisivo llegó en 2019 con <span className="text-cyan-400 font-semibold">"Hernán"</span> (Amazon Prime Video), interpretando
                  a Gonzalo de Sandoval junto a Óscar Jaenada. Desde entonces ha participado en <span className="text-yellow-400 font-semibold">más de 300 episodios</span>
                  en series como <span className="text-white font-semibold">"Vis a vis: El Oasis"</span>, <span className="text-white font-semibold">"La Moderna"</span> (236 episodios como protagonista),
                  <span className="text-white font-semibold"> "Operación Barrio Inglés"</span> y <span className="text-white font-semibold">"La caza: Guadiana"</span>.
                </p>
                <p>
                  En 2025 protagoniza la película <span className="text-yellow-400 font-semibold">"Un fantasma en la batalla"</span>, dirigida por
                  Agustín Díaz Yanes, actualmente en cines y Netflix. Además de su trabajo actoral, domina
                  habilidades como <span className="text-white font-semibold">esgrima</span>, <span className="text-white font-semibold">equitación</span>, <span className="text-white font-semibold">violonchelo</span>
                  y <span className="text-white font-semibold">viola</span>, que enriquecen su versatilidad interpretativa.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Formación */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
              <GraduationCap className="w-7 h-7 text-purple-400" />
              <span className="text-white">Formación Profesional</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {education.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <motion.a
                    key={index}
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group relative block"
                  >
                    <div className={`absolute -inset-[1px] bg-gradient-to-br ${edu.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <h4 className="font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{edu.title}</h4>
                      <p className="text-sm text-slate-500 mb-2 font-semibold">{edu.period}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{edu.description}</p>
                      
                      <motion.div 
                        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${edu.gradient} rounded-b-2xl`}
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Habilidades */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2">
              <Sparkles className="w-7 h-7 text-yellow-400" />
              <span className="text-white">Habilidades Especiales</span>
            </h3>
            <div className="max-w-5xl mx-auto space-y-8">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + catIndex * 0.1 }}
                >
                  <h4 className="text-lg font-bold text-slate-300 mb-4">{category.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = skill.icon
                      return (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3, delay: 0.9 + catIndex * 0.1 + skillIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full text-sm font-medium text-slate-300 hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all"
                        >
                          <Icon className="w-4 h-4" />
                          {skill.name}
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
