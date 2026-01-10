# 🎯 PLAN DE ACCIÓN INMEDIATA - Mejoras Técnicas

**Fecha**: 2026-01-10  
**Objetivo**: Resolver todas las mejoras técnicas que NO requieren contenido multimedia  
**Tiempo Estimado Total**: 4-6 horas

---

## ✅ COMPLETADO (Durante esta sesión)

### Infraestructura Web
- [x] humans.txt creado con créditos completos
- [x] .well-known/security.txt para divulgación responsable
- [x] sitemap.ts mejorado con todas las secciones
- [x] robots.ts optimizado con reglas completas para bots
- [x] Guía técnica completa de configuración

### Documentación
- [x] Plan de acción inmediata creado
- [x] Guía de configuración Google Services

---

## 🔴 PRIORIDAD CRÍTICA (Hacer HOY - 2 horas)

### 1. Verificar Google Search Console (30 min)

**Pasos**:
1. Ir a https://search.google.com/search-console
2. Añadir propiedad: `https://almagrosanmiguel.com`
3. Elegir método de verificación:
   - **Opción A**: HTML meta tag (más fácil)
   - **Opción B**: Subir archivo HTML
   - **Opción C**: DNS TXT record
4. Actualizar `src/app/layout.tsx`:
   ```tsx
   verification: {
     google: 'TU_CODIGO_REAL_AQUI', // Reemplazar "pending-verification"
   }
   ```
5. Deploy y verificar
6. Submitear sitemap: `sitemap.xml`

**Beneficio**: Datos SEO reales, indexación correcta

### 2. Configurar Google Analytics 4 (1 hora)

**Pasos**:
1. Ir a https://analytics.google.com
2. Crear cuenta y propiedad GA4
3. Copiar Measurement ID (G-XXXXXXXXXX)
4. Actualizar `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Tu ID real
   ```
5. Actualizar Vercel env vars
6. Verificar instalación en Realtime
7. Configurar eventos:
   - contact_form_submit (conversión)
   - reel_play (conversión)
   - engaged_session (tiempo > 2 min)

**Beneficio**: Datos de visitantes, conversiones, comportamiento

### 3. Instalar Vercel Analytics (15 min)

**Pasos**:
```bash
npm i @vercel/analytics @vercel/speed-insights
```

```tsx
// src/app/layout.tsx - Añadir al final del body:
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

<body>
  {children}
  <Analytics />
  <SpeedInsights />
</body>
```

**Beneficio**: Métricas Core Web Vitals reales

### 4. Optimizar next.config.js (15 min)

**Añadir**:
```javascript
// next.config.js
module.exports = {
  // ... existing config
  
  // Experimental optimizations
  experimental: {
    optimizePackageImports: [
      'lucide-react', 
      'framer-motion', 
      'react-icons',
      'react-hook-form',
      '@hookform/resolvers'
    ],
    webpackBuildWorker: true,
  },
  
  // Production optimizations
  swcMinify: true,
  
  // Better logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}
```

**Beneficio**: Bundle más pequeño, builds más rápidos

---

## 🟠 PRIORIDAD ALTA (Esta semana - 2-3 horas)

### 5. Mejorar Metadata por Sección (1 hora)

**Crear archivos de metadata personalizados**:

```tsx
// src/lib/metadata.ts
export const sectionMetadata = {
  about: {
    title: 'Biografía - Almagro San Miguel',
    description: 'Actor profesional con 13+ años de experiencia. Formación en ESAD Sevilla y CNTC.',
  },
  portfolio: {
    title: 'Portfolio - Trabajos en TV, Cine y Teatro',
    description: '300+ episodios en series como La Moderna, Vis a vis, Hernán. Filmografía completa.',
  },
  // ... etc
}
```

### 6. Añadir Structured Data Adicional (30 min)

**Crear schemas para**:
- VideoObject (para showreel - cuando esté listo)
- Review/Rating (testimonios)
- Event (para próximos eventos)
- FAQPage (sección FAQ)

```tsx
// src/app/layout.tsx - Añadir:
<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánta experiencia tienes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '13+ años de experiencia profesional en TV, cine y teatro.'
          }
        },
        // ... más preguntas
      ]
    })
  }}
/>
```

### 7. Optimizar Fuentes (30 min)

**Preload critical fonts**:
```tsx
// src/app/layout.tsx
<head>
  <link
    rel="preload"
    href="/_next/static/media/inter-font.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</head>
```

**Font-display optimization**:
```tsx
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Mejora FCP
  preload: true,
})
```

### 8. Mejorar PWA Manifest (15 min)

**Verificar manifest.json**:
```json
{
  "name": "Almagro San Miguel - Actor Profesional",
  "short_name": "Almagro SM",
  "description": "Portfolio profesional del actor Almagro San Miguel",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#D4AF37",
  "orientation": "portrait",
  "categories": ["entertainment", "lifestyle"],
  "lang": "es-ES",
  "dir": "ltr",
  "scope": "/",
  "icons": [
    // NOTE: Requires real icon files
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "shortcuts": [
    {
      "name": "Portfolio",
      "url": "/#portfolio",
      "description": "Ver trabajos"
    },
    {
      "name": "Contacto",
      "url": "/#contact",
      "description": "Contactar"
    }
  ]
}
```

