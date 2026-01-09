'use client'

import { motion, useInView } from 'framer-motion'
import { Award, GraduationCap, Heart, MapPin, Sparkles, Calendar, Users, Briefcase } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

const skills = [
  { name: 'Verso Clásico Español', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Interpretación TV/Cine', level: 90, color: 'from-purple-500 to-pink-500' },
  { name: 'Teatro Musical', level: 85, color: 'from-yellow-500 to-orange-500' },
  { name: 'Esgrima & Combate', level: 90, color: 'from-red-500 to-rose-500' },
  { name: 'Equitación', level: 80, color: 'from-green-500 to-emerald-500' },
  { name: 'Música (Cello/Viola)', level: 75, color: 'from-indigo-500 to-blue-500' },
]

const education = [
  {
    icon: GraduationCap,
    title: 'ESAD Sevilla',
    period: '2008-2012',
    description: 'Graduado en Arte Dramático',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Compañía Nacional Teatro Clásico',
    period: '2015-2017',
    description: 'Formación con Helena Pimenta',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Work In Progress',
    period: '2014-2015',
    description: 'Darío Facal',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Briefcase,
    title: 'NO-IDENTITY',
    period: 'Especialista de Cine',
    description: 'Acrobacias y lucha escénica',
    gradient: 'from-red-500 to-rose-500',
  },
]

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-slate-900">{skill.name}</span>
        <span className="text-sm font-bold text-slate-600">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 0.1 + 1.5,
            }}
            className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4">
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
              <Users className="w-4 h-4 text-slate-700" />
              <span className="text-slate-700 text-sm font-semibold">Sobre Mí</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Pedro Francisco Almagro
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Actor profesional sevillano con vocación por el teatro clásico
              y experiencia consolidada en televisión y cine.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Left: Image + Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-8 group">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
                    alt="Almagro San Miguel - Actor profesional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <MapPin className="w-6 h-6 text-slate-600 mb-2" />
                  <div className="text-sm text-gray-500">Ubicación</div>
                  <div className="font-bold text-slate-900">Sevilla, España</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                  <Calendar className="w-6 h-6 text-slate-600 mb-2" />
                  <div className="text-sm text-gray-500">Nacimiento</div>
                  <div className="font-bold text-slate-900">7 Marzo 1990</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Bio + Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              {/* Bio */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-500" />
                  Biografía
                </h3>
                <div className="prose prose-slate max-w-none space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Nacido en <strong>Sevilla</strong> el 7 de marzo de 1990, Pedro Francisco Almagro Gordillo,
                    conocido artísticamente como <strong>Almagro San Miguel</strong>, es un actor que ha
                    construido su carrera sobre bases sólidas de formación clásica y experiencia diversa.
                  </p>
                  <p>
                    Graduado por la <strong>Escuela Superior de Arte Dramático de Sevilla (ESAD)</strong> entre
                    2008 y 2012, su pasión por el teatro le llevó a formar parte de la <strong>Compañía Nacional
                    de Teatro Clásico</strong> entre 2015 y 2017, donde trabajó bajo la dirección de Helena Pimenta,
                    especializándose en verso clásico español.
                  </p>
                  <p>
                    Su debut en televisión llegó en 2017, y desde entonces ha participado en más de <strong>300
                    episodios</strong> en series de plataformas como TVE, Prime Video, Fox, Atresplayer y Canal Sur.
                    Destacan sus roles protagonistas en <strong>"La Moderna"</strong> (236 episodios) y <strong>"Vis
                    a vis: El Oasis"</strong>.
                  </p>
                  <p>
                    Además de su trabajo actoral, domina habilidades como <strong>esgrima</strong>, <strong>equitación</strong>,
                    y música (<strong>violonchelo y viola</strong>), que aportan versatilidad a sus interpretaciones.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-yellow-500" />
                  Habilidades Especiales
                </h3>
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education/Training */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
              <GraduationCap className="w-8 h-8 text-slate-700" />
              Formación Profesional
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {education.map((edu, index) => {
                const Icon = edu.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                    
                    <div className="relative">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${edu.gradient} mb-4 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">{edu.title}</h4>
                      <p className="text-sm text-gray-500 mb-2">{edu.period}</p>
                      <p className="text-sm text-gray-600">{edu.description}</p>
                    </div>

                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`} />
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
