'use client'

import { motion, useInView } from 'framer-motion'
import { Download, FileText, Image as ImageIcon, Video, Award, Info, CheckCircle2, Package, Mail, Sparkles, ExternalLink } from 'lucide-react'
import { useState, useRef } from 'react'

const DOWNLOAD_ITEMS = [
  {
    icon: FileText,
    title: 'Biografía Completa',
    description: 'Bio profesional en formato PDF con trayectoria completa',
    size: '250 KB',
    format: 'PDF',
    type: 'bio',
    color: 'from-blue-500/10 to-cyan-500/10',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: ImageIcon,
    title: 'Fotos en Alta Resolución',
    description: 'Pack de 10 fotografías profesionales (300 DPI)',
    size: '45 MB',
    format: 'ZIP',
    type: 'photos',
    color: 'from-purple-500/10 to-pink-500/10',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: Video,
    title: 'Showreel 2024',
    description: 'Recopilatorio de escenas destacadas',
    size: '120 MB',
    format: 'MP4',
    type: 'showreel',
    color: 'from-red-500/10 to-orange-500/10',
    iconBg: 'bg-red-500/10',
    iconColor: 'text-red-400',
  },
  {
    icon: Award,
    title: 'Premios y Reconocimientos',
    description: 'Lista completa de premios y nominaciones',
    size: '180 KB',
    format: 'PDF',
    type: 'awards',
    color: 'from-yellow-500/10 to-amber-500/10',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
  },
  {
    icon: FileText,
    title: 'Filmografía Completa',
    description: 'TV, cine y teatro con fechas y personajes',
    size: '320 KB',
    format: 'PDF',
    type: 'filmography',
    color: 'from-green-500/10 to-emerald-500/10',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
  },
  {
    icon: Info,
    title: 'Ficha Técnica',
    description: 'Habilidades, formación y datos de contacto',
    size: '150 KB',
    format: 'PDF',
    type: 'techsheet',
    color: 'from-indigo-500/10 to-violet-500/10',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-400',
  },
]

interface TechSpec {
  label: string
  value: string | { text: string; links?: Array<{ text: string; url: string }> }
}

const techSpecs: TechSpec[] = [
  { label: 'Nombre Artístico', value: 'Almagro San Miguel' },
  { label: 'Nombre Real', value: 'Pedro Francisco Almagro Gordillo' },
  { label: 'Fecha de Nacimiento', value: '7 de marzo de 1990' },
  { label: 'Lugar', value: 'Sevilla, Andalucía' },
  { label: 'Altura', value: '1.78 m' },
  { label: 'Ojos', value: 'Marrones' },
  { label: 'Cabello', value: 'Castaño Oscuro' },
  { label: 'Idiomas', value: 'Español (nativo), Inglés (intermedio)' },
  { 
    label: 'Formación Principal', 
    value: { 
      text: '', 
      links: [
        { text: 'ESAD Sevilla', url: 'https://www.esadsevilla.org/' },
        { text: 'CNTC', url: 'http://teatroclasico.es/compania-nacional-de-teatro-clasico/' },
      ]
    } 
  },
  { 
    label: 'Formación Adicional', 
    value: { 
      text: '', 
      links: [
        { text: 'Work In Progress', url: 'http://www.workinprogressmadrid.com/' },
        { text: 'NO-IDENTITY', url: 'https://www.no-identity.es/' },
      ]
    } 
  },
  { label: 'Agencia', value: 'Contacto directo' },
]

