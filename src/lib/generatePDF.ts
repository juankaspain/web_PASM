// PDF Generation utility for Press Kit downloads
// In production, this would use a library like @react-pdf/renderer or pdfmake

export interface PDFContent {
  title: string
  sections: Array<{
    heading: string
    content: string | string[]
  }>
}

export async function generateBioPDF(): Promise<Blob> {
  const content = `
ALMAGRO SAN MIGUEL
Actor Profesional

=================================
BIOGRAFÍA COMPLETA
=================================

DATOS PERSONALES
-----------------
Nombre Artístico: Almagro San Miguel
Nombre Real: Pedro Francisco Almagro Gordillo
Fecha de Nacimiento: 7 de marzo de 1990
Lugar: Sevilla, Andalucía, España
Altura: 1.78 m
Ojos: Marrones
Cabello: Castaño Oscuro

FORMACIÓN
-----------
- Graduado en Arte Dramático, ESAD Sevilla (2008-2012)
- Compañía Nacional de Teatro Clásico (2015-2017)
  Bajo dirección de Helena Pimenta
- Work In Progress con Darío Facal (2014-2015)
- Especialista de Cine, NO-IDENTITY

TRAYECTORIA PROFESIONAL
-----------------------

TELEVISIÓN (2017-2024)
- La Moderna (TVE, 2023-2024) - 236 episodios - Íñigo Peñalver [PROTAGONISTA]
- Operación Barrio Inglés (TVE, 2024) - 8 episodios - Toni
- La Caza: Guadiana (TVE, 2023) - Aurelio
- Honor (Atresplayer, 2023) - Federico
- Desconocidas (Canal Sur, 2022) - 8 episodios - Ramón
- Estoy vivo (TVE, 2021) - 12 episodios - Mikel Uribe
- Vis a vis: El Oasis (Fox/Star, 2020) - Diego "Dieguito" Ramala [PROTAGONISTA]
- Hernán (Prime Video, 2019) - Gonzalo de Sandoval
- Amar es para siempre (Antena 3, 2018) - Carlos
- Grupo 2: Homicidios (La 1, 2017) - Víctor
- Centro Médico (La 1, 2017) - Dani

CINE
- Un fantasma en la batalla (2025) - Dir. Agustín Díaz Yanes - Antonio
- El secreto de Ibosim (2019) - Carlos
- La voz de tu alma (2016) - Iván
- Lapso (2013) - Rodolfo [Rating IMDb: 8.6]

TEATRO DESTACADO
- Oliver Twist - Musical (2016) - Jefe de Policía Duff
  PREMIO: Mejor Espectáculo del Año
- Fuente Ovejuna (CNTC, 2015)
  NOMINACIÓN: Mejor Actor Secundario, Unión de Actores
- La Villana de Getafe (CNTC, 2017)
- La vida es sueño (2015) - Segismundo
- Don Juan Tenorio (2014)
- Teatro de calle en Andalucía (2009-2012)
- Corral de Comedias, Isla Mágica (varios años)

HABILIDADES ESPECIALES
----------------------
- Esgrima (nivel avanzado)
- Equitación
- Música: Violonchelo y Viola (autodidacta)
- Verso clásico español (Calderón, Lope de Vega, Shakespeare)
- Lucha escénica y acrobacias
- Danza: Flamenco, contemporánea
- Mimo y pantomima
- Teatro de calle
- Acentos: Andaluz, castellano neutro

IDIOMAS
--------
- Español: Nativo
- Inglés: Intermedio

CONTACTO PROFESIONAL
--------------------
Email: info@almagrosanmiguel.com
IMDb: nm9017709
Instagram: @almagrosanmiguel
Web: www.almagrosanmiguel.com

DISPONIBILIDAD
--------------
Disponible para nuevos proyectos a partir de Mayo 2026

=================================
Generated: ${new Date().toLocaleDateString('es-ES')}
Press Kit © 2026 Almagro San Miguel
=================================
  `.trim()

  return new Blob([content], { type: 'text/plain' })
}

