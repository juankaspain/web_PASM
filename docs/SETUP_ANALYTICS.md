# 📊 Configuración de Analytics y Search Console

**Última Actualización**: 10 de enero de 2026  
**Estado**: 🔴 Pendiente de Configuración  
**Tiempo Estimado**: 1-2 horas

---

## 🎯 Objetivo

Configurar correctamente Google Analytics 4 (GA4) y Google Search Console (GSC) para trackear métricas reales de usuarios y posicionamiento SEO.

---

## 1. Google Analytics 4 (GA4) - 45 minutos

### Paso 1: Crear Cuenta GA4

1. **Ir a**: [analytics.google.com](https://analytics.google.com)
2. **Iniciar sesión** con cuenta Google
3. **Click en "Admin"** (esquina inferior izquierda)
4. **Crear cuenta**:
   - Nombre de cuenta: `Almagro San Miguel`
   - País: `España`
   - Acepta términos ✓

### Paso 2: Crear Propiedad

1. **Nombre de propiedad**: `Portfolio Almagro San Miguel`
2. **Zona horaria**: `(GMT+01:00) Madrid`
3. **Moneda**: `Euro (€)`
4. **Categoría**: `Arte y entretenimiento`
5. **Tamaño empresa**: `Pequeña (1-10 empleados)`

### Paso 3: Configurar Data Stream

1. **Plataforma**: Web
2. **URL del sitio web**: `https://almagrosanmiguel.com`
3. **Nombre del stream**: `Web Portfolio`
4. **Enhanced measurement**: ✓ Activar todo
   - Page views ✓
   - Scrolls ✓
   - Outbound clicks ✓
   - Site search ✓
   - Video engagement ✓
   - File downloads ✓

### Paso 4: Copiar ID de Medición

```
G-XXXXXXXXXX  ← Este es tu ID
```

Ejemplo real: `G-MPQST5KR14`

### Paso 5: Actualizar Variables de Entorno

**Archivo: `.env.local`** (crear si no existe):

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-TU-ID-AQUI
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# Site
NEXT_PUBLIC_SITE_URL=https://almagrosanmiguel.com
```

⚠️ **IMPORTANTE**: 
- No commitear `.env.local` al repositorio
- Ya está en `.gitignore`
- Para producción, configurar en Vercel Environment Variables

### Paso 6: Configurar en Vercel

1. **Ir a**: [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Seleccionar proyecto**: `web_PASM`
3. **Settings → Environment Variables**
4. **Añadir variables**:
   ```
   NEXT_PUBLIC_GA_ID = G-TU-ID-AQUI
   NEXT_PUBLIC_VERCEL_ANALYTICS = true
   ```
5. **Environment**: Production ✓
6. **Save**
7. **Redeploy** proyecto para aplicar cambios

### Paso 7: Verificar Funcionamiento

1. **Abrir**: [almagrosanmiguel.com](https://almagrosanmiguel.com)
2. **Abrir DevTools** (F12)
3. **Console**: Buscar mensajes de GA4
4. **Network tab**: Verificar petición a `google-analytics.com`
5. **En GA4**: Ir a **Reports → Realtime**
6. **Navegar** por el sitio (abrir 2-3 páginas)
7. **Verificar** que apareces en tiempo real

---

## 2. Google Search Console (GSC) - 30 minutos

### Opción A: Verificación con Meta Tag (Recomendado)

#### Paso 1: Añadir Propiedad

1. **Ir a**: [search.google.com/search-console](https://search.google.com/search-console)
2. **Click "Añadir propiedad"**
3. **Seleccionar**: URL prefix
4. **Introducir**: `https://almagrosanmiguel.com`
5. **Continuar**

#### Paso 2: Obtener Código de Verificación

1. **Seleccionar método**: Meta tag HTML
2. **Copiar código**:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ..." />
   ```
3. **Copiar SOLO el contenido** (la parte `ABC123XYZ...`)

#### Paso 3: Actualizar Layout.tsx

**Archivo: `src/app/layout.tsx`**

Buscar línea ~109:
```typescript
verification: {
  google: 'pending-verification',  // ❌ REEMPLAZAR
}
```

Cambiar por:
```typescript
verification: {
  google: 'TU-CODIGO-AQUI',  // ✅ Tu código real de GSC
}
```

Ejemplo:
```typescript
verification: {
  google: 'abc123xyz789def456ghi',
}
```

#### Paso 4: Commit y Deploy

```bash
git add src/app/layout.tsx
git commit -m "feat: configure google search console verification"
git push origin main
```

Esperar 2-3 minutos a que Vercel haga deploy automático.

#### Paso 5: Verificar en GSC

1. **Volver a GSC**
2. **Click "Verificar"**
3. **Esperar confirmación**: ✅ "Verificado correctamente"

### Opción B: Verificación con Archivo HTML

Si prefieres usar archivo HTML:

1. **Descargar archivo**: `google123abc.html`
2. **Copiar a**: `public/google123abc.html`
3. **Commit y push**
4. **Verificar que** `https://almagrosanmiguel.com/google123abc.html` funciona
5. **Click "Verificar"** en GSC

---

## 3. Configuración Post-Verificación GSC

### Submitear Sitemap

1. **En GSC**, ir a **Sitemaps**
2. **Añadir sitemap**: `https://almagrosanmiguel.com/sitemap.xml`
3. **Enviar**
4. **Verificar estado**: ✅ Correcto

### Configurar Alertas

1. **Settings → Email notifications**
2. **Activar**:
   - ✓ Errores críticos de indexación
   - ✓ Problemas de seguridad
   - ✓ Cambios significativos en rendimiento
   - ✓ Nuevos enlaces detectados

### Verificar Indexación

1. **Performance** tab
2. **Esperar 2-3 días** para datos iniciales
3. **Verificar queries**:
   - "almagro san miguel"
   - "almagro san miguel actor"
   - "la moderna actor"

---

## 4. Eventos Personalizados GA4

Una vez configurado GA4, añadir eventos personalizados para trackear acciones clave.

### Eventos a Implementar

**Archivo: `src/lib/analytics.ts`** (crear):

```typescript
// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', eventName, eventParams)
  }
}

// Specific tracking functions
export const analytics = {
  // Video reel
  trackReelPlay: () => {
    trackEvent('reel_play', {
      video_provider: 'vimeo',
      video_duration: 180,
    })
  },

  // Form submission
  trackFormSubmit: (formType: string) => {
    trackEvent('form_submit', {
      form_type: formType,
      form_location: 'contact_section',
    })
  },

  // Press kit download
  trackPressKitDownload: (fileType: string) => {
    trackEvent('press_kit_download', {
      file_type: fileType,
      file_name: `press-kit-${fileType}`,
    })
  },

  // Project view
  trackProjectView: (projectName: string) => {
    trackEvent('project_view', {
      project_name: projectName,
      content_type: 'portfolio_item',
    })
  },

  // External links
  trackExternalLink: (destination: string, linkType: string) => {
    trackEvent('external_link_click', {
      destination,
      link_type: linkType, // 'imdb', 'instagram', 'wikipedia', etc.
    })
  },

  // Social sharing
  trackSocialShare: (platform: string) => {
    trackEvent('social_share', {
      platform,
      content_type: 'portfolio',
    })
  },

  // Showreel milestones
  trackReelMilestone: (percentage: number) => {
    trackEvent('reel_progress', {
      milestone: `${percentage}%`,
      video_provider: 'vimeo',
    })
  },
}
```

### Uso en Componentes

**Ejemplo en Contact.tsx**:

```typescript
import { analytics } from '@/lib/analytics'

const handleSubmit = async (data: FormData) => {
  // ... existing code
  
  if (success) {
    analytics.trackFormSubmit('contact_form')
  }
}
```

**Ejemplo en Portfolio.tsx**:

```typescript
import { analytics } from '@/lib/analytics'

<Link 
  href={project.imdbUrl}
  onClick={() => analytics.trackExternalLink(project.imdbUrl, 'imdb')}
>
  Ver en IMDb
</Link>
```

---

## 5. Configurar Conversiones en GA4

### Eventos de Conversión Clave

1. **En GA4**: Admin → Events → Mark as conversion
2. **Marcar como conversión**:
   - `form_submit` ✓
   - `press_kit_download` ✓
   - `reel_play` ✓
   - `external_link_click` (IMDb) ✓

### Crear Embudos

1. **Explore → Funnel exploration**
2. **Crear embudo conversión**:
   ```
   Step 1: page_view (/)
   Step 2: reel_play
   Step 3: form_submit
   ```

---

## 6. Dashboards y Reportes

### Informe Personalizado GA4

**Crear en Explore**:

1. **Nombre**: "Portfolio Performance"
2. **Dimensiones**:
   - Page path
   - Event name
   - Source / Medium
   - Device category
3. **Métricas**:
   - Users
   - Sessions
   - Engagement rate
   - Average engagement time
   - Conversions

### Alertas Personalizadas

1. **Admin → Custom Insights**
2. **Crear alerta**:
   - Nombre: "Drop in Traffic"
   - Condición: Sessions < -50% (week over week)
   - Notificación: Email ✓

---

## 7. Checklist Final

### Google Analytics 4

- [ ] Cuenta GA4 creada
- [ ] Propiedad configurada
- [ ] Data stream web activado
- [ ] ID copiado (G-XXXXXXXXXX)
- [ ] Variable entorno `.env.local` actualizada
- [ ] Variables Vercel configuradas
- [ ] Deploy realizado
- [ ] Verificación en tiempo real ✓
- [ ] Eventos personalizados implementados
- [ ] Conversiones marcadas

### Google Search Console

- [ ] Propiedad añadida
- [ ] Método verificación seleccionado
- [ ] Código meta tag actualizado en `layout.tsx` (o archivo HTML subido)
- [ ] Commit y deploy
- [ ] Verificación completada ✓
- [ ] Sitemap submitido
- [ ] Alertas email configuradas
- [ ] Primera inspección URL realizada

---

## 8. Monitoreo Continuo

### Revisar Semanalmente

**GA4**:
- Users últimos 7 días
- Top páginas vistas
- Fuentes de tráfico
- Conversiones

**GSC**:
- Queries top (keywords)
- Impresiones y clics
- Posición promedio
- Errores de indexación

### KPIs Mensuales

| Métrica | Objetivo Mes 1 | Objetivo Mes 3 |
|---------|----------------|----------------|
| Users/mes | 100-200 | 500-1,000 |
| Sessions/mes | 150-300 | 800-1,500 |
| Avg. engagement | 2 min | 3+ min |
| Conversiones formulario | 5-10 | 30-50 |
| Impresiones GSC | 1,000-2,000 | 10,000+ |
| Clics GSC | 20-50 | 200-500 |
| Posición promedio | #15-20 | #5-10 |

---

## 9. Recursos Adicionales

### Documentación Oficial

- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [GSC Verification](https://support.google.com/webmasters/answer/9008080)
- [Next.js Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)

### Herramientas Útiles

- [Google Tag Assistant](https://tagassistant.google.com/)
- [GA4 Debugger Extension](https://chrome.google.com/webstore/detail/ga4-debugger)
- [Rich Results Test](https://search.google.com/test/rich-results)

---

## 10. Troubleshooting

### GA4 no funciona

**Síntomas**: No aparecen datos en Real-Time

**Soluciones**:
1. ✓ Verificar ID correcto en `.env.local`
2. ✓ Build en modo production (`npm run build && npm start`)
3. ✓ Limpiar cache navegador (Ctrl+Shift+Delete)
4. ✓ Verificar Network tab (peticiones a `google-analytics.com`)
5. ✓ Verificar que no hay AdBlocker activo
6. ✓ Esperar 5-10 minutos (hay delay inicial)

### GSC no verifica

**Síntomas**: Error "No se pudo verificar"

**Soluciones**:
1. ✓ Verificar que el código está en `<head>` del HTML final
2. ✓ Inspeccionar HTML renderizado (View Source)
3. ✓ Verificar que no hay doble código
4. ✓ Limpiar cache Vercel (redeploy forzado)
5. ✓ Probar con método alternativo (archivo HTML)
6. ✓ Esperar 10-15 minutos y reintentar

---

## ✅ Estado Configuración

**Última Actualización**: 10 enero 2026

| Servicio | Estado | Fecha Completado |
|----------|--------|------------------|
| Google Analytics 4 | 🔴 Pendiente | - |
| Google Search Console | 🔴 Pendiente | - |
| Eventos Personalizados | 🔴 Pendiente | - |
| Conversiones GA4 | 🔴 Pendiente | - |
| Alertas GSC | 🔴 Pendiente | - |

**Próximos Pasos**: Seguir esta guía paso a paso para configurar ambos servicios.

**Tiempo Total Estimado**: 1-2 horas

**Impacto**: Alto - Datos críticos para toma de decisiones
