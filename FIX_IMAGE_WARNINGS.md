# 🔧 Cómo Corregir Warnings de Imágenes en Next.js 14

## ⚠️ Problema Detectado

En la consola del navegador aparecen warnings como:

```
⚠️ Image with src "https://images.unsplash.com/photo-..." has "fill" but is missing "sizes" prop.
```

**Causa**: Las imágenes de Unsplash con `fill` necesitan la prop `sizes` para que Next.js optimice correctamente.

---

## ✅ Solución: Añadir prop `sizes`

### 📍 **¿Qué es `sizes`?**

Le dice a Next.js qué tamaño tendrá la imagen en diferentes viewports para optimizar la carga.

**Ejemplo**:
```tsx
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
```

Significa:
- Móvil (<768px): Imagen ocupa 100% del ancho
- Tablet (768-1200px): Imagen ocupa 50% del ancho
- Desktop (>1200px): Imagen ocupa 33% del ancho

---

## 📋 Valores de `sizes` Recomendados

### 1️⃣ **Imágenes Hero (Pantalla completa)**
```tsx
sizes="100vw"
```
**Usar en**:
- Hero principal
- About section con imagen grande
- Cualquier imagen que ocupe todo el ancho

---

### 2️⃣ **Imágenes en Grid (3 columnas desktop, 1 móvil)**
```tsx
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
```
**Usar en**:
- Filmografía (grid de proyectos)
- Galería de fotos
- Portfolio items

---

### 3️⃣ **Imágenes en Grid (2 columnas)**
```tsx
sizes="(max-width: 768px) 100vw, 50vw"
```
**Usar en**:
- Skills con iconos
- Premios
- Testimonios

---

### 4️⃣ **Imágenes pequeñas (Iconos, logos)**
```tsx
sizes="(max-width: 768px) 80px, 120px"
```
**Usar en**:
- Logos de plataformas (IMDb, etc.)
- Iconos de redes sociales
- Headshots pequeños

---

## 🔍 Dónde Buscar las Imágenes con Warnings

### Método 1: Buscar en el código
```bash
# En la terminal del proyecto:
grep -r "images.unsplash.com" src/
```

### Método 2: Ver warnings en consola
1. Abrir DevTools (F12)
2. Ir a Console
3. Buscar mensajes con "⚠️ Image with src"
4. Copiar la URL de la imagen
5. Buscar esa URL en el código

---

## 📝 Ejemplo de Corrección
### ❌ **ANTES** (Con warning):
```tsx
<Image
  src="https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a"
  alt="Teatro"
  fill
  className="object-cover"
  quality={90}
/>
```

### ✅ **DESPUÉS** (Sin warning):
```tsx
<Image
  src="https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a"
  alt="Teatro"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
  quality={90}
/>
```

---

## 🎯 Imágenes Específicas a Corregir

Según los warnings visibles en tu screenshot:

### 1. Imagen `43e8482d-f288-4cd0-b1ad-31e054eafdf4`
**Ubicación probable**: Hero section  
**Valor `sizes` recomendado**: `"100vw"`

```tsx
<Image
  src="https://github.com/user-attachments/assets/43e8482d-f288-4cd0-b1ad-31e054eafdf4"
  alt="Almagro San Miguel"
  fill
  sizes="100vw"  // 👈 Añadir esto
  className="object-cover"
  quality={90}
  priority
/>
```

---

### 2. Imagen `0c09e17f-1983-4ad0-8926-a0d6ef6ae5cf`
**Ubicación probable**: About section  
**Valor `sizes` recomendado**: `"(max-width: 768px) 100vw, 50vw"`

```tsx
<Image
  src="https://github.com/user-attachments/assets/0c09e17f-1983-4ad0-8926-a0d6ef6ae5cf"
  alt="Almagro San Miguel - Biografía"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"  // 👈 Añadir esto
  className="object-cover"
  quality={85}
/>
```

---

### 3. Imágenes de Unsplash (múltiples)
**URLs detectadas**:
- `photo-1478059299873-f047d8c5fe1a`
- `photo-1507676184212-d03ab07a01bf`
- `photo-1535905557558-afc4877a26fc`
- `photo-1603809984849-fb7d0626e8fa`
- `photo-1507003211169-0a1dd7228f2d`
- `photo-1516534775068-ba3e7458af70`
- Y más...

**Ubicación probable**: Filmografía / Portfolio  
**Valor `sizes` recomendado**: `"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`

```tsx
<Image
  src="https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a"
  alt="Proyecto de teatro"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  // 👈 Añadir
  className="object-cover"
  quality={85}
/>
```

---

## 🛠️ Script para Buscar y Reemplazar Automáticamente

