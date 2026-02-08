#!/bin/bash

# Script completo per setup immagini GitHub
# Scarica + Sostituisce + Verifica

set -e  # Exit on error

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║   🚀 SETUP COMPLETO IMMAGINI GITHUB                       ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo "📥 STEP 1/3: Download immagini da GitHub"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 non trovato!"
    echo "   Installalo o scarica manualmente da:"
    echo "   https://github.com/salvatori780-bit/imagesportfoliooo/tree/main/prog.%20figma"
    exit 1
fi

python3 scripts/download-real-images.py

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Errore durante il download!"
    echo ""
    echo "💡 DOWNLOAD MANUALE:"
    echo "   1. Vai su: https://github.com/salvatori780-bit/imagesportfoliooo"
    echo "   2. Naviga in: prog. figma/"
    echo "   3. Scarica tutti i file .png"
    echo "   4. Copiaii in: public/images/projects/"
    echo ""
    exit 1
fi

echo ""

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo "🔄 STEP 2/3: Aggiorna import in ProjectDetail.tsx"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

python3 scripts/update-all-imports.py

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Errore durante l'aggiornamento import!"
    exit 1
fi

echo ""

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo "✅ STEP 3/3: Verifica finale"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Conta immagini
IMAGE_COUNT=$(find public/images/projects -name "*.png" 2>/dev/null | wc -l | tr -d ' ')
echo "📦 Immagini PNG in public/images/projects/: $IMAGE_COUNT"

# Verifica import
if [ -f "components/ProjectDetail.tsx" ]; then
    PROJECTS_IMPORTS=$(grep -c "'/images/projects/" components/ProjectDetail.tsx || echo "0")
    FIGMA_IMPORTS=$(grep -c "'figma:asset/" components/ProjectDetail.tsx || echo "0")
    
    echo "📝 Import /images/projects/ in ProjectDetail.tsx: $PROJECTS_IMPORTS"
    echo "⚠️  Import figma:asset rimanenti: $FIGMA_IMPORTS"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ "$FIGMA_IMPORTS" -eq 0 ] && [ "$IMAGE_COUNT" -gt 0 ]; then
    echo "🎉 SUCCESSO COMPLETO!"
    echo ""
    echo "✅ $IMAGE_COUNT immagini scaricate"
    echo "✅ $PROJECTS_IMPORTS import aggiornati"
    echo "✅ Nessun figma:asset rimanente"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🚀 PROSSIMI PASSI:"
    echo ""
    echo "1. Testa l'applicazione:"
    echo "   npm run dev"
    echo ""
    echo "2. Verifica che tutte le immagini si caricano correttamente"
    echo ""
    echo "3. Build di test:"
    echo "   npm run build"
    echo "   npm run preview"
    echo ""
    echo "4. Se tutto OK, commit:"
    echo "   git add public/images/projects/"
    echo "   git add components/ProjectDetail.tsx"
    echo "   git commit -m 'feat: Add real images from GitHub'"
    echo "   git push origin main"
    echo ""
    echo "5. Vercel auto-deploya! 🎉"
else
    echo "⚠️  ATTENZIONE:"
    echo ""
    if [ "$IMAGE_COUNT" -eq 0 ]; then
        echo "   ❌ Nessuna immagine trovata in public/images/projects/"
    fi
    if [ "$FIGMA_IMPORTS" -gt 0 ]; then
        echo "   ⚠️  Ancora $FIGMA_IMPORTS import figma:asset"
    fi
    echo ""
    echo "   Verifica che il download sia completato correttamente."
fi

echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║   ✅ SETUP COMPLETATO                                     ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
