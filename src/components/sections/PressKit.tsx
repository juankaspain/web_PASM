'use client'

import { motion, useInView } from 'framer-motion'
import { Download, FileText, Image as ImageIcon, Video, Award, Info, CheckCircle2, Package, Mail } from 'lucide-react'
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
    <section id="presskit" className="relative py-32 overflow-hidden bg-neutral-950">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
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
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm"
            >
              <Package className="w-4 h-4 text-neutral-400" strokeWidth={1.5} />
              <span className="text-sm font-light text-neutral-400 tracking-wider">Material Promocional</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-light mb-6 tracking-tight text-neutral-100"
            >
              Press Kit
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Material profesional para prensa, medios de comunicación y productoras. Descarga gratuita
            </motion.p>
          </div>

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
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  <div className="relative bg-neutral-900/30 border border-neutral-800 rounded-lg p-6 hover:bg-neutral-900/50 hover:border-neutral-700 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg border border-neutral-700 bg-neutral-800/50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-neutral-300" strokeWidth={1.5} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">{item.format}</span>
                        <span className="text-xs text-neutral-600">{item.size}</span>
                      </div>
                    </div>
                    <h3 className="font-light text-lg mb-2 text-neutral-100 tracking-wide">{item.title}</h3>
                    <p className="text-sm text-neutral-500 mb-4 font-light leading-relaxed">{item.description}</p>
                    <button
                      onClick={() => handleDownload(item.type, item.title)}
                      disabled={downloading === item.type}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/50 text-neutral-300 hover:text-neutral-100 rounded-md transition-all duration-300 font-light text-sm disabled:opacity-50"
                    >
                      <Download className="w-4 h-4" strokeWidth={1.5} />
                      {downloading === item.type ? 'Descargando...' : 'Descargar'}
                    </button>
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
            className="text-center mb-16"
          >
            <button
              onClick={() => handleDownload('complete', 'Press Kit Completo')}
              disabled={downloading === 'complete'}
              className="px-8 py-4 border border-neutral-700 hover:border-neutral-600 bg-neutral-900/30 hover:bg-neutral-800/50 text-neutral-200 rounded-lg hover:scale-[1.02] transition-all duration-300 font-light text-base inline-flex items-center gap-3 disabled:opacity-50 backdrop-blur-sm"
            >
              <Download className="w-5 h-5" strokeWidth={1.5} />
              {downloading === 'complete' ? 'Descargando...' : 'Descargar Press Kit Completo'}
              <span className="text-sm font-light text-neutral-500">(120 MB)</span>
            </button>
          </motion.div>

          {/* Technical Specs - Minimalist Grid */}
          <div className="max-w-4xl mx-auto mb-20">
            <h3 className="text-2xl font-light mb-8 text-center text-neutral-100 tracking-wide">Ficha Técnica</h3>
            <div className="border border-neutral-800 rounded-lg p-8 bg-neutral-900/30 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6">
                {techSpecs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                    className="flex justify-between items-center border-b border-neutral-800 pb-3"
                  >
                    <span className="text-sm text-neutral-500 uppercase tracking-wider font-light">
                      {spec.label}
                    </span>
                    <span className="text-neutral-200 font-light text-right">
                      {spec.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Press Contact - Elegant Minimalist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center p-12 border border-neutral-800 rounded-lg bg-neutral-900/20 backdrop-blur-sm">
              <h3 className="text-2xl font-light text-neutral-100 mb-4 tracking-wide">
                Contacto para Prensa
              </h3>
              <p className="text-neutral-400 mb-8 leading-relaxed font-light">
                Para entrevistas, solicitudes de material adicional o información específica:
              </p>
              
              <a
                href="mailto:info@almagrosanmiguel.com"
                className="inline-flex items-center gap-3 px-8 py-3 
                         border border-neutral-700 hover:border-neutral-500
                         rounded-md text-neutral-200 
                         transition-all duration-300 
                         hover:bg-neutral-800/50 hover:scale-[1.02]
                         font-light tracking-wide"
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
                info@almagrosanmiguel.com
              </a>
            </div>
            
            {/* Professional Badge */}
            <div className="flex items-center justify-center gap-2 mt-8 text-neutral-500">
              <CheckCircle2 className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-sm font-light">Material de alta calidad para uso profesional</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
