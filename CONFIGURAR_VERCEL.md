# 🚀 Configurar Variables de Entorno en Vercel

## 📋 Variables Requeridas

Después de desplegar a Vercel, necesitas añadir estas variables de entorno:

### 1. Google Analytics (YA TIENES EL ID ✅)

```
NEXT_PUBLIC_GA_MEASUREMENT_ID = G-HMCWN2XT3
```

**De dónde sale**: Del screenshot que compartiste de Google Analytics

---

### 2. URL del Sitio

```
NEXT_PUBLIC_SITE_URL = https://pedroalmagro.com
```

**Importante**: Cambiar cuando tengas tu dominio personalizado

---

### 3. Email de Contacto (Opcional)

```
NEXT_PUBLIC_CONTACT_EMAIL = info@pedroalmagro.com
```

---

### 4. Google Search Console (Por configurar)

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = tu-codigo-aqui
```

**Cómo obtenerlo**:
1. Ve a https://search.google.com/search-console
2. Añade propiedad: `pedroalmagro.com`
3. Elige método: **"Etiqueta HTML"**
4. Copia el código (ej: `abc123def456`)
5. Pégalo en esta variable

---

## 🔧 Cómo Añadir Variables en Vercel

### Método 1: Desde el Dashboard de Vercel

1. Ve a tu proyecto en https://vercel.com
2. Click en **"Settings"** (arriba)
3. Click en **"Environment Variables"** (menú lateral)
4. Para cada variable:
   - **Key**: Nombre de la variable (ej: `NEXT_PUBLIC_GA_MEASUREMENT_ID`)
   - **Value**: Valor (ej: `G-HMCWN2XT3`)
   - **Environments**: Selecciona **Production, Preview, Development**
   - Click **"Save"**

### Método 2: Desde el CLI de Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Añadir variables
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
# Pegar: G-HMCWN2XT3
# Seleccionar: Production, Preview, Development

vercel env add NEXT_PUBLIC_SITE_URL
# Pegar: https://pedroalmagro.com

vercel env add NEXT_PUBLIC_CONTACT_EMAIL
# Pegar: info@pedroalmagro.com

vercel env add NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
# Pegar: tu-codigo-search-console
```

---

## ✅ Verificar Variables

### Después de añadirlas:

1. **Redespliega el proyecto**:
   ```bash
   # Desde Git
   git push
   
   # O desde Vercel dashboard
   Deployments > ... > Redeploy
   ```

2. **Verificar Analytics**:
   - Visita tu sitio en producción
   - Ve a Google Analytics > Informes en tiempo real
   - Deberías ver tu visita en ~30 segundos

3. **Verificar metadataBase**:
   - El warning de localhost desaparecerá
   - Las imágenes OG se resolverán correctamente

---

## 🎯 Configuración Completa

### En `.env.local` (Desarrollo Local)

```env
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-HMCWN2XT3"
NEXT_PUBLIC_CONTACT_EMAIL="info@pedroalmagro.com"
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="tu-codigo"
```

### En Vercel (Producción)

```env
NEXT_PUBLIC_SITE_URL="https://pedroalmagro.com"
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-HMCWN2XT3"
NEXT_PUBLIC_CONTACT_EMAIL="info@pedroalmagro.com"
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="tu-codigo"
```

---

## 🔍 Troubleshooting

### Analytics no funciona

✅ **Verificar**:
1. Variable añadida correctamente en Vercel
2. Redespliegue después de añadir variable
3. ID correcto: `G-HMCWN2XT3`
4. Navegador sin bloqueador de anuncios
5. Esperar 24-48h para datos completos

### Warning de metadataBase

✅ **Solución**:
1. Añadir `NEXT_PUBLIC_SITE_URL` en Vercel
2. Redesplegar
3. El warning solo aparece en localhost si no está configurado

### Imágenes OG no se ven

✅ **Verificar**:
1. `NEXT_PUBLIC_SITE_URL` configurado
2. Archivo `/public/og-image.jpg` existe
3. Tamaño correcto: 1200x630px
4. Probar con: https://www.opengraph.xyz/

---

## 📚 Recursos

- **Vercel Docs**: https://vercel.com/docs/concepts/projects/environment-variables
- **Google Analytics**: https://analytics.google.com
- **Search Console**: https://search.google.com/search-console
- **OG Image Tester**: https://www.opengraph.xyz/

---

## 🎉 Checklist Final

- [ ] Variables añadidas en Vercel
- [ ] Redesplegar proyecto
- [ ] Verificar Analytics funciona
- [ ] Verificar Search Console
- [ ] Probar imágenes OG
- [ ] Comprobar no hay warnings

**¡Todo listo para producción! 🚀**