export default function PressKit() {
  const [downloading, setDownloading] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const handleDownload = async (type: string, title: string) => {
    setDownloading(type)
    try {
      const response = await fetch(`/api/download?type=${type}`)
      const data = await response.json()
      alert(`${data.message}\n\n${data.note}`)
    } catch (error) {
      alert('Error al descargar. Inténtalo de nuevo.')
    } finally {
      setDownloading(null)
    }
  }

  return (
    <section id="presskit" className="relative py-32 overflow-hidden bg-gradient-to-b from-neutral-950 via-black to-neutral-950">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid pattern */}
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
          {/* Header with decorative line */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-neutral-700 bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm shadow-lg"
            >
              <Package className="w-4 h-4 text-blue-400" strokeWidth={1.5} />
              <span className="text-sm font-light text-neutral-300 tracking-wider">Material Promocional</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-light mb-4 tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
            >
              Press Kit
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6"
            />
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Material profesional para prensa, medios de comunicación y productoras. Descarga gratuita
            </motion.p>
          </div>

          {/* Download Items Grid - Enhanced */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {DOWNLOAD_ITEMS.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-br ${item.color} rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500`} />
                  
                  <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-all duration-300 backdrop-blur-sm shadow-2xl">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${item.iconBg} border border-neutral-700/50 flex items-center justify-center backdrop-blur-sm`}>
                        <Icon className={`w-5 h-5 ${item.iconColor}`} strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider bg-neutral-800/50 px-2 py-0.5 rounded">{item.format}</span>
                        <span className="text-xs text-neutral-600">{item.size}</span>
                      </div>
                    </div>
                    <h3 className="font-medium text-lg mb-2 text-neutral-100 tracking-wide">{item.title}</h3>
                    <p className="text-sm text-neutral-500 mb-5 font-light leading-relaxed">{item.description}</p>
                    <button
                      onClick={() => handleDownload(item.type, item.title)}
                      disabled={downloading === item.type}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-neutral-800/50 to-neutral-800/30 border border-neutral-700 hover:border-neutral-600 hover:from-neutral-800/70 hover:to-neutral-800/50 text-neutral-300 hover:text-neutral-100 rounded-lg transition-all duration-300 font-light text-sm disabled:opacity-50 shadow-lg"
                    >
                      <Download className="w-4 h-4" strokeWidth={1.5} />
                      {downloading === item.type ? 'Descargando...' : 'Descargar'}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Complete Press Kit Button - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-20"
          >
            <button
              onClick={() => handleDownload('complete', 'Press Kit Completo')}
              disabled={downloading === 'complete'}
              className="px-10 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 hover:border-blue-400/50 hover:from-blue-600/30 hover:to-purple-600/30 text-neutral-200 rounded-xl hover:scale-[1.03] transition-all duration-300 font-light text-base inline-flex items-center gap-3 disabled:opacity-50 backdrop-blur-sm shadow-2xl"
            >
              <Download className="w-5 h-5" strokeWidth={1.5} />
              {downloading === 'complete' ? 'Descargando...' : 'Descargar Press Kit Completo'}
              <span className="text-sm font-light text-neutral-400">(120 MB)</span>
            </button>
          </motion.div>

          {/* Technical Specs - Enhanced Grid */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light mb-2 text-neutral-100 tracking-wide">Ficha Técnica</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
            </div>
            
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-lg opacity-50" />
              
              <div className="relative border border-neutral-800 rounded-xl p-8 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 backdrop-blur-sm shadow-2xl">
                <div className="grid md:grid-cols-2 gap-6">
                  {techSpecs.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                      className="flex justify-between items-center py-3 border-b border-neutral-800/50 last:border-0 group hover:border-neutral-700 transition-colors"
                    >
                      <span className="text-sm text-neutral-500 uppercase tracking-wider font-light group-hover:text-neutral-400 transition-colors">
                        {spec.label}
                      </span>
                      <span className="text-neutral-200 font-light text-right group-hover:text-neutral-100 transition-colors">
                        {typeof spec.value === 'string' ? (
                          spec.value
                        ) : (
                          <span className="flex flex-wrap items-center justify-end gap-2">
                            {spec.value.links?.map((link, linkIndex) => (
                              <span key={linkIndex}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/30 hover:decoration-blue-300/50 underline-offset-2"
                                >
                                  {link.text}
                                  <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
                                </a>
                                {linkIndex < (spec.value.links?.length || 0) - 1 && (
                                  <span className="text-neutral-600 mx-1">,</span>
                                )}
                              </span>
                            ))}
                          </span>
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Press Contact - Elegant Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl blur-xl opacity-50" />
              
              <div className="relative text-center p-12 border border-neutral-800 rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 backdrop-blur-sm shadow-2xl">
                <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-light text-neutral-100 mb-4 tracking-wide">
                  Contacto para Prensa
                </h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6" />
                <p className="text-neutral-400 mb-8 leading-relaxed font-light">
                  Para entrevistas, solicitudes de material adicional o información específica:
                </p>
                
                <a
                  href="mailto:info@almagrosanmiguel.com"
                  className="inline-flex items-center gap-3 px-10 py-4 
                           bg-gradient-to-r from-blue-600/20 to-green-600/20
                           border border-blue-500/30 hover:border-blue-400/50
                           rounded-xl text-neutral-200 hover:text-neutral-100
                           transition-all duration-300 
                           hover:from-blue-600/30 hover:to-green-600/30
                           hover:scale-[1.03]
                           font-light tracking-wide shadow-2xl"
                >
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                  info@almagrosanmiguel.com
                </a>
              </div>
            </div>
            
            {/* Professional Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
              className="flex items-center justify-center gap-2 mt-8 text-neutral-500"
            >
              <CheckCircle2 className="w-4 h-4 text-green-500" strokeWidth={1.5} />
              <span className="text-sm font-light">Material de alta calidad para uso profesional</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
