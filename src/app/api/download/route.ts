import { NextRequest, NextResponse } from 'next/server'
import {
  generateBioPDF,
  generateFilmographyPDF,
  generateAwardsPDF,
  generateTechSheetPDF,
} from '@/lib/generatePDF'

type DownloadType = 'bio' | 'filmography' | 'awards' | 'techsheet'

const DOWNLOADS: Record<
  DownloadType,
  {
    generate: () => Promise<Blob>
    filename: string
  }
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

const REQUEST_ONLY_TYPES = new Set(['photos', 'showreel', 'complete'])

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type')

  if (!type) {
    return NextResponse.json({ error: 'Tipo de descarga obligatorio.' }, { status: 400 })
  }

  if (REQUEST_ONLY_TYPES.has(type)) {
    return NextResponse.json(
      {
        error:
          'Este material se entrega bajo solicitud para evitar publicar archivos simulados.',
        action: 'Solicítalo desde el formulario de contacto profesional.',
      },
      { status: 501 }
    )
  }

  if (!(type in DOWNLOADS)) {
    return NextResponse.json({ error: 'Tipo de descarga inválido.' }, { status: 400 })
  }

  try {
    const download = DOWNLOADS[type as DownloadType]
    const blob = await download.generate()
    const arrayBuffer = await blob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': `attachment; filename="${download.filename}"`,
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'private, no-store',
      },
    })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: 'Error en el servidor al procesar la descarga.' },
      { status: 500 }
    )
  }
}
