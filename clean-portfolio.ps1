# Script para limpiar archivos innecesarios del portfolio
# ⚠️ EJECUTAR DESDE LA RAÍZ DEL PROYECTO

Write-Host "🔍 Archivos/carpetas a ELIMINAR para portfolio profesional:" -ForegroundColor Yellow
Write-Host ""

# Lista de archivos a eliminar
$filesToDelete = @(
    # Componentes de secciones innecesarias
    "src/components/home/EducationSection.vue",
    "src/components/home/HackathonSection.vue",
    "src/components/home/AwardsSection.vue",
    "src/components/home/CvDownloadSection.vue",
    
    # Vistas innecesarias
    "src/views/RecommendationLetterView.vue",
    "src/views/DashboardView.vue",
    
    # Data files innecesarios
    "src/data/education.js"
)

# Mostrar archivos que se eliminarán
foreach ($file in $filesToDelete) {
    if (Test-Path $file) {
        Write-Host "  ❌ $file" -ForegroundColor Red
    } else {
        Write-Host "  ⚠️  $file (no existe)" -ForegroundColor DarkGray
    }
}

Write-Host ""
Write-Host "⚠️  TAMBIÉN deberás EDITAR MANUALMENTE:" -ForegroundColor Cyan
Write-Host "  📝 src/views/HomeView.vue - Eliminar imports y componentes de las secciones borradas"
Write-Host "  📝 src/router/index.js - Eliminar rutas de RecommendationLetter y Dashboard"
Write-Host ""

# Pedir confirmación
$confirmation = Read-Host "¿Quieres ELIMINAR estos archivos? (escribe 'SI' para confirmar)"

if ($confirmation -eq "SI") {
    Write-Host ""
    Write-Host "🗑️  Eliminando archivos..." -ForegroundColor Green
    
    foreach ($file in $filesToDelete) {
        if (Test-Path $file) {
            Remove-Item $file -Force
            Write-Host "  ✅ Eliminado: $file" -ForegroundColor Green
        }
    }
    
    Write-Host ""
    Write-Host "✨ Limpieza completada!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 SIGUIENTES PASOS:" -ForegroundColor Yellow
    Write-Host "  1. Edita src/views/HomeView.vue manualmente"
    Write-Host "  2. Edita src/router/index.js manualmente"
    Write-Host "  3. Haz un commit: git add . && git commit -m 'chore: clean unnecessary sections'"
    Write-Host ""
    
} else {
    Write-Host ""
    Write-Host "❌ Operación cancelada. No se eliminó nada." -ForegroundColor Red
}