---

## 🟡 PRIORIDAD MEDIA (Próximamente - 1-2 horas)

### 9. Implementar Error Boundaries (30 min)

```tsx
// src/app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Algo salió mal</h2>
        <p className="mt-2 text-gray-600">{error.message}</p>
        <button
          onClick={reset}
          className="mt-4 rounded bg-gold px-4 py-2"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}
```

### 10. Añadir Loading States (30 min)

```tsx
// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gold"></div>
    </div>
  )
}
```

### 11. Implementar Service Worker (1 hora)

**Crear service worker básico**:
```javascript
// public/sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/favicon.svg',
        '/manifest.json',
      ])
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
```

**Registrar en layout**:
```tsx
// src/app/layout.tsx - Añadir al final
<Script id="register-sw" strategy="afterInteractive">
  {`
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
      })
    }
  `}
</Script>
```

---

## 🔵 OPTIMIZACIONES ADICIONALES (Opcional)

### 12. Implementar Rate Limiting Mejorado

```tsx
// src/lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '1 h'), // 10 requests per hour
})
```

### 13. Añadir Breadcrumbs Visuales

```tsx
// src/components/Breadcrumbs.tsx
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, i) => (
          <li key={i}>
            {i > 0 && <span className="mx-2">/</span>}
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

### 14. Mejorar Formulario de Contacto

```tsx
// Añadir honeypot anti-spam
<input
  type="text"
  name="_gotcha"
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>

// Añadir confirmación de email
<input type="hidden" name="_cc" value="info@almagrosanmiguel.com" />
```

---

## 📋 CHECKLIST DE VALIDACIÓN

### Antes de Marcar como Completo

**Google Services**:
- [ ] GSC verificado y funcionando
- [ ] Sitemap submitido y sin errores
- [ ] GA4 instalado y recibiendo datos
- [ ] Eventos de conversión configurados
- [ ] Realtime funcionando correctamente

**Performance**:
- [ ] Vercel Analytics instalado
- [ ] Speed Insights activo
- [ ] Lighthouse score mantiene 97+
- [ ] No nuevos errores en consola
- [ ] Bundle size no aumentó

**SEO Técnico**:
- [ ] Sitemap accesible: /sitemap.xml
- [ ] Robots accesible: /robots.txt
- [ ] Humans accesible: /humans.txt
- [ ] Security.txt accesible: /.well-known/security.txt
- [ ] Schema.org sin errores (validar en Google Rich Results Test)

**Funcionalidad**:
- [ ] Todos los links funcionan
- [ ] Formulario envía correctamente
- [ ] No errores 404
- [ ] Mobile responsive correcto
- [ ] Animaciones fluidas

---

## 📊 Métricas de Éxito

### Antes vs Después

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Lighthouse Performance | 97 | 98-100 | +1-3% |
| Lighthouse SEO | 100 | 100 | ✅ Mantenido |
| Bundle Size | 118 KB | 115 KB | -2.5% |
| Time to Interactive | 1.2s | 1.0s | -16% |
| Google Search Console | ❌ No verificado | ✅ Verificado | ✅ |
| Google Analytics | ❌ Placeholder | ✅ Activo | ✅ |
| Schema.org Items | 6 | 10+ | +66% |

---

## 🚀 Próximos Pasos (Después de esto)

### Semana 2
1. Recopilar fotos reales de producciones
2. Diseñar OG images con Canva
3. Contactar fotógrafo para headshots

### Semana 3-4
1. Reemplazar todas las imágenes placeholder
2. Grabar/editar video reel
3. Crear press kit descargable

### Mes 2
1. Implementar i18n (versión inglesa)
2. Iniciar blog con contenido
3. Crear páginas individuales de proyectos

---

## 📞 Recursos de Ayuda

**Si encuentras problemas**:

1. **Google Search Console no verifica**:
   - Espera 24-48 horas
   - Verifica que el código esté en producción
   - Prueba otro método de verificación

2. **GA4 no recibe datos**:
   - Verifica que el ID sea correcto (G-XXXXXXXXXX)
   - Comprueba que esté en .env y Vercel
   - Usa modo incógnito para evitar adblockers
   - Mira consola del navegador por errores

3. **Build falla después de cambios**:
   - `npm run build` localmente primero
   - Revisa errores de TypeScript
   - Verifica imports

4. **Performance baja después de cambios**:
   - Ejecuta `npm run analyze`
   - Verifica que no añadiste librerías pesadas
   - Revisa Network tab en DevTools

---

**Última Actualización**: 2026-01-10  
**Tiempo Total Estimado**: 4-6 horas de trabajo concentrado  
**Impacto Esperado**: +20% en métricas técnicas, datos reales de usuarios

🎯 **¡Empecemos con lo más crítico: Google Search Console y Analytics!**
