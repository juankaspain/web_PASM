'use client'

import { motion } from 'framer-motion'
import { Scale, User, Mail, Globe, Copyright, Shield, FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function LegalNotice() {
  const sections = [
    {
      icon: User,
      title: '1. Datos Identificativos',
      content: (
        <>
          <p className="mb-4">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular del sitio web:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
            <p><strong className="text-white">Titular:</strong> Pedro Francisco Almagro Gordillo (Almagro San Miguel)</p>
            <p><strong className="text-white">NIF:</strong> [Pendiente de incluir]</p>
            <p><strong className="text-white">Domicilio:</strong> Madrid, España</p>
            <p><strong className="text-white">Email:</strong>{' '}
              <a href="mailto:info@almagrosanmiguel.com" className="text-yellow-400 hover:text-yellow-300">
                info@almagrosanmiguel.com
              </a>
            </p>
            <p><strong className="text-white">Sitio web:</strong>{' '}
              <a href="https://almagrosanmiguel.com" className="text-yellow-400 hover:text-yellow-300">
                https://almagrosanmiguel.com
              </a>
            </p>
          </div>
        </>
      ),
    },
    {
      icon: Globe,
      title: '2. Objeto',
      content: (
        <>
          <p className="mb-4">
            Este sitio web tiene como finalidad proporcionar información sobre la actividad profesional de Almagro San Miguel como actor, incluyendo:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Portfolio profesional y trayectoria artística</li>
            <li>Filmografía, proyectos de televisión, cine y teatro</li>
            <li>Información de contacto para oportunidades profesionales</li>
            <li>Noticias y actualizaciones sobre proyectos actuales</li>
          </ul>
          <p className="mt-4">
            El acceso y navegación por este sitio web implica la aceptación expresa de los términos y condiciones recogidos en este Aviso Legal.
          </p>
        </>
      ),
    },
    {
      icon: Copyright,
      title: '3. Propiedad Intelectual e Industrial',
      content: (
        <>
          <p className="mb-4">
            Todos los contenidos de este sitio web (textos, imágenes, fotografías, vídeos, diseños gráficos, código fuente, etc.) son propiedad de Pedro Francisco Almagro Gordillo o de terceros que han autorizado su uso, y están protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial.
          </p>
          <p className="mb-4">
            <strong className="text-white">Derechos reservados:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Las fotografías y material audiovisual son propiedad de sus respectivos autores y productoras</li>
            <li>El diseño y estructura del sitio web están protegidos por derechos de autor</li>
            <li>Los logos y marcas pertenecen a sus respectivos propietarios</li>
          </ul>
          <p className="mt-4">
            <strong className="text-white">Uso permitido:</strong> Está permitido visualizar, descargar e imprimir contenidos exclusivamente para uso personal y privado, sin fines comerciales. Cualquier otro uso requiere autorización expresa por escrito.
          </p>
          <p className="mt-4">
            <strong className="text-white">Prohibido:</strong> La reproducción, distribución, comunicación pública, transformación o cualquier otra explotación de los contenidos sin autorización previa y por escrito.
          </p>
        </>
      ),
    },
    {
      icon: Shield,
      title: '4. Protección de Datos',
      content: (
        <>
          <p className="mb-4">
            El tratamiento de datos personales se realiza conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
          </p>
          <p>
            Para más información sobre cómo tratamos tus datos personales, consulta nuestra{' '}
            <Link href="/privacy" className="text-yellow-400 hover:text-yellow-300 font-semibold">
              Política de Privacidad
            </Link>
            {' '}y{' '}
            <Link href="/cookies" className="text-yellow-400 hover:text-yellow-300 font-semibold">
              Política de Cookies
            </Link>.
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: '5. Limitación de Responsabilidad',
      content: (
        <>
          <p className="mb-4">
            El titular del sitio web no garantiza la ausencia de errores en el acceso al sitio, en su contenido, ni que éste se encuentre actualizado en todo momento.
          </p>
          <p className="mb-4">
            <strong className="text-white">El titular no se hace responsable de:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>La disponibilidad técnica, exactitud, veracidad, validez o legalidad de sitios ajenos a su propiedad a los que se pueda acceder a través de enlaces</li>
            <li>Los daños o perjuicios derivados del uso de la información contenida en sitios web enlazados</li>
            <li>La presencia de virus u otros elementos que puedan causar alteraciones en los sistemas informáticos, documentos o archivos de los usuarios</li>
            <li>El uso indebido que terceros puedan hacer de los contenidos publicados</li>
          </ul>
          <p className="mt-4">
            Los enlaces a sitios de terceros son meramente informativos. El titular no controla ni asume responsabilidad sobre el contenido de dichos sitios.
          </p>
        </>
      ),
    },
    {
      icon: Globe,
      title: '6. Enlaces Externos',
      content: (
        <>
          <p className="mb-4">
            Este sitio web puede contener enlaces a sitios web de terceros (redes sociales, plataformas audiovisuales, bases de datos profesionales, etc.).
          </p>
          <p className="mb-4">
            El titular no controla ni se hace responsable del contenido de estos sitios externos. La inclusión de enlaces no implica aprobación, respaldo o verificación de su contenido.
          </p>
          <p>
            <strong className="text-white">Sitios enlazados:</strong> IMDb, Instagram, Twitter/X, Facebook, YouTube, Wikipedia, plataformas de streaming (Prime Video, Netflix, etc.).
          </p>
        </>
      ),
    },
    {
      icon: Scale,
      title: '7. Legislación Aplicable y Jurisdicción',
      content: (
        <>
          <p className="mb-4">
            Este Aviso Legal se rige por la legislación española vigente.
          </p>
          <p className="mb-4">
            Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, el titular y el usuario se someten expresamente a los Juzgados y Tribunales de Madrid (España), con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
          </p>
          <p>
            En caso de que cualquier cláusula de este Aviso Legal sea declarada nula, las demás cláusulas seguirán vigentes y se interpretarán teniendo en cuenta la voluntad de las partes y la finalidad de las mismas.
          </p>
        </>
      ),
    },
    {
      icon: Mail,
      title: '8. Contacto',
      content: (
        <>
          <p className="mb-4">
            Para cualquier consulta, sugerencia o comunicación relacionada con este Aviso Legal, puedes contactar con nosotros a través de:
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="mb-2">
              <strong className="text-white">Email:</strong>{' '}
              <a href="mailto:info@almagrosanmiguel.com" className="text-yellow-400 hover:text-yellow-300">
                info@almagrosanmiguel.com
              </a>
            </p>
            <p>
              <strong className="text-white">Formulario de contacto:</strong>{' '}
              <Link href="/#contact" className="text-yellow-400 hover:text-yellow-300">
                Ir al formulario
              </Link>
            </p>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      {/* Header */}
      <div className="relative border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-yellow-400/10 border border-yellow-400/30 rounded-xl flex items-center justify-center">
              <Scale className="w-7 h-7 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                Aviso Legal
              </h1>
              <p className="text-slate-400 mt-1">
                Última actualización: 12 de enero de 2026
              </p>
            </div>
          </div>
          
          <p className="text-slate-300 leading-relaxed">
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa sobre los aspectos legales del sitio web.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-yellow-400/30 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-white mt-2">
                    {section.title}
                  </h2>
                </div>
                <div className="text-slate-300 leading-relaxed pl-16">
                  {section.content}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <Link
            href="/privacy"
            className="bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all group"
          >
            <Shield className="w-8 h-8 text-yellow-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
              Política de Privacidad
            </h3>
            <p className="text-slate-400 text-sm">
              Información sobre el tratamiento de datos personales
            </p>
          </Link>

          <Link
            href="/cookies"
            className="bg-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all group"
          >
            <FileText className="w-8 h-8 text-yellow-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
              Política de Cookies
            </h3>
            <p className="text-slate-400 text-sm">
              Cómo utilizamos las cookies en este sitio web
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