export async function generateFilmographyPDF(): Promise<Blob> {
  const content = `
ALMAGRO SAN MIGUEL
FILMOGRAFÍA COMPLETA

=================================
TELEVISIÓN
=================================

2023-2024 | LA MODERNA (TVE)
Personaje: Íñigo Peñalver
Episodios: 236 (PROTAGONISTA)
Género: Drama/Época
Años 40-50, Madrid

2024 | OPERACIÓN BARRIO INGLÉS (TVE)
Personaje: Toni
Episodios: 8
Género: Espías/Años 40

2023 | LA CAZA: GUADIANA (TVE)
Personaje: Aurelio "Aure" Santana Mencía
Género: Thriller/Suspense
IMDb: 7.3/10

2023 | HONOR (Atresplayer Premium)
Personaje: Federico
Género: Drama

2022 | DESCONOCIDAS (Canal Sur)
Personaje: Ramón
Episodios: 8
Género: Drama

2021 | ESTOY VIVO (TVE)
Personaje: Mikel Uribe
Episodios: 12
Género: Fantasía/Drama

2020 | VIS A VIS: EL OASIS (Fox España/Star Channel)
Personaje: Diego "Dieguito" Ramala (PROTAGONISTA)
Episodios: 8
Género: Thriller/Prisión
IMDb: 6.8/10
Primer papel protagonista

2019 | HERNÁN (Prime Video)
Personaje: Gonzalo de Sandoval
Género: Histórico/Épica
IMDb: 6.2/10
Producción internacional Amazon

2018 | AMAR ES PARA SIEMPRE (Antena 3)
Personaje: Carlos
Género: Drama/Época

2017 | GRUPO 2: HOMICIDIOS (La 1)
Personaje: Víctor
Género: Policiaco

2017 | CENTRO MÉDICO (La 1)
Personaje: Dani
Género: Drama médico

=================================
CINE
=================================

2025 | UN FANTASMA EN LA BATALLA
Director: Agustín Díaz Yanes
Personaje: Antonio
Género: Thriller/Drama
Tema: ETA, basada en hechos reales
Estado: Postproducción

2019 | EL SECRETO DE IBOSIM
Personaje: Carlos
Género: Aventura/Misterio

2016 | LA VOZ DE TU ALMA
Personaje: Iván
Género: Drama

2013 | LAPSO (Cortometraje)
Personaje: Rodolfo
Género: Thriller psicológico
IMDb: 8.6/10 (Rating destacado)

=================================
TEATRO
=================================

2016 | OLIVER TWIST (Musical)
Personaje: Jefe de Policía Duff
Producción: CIA La Tarasca
PREMIO: Mejor Espectáculo del Año

2015 | FUENTE OVEJUNA
Compañía Nacional de Teatro Clásico
Dirección: Helena Pimenta
NOMINACIÓN: Mejor Actor Secundario (Unión de Actores)

2017 | LA VILLANA DE GETAFE
Compañía Nacional de Teatro Clásico

2015 | LA VIDA ES SUEÑO
Personaje: Segismundo
Autor: Calderón de la Barca

2014 | DON JUAN TENORIO
Autor: José Zorrilla

2009-2012 | TEATRO DE CALLE
Varios pueblos de Andalucía
Corral de Comedias (Isla Mágica)

=================================
ESTADÍSTICAS
=================================

Total Episodios TV: 300+
Total Series: 12
Total Películas: 4
Total Obras Teatro: 10+
Años Experiencia: 13 (2013-2026)
Plataformas: TVE, Prime Video, Fox, Atresplayer, Canal Sur
Premios/Nominaciones: 2

=================================
Generated: ${new Date().toLocaleDateString('es-ES')}
Press Kit © 2026 Almagro San Miguel
=================================
  `.trim()

  return new Blob([content], { type: 'text/plain' })
}

