#!/bin/bash

# Script para optimizar imágenes del proyecto
# Convierte JPG/PNG a WebP y AVIF para mejor rendimiento

echo "🖼️  Optimizando imágenes del proyecto..."

# Verificar si existe squoosh-cli
if ! command -v squoosh-cli &> /dev/null
then
    echo "⚠️  squoosh-cli no está instalado."
    echo "Instalando globalmente..."
    npm install -g @squoosh/cli
fi

# Crear directorio de salida si no existe
mkdir -p public/images/optimized

echo "🔄 Convirtiendo imágenes a WebP..."
squoosh-cli --webp '{"quality":85}' \
  --output-dir public/images/optimized \
  public/images/*.{jpg,jpeg,png} 2>/dev/null || true

echo "🔄 Convirtiendo imágenes a AVIF..."
squoosh-cli --avif '{"cqLevel":30}' \
  --output-dir public/images/optimized \
  public/images/*.{jpg,jpeg,png} 2>/dev/null || true

echo "✅ Optimización completada!"
echo "📊 Estadísticas:"
du -sh public/images/ public/images/optimized/ 2>/dev/null || echo "No se pudieron obtener estadísticas"

echo ""
echo "💡 Tip: Ahora actualiza tus componentes para usar las imágenes optimizadas"
echo "   Ejemplo: /images/optimized/foto.webp"
