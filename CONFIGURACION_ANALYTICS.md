# 📊 Configuración de Google Analytics y Search Console

## 📊 Google Analytics 4 (GA4)

### Paso 1: Crear Cuenta de Google Analytics

1. Ve a: https://analytics.google.com
2. Inicia sesión con tu cuenta de Google
3. Click en **"Comenzar a medir"**
4. Crea una **Cuenta**:
   - Nombre: "Pedro Almagro Web"
   - País: España
   - Acepta los términos

### Paso 2: Configurar Propiedad

1. Nombre de propiedad: **"Portfolio Pedro Almagro"**
2. Zona horaria: **(GMT+01:00) Madrid**
3. Moneda: **EUR (€)**
4. Click en **"Siguiente"**

### Paso 3: Detalles Empresariales

1. Categoría del sector: **Artes y entretenimiento**
2. Tamaño de la empresa: **Pequeña (1-10 empleados)**
3. Objetivos: Selecciona:
   - ☑️ Examinar el comportamiento del usuario
   - ☑️ Medir la interacción con el sitio

### Paso 4: Obtener ID de Medición
1. Plataforma: **Web**
2. URL del sitio web: **https://pedroalmagro.com**
3. Nombre de flujo: **"Web Portfolio"**
4. Copia tu **ID de medición** (formato: `G-XXXXXXXXXX`)

### Paso 5: Configurar en tu Proyecto

```bash
# 1. Crea archivo .env.local en la raíz del proyecto
cp .env.example .env.local

# 2. Edita .env.local y añade:
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-TU-ID-AQUI"
```

### Paso 6: Verificar Instalación
1. Inicia tu proyecto: `npm run dev`
2. Abre en navegador: http://localhost:3000
3. En Google Analytics, ve a **"Informes en tiempo real"**
4. Deberías ver tu visita registrada en 30 segundos

---

## 🔍 Google Search Console

### Paso 1: Crear Cuenta

1. Ve a: https://search.google.com/search-console
2. Inicia sesión con tu cuenta de Google
3. Click en **"Añadir propiedad"**

### Paso 2: Tipo de Propiedad

Elige **"Prefijo de URL"**:
- URL: `https://pedroalmagro.com`
- Click en **"Continuar"**

### Paso 3: Verificar Propiedad

**Opción A: Verificación por Meta Tag (Recomendado)**

1. Selecciona **"Etiqueta HTML"**
2. Copia el código (algo como: `google-site-verification=ABC123...`)
3. Añade a tu `.env.local`:

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="ABC123tu-codigo-aqui"
```

4. Despliega a Vercel
5. Vuelve a Search Console y click **"Verificar"**

**Opción B: Verificación por Archivo HTML**

1. Selecciona **"Archivo HTML"**
2. Descarga el archivo (ej: `google123abc.html`)
3. Colócalo en `public/google123abc.html`
4. Despliega a Vercel
5. Vuelve a Search Console y click **"Verificar"**

### Paso 4: Enviar Sitemap

1. Una vez verificado, ve a **"Sitemaps"**
2. Añade nuevo sitemap: `https://pedroalmagro.com/sitemap.xml`
3. Click en **"Enviar"**
4. Espera 24-48h para que Google indexe tu sitio

---

## 📊 Eventos Personalizados Configurados

Tu web ya tiene tracking de:

### 1. Vistas de Proyectos
```typescript
import { trackProjectView } from '@/lib/analytics'

// Cuando alguien ve un proyecto
trackProjectView('El Último Adiós')
```

### 2. Reproducción de Showreel
```typescript
import { trackShowreelPlay } from '@/lib/analytics'

// Cuando alguien reproduce el showreel
trackShowreelPlay()
```

### 3. Envío de Formulario
```typescript
import { trackContactSubmit } from '@/lib/analytics'

// Cuando alguien envía el formulario
trackContactSubmit()
```

### 4. Clics en Enlaces Externos
```typescript
import { trackExternalLink } from '@/lib/analytics'

// Cuando alguien hace clic en link externo
trackExternalLink('https://instagram.com/...', 'Instagram')
```

---

## 📊 Dashboard de Google Analytics

### Métricas Importantes a Monitorizar

1. **Usuarios activos**: Cuántas personas visitan tu web
2. **Sesiones**: Número de visitas totales
3. **Tasa de rebote**: % de usuarios que salen sin interactuar
4. **Tiempo de permanencia**: Cuánto tiempo pasan en la web
5. **Páginas vistas**: Qué secciones son más populares
6. **Fuentes de tráfico**:
   - Organic Search (Google)
   - Direct (URL directa)
   - Social (redes sociales)
   - Referral (otros sitios)

### Eventos Personalizados

En **Informes > Engagement > Eventos** verás:
- `view_project` - Proyectos más vistos
- `play_showreel` - Reproducciones del showreel
- `submit_contact_form` - Envíos del formulario
- `click_external_link` - Clics en redes sociales

---

## 🔍 Search Console - Uso Básico

### Rendimiento

Ve a **"Rendimiento"** para ver:
- **Clics totales**: Cuanta gente hace clic desde Google
- **Impresiones**: Cuantas veces apareces en resultados
- **CTR promedio**: % de clics vs impresiones
- **Posición media**: En qué posición apareces

### Consultas

Ver qué búsquedas llevan a tu web:
- "actor sevilla"
- "pedro almagro"
- "portfolio actor español"
- etc.

### Cobertura

Verificar que todas tus páginas están indexadas:
- Válidas: 6 páginas (hero, about, portfolio, showreel, press, contact)
- Excluidas: 0
- Con errores: 0

---

## ✅ Checklist de Configuración

### Google Analytics
- [ ] Cuenta de Google Analytics creada
- [ ] Propiedad GA4 configurada
- [ ] ID de medición obtenido (G-XXXXXXXXXX)
- [ ] ID añadido a `.env.local`
- [ ] Desplegado a Vercel con variable de entorno
- [ ] Verificado en "Informes en tiempo real"
- [ ] Conversiones configuradas (formulario contacto)

### Google Search Console
- [ ] Cuenta de Search Console creada
- [ ] Propiedad verificada
- [ ] Sitemap enviado (sitemap.xml)
- [ ] Robots.txt verificado
- [ ] Esperando primera indexación (24-48h)

### Monitoreo Continuo
- [ ] Revisar analytics semanalmente
- [ ] Verificar errores en Search Console
- [ ] Optimizar keywords según consultas
- [ ] Mejorar contenido de páginas con bajo CTR

---

## 💡 Tips Adicionales

### Mejorar Posicionamiento

1. **Actualizar contenido regularmente**
   - Añadir nuevos proyectos
   - Actualizar biografía
   - Añadir noticias/prensa

2. **Optimizar para keywords de Search Console**
   - Ver qué búsquedas tienen impresiones pero bajo CTR
   - Mejorar titles y descriptions para esas keywords

3. **Conseguir backlinks**
   - IMDb
   - LinkedIn
   - Directorios de actores
   - Teatros donde has trabajado

4. **Redes sociales**
   - Compartir proyectos nuevos
   - Link a tu portfolio en bio
   - Usar hashtags relevantes

---

## 📞 Soporte

**Google Analytics**: https://support.google.com/analytics  
**Search Console**: https://support.google.com/webmasters

---

**🎭 ¡Todo configurado! Ahora podrás ver cómo los usuarios interactúan con tu portfolio y mejorar tu posicionamiento en Google.**
