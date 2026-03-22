'use client'

import { motion } from 'framer-motion'
import {
  Cookie,
  Shield,
  BarChart3,
  Target,
  Settings,
  Trash2,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react'
import Link from 'next/link'

export default function CookiesPolicy() {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Cookies Necesarias',
      color: 'green',
      description:
        'Son imprescindibles para el funcionamiento del sitio web y no pueden ser desactivadas.',
      examples: [
        {
          name: 'cookie-consent-pasm',
          purpose: 'Almacena tu consentimiento sobre el uso de cookies',
          duration: 'Permanente (hasta que la borres)',
          type: 'Propia',
        },
        {
          name: 'cookie-preferences-pasm',
          purpose: 'Guarda tus preferencias de cookies (qué tipos has aceptado)',
          duration: 'Permanente (hasta que la borres)',
          type: 'Propia',
        },
      ],
    },
    {
      icon: BarChart3,
      title: 'Cookies Analíticas',
      color: 'blue',
      description:
        'Nos ayudan a entender cómo los visitantes interactúan con el sitio web, recopilando y reportando información de forma anónima.',
      examples: [
        {
          name: '_ga',
          purpose:
            'Registra un identificador único para generar datos estadísticos sobre cómo usa el visitante el sitio web',
          duration: '2 años',
          type: 'Terceros (Google Analytics)',
        },
        {
          name: '_ga_*',
          purpose: 'Usado por Google Analytics para mantener el estado de la sesión',
          duration: '2 años',
          type: 'Terceros (Google Analytics)',
        },
        {
          name: '_gid',
          purpose: 'Registra un identificador único para generar datos estadísticos',
          duration: '1 día',
          type: 'Terceros (Google Analytics)',
        },
      ],
    },
    {
      icon: Target,
      title: 'Cookies de Marketing',
      color: 'purple',
      description:
        'Se utilizan para rastrear a los visitantes en los sitios web con la intención de mostrar anuncios relevantes y atractivos.',
      examples: [
        {
          name: 'fbp',
          purpose:
            'Usado por Facebook para entregar publicidad cuando están en Facebook o en una plataforma digital impulsada por publicidad de Facebook',
          duration: '3 meses',
          type: 'Terceros (Facebook)',
        },
        {
          name: 'fr',
          purpose: 'Utilizado por Facebook para proporcionar productos publicitarios',
          duration: '3 meses',
          type: 'Terceros (Facebook)',
        },
      ],
    },
    {
      icon: Settings,
      title: 'Cookies de Preferencias',
      color: 'yellow',
      description:
        'Permiten que el sitio web recuerde información que cambia la forma en que se comporta o se ve, como tu idioma preferido.',
      examples: [
        {
          name: 'lang',
          purpose: 'Almacena el idioma preferido del usuario',
          duration: 'Sesión',
          type: 'Propia',
        },
        {
          name: 'theme',
          purpose: 'Guarda las preferencias de visualización del usuario',
          duration: 'Permanente',
          type: 'Propia',
        },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; bg: string; border: string }> = {
      green: {
        text: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'border-green-400/30',
      },
      blue: {
        text: 'text-blue-400',
        bg: 'bg-blue-400/10',
        border: 'border-blue-400/30',
      },
      purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/30',
      },
      yellow: {
        text: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/30',
      },
    }
    return colors[color] || colors.yellow
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Header */}
      <div className="relative border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group mb-6 inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-yellow-400"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Volver al inicio
          </Link>

          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-yellow-400/30 bg-yellow-400/10">
              <Cookie className="h-7 w-7 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white lg:text-4xl">
                Política de Cookies
              </h1>
              <p className="mt-1 text-slate-400">
                Última actualización: 12 de enero de 2026
              </p>
            </div>
          </div>

          <p className="leading-relaxed text-slate-300">
            En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la
            Información y Comercio Electrónico (LSSI-CE), te informamos sobre el uso de
            cookies en este sitio web.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* What are cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-8"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
            <Cookie className="h-7 w-7 text-yellow-400" />
            ¿Qué son las cookies?
          </h2>
          <div className="space-y-4 leading-relaxed text-slate-300">
            <p>
              Las cookies son pequeños archivos de texto que los sitios web almacenan en
              tu dispositivo (ordenador, tablet o móvil) cuando los visitas. Se utilizan
              ampliamente para hacer que los sitios web funcionen de manera más eficiente,
              así como para proporcionar información a los propietarios del sitio.
            </p>
            <p>
              Las cookies pueden ser "permanentes" (que permanecen en tu dispositivo hasta
              que las borres o caduquen) o de "sesión" (que se eliminan automáticamente
              cuando cierras el navegador).
            </p>
          </div>
        </motion.div>

        {/* Cookie Types */}
        <div className="mb-12 space-y-8">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Tipos de Cookies que Utilizamos
          </h2>

          {cookieTypes.map((type, index) => {
            const Icon = type.icon
            const colors = getColorClasses(type.color)

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-yellow-400/30 lg:p-8"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div
                    className={`h-12 w-12 ${colors.bg} border ${colors.border} flex flex-shrink-0 items-center justify-center rounded-lg`}
                  >
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-white">{type.title}</h3>
                    <p className="text-slate-300">{type.description}</p>
                  </div>
                </div>

                {/* Examples table */}
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="px-2 py-3 text-left font-semibold text-slate-400">
                          Nombre
                        </th>
                        <th className="px-2 py-3 text-left font-semibold text-slate-400">
                          Finalidad
                        </th>
                        <th className="px-2 py-3 text-left font-semibold text-slate-400">
                          Duración
                        </th>
                        <th className="px-2 py-3 text-left font-semibold text-slate-400">
                          Tipo
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {type.examples.map((example, idx) => (
                        <tr key={idx} className="border-b border-white/5">
                          <td className="px-2 py-3 font-mono text-xs text-white">
                            {example.name}
                          </td>
                          <td className="px-2 py-3 text-slate-300">{example.purpose}</td>
                          <td className="px-2 py-3 text-slate-400">{example.duration}</td>
                          <td className="px-2 py-3">
                            <span className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">
                              {example.type}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* How to manage cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-8"
        >
          <h2 className="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
            <Settings className="h-7 w-7 text-yellow-400" />
            Cómo Gestionar las Cookies
          </h2>
          <div className="space-y-4 leading-relaxed text-slate-300">
            <p>
              Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas
              las cookies que ya estén en tu dispositivo y configurar la mayoría de los
              navegadores para evitar que se coloquen.
            </p>
            <p className="font-semibold text-white">
              Configuración de cookies en tu navegador:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300"
                >
                  Google Chrome <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300"
                >
                  Mozilla Firefox <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300"
                >
                  Safari <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300"
                >
                  Microsoft Edge <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
            <p className="mt-4">
              <strong>En este sitio web:</strong> Puedes gestionar tus preferencias de
              cookies en cualquier momento haciendo clic en el botón de configuración de
              cookies que aparece al pie de la página.
            </p>
          </div>
        </motion.div>

        {/* Third party cookies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-8"
        >
          <h2 className="mb-4 text-2xl font-bold text-white">Cookies de Terceros</h2>
          <div className="space-y-4 leading-relaxed text-slate-300">
            <p>
              Este sitio web utiliza servicios de terceros que establecen cookies propias
              para su funcionamiento:
            </p>
            <ul className="ml-4 list-inside list-disc space-y-2">
              <li>
                <strong className="text-white">Google Analytics:</strong> Para análisis de
                tráfico y comportamiento de usuarios.{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <strong className="text-white">Facebook Pixel:</strong> Para medir la
                efectividad de campañas publicitarias.{' '}
                <a
                  href="https://www.facebook.com/privacy/explanation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
            <p className="mt-4">
              No tenemos acceso ni control sobre las cookies que utilizan estos terceros.
              Te recomendamos revisar sus políticas de privacidad para más información.
            </p>
          </div>
        </motion.div>

        {/* Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 lg:p-8"
        >
          <h2 className="mb-4 text-2xl font-bold text-white">
            Actualizaciones de esta Política
          </h2>
          <p className="leading-relaxed text-slate-300">
            Podemos actualizar nuestra Política de Cookies ocasionalmente. Te
            notificaremos cualquier cambio publicando la nueva Política de Cookies en esta
            página y actualizando la fecha de "Última actualización" en la parte superior.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12 rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-900/10 to-orange-900/5 p-8 text-center"
        >
          <Trash2 className="mx-auto mb-4 h-12 w-12 text-yellow-400" />
          <h3 className="mb-3 text-2xl font-bold text-white">
            Gestiona tus Preferencias
          </h3>
          <p className="mb-6 text-slate-300">
            Puedes cambiar tu configuración de cookies en cualquier momento desde nuestro
            panel de preferencias.
          </p>
          <button
            onClick={() => {
              // Esto limpiará las preferencias y mostrará el banner nuevamente
              localStorage.removeItem('cookie-consent-pasm')
              localStorage.removeItem('cookie-preferences-pasm')
              window.location.reload()
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 font-bold text-black shadow-lg transition-all hover:from-yellow-300 hover:to-amber-400 hover:shadow-xl"
          >
            <Settings className="h-5 w-5" />
            Configurar Cookies
          </button>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Link
            href="/privacy"
            className="font-semibold text-yellow-400 transition-colors hover:text-yellow-300"
          >
            Ver Política de Privacidad →
          </Link>
        </div>
      </div>
    </div>
  )
}
