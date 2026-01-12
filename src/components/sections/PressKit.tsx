'use client'

import { motion, useInView } from 'framer-motion'
import { Download, FileText, Image as ImageIcon, Video, Award, Info, CheckCircle2, Package, Mail, Sparkles, ExternalLink } from 'lucide-react'
import { useState, useRef } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'

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
    <section id="presskit" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
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
          {/* Header with golden line */}
          <SectionHeader
            badge={{ icon: Package, text: 'Material Promocional' }}
            title="Press Kit"
            subtitle="Material profesional para prensa, medios de comunicación y productoras. Descarga gratuita"
            isInView={isInView}
          />

          {/* Download Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {DOWNLOAD_ITEMS.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-[1px] bg-gradient-to-br ${item.color} rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500`} />
                    
                    <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:bg-white/[0.05] hover:border-yellow-400/30 transition-all backdrop-blur-sm">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-lg ${item.iconBg} border border-white/10 flex items-center justify-center backdrop-blur-sm`}>
                          <Icon className={`w-5 h-5 ${item.iconColor}`} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded">{item.format}</span>
                          <span className="text-xs text-slate-600">{item.size}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                      <p className="text-sm text-slate-400 mb-5 leading-relaxed">{item.description}</p>
                      <button
                        onClick={() => handleDownload(item.type, item.title)}
                        disabled={downloading === item.type}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-yellow-400/50 hover:bg-white/10 text-slate-300 hover:text-white rounded-lg transition-all duration-300 text-sm disabled:opacity-50"
                      >
                        <Download className="w-4 h-4" strokeWidth={1.5} />
                        {downloading === item.type ? 'Descargando...' : 'Descargar'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Complete Press Kit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-20"
          >
            <button
              onClick={() => handleDownload('complete', 'Press Kit Completo')}
              disabled={downloading === 'complete'}
              className="px-10 py-4 bg-yellow-400/10 border border-yellow-400/30 hover:border-yellow-400/50 hover:bg-yellow-400/20 text-white rounded-xl hover:scale-[1.03] transition-all duration-300 font-medium text-base inline-flex items-center gap-3 disabled:opacity-50 backdrop-blur-sm shadow-xl"
            >
              <Download className="w-5 h-5" strokeWidth={1.5} />
              {downloading === 'complete' ? 'Descargando...' : 'Descargar Press Kit Completo'}
              <span className="text-sm text-slate-400">(120 MB)</span>
            </button>
          </motion.div>

          {/* Technical Specs */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-white">Ficha Técnica</h3>
              <div className="w-16 h-0.5 bg-yellow-400 mx-auto" />
            </div>
            
            <div className="relative">
              <div className="absolute -inset-[1px] bg-yellow-400/10 rounded-xl blur-lg opacity-50" />
              
              <div className="relative border border-white/10 rounded-xl p-8 bg-white/[0.03] backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  {techSpecs.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                      className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 group hover:border-white/10 transition-colors"
                    >
                      <span className="text-sm text-slate-500 uppercase tracking-wider font-medium group-hover:text-slate-400 transition-colors">
                        {spec.label}
                      </span>
                      <span className="text-white font-medium text-right">
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
                                  className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 transition-colors"
                                >
                                  {link.text}
                                  <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
                                </a>
                                {linkIndex < (spec.value.links?.length || 0) - 1 && (
                                  <span className="text-slate-600 mx-1">,</span>
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

          {/* Press Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-[1px] bg-yellow-400/10 rounded-xl blur-xl opacity-50" />
              
              <div className="relative text-center p-12 border border-white/10 rounded-xl bg-white/[0.03] backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-yellow-400 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Contacto para Prensa
                </h3>
                <div className="w-12 h-0.5 bg-yellow-400 mx-auto mb-6" />
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Para entrevistas, solicitudes de material adicional o información específica:
                </p>
                
                <a
                  href="mailto:info@almagrosanmiguel.com"
                  className="inline-flex items-center gap-3 px-10 py-4 
                           bg-yellow-400/10 border border-yellow-400/30 hover:border-yellow-400/50
                           rounded-xl text-white hover:bg-yellow-400/20
                           transition-all duration-300 hover:scale-[1.03]
                           font-medium shadow-xl"
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
              className="flex items-center justify-center gap-2 mt-8 text-slate-500"
            >
              <CheckCircle2 className="w-4 h-4 text-yellow-400" strokeWidth={1.5} />
              <span className="text-sm">Material de alta calidad para uso profesional</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}