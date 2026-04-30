'use client'

import { useInView } from '@/hooks/useInView'
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
import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import {
  generateAwardsPDF,
  generateBioPDF,
  generateFilmographyPDF,
  generateTechSheetPDF,
} from '@/lib/generatePDF'

const DOWNLOAD_ITEMS = [
  {
    icon: FileText,
    title: 'Biografía Completa',
    description: 'Bio profesional en formato texto con trayectoria completa',
    size: '250 KB',
    format: 'TXT',
    type: 'bio',
    color: 'from-blue-500/10 to-cyan-500/10',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: ImageIcon,
    title: 'Fotos en Alta Resolución',
    description: 'Material bajo solicitud para prensa y productoras',
    size: 'A solicitar',
    format: 'Solicitud',
    type: 'photos',
    color: 'from-purple-500/10 to-pink-500/10',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: Video,
    title: 'Showreel 2024',
    description: 'Material bajo solicitud para prensa y productoras',
    size: 'A solicitar',
    format: 'Solicitud',
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
    format: 'TXT',
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
    format: 'TXT',
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
    format: 'TXT',
    type: 'techsheet',
    color: 'from-indigo-500/10 to-violet-500/10',
    iconBg: 'bg-indigo-500/10',
    iconColor: 'text-indigo-400',
  },
]

const DOWNLOAD_GENERATORS: Record<
  string,
  { generate: () => Promise<Blob>; filename: string }
> = {
  bio: {
    generate: generateBioPDF,
    filename: 'Almagro_San_Miguel_Biografia.txt',
  },
  filmography: {
    generate: generateFilmographyPDF,
    filename: 'Almagro_San_Miguel_Filmografia.txt',
  },
  awards: {
    generate: generateAwardsPDF,
    filename: 'Almagro_San_Miguel_Premios.txt',
  },
  techsheet: {
    generate: generateTechSheetPDF,
    filename: 'Almagro_San_Miguel_Ficha_Tecnica.txt',
  },
}

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
  const displayEmail = ['info', 'almagrosanmiguel.com'].join('@')
  const { ref, isInView } = useInView({ once: true, margin: '-80px' })

  const handleDownload = async (type: string, title: string) => {
    setDownloading(type)
    try {
      const download = DOWNLOAD_GENERATORS[type]

      if (!download) {
        alert(
          `${title} se entrega bajo solicitud para evitar publicar archivos simulados.\n\nSolicítalo desde el formulario de contacto profesional.`
        )
        return
      }

      const blob = await download.generate()

      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = download.filename
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
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
        <div
          ref={ref}
          className={`transition-all duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
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
                <div
                  key={item.type}
                  className={`group transition-all duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
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
                        {downloading === item.type
                          ? 'Descargando...'
                          : item.format === 'Solicitud'
                            ? 'Solicitar'
                            : 'Descargar'}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Complete Press Kit Button */}
          <div
            className={`mb-20 text-center transition-all delay-[800ms] duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
          >
            <button
              onClick={() => handleDownload('complete', 'Press Kit Completo')}
              disabled={downloading === 'complete'}
              className="inline-flex items-center gap-3 rounded-xl border border-yellow-400/30 bg-yellow-400/10 px-10 py-4 text-base font-medium text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:border-yellow-400/50 hover:bg-yellow-400/20 disabled:opacity-50"
            >
              <Download className="h-5 w-5" strokeWidth={1.5} />
              {downloading === 'complete'
                ? 'Descargando...'
                : 'Solicitar Press Kit Completo'}
              <span className="text-sm text-slate-400">Bajo solicitud</span>
            </button>
          </div>

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
                    <div
                      key={spec.label}
                      className={`group flex items-center justify-between border-b border-white/5 py-3 transition-all duration-500 last:border-0 hover:border-white/10 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`}
                      style={{ transitionDelay: `${900 + index * 50}ms` }}
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Press Contact */}
          <div
            className={`mx-auto max-w-2xl transition-all delay-[1200ms] duration-[600ms] ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
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
            <div
              className={`mt-8 flex items-center justify-center gap-2 text-slate-500 transition-opacity delay-[1400ms] duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}
            >
              <CheckCircle2 className="h-4 w-4 text-yellow-400" strokeWidth={1.5} />
              <span className="text-sm">
                Material de alta calidad para uso profesional
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
