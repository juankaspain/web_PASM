# ⚡ Quick Wins - Camino al TOP 1%

**Objetivo**: Acciones de alto impacto organizadas por tiempo de implementación

---

## 🔥 24 HORAS (Máximo Impacto)

### 1. ✅ Verificar Google Search Console

**Tiempo**: 15 minutos  
**Impacto**: 🔴 CRÍTICO  
**Coste**: Gratis

**Pasos**:

```bash
# 1. Ir a Google Search Console
https://search.google.com/search-console/

# 2. Añadir propiedad
- URL: almagrosanmiguel.com
- Método: Meta tag HTML

# 3. Copiar el código de verificación
<meta name="google-site-verification" content="TU_CODIGO_AQUI" />

# 4. Añadir a layout.tsx (línea 76, reemplazar placeholder)
```

**Archivo a editar**: `src/app/layout.tsx`

```tsx
// Línea 76 - Reemplazar:
verification: {
  google: 'TU_CODIGO_REAL_AQUI',  // ← Pegar código de GSC
},
```

**Commit**:
```bash
git add src/app/layout.tsx
git commit -m "feat: Verify Google Search Console"
git push
```

**Volver a GSC y click "Verificar"**

**Beneficio inmediato**:
- Datos de tráfico en 48h
- Ver keywords que te encuentran
- Detectar errores de indexación
- Rich results eligibles

---

### 2. ✅ Configurar Google Analytics 4

**Tiempo**: 20 minutos  
**Impacto**: 🔴 CRÍTICO  
**Coste**: Gratis

**Pasos**:

