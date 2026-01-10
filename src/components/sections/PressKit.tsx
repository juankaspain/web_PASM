'use client'

import { motion, useInView } from 'framer-motion'
import { Download, FileText, Image as ImageIcon, Video, Award, Info, Sparkles, Package } from 'lucide-react'
import { useState, useRef } from 'react'

const DOWNLOAD_ITEMS = [
  {
    icon: FileText,
    title: 'Biografía Completa',
    description: 'Bio profesional en formato PDF con trayectoria completa',
    size: '250 KB',
    format: 'PDF',
    type: 'bio',
  },
  {
    icon: ImageIcon,
    title: 'Fotos en Alta Resolución',
    description: 'Pack de 10 fotografías profesionales (300 DPI)',
    size: '45 MB',
    format: 'ZIP',
    type: 'photos',
  },
  {
    icon: Video,
    title: 'Showreel 2024',
    description: 'Recopilatorio de escenas destacadas',
    size: '120 MB',
    format: 'MP4',
    type: 'showreel',
  },
  {
    icon: Award,
    title: 'Premios y Reconocimientos',
    description: 'Lista completa de premios y nominaciones',
    size: '180 KB',
    format: 'PDF',
    type: 'awards',
  },
  {
    icon: FileText,
    title: 'Filmografía Completa',
    description: 'TV, cine y teatro con fechas y personajes',
    size: '320 KB',
    format: 'PDF',
    type: 'filmography',
  },
  {
    icon: Info,
    title: 'Ficha Técnica',
    description: 'Habilidades, formación y datos de contacto',
    size: '150 KB',
    format: 'PDF',
    type: 'techsheet',
  },
]

const techSpecs = [
  { label: 'Nombre Artístico', value: 'Almagro San Miguel' },
  { label: 'Nombre Real', value: 'Pedro Francisco Almagro Gordillo' },
  { label: 'Fecha de Nacimiento', value: '7 de marzo de 1990' },
  { label: 'Lugar', value: 'Sevilla, Andalucía' },
  { label: 'Altura', value: '1.78 m' },
  { label: 'Ojos', value: 'Marrones' },
  { label: 'Cabello', value: 'Castaño Oscuro' },
  { label: 'Idiomas', value: 'Español (nativo), Inglés (intermedio)' },
  { label: 'Formación', value: 'ESAD Sevilla, CNTC' },
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
    <section id="presskit" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" />
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
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <Package className="w-4 h-4 text-yellow-400" strokeWidth={2} />
              <span className="text-sm font-medium text-slate-300 tracking-wide">Material Promocional</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
            >
              Press Kit
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              Material profesional para prensa, medios de comunicación y productoras. Descarga gratuita
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {DOWNLOAD_ITEMS.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  <div className="absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400">{item.format}</span>
                        <span className="text-xs text-slate-500">{item.size}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-slate-400 mb-4">{item.description}</p>
                    <button
                      onClick={() => handleDownload(item.type, item.title)}
                      disabled={downloading === item.type}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-lg transition-all font-semibold text-sm disabled:opacity-50"
                    >
                      <Download className="w-4 h-4" />
                      {downloading === item.type ? 'Descargando...' : 'Descargar'}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <button
              onClick={() => handleDownload('complete', 'Press Kit Completo')}
              disabled={downloading === 'complete'}
              className="px-8 py-4 bg-yellow-400 text-black rounded-xl hover:shadow-lg hover:bg-yellow-300 transition-all font-bold text-lg inline-flex items-center gap-3 disabled:opacity-50 hover:scale-105"
            >
              <Download className="w-5 h-5" />
              {downloading === 'complete' ? 'Descargando...' : 'Descargar Press Kit Completo'}
              <span className="text-sm font-normal opacity-75">(120 MB)</span>
            </button>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Ficha Técnica</h3>
            <div className="relative">
              <div className="absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-lg opacity-50" />
              <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {techSpecs.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                      className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                    >
                      <span className="font-semibold text-slate-300 text-sm">{spec.label}:</span>
                      <span className="text-slate-400 text-sm text-right">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute -inset-[1px] bg-yellow-400/20 rounded-2xl blur-lg opacity-50" />
            <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-3 text-white">Contacto para Prensa</h3>
              <p className="text-slate-400 mb-6">
                Para entrevistas, solicitudes de material adicional o información específica:
              </p>
              <a
                href="mailto:info@almagrosanmiguel.com"
                className="inline-block px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl transition-all font-semibold shadow-lg hover:scale-105"
              >
                info@almagrosanmiguel.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-slate-300">
                Material de alta calidad para uso profesional
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
