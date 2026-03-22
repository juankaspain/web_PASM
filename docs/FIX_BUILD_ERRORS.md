# 🔧 FIX: Errores de Build y Dependencias

## 🐛 Problema Detectado

```
Module not found: Can't resolve 'babel-loader'
ENOENT: no such file or directory, open '.next/fallback-build-manifest.json'
```

## ✅ Solución Rápida

### Paso 1: Limpiar Cache y Reinstalar

```bash
# 1. Eliminar node_modules y cache
rm -rf node_modules
rm -rf .next
rm -rf package-lock.json

# En Windows (PowerShell):
Remove-Item -Recurse -Force node_modules, .next, package-lock.json

# 2. Reinstalar dependencias
npm install

# 3. Build limpio
npm run build

# 4. Iniciar en desarrollo
npm run dev
```

### Paso 2: Verificar package.json

Asegúrate de que `package.json` tiene estas dependencias:

```json
{
  "dependencies": {
    "next": "^14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.16",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.6",
    "@types/react": "^18.2.46",
    "@types/react-dom": "^18.2.18",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.3"
  }
}
```

### Paso 3: Verificar next.config.js

El archivo `next.config.js` debe ser simple:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // NO incluir configuraciones de babel o webpack custom
}

module.exports = nextConfig
```

## 🚫 Errores Comunes

### 1. babel-loader no es necesario

**Problema:** Next.js 14 usa SWC, no Babel por defecto.

**Solución:** NO instalar babel-loader. Si hay un `.babelrc` o `babel.config.js`, elimínalo:

```bash
rm .babelrc
rm babel.config.js
```

### 2. Critical CSS con fs en layout.tsx

**Problema:** El código actual intenta leer `critical.css` con `fs` que puede fallar.

**Solución Temporal:** Comentar la lectura de critical.css hasta que el build funcione:

```tsx
// En src/app/layout.tsx, temporalmente:
const getCriticalCSS = () => {
  // Temporalmente deshabilitado para fix de build
  return ''

  /* Descomentar después del build exitoso:
  if (typeof window === 'undefined') {
    try {
      const criticalPath = path.join(process.cwd(), 'src/app/critical.css')
      return fs.readFileSync(criticalPath, 'utf8')
    } catch {
      return ''
    }
  }
  return ''
  */
}
```

### 3. Imports de fs/path

**Problema:** `fs` y `path` solo funcionan en server components.

**Solución:** Asegurar que layout.tsx NO tiene 'use client':

```tsx
// src/app/layout.tsx
// NO incluir 'use client' en este archivo
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
// ... resto del código
```

## 🚀 Build Exitoso - Pasos Completos

### Opción A: Fix Rápido (Recomendado)

```bash
# 1. Limpiar todo
rm -rf node_modules .next package-lock.json

# 2. Reinstalar
npm install

# 3. Desarrollo (sin build)
npm run dev
```

### Opción B: Build para Producción

```bash
# 1. Limpiar
rm -rf node_modules .next package-lock.json

# 2. Instalar
npm install

# 3. Build
npm run build

# 4. Start production
npm start
```

## 📝 Checklist de Verificación

Antes de hacer `npm run dev` o `npm run build`:

- [ ] `node_modules` eliminado
- [ ] `.next` eliminado
- [ ] `package-lock.json` eliminado
- [ ] NO existe `.babelrc`
- [ ] NO existe `babel.config.js`
- [ ] `next.config.js` es simple (sin webpack/babel custom)
- [ ] `layout.tsx` NO tiene 'use client'
- [ ] Ejecutar `npm install` limpio

## ⚡ Comando Único (Copiar y Pegar)

### En Windows (PowerShell):

```powershell
Remove-Item -Recurse -Force node_modules, .next, package-lock.json -ErrorAction SilentlyContinue; npm install; npm run dev
```

### En Mac/Linux:

```bash
rm -rf node_modules .next package-lock.json && npm install && npm run dev
```

## 🐛 Si Aún Falla

### 1. Verificar versión de Node.js

```bash
node --version
# Debe ser >= 18.17.0
```

Si es menor:

```bash
# Instalar Node.js 20 LTS desde:
# https://nodejs.org/
```

### 2. Usar npm ci en lugar de npm install

```bash
rm -rf node_modules .next
npm ci
npm run dev
```

### 3. Limpiar cache de npm

```bash
npm cache clean --force
rm -rf node_modules .next package-lock.json
npm install
npm run dev
```

## 🛡️ Workaround: Deshabilitar Critical CSS Temporalmente

Si el error persiste, crear este archivo:

**src/app/layout-fixed.txt** (copiar y renombrar a layout.tsx):

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import PWAInstall from '@/components/PWAInstall'
import Script from 'next/script'

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Arial',
    'sans-serif',
  ],
})

// ... (resto del metadata igual)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Critical CSS deshabilitado temporalmente para fix de build

  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Critical CSS se agregará después del build exitoso */}

        {/* Resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* ... resto de los hints */}
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Analytics />
        <PWAInstall />
        {/* Scripts de Schema.org */}
      </body>
    </html>
  )
}
```

## ✅ Verificación de Éxito

Después de `npm run dev`, deberías ver:

```
✓ Ready in 3-5s
○ Compiling / ...
✓ Compiled / in 2-3s
```

Y en el navegador:

- http://localhost:3000 carga correctamente
- Sin errores en consola del navegador
- Imágenes se cargan
- Animaciones funcionan

## 📦 Archivos Seguros para Eliminar

Estos archivos se regeneran automáticamente:

```
.next/                 # Build output
node_modules/          # Dependencies
package-lock.json      # Lock file
.vercel/              # Vercel config (si existe)
.turbo/               # Turbo cache (si existe)
```

## 📌 Nota Importante

**El error de babel-loader es un falso positivo.** Next.js 14 usa SWC, no Babel. El error suele deberse a:

1. Cache corrupta de `.next`
2. Instalación incompleta de `node_modules`
3. Conflicto con configuración de Babel legacy

**La solución es siempre:** limpieza completa + reinstalación.

---

## 🎉 Después del Fix

Una vez que `npm run dev` funcione:

1. Verificar que el sitio carga en http://localhost:3000
2. Probar navegación entre secciones
3. Verificar que imágenes cargan
4. Si todo funciona, hacer build para producción:

   ```bash
   npm run build
   npm start
   ```

5. Después de build exitoso, puedes rehabilitar Critical CSS

---

**Creado:** 12 de enero de 2026  
**Status:** 🔧 Fix Guide Ready
