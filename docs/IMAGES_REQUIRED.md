# 🖼️ Guía de Imágenes Requeridas - Almagro San Miguel Portfolio

## 🔴 **CRÍTICO - PRIORIDAD 1**

Estas imágenes son IMPRESCINDIBLES para el funcionamiento profesional de la web:

### 1. Open Graph Images (Redes Sociales)

#### `/public/og-image.jpg`

- **Dimensiones**: 1200 x 630 px
- **Formato**: JPG optimizado (<200KB)
- **Uso**: Facebook, LinkedIn, WhatsApp
- **Contenido sugerido**:
  - Headshot profesional (lado derecho)
  - Nombre "Almagro San Miguel" (grande, legible)
  - Subtítulo "Actor Profesional"
  - Background elegante (negro/dorado)
  - Logo/marca personal (opcional)

#### `/public/twitter-image.jpg`

- **Dimensiones**: 1200 x 630 px (mismo tamaño que OG)
- **Formato**: JPG optimizado (<200KB)
- **Uso**: Twitter/X cards
- **Diferencias con og-image**:
  - Puede ser similar pero optimizado para timeline de Twitter
  - Menos texto (se ve más pequeño en Twitter)
  - Mayor contraste

**Ejemplo de contenido**:

```
[FOTO PROFESIONAL]  ALMAGRO SAN MIGUEL
                    Actor Profesional
                    300+ Episodios | TVE, Fox, Prime Video
```

---

### 2. Favicons e Iconos

#### `/public/favicon.ico` (ACTUALMENTE VACÍO - 0 bytes)

