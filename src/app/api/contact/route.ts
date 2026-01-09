import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  category: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.category || !body.message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // In production, integrate with email service:
    // - Formspree: await fetch('https://formspree.io/f/YOUR_ID', ...)
    // - SendGrid: await sgMail.send(...)
    // - Resend: await resend.emails.send(...)
    // - Nodemailer: await transporter.sendMail(...)

    // For now, log to console (development)
    console.log('=== NUEVO MENSAJE DE CONTACTO ===')
    console.log('Nombre:', body.name)
    console.log('Email:', body.email)
    console.log('Categoría:', body.category)
    console.log('Mensaje:', body.message)
    console.log('Fecha:', new Date().toISOString())
    console.log('=================================')

    // Simulate email sending
    // In production, this would actually send the email
    const emailContent = `
Nuevo mensaje de contacto - Almagro San Miguel Portfolio

De: ${body.name} <${body.email}>
Categoría: ${body.category}
Fecha: ${new Date().toLocaleString('es-ES')}

Mensaje:
${body.message}

---
Enviado desde www.almagrosanmiguel.com
    `.trim()

    // Here you would send the email
    // await sendEmail(emailContent)

    return NextResponse.json({
      success: true,
      message: '¡Mensaje enviado con éxito! Te responderé pronto.',
      data: {
        name: body.name,
        category: body.category,
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Inténtalo de nuevo.' },
      { status: 500 }
    )
  }
}
