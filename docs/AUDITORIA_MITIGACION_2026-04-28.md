# Auditoria y plan de mitigacion - 2026-04-28

## Alcance

Revision tecnica integral de la web: dependencias, seguridad, privacidad, API de contacto, PWA/cache, accesibilidad, rendimiento, SEO/metadata, CI/CD, pruebas automatizadas y coherencia de contenido.

## Estado ejecutivo

La web queda en un estado mucho mas defendible para produccion: se modernizo la base Next/React, se cerraron las vulnerabilidades npm, se endurecieron endpoints, se respeto consentimiento antes de analytics, se separaron pruebas unitarias/E2E/a11y, y se corrigieron fallos reales de accesibilidad y navegacion detectados por Playwright/Axe.

Quedan riesgos residuales controlados, principalmente warnings de React Compiler en componentes existentes, deuda de tipado `any` en tests/utilidades y la migracion pendiente de imagenes desde GitHub attachments a hosting estable.

## P0 - Critico / aplicado

1. Dependencias y vulnerabilidades
   - Actualizado el arbol principal a Next `16.2.4`, React `19.2.5`, Sentry `10.50.0`, ESLint 9 y bundle analyzer compatible.
   - Migrado lint a `eslint.config.mjs` porque `next lint` ya no aplica en Next 16.
   - Validacion de seguridad bloqueante ajustada a `npm audit --audit-level=high`.
   - Se anadio `overrides.postcss = 8.5.12` y `postcss` exacto en devDependencies para forzar la copia segura tambien dentro de Next.
   - Estado actual: `npm audit --audit-level=moderate` devuelve 0 vulnerabilidades.

2. Privacidad y RGPD
   - Google Analytics solo carga en produccion, con ID real y consentimiento de analytics activo.
   - Consentimiento de cookies sincroniza preferencias por evento custom y `storage`.
   - El banner actualiza `gtag consent` cuando corresponde.
   - Eliminados logs de consola innecesarios en flujos sensibles.

3. API de contacto
   - Validacion Zod reforzada, `Content-Type` JSON obligatorio y limite de payload de 10 KB.
   - Rate limiting en memoria con limpieza, deteccion de IP por cabeceras comunes y honeypot `company`.
   - Timeout de envio externo con `AbortController`.
   - `FORMSPREE_URL` requerido en produccion y documentado en `.env.example`.

4. PWA/cache
   - Service worker evita cachear metodos no `GET`, `/api/`, `/_next/data/` y payloads RSC.
   - Esto reduce riesgo de respuestas dinamicas o datos de formulario cacheados accidentalmente.

5. Descargas / Press Kit
   - Eliminadas descargas falsas de ZIP/MP4/PDF.
   - Recursos no disponibles devuelven `501` JSON claro; recursos textuales generan adjuntos reales con `Cache-Control: private, no-store`.

6. Accesibilidad
   - Corregidos contrastes del footer, navbar y CTA del hero.
   - Iconos decorativos quedan ocultos a lectores de pantalla.
   - Enlace superpuesto de trailer ahora tiene nombre accesible.
   - Axe excluye iframes de terceros para no atribuir al proyecto problemas internos de YouTube.

7. CI/CD y pruebas
   - Separadas pruebas unitarias, E2E y a11y.
   - Playwright usa servidor Next con `--hostname 127.0.0.1`.
   - CI ejecuta lint, type-check, unit, E2E, a11y, build y auditoria high.

8. Rendimiento y terceros
   - Eliminada configuracion manual de `splitChunks`; el build anterior paso a compilar sin warnings de tamano usando el particionado por defecto de Next.
   - Embeds directos de YouTube reemplazados por `YouTubeEmbed` click-to-play con thumbnail y `youtube-nocookie.com`.
   - Eliminados preconnect/dns-prefetch tempranos a Google Analytics, Google Tag Manager, Google Fonts y YouTube que no eran necesarios antes de consentimiento o interaccion.

## P1 - Alto / siguiente ciclo

1. Confirmar Lighthouse en entorno desplegado
   - El build local posterior a quitar `splitChunks` compilo sin warnings de tamano.
   - Pendiente: medir Lighthouse en produccion o preview real de Vercel para confirmar LCP/INP/CLS con red real.

2. React Compiler warnings
   - Lint queda sin errores, pero hay warnings de patrones existentes (`refs`, `purity`, `set-state-in-effect`, `immutability`).
   - Prioridad por impacto: `Hero`, `Blog`, `Timeline`, `Testimonials`, `Headshots`.

3. Secretos y entorno de produccion
   - Configurar `FORMSPREE_URL` en Vercel/GitHub Actions.
   - Confirmar `NEXT_PUBLIC_GA_MEASUREMENT_ID` real y dominios permitidos.
   - Revisar Sentry DSN y sampling antes de activar trazas en produccion.

4. Multimedia
   - Revisar imagenes remotas repetidas y preparar assets propios versionados.
   - Seguir la guia `docs/IMAGE_HOSTING_AND_REFERENCING.md`.

5. Auditoria Lighthouse real
   - Ejecutar Lighthouse en build de produccion desplegado, no solo en dev local.
   - Objetivo minimo recomendado: Performance >= 75, Accessibility >= 95, Best Practices >= 95, SEO >= 95.

## P2 - Medio / mantenimiento

1. Reemplazar rate limit en memoria por Redis/Upstash si hay despliegue serverless con trafico real.
2. Generar PDFs reales del press kit cuando existan assets definitivos.
3. Consolidar documentacion historica en `docs/` para evitar duplicidad de informes.
4. Revisar periodicidad de `npm audit`, Playwright browser updates y dependencia anidada de Next.
5. Anadir pruebas API especificas para casos de payload grande, honeypot, content type invalido y timeout externo.

## Verificacion local

Resultados de la ultima ronda ejecutada durante esta auditoria:

- `npm run test:e2e -- --project=chromium --reporter=list --workers=1`: 36 passed.
- `npm run test:a11y -- --reporter=list --workers=1`: 16 passed, 1 skipped.
- `npm run test -- --run`: 38 passed.
- `npm run type-check`: correcto.
- `npm run lint`: correcto, con 50 warnings no bloqueantes ya clasificados como P1/P2.
- `npm run build`: build correcto sin warnings de tamano tras retirar `splitChunks` manual. En la segunda pasada posterior quedo bloqueado por `spawn EPERM` del sandbox, no por error de codigo.
- `npm audit --audit-level=moderate`: 0 vulnerabilidades.

Los comandos `type-check`, `lint`, `test`, `build`, `test:e2e`, `test:a11y` y `audit high` deben quedar como puerta minima antes de publicar.