export async function generateAwardsPDF(): Promise<Blob> {
  const content = `
ALMAGRO SAN MIGUEL
PREMIOS Y RECONOCIMIENTOS

=================================
PREMIOS OFICIALES
=================================

🏆 PREMIO - 2016
------------------
Título: Mejor Espectáculo del Año
Obra: Oliver Twist (Musical)
Rol: Jefe de Policía Duff
Organización: Producción CIA La Tarasca

⭐ NOMINACIÓN - 2015
--------------------
Título: Mejor Actor Secundario
Obra: Fuente Ovejuna
Organización: Unión de Actores
Compañía: Nacional de Teatro Clásico
Dirección: Helena Pimenta

=================================
HITOS PROFESIONALES
=================================

🎭 COMPAÑÍA NACIONAL TEATRO CLÁSICO (2015-2017)
------------------------------------------------
Seleccionado para formar parte de la CNTC
Dirección: Helena Pimenta
Obras: Fuente Ovejuna, La Villana de Getafe
Formación intensiva en verso clásico español

🎥 PROTAGONISTA SERIE DIARIA TVE (2023-2024)
-------------------------------------------
Serie: La Moderna
Personaje: Íñigo Peñalver
Episodios: 236 consecutivos
Logro: Galán de las tardes de La 1

🌎 PRIME VIDEO INTERNATIONAL (2019)
-------------------------------------
Serie: Hernán
Personaje: Gonzalo de Sandoval
Producción histórica de Amazon para Latinoamérica
Alcance: Distribución internacional

🔥 VIS A VIS: EL OASIS (2020)
----------------------------
Primer Papel Protagonista
Personaje: Diego "Dieguito" Ramala
Plataforma: Fox España / Star Channel
Spin-off de la exitosa serie de Antena 3

=================================
RECONOCIMIENTOS
=================================

✅ 300+ episodios de televisión grabados
✅ 12 series en plataformas nacionales e internacionales
✅ Colaboración con 50+ directores profesionales
✅ Trabajo con actores de primera línea:
   - Maggie Civantos, Najwa Nimri (Vis a vis)
   - Óscar Jaénada, Michel Brown (Hernán)
   - Javier Gutiérrez, Anna Castillo (Estoy vivo)

✅ 6 plataformas diferentes:
   - TVE (La 1)
   - Prime Video
   - Fox España
   - Star Channel
   - Atresplayer
   - Canal Sur

✅ Formación con instituciones prestigiosas:
   - ESAD Sevilla
   - Compañía Nacional de Teatro Clásico
   - Work In Progress (Darío Facal)
   - NO-IDENTITY (Especialista de Cine)

✅ Rating IMDb destacado:
   - Lapso: 8.6/10
   - La Caza: Guadiana: 7.3/10
   - Vis a vis: El Oasis: 6.8/10

=================================
CITAS PROFESIONALES
=================================

"Es un privilegio trabajar con él. Crea un ambiente 
muy tranquilo, se percibe su experiencia."
- Agustín Díaz Yanes, Director
  Un fantasma en la batalla (2025)

"Cuando aprendes de tu pasado, no cometes los mismos 
errores. Es importante para el alma. Me encantan las 
producciones de época, los años 30-40 en España."
- Almagro San Miguel
  Entrevista El Plural TV (2024)

"Si decides estar en esto, trabaja. Esto no es un 
jiji ni un jaja, esto es trabajo duro. Hay que 
respetarnos entre nosotros porque no todo vale."
- Almagro San Miguel
  Sobre la profesión de actor

=================================
Generated: ${new Date().toLocaleDateString('es-ES')}
Press Kit © 2026 Almagro San Miguel
=================================
  `.trim()

  return new Blob([content], { type: 'text/plain' })
}

