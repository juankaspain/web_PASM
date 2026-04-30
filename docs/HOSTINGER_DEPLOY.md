# Despliegue en Hostinger

Este proyecto esta configurado para Hostinger como hosting estatico Apache.

## Build

```bash
npm run hostinger:check
```

El comando genera la carpeta `out/`.

## Que subir

Sube a `public_html` el contenido de `out/`, no la carpeta `out` completa.

Antes de subir un nuevo despliegue, elimina del hosting estos restos si existen:

- `public_html/_next`
- `public_html/assets`
- `public_html/*.html`
- `public_html/.htaccess`
- `public_html/sw.js`

Despues sube todo el contenido nuevo de `out/`.

## Importante

No subas estas carpetas a Hostinger:

- `.next`
- `src`
- `node_modules`
- `.git`

Si aparecen errores 503 en `/_next/static/...`, casi siempre hay una mezcla de HTML de un build y assets de otro. La solucion es limpiar `public_html` y volver a subir el contenido completo de `out/`.
