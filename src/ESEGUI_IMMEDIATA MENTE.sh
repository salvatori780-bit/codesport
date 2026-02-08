#!/bin/bash

# Script IMMEDIATO per sostituire TUTTE le immagini
# Questo è il file da eseguire SUBITO

set -e

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║   🔥 SOSTITUZIONE IMMEDIATA - TUTTE LE IMMAGINI          ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""
echo "Questo script:"
echo "  1. Scarica TUTTE le 98 immagini PNG da GitHub"
echo "  2. Le salva in public/images/projects/"
echo "  3. Sostituisce TUTTI gli import figma:asset"
echo "  4. Crea backup automatico"
echo ""
echo "Repository: github.com/salvatori780-bit/imagesportfoliooo"
echo "Path: prog. figma/"
echo ""
read -p "Premi INVIO per iniziare..."

# Esegui lo script completo
python3 scripts/download-real-images.py && python3 scripts/update-all-imports.py

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ COMPLETATO!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Prossimi passi:"
echo ""
echo "1. Verifica immagini:"
echo "   ls public/images/projects/*.png | wc -l"
echo ""
echo "2. Test locale:"
echo "   npm run dev"
echo ""
echo "3. Build:"
echo "   npm run build"
echo ""
echo "4. Se tutto OK, commit:"
echo "   git add public/images/projects/ components/ProjectDetail.tsx"
echo "   git commit -m 'feat: Replace all figma:asset with real images from GitHub'"
echo "   git push origin main"
echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║   🎉 FATTO! Portfolio pronto con immagini reali!          ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"