- **Dimensiones**: Múltiples (16x16, 32x32, 48x48)
- **Formato**: ICO multi-resolución
- **Contenido**: Iniciales "ASM" o logo personal
- **Herramienta**: [favicon.io](https://favicon.io/) o [realfavicongenerator.net](https://realfavicongenerator.net/)

#### `/public/apple-touch-icon.png`

- **Dimensiones**: 180 x 180 px
- **Formato**: PNG transparente
- **Uso**: iOS home screen
- **Contenido**: Logo/iniciales con padding de 20px

#### `/public/android-chrome-192x192.png`

- **Dimensiones**: 192 x 192 px
- **Formato**: PNG
- **Uso**: Android Chrome

#### `/public/android-chrome-512x512.png`

- **Dimensiones**: 512 x 512 px
- **Formato**: PNG
- **Uso**: Android Chrome (alta resolución)

---

### 3. Imagen de Perfil Schema.org

#### `/public/profile-image.jpg`

- **Dimensiones**: 800 x 800 px (cuadrado)
- **Formato**: JPG optimizado
- **Uso**: Schema.org Person markup, Google Knowledge Panel
- **Requisitos**:
  - Headshot profesional de alta calidad
  - Fondo neutro o profesional
  - Buena iluminación
  - Expresión neutral/amigable
  - Encuadre: hombros hacia arriba

---

## 🟪 **ALTO IMPACTO - PRIORIDAD 2**

### 4. Screenshots PWA

#### `/public/screenshots/desktop.jpg`

- **Dimensiones**: 1280 x 720 px
- **Formato**: JPG
- **Contenido**: Captura de la homepage en desktop

#### `/public/screenshots/mobile.jpg`

- **Dimensiones**: 750 x 1334 px
- **Formato**: JPG
- **Contenido**: Captura de la homepage en móvil

---

### 5. Imágenes de Portfolio (TODAS)

Actualmente usan placeholders de Unsplash. Reemplazar con:

#### La Moderna

- **Archivo**: Foto de escena o promotional shot oficial
- **Formato**: JPG 1920x1080 (landscape)
- **Fuente**: TVE / Producción oficial

#### Vis a vis: El Oasis

- **Archivo**: Foto de personaje Diego Ramala
- **Formato**: JPG 1920x1080
- **Fuente**: Fox / Star Channel

#### Hernán

- **Archivo**: Foto como Gonzalo de Sandoval
- **Formato**: JPG 1920x1080
- **Fuente**: Amazon Prime Video

#### Resto de producciones

- Repetir para cada serie/película listada
- Priorizar las más recientes/importantes

**Nota**: Solicitar fotos oficiales a las productoras o usar screenshots de alta calidad

---

## 🟡 **MEJORA CONTINUA - PRIORIDAD 3**

### 6. Galería de Imágenes

- **Behind the scenes**: 10-20 fotos de rodajes
- **Headshots profesionales**: 5-8 variaciones
- **Fotos de teatro**: 5-10 de obras más importantes
- **Eventos**: Premieres, festivales, etc.

**Especificaciones**:

- Formato: JPG optimizado con Sharp
- Dimensiones: Max 2000px lado largo
- Tamaño: <300KB por imagen
- Nombres: descriptivos (ej: `la-moderna-rodaje-2023.jpg`)

---

## 🛠️ **Herramientas Recomendadas**

### Para Crear Imágenes

1. **Diseño de OG Images**:
   - [Canva](https://canva.com) - Templates prediseñados
   - [Figma](https://figma.com) - Diseño profesional
   - [Adobe Express](https://adobe.com/express) - Rápido y fácil

2. **Generación de Favicons**:
   - [RealFaviconGenerator](https://realfavicongenerator.net/) - ¡RECOMENDADO!
   - [Favicon.io](https://favicon.io/) - Simple y rápido

3. **Optimización de Imágenes**:
   - [TinyPNG](https://tinypng.com/) - Compresión con calidad
   - [Squoosh](https://squoosh.app/) - Google, múltiples formatos
   - [ImageOptim](https://imageoptim.com/) - Mac app

### Para Optimizar Automáticamente

El proyecto ya tiene Sharp configurado:

```bash
npm run optimize:images
```

---

## 📄 **Checklist de Imágenes**

### Crítico (¡Hacer YA!)

- [ ] `/public/og-image.jpg` (1200x630)
- [ ] `/public/twitter-image.jpg` (1200x630)
- [ ] `/public/favicon.ico` (multi-res)
- [ ] `/public/apple-touch-icon.png` (180x180)
- [ ] `/public/profile-image.jpg` (800x800)

### Importante (Esta semana)

- [ ] `/public/android-chrome-192x192.png`
- [ ] `/public/android-chrome-512x512.png`
- [ ] `/public/screenshots/desktop.jpg`
- [ ] `/public/screenshots/mobile.jpg`

### Portfolio (Siguiente semana)

- [ ] Imágenes reales de La Moderna (5+)
- [ ] Imágenes reales de Vis a vis (3+)
- [ ] Imágenes reales de Hernán (3+)
- [ ] Imágenes resto de producciones (2+ cada una)

### Galería (Mes actual)

- [ ] Headshots profesionales (5-8)
- [ ] Behind the scenes (10+)
- [ ] Teatro (5+)
- [ ] Eventos (5+)

---

## 🎨 **Guía de Estilo Visual**

### Paleta de Colores

- **Principal**: Dorado (#f59e0b, #fbbf24)
- **Secundario**: Negro (#000000)
- **Acento**: Blanco (#ffffff)
- **Degradados**: De amarillo a naranja

### Tipografía

- **Nombre**: Bold, grande, legible
- **Fuente recomendada**: Inter, Helvetica, Arial
- **Tamaño mínimo**: 48px para OG images

### Composición

- **Espacio en blanco**: Generoso, profesional
- **Alineación**: Centrada o con sistema de grids
- **Jerarquía**: Clara (nombre > rol > detalles)

---

## 📞 **Contacto para Contenido**

Para obtener imágenes profesionales:

1. **Productoras**: Solicitar fotos oficiales de rodaje
2. **Fotógrafo profesional**: Sesión de headshots
3. **Behind the scenes**: Archivo personal de rodajes
4. **IMDb**: Algunas imágenes promocionales (con permiso)

---

## ⚠️ **Importante**

### Derechos de Autor

- **NO usar** imágenes de Google sin permiso
- **SÍ usar** imágenes propias o con licencia
- **Solicitar** permiso a productoras para fotos oficiales
- **Creditar** fotógrafos cuando sea necesario

### Optimización

- Todas las imágenes deben pasar por TinyPNG/Squoosh
- Usar formato WebP/AVIF cuando sea posible
- Añadir alt text descriptivo
- Lazy loading para galerías

---

## 🚀 **Impacto en SEO y Redes Sociales**

### Sin imágenes correctas:

- ❌ Link preview roto en redes sociales
- ❌ No aparece en Google Imágenes
- ❌ Percepción poco profesional
- ❌ 0 compartidos virales

### Con imágenes correctas:

- ✅ Link preview atractivo (+300% CTR)
- ✅ Aparece en Google Imágenes
- ✅ Imagen profesional premium
- ✅ Compartidos orgánicos

---

## 📊 **ROI Estimado**

**Inversión**:

- Sesión de fotos profesional: €500-1000
- Diseño de OG images: €200-400
- Optimización de imágenes: Gratis (automatizado)

**Retorno**:

- +300% engagement en redes sociales
- +50% tiempo en página
- +200% compartidos
- Percepción profesional: INVALUABLE

---

¡Una vez tengas las imágenes, súbellas a `/public/` y la web estará lista para TOP 1%! 🎬✨
