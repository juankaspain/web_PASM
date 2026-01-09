# 🚀 Instrucciones de Configuración Local

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 20.x o superior ([Descargar](https://nodejs.org/))
- **pnpm** 8.x o superior
- **Git**

### Instalar pnpm

Si no tienes pnpm instalado:

```bash
npm install -g pnpm@8
```

---

## 🛠️ Instalación
### 1. Clonar el Repositorio

```bash
git clone https://github.com/juankaspain/web_PASM.git
cd web_PASM
```

### 2. Instalar Dependencias

```bash
pnpm install
```

Esto instalará todas las dependencias necesarias definidas en `package.json`.

### 3. Configurar Variables de Entorno (Opcional)

Para desarrollo local básico, no necesitas configurar variables de entorno. El proyecto funcionará sin ellas.

Si deseas configurarlas:

```bash
cp .env.example .env.local
```

Edita `.env.local` con tus valores si es necesario.

---

## ▶️ Ejecutar en Modo Desarrollo

### Iniciar el Servidor de Desarrollo

```bash
pnpm dev
```

Esto iniciará el servidor de desarrollo de Next.js en:

**🌐 http://localhost:3000**

Abre tu navegador y visita esta URL para ver la aplicación.

### Características del Modo Desarrollo

✅ **Hot Reload**: Los cambios se reflejan automáticamente
✅ **Fast Refresh**: Preserva el estado del componente
✅ **Error Overlay**: Errores visibles en pantalla
✅ **Source Maps**: Debugging fácil

---

## 📱 Vista Responsive

### Probar en Diferentes Dispositivos

La web está optimizada para:

- 📱 **Móvil**: 375px - 767px
- 💻 **Tablet**: 768px - 1023px
- 🖥️ **Desktop**: 1024px+

### Usando DevTools de Chrome

1. Abre http://localhost:3000
2. Presiona `F12` o `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
3. Click en el icono de dispositivo móvil (Toggle device toolbar)
4. Selecciona diferentes dispositivos para probar

---

## 🎨 Estructura de la Web

### Secciones Principales

La web tiene 6 secciones principales:

1. **Hero**: Presentación con imagen y CTA
2. **Sobre Mí**: Biografía y estadísticas
3. **Portafolio**: 6 proyectos con filtros (Cine/TV/Teatro)
4. **Showreel**: Video demo y materiales descargables
5. **Prensa**: Artículos y testimonios
6. **Contacto**: Formulario e información de contacto

### Diseño y Características

✨ **Animaciones Suaves**: Framer Motion
✨ **Diseño Moderno**: Inspirado en portfolios de actores profesionales
✨ **Tipografía Elegante**: Inter + Playfair Display
✨ **Imágenes de Unsplash**: Placeholders de alta calidad
✨ **Navegación Sticky**: Header fijo con efecto blur
✨ **Scroll Suave**: Navegación entre secciones fluida

---

## 🛠️ Scripts Disponibles

### Desarrollo

```bash
pnpm dev          # Inicia servidor de desarrollo
pnpm build        # Construye para producción
pnpm start        # Inicia servidor de producción
```

### Calidad de Código

```bash
pnpm lint         # Ejecuta ESLint
pnpm lint:fix     # Corrige errores de ESLint automáticamente
pnpm format       # Formatea código con Prettier
pnpm type-check   # Verifica tipos de TypeScript
```

### Testing (Aún no configurado)

```bash
pnpm test         # Ejecutará tests cuando estén configurados
pnpm test:e2e     # E2E tests con Playwright
```

---

## 💡 Consejos de Desarrollo

### Modificar Contenido

Todos los componentes están en `src/components/`:

- `src/components/sections/` - Secciones principales
- `src/components/layouts/` - Header y Footer

### Datos Mockeados

Los datos están hardcodeados en cada componente. Para cambiarlos:

```typescript
// Ejemplo en Portfolio.tsx
const projects = [
  {
    title: 'Tu Proyecto',
    category: 'Cine',
    // ... más datos
  },
]
```

### Cambiar Imágenes

Actualmente usa Unsplash. Para usar tus propias imágenes:

1. Coloca imágenes en `public/images/`
2. Actualiza las rutas en los componentes:

```typescript
<Image
  src="/images/tu-imagen.jpg"
  alt="Descripción"
  fill
/>
```

### Modificar Estilos

- **Colores**: `tailwind.config.ts`
- **CSS Global**: `src/app/globals.css`
- **Componentes**: Usa clases de Tailwind inline

---

## 🐛 Solución de Problemas

### Error: "Cannot find module"

```bash
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Error de Puerto en Uso

Si el puerto 3000 está ocupado:

```bash
pnpm dev -- -p 3001  # Usa puerto 3001
```

### Problemas con Imágenes

Si las imágenes de Unsplash no cargan, verifica:

1. Conexión a internet
2. Configuración en `next.config.js` - remotePatterns

### Errores de TypeScript

```bash
pnpm type-check  # Ver todos los errores
```

---

## 🚀 Construir para Producción
### Build Local

```bash
pnpm build
pnpm start
```

La aplicación estará disponible en http://localhost:3000

### Optimizaciones Incluidas

✅ Minificación de JS/CSS
✅ Optimización de imágenes (WebP/AVIF)
✅ Code splitting automático
✅ Tree shaking
✅ Compresión gzip

---

## 📝 Notas Importantes

### Datos Mockeados

Toda la información (proyectos, prensa, contacto) es de ejemplo. Deberás:

1. Reemplazar textos con información real
2. Añadir imágenes propias
3. Configurar formulario de contacto con backend real
4. Añadir enlaces reales a redes sociales

### Imágenes Temporales

Las imágenes actuales son de Unsplash. Para producción:

1. Usa fotos profesionales propias
2. Optimiza imágenes (< 200KB recomendado)
3. Usa formatos modernos (WebP, AVIF)

### Formulario de Contacto

Actualmente el formulario solo muestra un alert. Para hacerlo funcional:

- Integra con API de email (SendGrid, Resend)
- O usa servicio como Formspree, Netlify Forms
- O crea API route en Next.js

---

## 🌐 Navegadores Soportados

✅ Chrome (last 2 versions)
✅ Firefox (last 2 versions)
✅ Safari (last 2 versions)
✅ Edge (last 2 versions)
✅ Móviles iOS/Android (modernos)

---

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## ❓ ¿Necesitas Ayuda?

Si encuentras problemas:

1. Verifica que Node.js y pnpm estén correctamente instalados
2. Asegúrate de estar en la carpeta correcta
3. Revisa los logs de error en la consola
4. Prueba eliminando `node_modules` y reinstalando

---

**🎉 ¡Disfruta desarrollando!**
