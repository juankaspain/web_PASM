'use client'

import { motion } from 'framer-motion'
import { Shield, Mail, Lock, Eye, Database, UserCheck, FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Shield,
      title: '1. Responsable del Tratamiento',
      content: (
        <>
          <p className="mb-4">
            <strong>Identidad:</strong> Pedro Francisco Almagro Gordillo (Almagro San Miguel)<br />
            <strong>Dirección:</strong> Madrid, España<br />
            <strong>Correo electrónico:</strong> <a href="mailto:info@almagrosanmiguel.com" className="text-yellow-400 hover:text-yellow-300">info@almagrosanmiguel.com</a><br />
            <strong>Sitio Web:</strong> <a href="https://almagrosanmiguel.com" className="text-yellow-400 hover:text-yellow-300">https://almagrosanmiguel.com</a>
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: '2. Finalidad del Tratamiento de Datos',
      content: (
        <>
          <p className="mb-4">
            Los datos personales que nos facilites a través del formulario de contacto serán tratados con las siguientes finalidades:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Gestionar y responder a tus consultas, solicitudes de información o propuestas profesionales</li>
            <li>Mantener comunicación contigo sobre oportunidades profesionales, castings o colaboraciones</li>
            <li>Enviar información sobre proyectos, noticias o actualizaciones relacionadas con mi actividad profesional (solo si has dado tu consentimiento explícito)</li>
            <li>Cumplir con obligaciones legales aplicables</li>
          </ul>
        </>
      ),
    },
    {
      icon: Lock,
      title: '3. Legitimación',
      content: (
        <>
          <p className="mb-4">
            La base legal para el tratamiento de tus datos personales es:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Consentimiento:</strong> Al rellenar y enviar el formulario de contacto, consientes expresamente el tratamiento de tus datos</li>
            <li><strong>Interés legítimo:</strong> Para responder a tus consultas profesionales</li>
            <li><strong>Ejecución de contrato:</strong> Cuando sea necesario para gestionar relaciones profesionales o contractuales</li>
          </ul>
          <p className="mt-4">
            Puedes retirar tu consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.
          </p>
        </>
      ),
    },
    {
      icon: Database,
      title: '4. Datos Recopilados',
      content: (
        <>
          <p className="mb-4">
            A través del formulario de contacto recopilamos:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Tipo de consulta (casting, colaboración, prensa, representación, otro)</li>
            <li>Mensaje o consulta</li>
          </ul>
          <p className="mt-4">
            <strong>Cookies y tecnologías similares:</strong> Consulta nuestra{' '}
            <Link href="/cookies" className="text-yellow-400 hover:text-yellow-300">
              Política de Cookies
            </Link>
            {' '}para más información.
          </p>
        </>
      ),
    },
    {
      icon: UserCheck,
      title: '5. Destinatarios de los Datos',
      content: (
        <>
          <p className="mb-4">
            Tus datos personales no serán compartidos con terceros, salvo:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Proveedores de servicios:</strong> Utilizamos Formspree para gestionar el formulario de contacto y servicios de hosting (Vercel, GitHub). Estos proveedores actúan como encargados del tratamiento y solo procesan datos bajo nuestras instrucciones</li>
            <li><strong>Obligación legal:</strong> Cuando sea requerido por ley o autoridades competentes</li>
            <li><strong>Transferencias internacionales:</strong> Algunos de nuestros proveedores pueden estar ubicados fuera del Espacio Económico Europeo (EEE). En estos casos, garantizamos que existen medidas de protección adecuadas (cláusulas contractuales tipo, Privacy Shield, etc.)</li>
          </ul>
        </>
      ),
    },
    {
      icon: Eye,
      title: '6. Conservación de los Datos',
      content: (
        <>
          <p className="mb-4">
            Tus datos personales serán conservados:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Consultas generales:</strong> Durante el tiempo necesario para atender tu solicitud y hasta que solicites su supresión</li>
            <li><strong>Relaciones profesionales:</strong> Mientras exista una relación profesional activa o potencial</li>
            <li><strong>Obligaciones legales:</strong> El tiempo que establezcan las normativas aplicables</li>
          </ul>
          <p className="mt-4">
            Transcurridos estos plazos, los datos serán eliminados o anonimizados de forma segura.
          </p>
        </>
      ),
    },
    {
      icon: Shield,
      title: '7. Derechos del Usuario',
      content: (
        <>
          <p className="mb-4">
            En cumplimiento del RGPD y la LOPDGDD, puedes ejercer los siguientes derechos:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos ("derecho al olvido")</li>
            <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos</li>
            <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
            <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado y transferirlos a otro responsable</li>
            <li><strong>Retirada del consentimiento:</strong> En cualquier momento, sin efectos retroactivos</li>
          </ul>
          <p className="mt-4">
            Para ejercer estos derechos, envía un correo a{' '}
            <a href="mailto:info@almagrosanmiguel.com" className="text-yellow-400 hover:text-yellow-300">
              info@almagrosanmiguel.com
            </a>
            {' '}indicando el derecho que deseas ejercer y adjuntando copia de tu DNI o documento identificativo.
          </p>
          <p className="mt-4">
            <strong>Reclamaciones:</strong> Si consideras que no hemos atendido correctamente tus derechos, puedes presentar una reclamación ante la{' '}
            <a 
              href="https://www.aepd.es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300"
            >
              Agencia Española de Protección de Datos (AEPD)
            </a>.
          </p>
        </>
      ),
    },
    {
      icon: Lock,
      title: '8. Seguridad de los Datos',
      content: (
        <>
          <p className="mb-4">
            Hemos implementado medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos personales contra:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Acceso no autorizado</li>
            <li>Alteración, pérdida o destrucción accidental</li>
            <li>Tratamiento ilícito</li>
          </ul>
          <p className="mt-4">
            Utilizamos cifrado SSL/TLS para todas las transmisiones de datos y servicios de hosting seguros con certificaciones de seguridad reconocidas.
          </p>
        </>
      ),
    },
    {
      icon: Mail,
      title: '9. Menores de Edad',
      content: (
        <>
          <p>
            Este sitio web no está dirigido a menores de 14 años. No recopilamos intencionalmente datos personales de menores. Si eres padre/madre o tutor y tienes conocimiento de que tu hijo nos ha proporcionado datos personales, contacta con nosotros para proceder a su eliminación.
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: '10. Actualizaciones de la Política',
      content: (
        <>
          <p className="mb-4">
            Nos reservamos el derecho a modificar esta Política de Privacidad para adaptarla a cambios legislativos o en nuestras prácticas de tratamiento de datos.
          </p>
          <p>
            Cualquier cambio será publicado en esta página con la fecha de última actualización. Te recomendamos revisar periódicamente esta política.
          </p>
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
              <Shield className="w-7 h-7 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                Política de Privacidad
              </h1>
              <p className="text-slate-400 mt-1">
                Última actualización: 12 de enero de 2026
              </p>
            </div>
          </div>
          
          <p className="text-slate-300 leading-relaxed">
            En cumplimiento del Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), te informamos sobre cómo tratamos tus datos personales.
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

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 bg-gradient-to-br from-yellow-900/10 to-orange-900/5 border border-yellow-400/30 rounded-2xl p-8 text-center"
        >
          <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            ¿Tienes alguna pregunta?
          </h3>
          <p className="text-slate-300 mb-6">
            Si tienes dudas sobre cómo tratamos tus datos o deseas ejercer tus derechos, contáctanos:
          </p>
          <a
            href="mailto:info@almagrosanmiguel.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 rounded-xl font-bold text-black transition-all shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            info@almagrosanmiguel.com
          </a>
        </motion.div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Link
            href="/cookies"
            className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
          >
            Ver Política de Cookies →
          </Link>
        </div>
      </div>
    </div>
  )
}