### Opción 1: Usando VSCode
1. Abrir VSCode en el proyecto
2. Presionar `Ctrl+Shift+F` (buscar en archivos)
3. Buscar: `fill\n.*className="object-cover"`
4. Habilitar Regex (botón `.*`)
5. Reemplazar manualmente añadiendo `sizes` antes de `className`

### Opción 2: Script Node.js
Crear archivo `fix-images.js` en la raíz:

```javascript
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const sizesMap = {
  'Hero': '"100vw"',
  'About': '"(max-width: 768px) 100vw, 50vw"',
  'Portfolio': '"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"',
};

glob('src/**/*.tsx', (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Buscar <Image con fill pero sin sizes
    const regex = /(<Image[^>]*fill[^>]*)(?!.*sizes)([^>]*>)/g;
    
    let modified = false;
    content = content.replace(regex, (match) => {
      if (!match.includes('sizes=')) {
        modified = true;
        // Insertar sizes antes del cierre >
        return match.replace('>', ' sizes="(max-width: 768px) 100vw, 50vw">');
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed: ${file}`);
    }
  });
});
```

Ejecutar:
```bash
node fix-images.js
```

---

## 📊 Impact de la Corrección

### Performance:
- ✅ Mejora LCP (Largest Contentful Paint)
- ✅ Reduce bytes transferidos en móvil
- ✅ Carga imágenes del tamaño correcto

### SEO:
- ✅ Google Lighthouse mejor puntuación
- ✅ Core Web Vitals optimizados
- ✅ Métricas de performance mejoradas

### Developer Experience:
- ✅ Sin warnings en consola
- ✅ Código más limpio
- ✅ Mejor mantenibilidad

---

## ✅ Checklist de Verificación

Después de añadir `sizes` a todas las imágenes:

- [ ] Abrir DevTools (F12)
- [ ] Ir a Console
- [ ] Recargar la página (Ctrl+Shift+R)
- [ ] Verificar que NO haya warnings de "missing sizes"
- [ ] Navegar por todas las secciones del sitio
- [ ] Comprobar que imágenes se ven correctamente
- [ ] Hacer commit:
  ```bash
  git add .
  git commit -m "fix(images): Añadir prop sizes a todas las imágenes con fill"
  git push
  ```

---

## 🔍 Testing en Diferentes Dispositivos

Después de la corrección, probar:

### Móvil (DevTools):
1. F12 > Toggle device toolbar (Ctrl+Shift+M)
2. Seleccionar iPhone 12 Pro
3. Recargar página
4. Verificar que imágenes cargan rápido

### Tablet:
1. Seleccionar iPad Pro
2. Verificar imágenes en landscape y portrait

### Desktop:
1. Ventana completa (1920px)
2. Verificar calidad de imágenes

---

## 📚 Recursos Adicionales

### Documentación Oficial:
- Next.js Image: https://nextjs.org/docs/app/api-reference/components/image
- Prop `sizes`: https://nextjs.org/docs/app/api-reference/components/image#sizes

### Calculadora de `sizes`:
- https://ausi.github.io/respimagelint/

### Validador de imágenes:
- Chrome DevTools > Lighthouse
- Sección "Performance" > "Properly size images"

---

## 🐞 Otros Warnings Comunes

### Warning: `quality="90"` pero no configurado en next.config.js

**Solución**: Ya está configurado en `next.config.js` ✅

### Warning: Imágenes sin `alt`

**Solución**: Añadir siempre `alt` descriptivo:
```tsx
<Image
  src="..."
  alt="Almagro San Miguel en el rodaje de La Moderna"  // 👈 Descriptivo
  fill
  sizes="100vw"
/>
```

### Warning: Imágenes sin `priority` en hero

**Solución**: Añadir `priority` a la imagen principal:
```tsx
<Image
  src="..."
  alt="..."
  fill
  sizes="100vw"
  priority  // 👈 Para hero image
/>
```

---

## 🎯 Resultado Esperado

**Antes**:
```
Consola: 15 warnings sobre imágenes
Lighthouse Performance: 85
LCP: 3.2s
```

**Después**:
```
Consola: 0 warnings ✅
Lighthouse Performance: 95+
LCP: <2.5s ✅
```

---

## 🚀 Próximos Pasos

1. **AHORA**: Buscar todas las imágenes con `fill` en el código
2. **Añadir**: Prop `sizes` apropiada según el contexto
3. **Verificar**: Console sin warnings
4. **Commit**: Cambios con mensaje descriptivo
5. **Deploy**: Push a main para actualizar producción
---

**Prioridad**: 🔴 MEDIA  
**Impacto Performance**: 7/10  
**Dificultad**: 2/10  
**Tiempo**: 15-30 min  

👉 **¡Es fácil y mejora mucho el rendimiento!**