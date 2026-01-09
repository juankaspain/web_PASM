'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Image as ImageIcon, Video, Award, Info } from 'lucide-react'

const downloadItems = [
  {
    icon: FileText,
    title: 'Biografía Completa',
    description: 'Bio profesional en formato PDF con trayectoria completa',
    size: '250 KB',
    format: 'PDF',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: ImageIcon,
    title: 'Fotos en Alta Resolución',
    description: 'Pack de 10 fotografías profesionales (300 DPI)',
    size: '45 MB',
    format: 'ZIP',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Video,
    title: 'Showreel 2024',
    description: 'Recopilatorio de escenas destacadas',
    size: '120 MB',
    format: 'MP4',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Award,
    title: 'Premios y Reconocimientos',
    description: 'Lista completa de premios y nominaciones',
    size: '180 KB',
    format: 'PDF',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: FileText,
    title: 'Filmografía Completa',
    description: 'TV, cine y teatro con fechas y personajes',
    size: '320 KB',
    format: 'PDF',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Info,
    title: 'Ficha Técnica',
    description: 'Habilidades, formación y datos de contacto',
    size: '150 KB',
    format: 'PDF',
    color: 'from-pink-500 to-pink-600',
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
  return (
    <section id="presskit" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Download className="w-8 h-8 text-slate-700" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">
              Press Kit
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Material profesional para prensa, medios de comunicación y productoras. Descarga gratuita.
          </p>

          {/* Download Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
            {downloadItems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg p-6 border-2 border-gray-200 hover:border-slate-400 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-500">{item.format}</span>
                      <span className="text-xs text-gray-400">{item.size}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 group-hover:bg-slate-900 text-slate-700 group-hover:text-white rounded-lg transition-all font-semibold text-sm">
                    <Download className="w-4 h-4" />
                    Descargar
                  </button>
                </motion.div>
              )
            })}
          </div>

          {/* Download All */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full hover:scale-105 transition-transform font-bold text-lg inline-flex items-center gap-3">
              <Download className="w-5 h-5" />
              Descargar Press Kit Completo
              <span className="text-sm font-normal opacity-75">(120 MB)</span>
            </button>
          </motion.div>

          {/* Tech Specs */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-8 text-center">
              Ficha Técnica
            </h3>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {techSpecs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-semibold text-slate-700">{spec.label}:</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact for Press */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-slate-100 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-serif font-bold mb-3">
              Contacto para Prensa
            </h3>
            <p className="text-gray-600 mb-6">
              Para entrevistas, solicitudes de material adicional o información específica:
            </p>
            <a
              href="mailto:info@almagrosanmiguel.com"
              className="inline-block px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-full transition-colors font-semibold"
            >
              info@almagrosanmiguel.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
