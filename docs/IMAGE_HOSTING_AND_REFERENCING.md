# Alojamiento y referencia de imagenes

## Recomendacion principal

Para esta web conviene separar las imagenes en dos grupos:

1. Imagenes criticas y estables: logo, favicon, OG image, hero principal, retratos seleccionados.
   - Alojar en `public/images/...` dentro del proyecto.
   - Referenciar como rutas locales: `/images/hero/almagro-san-miguel.webp`.
   - Ventaja: maximo control, cache estable, sin dependencias externas y mejor SEO.

2. Galerias pesadas, prensa, press kit y material de alta resolucion.
   - Alojar en un CDN/gestor de assets: Cloudinary, Vercel Blob, S3 + CloudFront o Cloudflare R2.
   - Recomendacion practica: Cloudinary si se quiere transformacion automatica de formatos/tamanos; Vercel Blob si se quiere simplicidad dentro del stack Vercel.

## Lo que no conviene para produccion

Evitar `github.com/user-attachments`, `private-user-images.githubusercontent.com` y enlaces pegados desde issues/PRs como fuente principal de imagenes. Funcionan para prototipos, pero no son un contrato de CDN de producto: pueden cambiar, caducar, romper SEO social o tener politicas de cache poco controlables.

## Estructura local sugerida

```text
public/
  images/
    hero/
      almagro-san-miguel-hero-640.webp
      almagro-san-miguel-hero-1280.webp
    headshots/
      almagro-san-miguel-headshot-01.webp
      almagro-san-miguel-headshot-02.webp
    projects/
      un-fantasma-en-la-batalla-poster.webp
    og/
      almagro-san-miguel-og.jpg
```

## Como referenciar imagenes locales

```tsx
import Image from 'next/image'
;<Image
  src="/images/hero/almagro-san-miguel-hero-1280.webp"
  alt="Almagro San Miguel, actor profesional"
  width={1280}
  height={1920}
  priority
  sizes="(max-width: 768px) 100vw, 520px"
/>
```

Para fondos CSS, usar rutas absolutas publicas:

```css
background-image: url('/images/og/almagro-san-miguel-og.jpg');
```

## Como referenciar imagenes en CDN

1. Configurar el dominio en `next.config.js` dentro de `images.remotePatterns`.
2. Guardar solo URLs publicas y versionadas.
3. Usar siempre `next/image` con `alt`, `sizes`, `width/height` o `fill` con contenedor estable.

Ejemplo Cloudinary:

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '/TU_CLOUD_NAME/image/upload/**',
    },
  ],
}
```

Ejemplo Vercel Blob:

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '*.public.blob.vercel-storage.com',
    },
  ],
}
```

## Formatos y pesos objetivo

- Hero/retrato principal: WebP o AVIF, 1200-1800 px de alto, idealmente < 250 KB por variante.
- Headshots de galeria: WebP/AVIF, 800-1200 px lado largo, < 180 KB.
- Open Graph: JPG/WebP 1200x630, < 300 KB.
- Thumbnails: WebP/AVIF, 400-800 px, < 80 KB.

## Plan de migracion recomendado

1. Exportar assets definitivos desde la fuente original.
2. Renombrar con slugs descriptivos: `almagro-san-miguel-la-moderna.webp`.
3. Optimizar con Squoosh, Sharp, Cloudinary o Vercel Image Optimization.
4. Subir assets criticos a `public/images`.
5. Subir galerias pesadas a CDN.
6. Sustituir URLs GitHub por rutas locales/CDN.
7. Quitar dominios GitHub de `next.config.js` cuando ya no se usen.
8. Regenerar y probar OG/Twitter cards.

## Decision recomendada para este proyecto

Usar `public/images` para hero, OG, poster principal y 6-10 headshots esenciales. Usar Cloudinary o Vercel Blob para galerias completas y material de prensa pesado. Esta combinacion equilibra rendimiento, SEO, coste y facilidad de mantenimiento.
