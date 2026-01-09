import { NextRequest, NextResponse } from 'next/server'
import {
  generateBioPDF,
  generateFilmographyPDF,
  generateAwardsPDF,
  generateTechSheetPDF,
} from '@/lib/generatePDF'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const type = searchParams.get('type')

  try {
    let blob: Blob
    let filename: string

    switch (type) {
      case 'bio':
        blob = await generateBioPDF()
        filename = 'Almagro_San_Miguel_Biografia.txt'
        break
      case 'filmography':
        blob = await generateFilmographyPDF()
        filename = 'Almagro_San_Miguel_Filmografia.txt'
        break
      case 'awards':
        blob = await generateAwardsPDF()
        filename = 'Almagro_San_Miguel_Premios.txt'
        break
      case 'techsheet':
        blob = await generateTechSheetPDF()
        filename = 'Almagro_San_Miguel_Ficha_Tecnica.txt'
        break
      case 'photos':
        // Mock ZIP file
        return NextResponse.json({
          message: 'Pack de fotos preparado para descarga',
          filename: 'Almagro_San_Miguel_Photos_HD.zip',
          size: '45 MB',
          note: 'Contiene 10 fotografías profesionales en alta resolución (300 DPI)',
          files: [
            'ASM_Portrait_001.jpg',
            'ASM_Portrait_002.jpg',
            'ASM_LaModerna_001.jpg',
            'ASM_VisAVis_001.jpg',
            'ASM_Hernan_001.jpg',
            'ASM_Theater_001.jpg',
            'ASM_Headshot_001.jpg',
            'ASM_Headshot_002.jpg',
            'ASM_Action_001.jpg',
            'ASM_BehindTheScenes_001.jpg',
          ],
        })
      case 'showreel':
        // Mock video file
        return NextResponse.json({
          message: 'Showreel preparado para descarga',
          filename: 'Almagro_San_Miguel_Showreel_2024.mp4',
          size: '120 MB',
          duration: '3:45',
          format: 'MP4 (H.264)',
          resolution: '1920x1080 (Full HD)',
          note: 'Recopilatorio de escenas destacadas de TV, cine y teatro',
        })
      case 'complete':
        // Mock complete kit
        return NextResponse.json({
          message: 'Press Kit Completo preparado',
          filename: 'Almagro_San_Miguel_Press_Kit_Completo.zip',
          size: '120 MB',
          note: 'Incluye todos los materiales: Bio, Filmografía, Premios, Ficha Técnica, Fotos HD y Showreel',
          contents: [
            'Almagro_San_Miguel_Biografia.pdf',
            'Almagro_San_Miguel_Filmografia.pdf',
            'Almagro_San_Miguel_Premios.pdf',
            'Almagro_San_Miguel_Ficha_Tecnica.pdf',
            'Photos_HD/',
            'Almagro_San_Miguel_Showreel_2024.mp4',
          ],
        })
      default:
        return NextResponse.json(
          { error: 'Tipo de descarga inválido' },
          { status: 400 }
        )
    }

    // For text files (bio, filmography, awards, techsheet)
    if (blob) {
      const arrayBuffer = await blob.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)

      return new NextResponse(buffer, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Content-Disposition': `attachment; filename="${filename}"`,
          'Content-Length': buffer.length.toString(),
        },
      })
    }

    return NextResponse.json({ error: 'Error generando archivo' }, { status: 500 })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: 'Error en el servidor al procesar la descarga' },
      { status: 500 }
    )
  }
}
