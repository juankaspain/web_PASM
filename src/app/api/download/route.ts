import { NextRequest, NextResponse } from 'next/server'

// Mock download handler for Press Kit items
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const type = searchParams.get('type')

  // In production, this would serve actual files
  // For now, return a JSON response indicating the download
  const downloads: Record<string, { filename: string; size: string }> = {
    bio: { filename: 'Almagro_San_Miguel_Biografia.pdf', size: '250 KB' },
    photos: { filename: 'Almagro_San_Miguel_Photos_HD.zip', size: '45 MB' },
    showreel: { filename: 'Almagro_San_Miguel_Showreel_2024.mp4', size: '120 MB' },
    awards: { filename: 'Almagro_San_Miguel_Premios.pdf', size: '180 KB' },
    filmography: { filename: 'Almagro_San_Miguel_Filmografia.pdf', size: '320 KB' },
    techsheet: { filename: 'Almagro_San_Miguel_Ficha_Tecnica.pdf', size: '150 KB' },
    complete: { filename: 'Almagro_San_Miguel_Press_Kit_Completo.zip', size: '120 MB' },
  }

  const download = downloads[type || 'bio']

  if (!download) {
    return NextResponse.json({ error: 'Invalid download type' }, { status: 400 })
  }

  // Return mock response
  return NextResponse.json({
    success: true,
    message: `Descargando ${download.filename} (${download.size})`,
    filename: download.filename,
    size: download.size,
    note: 'En producción, esto serviría el archivo real. Ahora es un mock para desarrollo.',
  })
}
