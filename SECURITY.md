# 🔒 Política de Seguridad

## Versiones Soportadas

Actualmente damos soporte de seguridad a las siguientes versiones:

| Versión | Soportada          |
| ------- | ------------------ |
| 3.0.x   | :white_check_mark: |
| 2.x.x   | :x:                |
| 1.x.x   | :x:                |

## Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad, por favor **NO** abras un issue público.

En su lugar, envía un correo electrónico a:

**Email**: info@almagrosanmiguel.com

### Qué Incluir en el Reporte

Por favor, incluye la siguiente información en tu reporte:

1. **Descripción de la vulnerabilidad**
   - Tipo de vulnerabilidad (XSS, CSRF, SQLi, etc.)
   - Impacto potencial

2. **Pasos para reproducir**
   - Código de prueba de concepto (PoC)
   - Screenshots o videos si es aplicable

3. **Versión afectada**
   - Número de versión
   - Branch afectado

4. **Mitigación sugerida** (opcional)
   - Cómo crees que se puede solucionar

### Proceso de Respuesta

1. **Acuse de recibo**: Responderemos en 48 horas
2. **Evaluación**: Evaluaremos la vulnerabilidad en 7 días
3. **Resolución**: Trabajaremos en un fix y lo desplegaremos
4. **Publicación**: Una vez parcheado, publicaremos un security advisory

## Historial de Seguridad

### v3.0.1 (2026-01-10)

**✅ RESUELTO**: esbuild CORS vulnerability (GHSA-67mh-4wv8-2f99)

- **Severidad**: Moderate
- **Afectado**: esbuild <=0.24.2
- **Solución**: Actualizado vitest a 4.0.16 que incluye esbuild 0.25.0+
- **CVE**: No asignado
- **Commit**: [8234a01](https://github.com/juankaspain/web_PASM/commit/8234a01d862cf77214291363e85a4787927d12a9)

**Descripción**:  
esbuild permitía que cualquier sitio web enviara solicitudes al servidor de desarrollo y leyera las respuestas debido a la configuración CORS por defecto (`Access-Control-Allow-Origin: *`).

**Impacto**:  
Bajo - Solo afecta al entorno de desarrollo, no a producción.

**Mitigación**:  
Actualizar a vitest 4.0.16+ que incluye esbuild 0.25.0 con el fix.

---

## Mejores Prácticas de Seguridad

### Para Desarrolladores

1. **Mantener Dependencias Actualizadas**
   ```bash
   npm audit
   npm audit fix
   npm update
   ```

2. **Revisar Dependencias Regularmente**
   - CI/CD ejecuta `npm audit` automáticamente
   - Dependency Review en cada PR
   - Renovate/Dependabot configurado

3. **Validación de Inputs**
   - Usar Zod para validación de schemas
   - Sanitizar HTML con `sanitizeHtml()`
   - Validar emails, URLs, teléfonos

4. **Evitar XSS**
   - No usar `dangerouslySetInnerHTML`
   - Sanitizar contenido generado por usuarios
   - Usar Content Security Policy

5. **Secrets Management**
   - Nunca commitear secrets
   - Usar variables de entorno
   - `.env` en `.gitignore`

### Para Usuarios

1. **Mantener Navegadores Actualizados**
2. **No compartir credenciales**
3. **Reportar comportamiento sospechoso**

---

## Configuración de Seguridad

### Security Headers

El proyecto implementa los siguientes security headers:

```javascript
// next.config.js
headers: [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
]
```

### Content Security Policy

CSP configurado para SVGs:

```javascript
contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
```

### Rate Limiting

Formulario de contacto protegido con rate limiting de Formspree:
- Máximo 50 submissions por mes (plan gratuito)
- Protección contra spam
- CAPTCHA opcional

---

## Herramientas de Seguridad

### Automatizadas

- ✅ **npm audit** - Escaneo de vulnerabilidades
- ✅ **GitHub Dependency Review** - Análisis de dependencias en PRs
- ✅ **Dependabot Alerts** - Alertas automáticas
- ✅ **Sentry** - Monitoreo de errores
- ✅ **Lighthouse CI** - Auditorías de seguridad

### Manuales

- ✅ **Code Review** - Revisión de código
- ✅ **Penetration Testing** - Pruebas de penetración
- ✅ **Security Audit** - Auditorías periódicas

---

## Checklist de Seguridad

### Antes de Deploy

- [ ] Ejecutar `npm audit` y resolver vulnerabilidades
- [ ] Revisar `.env.example` y asegurar que no hay secrets
- [ ] Verificar que `.env` está en `.gitignore`
- [ ] Confirmar que security headers están activos
- [ ] Probar formulario de contacto con rate limiting
- [ ] Verificar que Sentry está configurado
- [ ] Revisar permisos de APIs externas
- [ ] Confirmar HTTPS en producción

### Post-Deploy

- [ ] Verificar certificado SSL
- [ ] Probar security headers en producción
- [ ] Confirmar que Sentry recibe eventos
- [ ] Revisar logs de errores
- [ ] Monitorear métricas de seguridad

---

## Contacto

Para reportes de seguridad:

**Email**: info@almagrosanmiguel.com  
**Tiempo de respuesta**: 48 horas  
**Horario**: Lunes a Viernes, 9:00 - 18:00 CET

---

## Referencias

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [npm Security Best Practices](https://docs.npmjs.com/about-security-audits)

---

**Última actualización**: 10 de enero de 2026  
**Mantenedor**: Equipo de Desarrollo