export async function generateTechSheetPDF(): Promise<Blob> {
  const content = `
ALMAGRO SAN MIGUEL
FICHA TÉCNICA

=================================
DATOS PERSONALES
=================================

Nombre Artístico:        Almagro San Miguel
Nombre Real:             Pedro Francisco Almagro Gordillo
Fecha de Nacimiento:     7 de marzo de 1990 (35 años)
Lugar de Nacimiento:     Sevilla, Andalucía, España

=================================
CARACTERÍSTICAS FÍSICAS
=================================

Altura:                  1.78 m (5'10")
Complexión:              Atlética
Color de Ojos:           Marrones
Color de Cabello:        Castaño Oscuro
Tono de Piel:            Mediterráneo

=================================
IDIOMAS
=================================

Español:                Nativo
                         - Acento andaluz (auténtico)
                         - Castellano neutro
                         - Acentos de época
Inglés:                 Intermedio (B1-B2)

=================================
FORMACIÓN ACADÉMICA
=================================

2008-2012
Escuela Superior de Arte Dramático de Sevilla (ESAD)
Graduado en Arte Dramático

2015-2017
Compañía Nacional de Teatro Clásico (CNTC)
Formación bajo dirección de Helena Pimenta
Especialización en verso clásico español

2014-2015
Work In Progress
Formación intensiva con Darío Facal
Técnicas interpretativas avanzadas

NO-IDENTITY
Especialista de Cine
Acrobacias y lucha escénica

=================================
HABILIDADES ESPECIALES
=================================

COMBATE Y ACCIÓN
- Esgrima (nivel avanzado)
- Lucha escénica
- Acrobacias básicas
- Especialista de cine

DEPORTE
- Equitación
- Montura a caballo

MÚSICA
- Violonchelo (autodidacta)
- Viola (autodidacta)
- Canto

DANZA Y MOVIMIENTO
- Flamenco
- Danza contemporánea
- Mimo y pantomima
- Commedia dell'arte

TEATRO
- Verso clásico español
- Calderón de la Barca
- Lope de Vega
- Shakespeare
- Teatro de calle
- Improvisación
- Títeres

=================================
EXPERIENCIA PROFESIONAL
=================================

Años de Experiencia:     13 (2013-2026)
Total Episodios TV:      300+
Total Series:            12
Total Películas:         4
Total Obras Teatro:      10+

PLATAFORMAS
- TVE (La 1):            6 proyectos
- Prime Video:           1 proyecto
- Fox España:            1 proyecto
- Star Channel:          1 proyecto
- Atresplayer:           1 proyecto
- Canal Sur:             1 proyecto

DIRECTORES DESTACADOS
- Agustín Díaz Yanes
- Helena Pimenta
- Carlos Sedes
- Jordi Frades
- Joaquín Llamas

=================================
PREMIOS Y NOMINACIONES
=================================

Premio:                  Mejor Espectáculo 2016
                         Oliver Twist (Musical)

Nominación:              Mejor Actor Secundario 2015
                         Fuente Ovejuna (CNTC)
                         Unión de Actores

=================================
REPRESENTACIÓN
=================================

Agencia:                 Contacto directo
Management:              Independiente

=================================
CONTACTO PROFESIONAL
=================================

Email:                   info@almagrosanmiguel.com
Web:                     www.almagrosanmiguel.com
IMDb:                    nm9017709

Redes Sociales:
Instagram:               @almagrosanmiguel
Twitter/X:               @almagroSM
Facebook:                /almagrosanmiguel

=================================
DISPONIBILIDAD
=================================

Estado:                  Disponible
A partir de:             Mayo 2026
Para consultas:          Contactar vía email

=================================
NOTAS ADICIONALES
=================================

- Disponible para castings nacionales e internacionales
- Experiencia en producción diaria (236 episodios)
- Capacidad para roles protagonistas
- Experiencia en plataformas streaming
- Formación sólida en teatro clásico
- Versatilidad en géneros: drama, thriller, histórico, comedia
- Referencias disponibles bajo petición

=================================
Generated: ${new Date().toLocaleDateString('es-ES')}
Press Kit © 2026 Almagro San Miguel
=================================
  `.trim()

  return new Blob([content], { type: 'text/plain' })
}
