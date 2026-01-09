# 🎭 Web PASM - Portfolio de Actor Profesional

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)](https://tailwindcss.com/)

Portfolio moderno, elegante y optimizado para actores profesionales. Construido con las últimas tecnologías web y mejores prácticas de la industria.

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Inicio Rápido](#inicio-rápido)
- [Personalización](#personalización)
- [Despliegue](#despliegue)
- [SEO y Performance](#seo-y-performance)

---

## 🎬 Sobre el Proyecto

### Filosofía de Diseño

Este proyecto es un **portfolio estático** optimizado para actores, con enfoque en:

- **🚀 Performance**: Carga ultra-rápida, optimización de assets
- **🎨 Diseño Moderno**: Inspirado en portfolios de actores profesionales
- **📱 Mobile First**: Responsive y táctil-optimizado
- **🔍 SEO Optimizado**: Meta tags, sitemap, structured data
- **♿ Accesibilidad**: WCAG 2.1 AA compliant
- **🎭 Storytelling**: Diseñado para contar historias visualmente

### Arquitectura Simplificada

```
┌─────────────────────────────────────────┐
│          CDN (Vercel Edge)              │
│     Contenido estático cacheado         │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│         Next.js 15 (SSG/SSR)            │
│    Genera páginas estáticas             │
└─────────────────────────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│      Datos Estáticos en Código          │
│   (Arrays, objetos en componentes)      │
└─────────────────────────────────────────┘
```

**✅ SIN base de datos**: Todo el contenido está en el código, fácil de editar y mantener.

---

## ✨ Características

### Secciones Implementadas

- 🎭 **Hero Section**: Presentación impactante con animaciones
- 👤 **Sobre Mí**: Biografía con estadísticas animadas
- 🎥 **Portfolio**: 6 proyectos con filtros (Cine/TV/Teatro)
- 🎬 **Showreel**: Sección de video y materiales descargables
- 📰 **Prensa**: Artículos de medios y testimonios
- 📧 **Contacto**: Formulario y datos de contacto

### Características Técnicas

✅ **Animaciones Fluidas**: Framer Motion para transiciones elegantes  
✅ **Navegación Sticky**: Header fijo con efecto blur  
✅ **Filtros Interactivos**: Portfolio filtrable por categoría  
✅ **Responsive Design**: Optimizado para todos los dispositivos  
✅ **Imágenes Optimizadas**: Next.js Image con WebP/AVIF  
✅ **Code Splitting**: Carga solo lo necesario  
✅ **PWA Ready**: Manifest y service worker preparados  
✅ **SEO Completo**: Meta tags, OG, sitemap, robots.txt  

---

## 🚀 Stack Tecnológico

### Frontend

- **Framework**: Next.js 15.1 (App Router)
- **UI Library**: React 19
- **Lenguaje**: TypeScript 5.7 (strict mode)
- **Estilos**: Tailwind CSS 4.0
- **Animaciones**: Framer Motion 12
- **Iconos**: Lucide React
- **Fuentes**: Inter + Playfair Display (Google Fonts)

### Gestión de Datos

- **Datos Estáticos**: Arrays y objetos en componentes
- **Formularios**: React Hook Form + Zod validation
- **Estado**: React Context (mínimo necesario)

### DevOps & Tooling

- **Package Manager**: pnpm 8.x (o npm como alternativa)
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + Commitlint
- **Testing**: Vitest (unit) + Playwright (E2E)
- **CI/CD**: GitHub Actions (manual trigger)
- **Hosting**: Vercel / Netlify
- **Monitoring**: Vercel Analytics

---

## 📁 Estructura del Proyecto

```
web_PASM/
├── .github/
│   └── workflows/          # CI/CD manual
├── public/
│   ├── robots.txt          # SEO
│   ├── sitemap.xml         # SEO
│   ├── manifest.json       # PWA
│   └── grid.svg            # Background pattern
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Página home
│   │   └── globals.css     # Estilos globales
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── Header.tsx  # Navegación
│   │   │   └── Footer.tsx  # Footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── Showreel.tsx
│   │   │   ├── Press.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/             # Componentes reutilizables
│   │       ├── Button.tsx
│   │       └── Card.tsx
│   └── lib/
│       └── utils.ts        # Utilidades
├── tests/
│   ├── setup.ts
│   └── e2e/
│       └── home.spec.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── vitest.config.ts
├── playwright.config.ts
└── README.md
```

---

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js** 20.x o superior → [Descargar](https://nodejs.org/)
- **npm** (incluido con Node.js) o **pnpm** (opcional)
- **Git**

### Instalación en 3 Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/juankaspain/web_PASM.git
cd web_PASM

# 2. Instalar dependencias (elige uno)
npm install          # Con npm (más común)
# o
pnpm install         # Con pnpm (más rápido)

# 3. Iniciar servidor de desarrollo
npm run dev          # Con npm
# o
pnpm dev             # Con pnpm
```

**🌐 Abre tu navegador en:** http://localhost:3000

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo (localhost:3000)
npm run build        # Build para producción
npm run start        # Servidor de producción
npm run lint         # Ejecutar ESLint
npm run lint:fix     # Corregir errores automáticamente
npm run format       # Formatear código con Prettier
npm run type-check   # Verificar tipos TypeScript
npm run test         # Tests unitarios
npm run test:e2e     # Tests end-to-end
```

---

## 🎨 Personalización

### 1. Datos del Portfolio

Edita `src/components/sections/Portfolio.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Tu Proyecto',
    category: 'Cine', // 'Cine', 'TV', o 'Teatro'
    role: 'Protagonista',
    year: 2026,
    image: '/images/tu-proyecto.jpg',
    description: 'Descripción de tu proyecto...',
    icon: Film,
    awards: ['Premio ABC 2026'],
  },
  // ... más proyectos
]
```

### 2. Información Personal

Actualiza estos archivos:

- **Hero**: `src/components/sections/Hero.tsx`
- **Sobre Mí**: `src/components/sections/About.tsx`
- **Contacto**: `src/components/sections/Contact.tsx`
- **Footer**: `src/components/layouts/Footer.tsx`
- **Metadata**: `src/app/layout.tsx`

### 3. Imágenes

**Opción A - Locales** (recomendado):
```bash
# Coloca tus imágenes en:
public/images/
  ├── hero.jpg
  ├── about.jpg
  └── projects/
      ├── proyecto1.jpg
      └── proyecto2.jpg
```

```tsx
// Luego usa:
<Image src="/images/hero.jpg" alt="..." />
```

**Opción B - Unsplash** (actual):
Las imágenes actuales son de Unsplash para demo.

### 4. Colores y Estilos

Edita variables en `src/app/globals.css`:

```css
:root {
  --primary: 240 5.9% 10%;      /* Color principal */
  --background: 0 0% 100%;       /* Fondo */
  --foreground: 240 10% 3.9%;    /* Texto */
}
```

### 5. Redes Sociales

Actualiza en `src/components/layouts/Footer.tsx`:

```typescript
const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/tu_usuario', icon: Instagram },
  { name: 'Twitter', href: 'https://twitter.com/tu_usuario', icon: Twitter },
  // ...
]
```

---

## 🚢 Despliegue

### Vercel (Recomendado - 2 minutos)

1. Sube tu código a GitHub (ya está)
2. Ve a [vercel.com](https://vercel.com)
3. Click en **"Add New Project"**
4. Importa `juankaspain/web_PASM`
5. Vercel detecta Next.js automáticamente
6. Click en **"Deploy"**
7. ¡Listo! 🎉

**URL**: `https://tu-proyecto.vercel.app`

### Netlify (Alternativa)

1. Ve a [netlify.com](https://netlify.com)
2. **"Add new site"** → **"Import from Git"**
3. Selecciona tu repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy

### Variables de Entorno (Opcional)

Si necesitas configurar APIs:

```bash
# En Vercel/Netlify dashboard, añade:
NEXT_PUBLIC_CONTACT_EMAIL=tu@email.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🔍 SEO y Performance

### SEO Implementado

✅ **Meta Tags Optimizados**
```tsx
// src/app/layout.tsx
export const metadata = {
  title: 'Pedro Almagro | Actor',
  description: '...',
  openGraph: { ... },
  twitter: { ... }
}
```

✅ **Sitemap XML**: `public/sitemap.xml`  
✅ **Robots.txt**: `public/robots.txt`  
✅ **URLs Semánticas**: `/#about`, `/#portfolio`, etc.  
✅ **Alt Text**: Todas las imágenes tienen descripción  
✅ **Structured Data**: Preparado para JSON-LD  

### Performance

**Métricas Objetivo (Lighthouse):**
- 🟢 Performance: 95+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 95+
- 🟢 SEO: 95+

**Optimizaciones:**
- ⚡ Next.js Image optimization (WebP/AVIF)
- ⚡ Code splitting automático
- ⚡ Lazy loading de componentes
- ⚡ CSS optimizado con Tailwind
- ⚡ Minificación y compresión
- ⚡ Edge caching en Vercel

---

## 🛠️ Desarrollo

### Estructura de Datos

Todos los datos están en los componentes:

```typescript
// src/components/sections/Portfolio.tsx
const projects = [ /* 6 proyectos */ ]

// src/components/sections/Press.tsx
const pressItems = [ /* 3 artículos */ ]
const testimonials = [ /* 2 testimonios */ ]

// src/components/sections/About.tsx
const stats = [ /* 4 estadísticas */ ]
```

### Añadir Nueva Sección

1. Crea componente en `src/components/sections/`
2. Añádelo a `src/app/page.tsx`
3. Actualiza navegación en `Header.tsx`

### Workflow de Git

```bash
# Crear rama para cambios
git checkout -b feat/nueva-funcionalidad

# Hacer commits (Conventional Commits)
git commit -m "feat: añadir nueva sección"

# Push
git push origin feat/nueva-funcionalidad
```

---

## 📚 Documentación Adicional

- **[SETUP_LOCAL.md](./SETUP_LOCAL.md)** - Guía de instalación detallada
- **[GUIA_COMPLETA.md](./GUIA_COMPLETA.md)** - Guía completa con FAQs
- **[Next.js Docs](https://nextjs.org/docs)** - Documentación oficial
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Referencia de clases

---

## 🐛 Solución de Problemas

### Error: Cannot find module
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 ocupado
```bash
npm run dev -- -p 3001  # Usa puerto 3001
```

### Imágenes no cargan
Verifica `next.config.js` → `remotePatterns`

---

## 📄 Licencia

MIT License - Ver [LICENSE](LICENSE) para detalles.

---

## 👤 Autor

**Pedro Almagro**
- Portfolio: [pedroalmagro.com](https://pedroalmagro.com)
- GitHub: [@juankaspain](https://github.com/juankaspain)
- Ubicación: Sevilla, España 🇪🇸

---

## 🙏 Agradecimientos

Construido con tecnologías modernas y mejores prácticas. Inspirado en portfolios de actores profesionales.

---

**Hecho con ❤️ en Sevilla** | **Built with Next.js 15 + React 19 + TypeScript**