1. **Crear cuenta GA4**:
   - Ir a [analytics.google.com](https://analytics.google.com/)
   - Crear cuenta nueva
   - Nombre: "Almagro San Miguel Portfolio"
   - Propiedad GA4
   - URL: `almagrosanmiguel.com`

2. **Copiar Measurement ID**:
   - Formato: `G-XXXXXXXXXX`

3. **Añadir a .env.local**:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **El componente Analytics ya existe** ✅
   - Ya está en `src/components/Analytics.tsx`
   - Ya está importado en `layout.tsx`
   - Solo necesita la variable de entorno

**Verificar**:
```bash
# En development
npm run dev

# Abrir consola del navegador
# Debe ver: gtag configurado
```

**Eventos que ya trackea**:
- Page views (automático)
- `submit_contact_form`
- `click_social` (redes sociales)

---

### 3. ✅ Submitear Sitemap a Google

**Tiempo**: 5 minutos  
**Impacto**: 🟠 ALTO  
**Coste**: Gratis

**Pasos**:

1. Ir a Google Search Console (después de verificar)
2. Sidebar → **"Sitemaps"**
3. Añadir sitemap: `sitemap.xml`
4. Click **"Enviar"**

**El sitemap ya existe dinámicamente** ✅
- Archivo: `src/app/sitemap.ts`
- Se genera automáticamente en build
- Accesible en: `https://almagrosanmiguel.com/sitemap.xml`

---

### 4. ✅ Generar Favicon.ico Real

**Tiempo**: 10 minutos  
**Impacto**: 🟡 MEDIO  
**Coste**: Gratis

**Opción A: Online (más fácil)**

1. Ir a [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Subir tu logo o foto (PNG, al menos 260x260)
3. Configurar:
   - iOS: Fondo sólido, sin transparencia
   - Android: Tu color de marca (#F59E0B)
   - Windows: Tile con tu color
4. Generar y descargar package
5. Extraer `favicon.ico` a `/public/`

**Opción B: Con ImageMagick (comando)**

```bash
# Instalar ImageMagick (Mac)
brew install imagemagick

# Generar desde logo
convert logo.png -resize 32x32 -gravity center -extent 32x32 public/favicon.ico
```

---

### 5. ✅ Optimizar Metadata Homepage

**Tiempo**: 15 minutos  
**Impacto**: 🟠 ALTO  
**Coste**: Gratis

**Mejorar description** en `src/app/layout.tsx`:

```tsx
// Línea 13 - Mejorar description
description:
  'Actor profesional con 13+ años de experiencia en TV, cine y teatro. '
  + 'Protagonista de La Moderna (TVE), Vis a vis: El Oasis (Fox/Star). '
  + 'ESAD Sevilla, CNTC. Disponible para castings en Madrid y Sevilla. '
  + '300+ episodios, premios y nominaciones.',
```

**Añadir keywords más específicas**:

```tsx
keywords: [
  // Principales
  'Almagro San Miguel',
  'actor español',
  
  // Proyectos
  'La Moderna TVE',
  'Vis a vis El Oasis',
  'Hernán Prime Video',
  'La Caza Guadiana',
  
  // Skills
  'actor verso clásico',
  'actor teatro CNTC',
  'galán romántico',
  'actor esgrima',
  
  // Geo
  'actor Sevilla',
  'actor Madrid',
  'actor Andalucía',
  
  // Servicios
  'casting actor',
  'actor para casting',
  'portfolio actor profesional',
  'contratar actor',
  
  // Formación
  'ESAD Sevilla',
  'Compañía Nacional Teatro Clásico',
],
```

---

## 📅 1 SEMANA (Progreso Sustancial)

### 6. 📸 Sesión de Fotos Headshots

**Tiempo**: 2-3 horas (sesión) + 1 semana (edición)  
**Impacto**: 🔴 CRÍTICO  
**Coste**: €300-600

**Preparación**:

1. **Buscar fotógrafo especializado actores** en Sevilla/Madrid
2. **Revisar portfolio** del fotógrafo
3. **Briefing**:
   - 5-8 fotos finales editadas
   - Variedad: Comercial, dramático, galán, character
   - Fondos: Neutro gris, blanco, oscuro
   - 3-4 cambios de ropa

**Día de la sesión**:
- Llegar descansado
- Ropa planchada, varios cambios
- Bien afeitado o barba arreglada
- Sin resaca, ojos claros
- Actitud profesional

**Entregables**:
- 5-8 fotos editadas (alta resolución)
- Formato RAW + JPG
- Uso ilimitado (sin watermark)

**Ver**: [IMAGES_NEEDED.md](../IMAGES_NEEDED.md) para detalles completos

---

### 7. 🎨 Crear OG Images con Canva

**Tiempo**: 45 minutos  
**Impacto**: 🔴 CRÍTICO  
**Coste**: €0 (trial) o €12/mes

**Guía completa**: [CANVA_OG_IMAGES_TUTORIAL.md](./CANVA_OG_IMAGES_TUTORIAL.md)

**Quick version**:
1. Canva Pro trial 30 días
2. Custom size: 1200x630
3. Fondo: Degradado negro-azul
4. Headshot lado izquierdo
5. Texto: Nombre + "Actor Profesional" + URL
6. Descargar como JPG
7. Optimizar en TinyPNG
8. Subir a `/public/og-image.jpg`

**Repetir para**:
- `twitter-image.jpg` (ajustar texto, añadir @almagroSM)
- `apple-touch-icon.png` (180x180, solo iniciales/logo)
- `profile-image.jpg` (800x800, headshot limpio)

---

### 8. 📝 Recopilar Fotos de Producciones

**Tiempo**: Variable  
**Impacto**: 🔴 CRÍTICO  
**Coste**: Gratis (ya las tienes) o €0-200 (contactar producciones)

**Fuentes**:

1. **Archivo personal**:
   - Revisar TODO tu teléfono/ordenador
   - Fotos de sets, behind the scenes
   - Capturas de pantalla de escenas

2. **Producción de La Moderna** (¡300+ episodios!):
   - Contactar departamento de prensa de TVE
   - Email: prensa@rtve.es o prensa.lamoderna@rtve.es
   - Pedir: "Fotos promocionales oficiales para uso portfolio personal"
   - Mencionar tu rol protagonista

3. **Vis a vis: El Oasis**:
   - Contactar producción Globomedia
   - Buscar en archivo de Fox/Star
   - Redes sociales oficiales de la serie

4. **Hernán**:
   - Amazon Prime Video prensa
   - Dopamine (productora)

5. **Teatro CNTC**:
   - Archivo CNTC
   - Fotógrafo oficial de la compañía

**Objetivo**: 30-50 fotos profesionales de calidad

---

### 9. 📊 Configurar Eventos GA4

**Tiempo**: 1 hora  
**Impacto**: 🟠 ALTO  
**Coste**: Gratis

**Eventos a configurar**:

1. **Reel play** (cuando haya video):
   ```tsx
   gtag('event', 'reel_play', {
     video_title: 'Showreel 2026',
     video_duration: 180
   })
   ```

2. **Project view**:
   ```tsx
   gtag('event', 'project_view', {
     project_name: 'La Moderna',
     project_type: 'TV Series'
   })
   ```

3. **Press kit download**:
   ```tsx
   gtag('event', 'press_kit_download', {
     file_type: 'ZIP',
     file_name: 'press-kit-2026'
   })
   ```

4. **External link** (IMDb, etc.):
   ```tsx
   gtag('event', 'external_link', {
     link_url: 'https://www.imdb.com/name/nm9017709/',
     link_text: 'IMDb Profile'
   })
   ```

**Configurar en GA4**:
- Admin → Events → Create event
- Marcar como conversiones:
  - `submit_contact_form`
  - `press_kit_download`
  - `reel_play` (>50% watched)

---

### 10. 🔍 SEO Local - Google Business Profile

**Tiempo**: 30 minutos  
**Impacto**: 🟡 MEDIO (si trabajas localmente)  
**Coste**: Gratis

**Solo si**: Trabajas principalmente en Sevilla/Madrid

**Pasos**:
1. [business.google.com](https://business.google.com/)
2. Crear perfil: "Almagro San Miguel - Actor"
3. Categoría: "Actor" o "Artista"
4. Ubicación: Sevilla (o Madrid)
5. Añadir:
   - Fotos profesionales
   - Horario: "By appointment"
   - Website: almagrosanmiguel.com
   - Descripción completa
6. Verificar (postal o teléfono)

**Beneficio**: Aparecer en "actor Sevilla" en Google Maps

---

## 📆 1 MES (Transformación Completa)

### 11. 🎬 Producir Video Reel

**Tiempo**: 2-3 semanas  
**Impacto**: 🔴 CRÍTICO  
**Coste**: €500-1500 (profesional) o €0-300 (DIY)

**Fases**:

**Semana 1: Recopilación**
- Conseguir TODOS los clips de tus proyectos
- La Moderna: 3-4 escenas mejores
- Vis a vis: 2 escenas intensas
- Hernán: 1 escena épica
- Teatro: 1 clip si existe

**Semana 2: Edición**
- Contratar editor o DIY con DaVinci Resolve (gratis)
- Estructura: 2-3 minutos
- Música sin copyright (Epidemic Sound)
- Color grading uniforme
- Slate inicial con info

**Semana 3: Finalización**
- Revisiones y ajustes
- Exportar: 1920x1080, H.264, 24fps
- Subir a Vimeo PRO (€84/año)
- Crear thumbnail atractivo
- Embedar en web

**Ver**: [IMAGES_NEEDED.md](../IMAGES_NEEDED.md) sección Video Reel

---

### 12. 📝 Crear Press Kit Completo

**Tiempo**: 1 semana  
**Impacto**: 🟠 ALTO  
**Coste**: €200-400 (diseñador) o €DIY gratis

**Contenido**:

```
press-kit.zip (12-15 MB)
├── bio/
│   ├── bio-corta-ES.pdf (150 palabras)
│   ├── bio-larga-ES.pdf (500 palabras)
│   ├── bio-short-EN.pdf
│   └── bio-long-EN.pdf
├── headshots/
│   ├── 01-commercial-hires.jpg (300dpi)
│   ├── 02-dramatic-hires.jpg
│   ├── 03-character-hires.jpg
│   └── 04-body-shot.jpg
├── cv/
│   ├── cv-actoral-2026-ES.pdf
│   └── acting-resume-2026-EN.pdf
├── media/
│   ├── showreel-link.txt (Vimeo URL + password)
│   └── showreel-thumbnail.jpg
└── contact.txt (info contacto + manager)
```

**Herramientas**:
- Bio/CV: Google Docs → Export PDF
- Diseño CV: Canva templates "Actor Resume"
- Comprimir: WinRAR, 7-Zip, o Mac Archive Utility

**Subir a web**:
```tsx
// src/components/sections/PressKit.tsx
<a href="/press-kit-almagro-san-miguel-2026.zip" download>
  <Button>Descargar Press Kit Completo (12 MB)</Button>
</a>
```

---

### 13. 🌎 Crear Versión Inglesa (i18n)

**Tiempo**: 1-2 semanas  
**Impacto**: 🟠 ALTO (mercado internacional)  
**Coste**: €400-800 (traductor nativo) o €0 (DIY + revisión)

**Instalar next-intl**:

```bash
npm install next-intl
```

**Estructura**:

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
├── messages/
│   ├── es.json  (español)
│   └── en.json  (english)
├── i18n.ts
└── middleware.ts
```

**Contenido a traducir**:
- Todas las 19 secciones
- Metadata (title, description)
- Alt text de imágenes
- Formulario de contacto
- Bio/CV en PDF

**Contratar traductor**:
- [Fiverr](https://fiverr.com/) - €50-150 por 5000 palabras
- [Upwork](https://upwork.com/) - Profesionales verificados
- **Importante**: Nativo inglés, experiencia entertainment

---

### 14. 📝 Blog - 5 Artículos Iniciales

**Tiempo**: 2 semanas (1-2 horas por artículo)  
**Impacto**: 🟠 ALTO (SEO long-term)  
**Coste**: Gratis (DIY) o €50-100/artículo (copywriter)

**Temas sugeridos**:

1. **"Behind the Scenes de La Moderna: Mi experiencia como protagonista"**
   - Anécdotas del rodaje
   - Relación con el elenco
   - Retos del personaje Íñigo
   - 800-1200 palabras
   - Incluir 5-8 fotos

2. **"Del Teatro Clásico a la Televisión: Mi Transición Artística"**
   - CNTC: Verso clásico
   - Diferencias teatro vs TV
   - Adaptación de técnicas
   - Consejos para actores

3. **"Preparando a Diego Ramala: Mi proceso para Vis a vis El Oasis"**
   - Research del personaje
   - Entrenamiento físico
   - Trabajo emocional
   - Colaboración con directores

4. **"Esgrima Teatral y Combate Escénico: Habilidades Únicas de un Actor"**
   - Formación en esgrima
   - Usos en producciones
   - Seguridad en sets
   - Video demostraciones

5. **"13 Años en la Industria: Lecciones Aprendidas"**
   - Errores y aciertos
   - Consejos para jóvenes actores
   - Networking y castings
   - Persistencia y resiliencia

**Formato**:
- 800-1500 palabras
- 1 imagen cada 200-300 palabras
- Estructura: Intro > 3-4 secciones > Conclusión
- SEO: Keywords naturales
- CTA final: Contacto o redes sociales

---

### 15. 📊 Performance Optimization 100/100

**Tiempo**: 1-2 días  
**Impacto**: 🟡 MEDIO  
**Coste**: Gratis

**Acciones**:

1. **Imágenes Next.js optimizadas**:
   ```tsx
   import Image from 'next/image'
   
   <Image
     src="/la-moderna.jpg"
     alt="Almagro San Miguel en La Moderna"
     width={1200}
     height={800}
     quality={85}
     priority={false}  // Solo true en hero image
     placeholder="blur"
   />
   ```

2. **Configurar next.config.js**:
   ```js
   module.exports = {
     images: {
       formats: ['image/avif', 'image/webp'],
       deviceSizes: [640, 750, 828, 1080, 1200, 1920],
       minimumCacheTTL: 31536000,
     },
     compress: true,
     experimental: {
       optimizeCss: true,
     },
   }
   ```

3. **Lazy load todo excepto above-the-fold**:
   ```tsx
   // Componentes pesados
   const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), {
     loading: () => <Skeleton />,
   })
   ```

4. **CDN para imágenes** (opcional):
   - Cloudinary (gratis hasta 25GB)
   - ImageKit (gratis hasta 20GB)
   - Vercel Image Optimization (incluido)

**Testear**:
```bash
# Lighthouse CI
npm run build
npm run start

# Abrir Chrome DevTools
# Run Lighthouse audit
```

**Objetivo**: 95-100 en todas las métricas

---

## 🏆 CHECKLIST PROGRESO

### 24 Horas
- [ ] Google Search Console verificado
- [ ] Google Analytics 4 configurado
- [ ] Sitemap submiteado
- [ ] Favicon.ico real generado
- [ ] Metadata homepage mejorada

### 1 Semana
- [ ] Sesión fotos headshots reservada/realizada
- [ ] OG images creadas (4 archivos)
- [ ] Fotos producciones recopiladas (30+)
- [ ] Eventos GA4 configurados
- [ ] Google Business Profile (opcional)

### 1 Mes
- [ ] Video reel producido y embebido
- [ ] Press kit completo descargable
- [ ] Versión inglesa implementada
- [ ] Blog con 5 artículos
- [ ] Performance 95-100 Lighthouse

---

## 📊 IMPACTO PROYECTADO

**Después de 24 horas**:
- Datos tráfico en Google Search Console ✅
- Analytics funcionando ✅
- Favicon en pestañas navegador ✅
- SEO mejorado ✅

**Después de 1 semana**:
- Presencia profesional en redes sociales ✅
- Imágenes OG funcionando al compartir ✅
- Portfolio visual mejorado ✅
- Tracking avanzado ✅

**Después de 1 mes**:
- Video reel profesional embebido ✅
- Materiales descargables completos ✅
- Alcance internacional (EN) ✅
- Content marketing activo ✅
- Performance máxima ✅

**ROI**:
- Inversión: €1,500-3,000
- Valor percibido: +300%
- Probabilidad casting: +200%
- Alcance web: +500%

---

## 🚀 PRÓXIMOS PASOS

**HOY** (¡ahora mismo!):
1. Verificar Google Search Console (15 min)
2. Configurar GA4 (20 min)
3. Submitear sitemap (5 min)

**MAÑANA**:
4. Buscar fotógrafo headshots
5. Canva trial + crear OG images (45 min)
6. Contactar producciones para fotos

**ESTA SEMANA**:
7. Sesión fotos profesional
8. Recopilar clips para reel
9. Empezar blog (artículo #1)

**¿Empezamos con el paso 1 (Google Search Console)?** 🚀
