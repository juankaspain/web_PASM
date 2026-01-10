#!/bin/bash

# Script para analizar el tamaño del bundle

echo "📊 Analizando tamaño del bundle de Next.js..."
echo ""

echo "Compilando aplicación..."
ANALYZE=true npm run build

echo ""
echo "✅ Análisis completado!"
echo "El reporte se abrirá automáticamente en tu navegador."
echo ""
echo "💡 Tips para reducir el bundle:"
echo "  1. Usar lazy loading (dynamic imports)"
echo "  2. Remover dependencias no utilizadas"
echo "  3. Tree-shaking con imports específicos"
echo "  4. Code splitting por rutas"
