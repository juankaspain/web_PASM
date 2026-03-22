'use client'

import { motion, useInView } from 'framer-motion'
import {
  Download,
  FileText,
  Image as ImageIcon,
  Video,
  Award,
  Info,
  CheckCircle2,
  Package,
  Mail,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
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
        {
          text: 'CNTC',
          url: 'http://teatroclasico.es/compania-nacional-de-teatro-clasico/',
        },
      ],
    },
  },
  {
    label: 'Formación Adicional',
    value: {
      text: '',
      links: [
        { text: 'Work In Progress', url: 'http://www.workinprogressmadrid.com/' },
        { text: 'NO-IDENTITY', url: 'https://www.no-identity.es/' },
      ],
    },
  },
  { label: 'Agencia', value: 'Contacto directo' },
]

export default function PressKit() {
  const [downloading, setDownloading] = useState<string | null>(null)
  // E.6 - Reconstruct email client-side to prevent scraping
  const [displayEmail, setDisplayEmail] = useState('...')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    const parts = ['info', 'almagrosanmiguel.com']
    setDisplayEmail(parts.join('@'))
  }, [])

  const handleDownload = async (type: string, _title: string) => {
    setDownloading(type)
    try {
      const response = await fetch(`/api/download?type=${type}`)
      const data = await response.json()
      alert(`${data.message}\n\n${data.note}`)
    } catch {
      alert('Error al descargar. Inténtalo de nuevo.')
    } finally {
      setDownloading(null)
    }
  }

  return (
    <section
      id="presskit"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-black to-slate-950 py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-yellow-500/5 blur-[100px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
          <div className="mx-auto mb-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DOWNLOAD_ITEMS.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="relative h-full">
                    {/* Glow effect */}
                    <div
                      className={`absolute -inset-[1px] bg-gradient-to-br ${item.color} rounded-xl opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div className="relative h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-yellow-400/30 hover:bg-white/[0.05]">
                      <div className="mb-4 flex items-start justify-between">
                        <div
                          className={`h-12 w-12 rounded-lg ${item.iconBg} flex items-center justify-center border border-white/10 backdrop-blur-sm`}
                        >
                          <Icon
                            className={`h-5 w-5 ${item.iconColor}`}
                            strokeWidth={1.5}
                          />
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="rounded bg-white/5 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-slate-300">
                            {item.format}
                          </span>
                          <span className="text-xs text-slate-600">{item.size}</span>
                        </div>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mb-5 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                      <button
                        onClick={() => handleDownload(item.type, item.title)}
                        disabled={downloading === item.type}
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:border-yellow-400/50 hover:bg-white/10 hover:text-white disabled:opacity-50"
                      >
                        <Download className="h-4 w-4" strokeWidth={1.5} />
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
            className="mb-20 text-center"
          >
            <button
              onClick={() => handleDownload('complete', 'Press Kit Completo')}
              disabled={downloading === 'complete'}
              className="inline-flex items-center gap-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-10 py-4 text-base font-medium text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-yellow-400/50 hover:bg-yellow-400/20 disabled:opacity-50"
            >
              <Download className="h-5 w-5" strokeWidth={1.5} />
              {downloading === 'complete'
                ? 'Descargando...'
                : 'Descargar Press Kit Completo'}
              <span className="text-sm text-slate-400">(120 MB)</span>
            </button>
          </motion.div>

          {/* Technical Specs */}
          <div className="mx-auto mb-20 max-w-4xl">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-3xl font-bold text-white">Ficha Técnica</h3>
              <div className="mx-auto h-0.5 w-16 bg-yellow-400" />
            </div>

            <div className="relative">
              <div className="absolute -inset-[1px] rounded-xl bg-yellow-400/10 opacity-50 blur-lg" />

              <div className="relative rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                <div className="grid gap-6 md:grid-cols-2">
                  {techSpecs.map((spec, index) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                      className="group flex items-center justify-between border-b border-white/5 py-3 transition-colors last:border-0 hover:border-white/10"
                    >
                      <span className="text-sm font-medium uppercase tracking-wider text-slate-500 transition-colors group-hover:text-slate-400">
                        {spec.label}
                      </span>
                      <span className="text-right font-medium text-white">
                        {typeof spec.value === 'string' ? (
                          spec.value
                        ) : (
                          <span className="flex flex-wrap items-center justify-end gap-2">
                            {spec.value.links?.map((link, linkIndex, arr) => (
                              <span key={link.text}>
                                <a
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-yellow-400 transition-colors hover:text-yellow-300"
                                >
                                  {link.text}
                                  <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                                </a>
                                {linkIndex < arr.length - 1 && (
                                  <span className="mx-1 text-slate-600">,</span>
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
            className="mx-auto max-w-2xl"
          >
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-xl bg-yellow-400/10 opacity-50 blur-xl" />

              <div className="relative rounded-xl border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-sm">
                <Sparkles
                  className="mx-auto mb-4 h-8 w-8 text-yellow-400"
                  strokeWidth={1.5}
                />
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Contacto para Prensa
                </h3>
                <div className="mx-auto mb-6 h-0.5 w-12 bg-yellow-400" />
                <p className="mb-8 leading-relaxed text-slate-400">
                  Para entrevistas, solicitudes de material adicional o información
                  específica:
                </p>

                <a
                  href={`mailto:${displayEmail}`}
                  className="inline-flex items-center gap-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-10 py-4 font-medium text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-yellow-400/50 hover:bg-yellow-400/20"
                >
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                  {displayEmail}
                </a>
              </div>
            </div>

            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-8 flex items-center justify-center gap-2 text-slate-500"
            >
              <CheckCircle2 className="h-4 w-4 text-yellow-400" strokeWidth={1.5} />
              <span className="text-sm">
                Material de alta calidad para uso profesional
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
