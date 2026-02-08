#!/bin/bash

# Script master per setup completo immagini da GitHub
# Scarica immagini e aggiorna import automaticamente

echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║   🖼️  SETUP IMMAGINI GITHUB - COMPLETO                    ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Configurazione
GITHUB_REPO="salvatori780-bit/imagesportfoliooo"
GITHUB_BRANCH="main"
GITHUB_PATH="prog. figma"
OUTPUT_DIR="public/images/projects"

# Verifica prerequisiti
echo "🔍 Verifica prerequisiti..."

# Check git
if ! command -v git &> /dev/null; then
    echo "⚠️  Git non trovato, userò curl per download"
    USE_GIT=false
else
    USE_GIT=true
fi

# Check curl o wget
if ! command -v curl &> /dev/null && ! command -v wget &> /dev/null; then
    echo "❌ Errore: né curl né wget sono installati!"
    exit 1
fi

echo "✅ Prerequisiti OK"
echo ""

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo "📦 STEP 1: Download immagini da GitHub"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Crea directory output
mkdir -p "$OUTPUT_DIR"
echo "✅ Directory creata: $OUTPUT_DIR"
echo ""

if [ "$USE_GIT" = true ]; then
    # Metodo 1: Git clone (più veloce e affidabile)
    echo "🔧 Usando Git per clonare repository..."
    TEMP_DIR=$(mktemp -d)
    
    echo "⬇️  Clonando repository..."
    if git clone --depth 1 --branch "$GITHUB_BRANCH" "https://github.com/$GITHUB_REPO.git" "$TEMP_DIR" &> /dev/null; then
        echo "✅ Repository clonato"
        
        # Copia immagini
        echo "📁 Copiando immagini PNG..."
        COPIED=0
        for img in "$TEMP_DIR/$GITHUB_PATH"/*.png; do
            if [ -f "$img" ]; then
                cp "$img" "$OUTPUT_DIR/"
                COPIED=$((COPIED + 1))
            fi
        done
        
        echo "✅ $COPIED immagini copiate"
        
        # Pulizia
        rm -rf "$TEMP_DIR"
        echo "🧹 Pulizia completata"
    else
        echo "❌ Errore durante il clone"
        exit 1
    fi
else
    # Metodo 2: Download manuale
    echo "⚠️  Git non disponibile, usa il metodo manuale:"
    echo ""
    echo "1. Vai su: https://github.com/$GITHUB_REPO/tree/$GITHUB_BRANCH/${GITHUB_PATH// /%20}"
    echo "2. Clicca su 'Code' → 'Download ZIP'"
    echo "3. Estrai il file ZIP"
    echo "4. Copia tutti i file .png nella cartella: $OUTPUT_DIR/"
    echo ""
    read -p "Premi INVIO quando hai completato il download manuale..."
fi

# Verifica immagini scaricate
IMAGE_COUNT=$(find "$OUTPUT_DIR" -name "*.png" 2>/dev/null | wc -l)
echo ""
echo "📊 Immagini PNG trovate: $IMAGE_COUNT"

if [ "$IMAGE_COUNT" -eq 0 ]; then
    echo "❌ Nessuna immagine trovata in $OUTPUT_DIR"
    echo ""
    echo "💡 Scarica manualmente da:"
    echo "   https://github.com/$GITHUB_REPO/tree/$GITHUB_BRANCH/${GITHUB_PATH// /%20}"
    exit 1
fi

echo ""

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo "🔄 STEP 2: Aggiorna import in ProjectDetail.tsx"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Esegui lo script di replace
bash scripts/replace-imports.sh

echo ""

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo "✅ STEP 3: Verifica finale"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Conta immagini
IMAGES=$(find "$OUTPUT_DIR" -name "*.png" | wc -l)
echo "📦 Immagini in public/images/projects/: $IMAGES"

# Verifica import
if [ -f "components/ProjectDetail.tsx" ]; then
    IMPORTS=$(grep -c "/images/projects/" "components/ProjectDetail.tsx" || echo "0")
    FIGMA_ASSETS=$(grep -c "figma:asset" "components/ProjectDetail.tsx" || echo "0")
    
    echo "📝 Import /images/projects/ in ProjectDetail.tsx: $IMPORTS"
    echo "⚠️  Import figma:asset rimanenti: $FIGMA_ASSETS"
    
    if [ "$FIGMA_ASSETS" -eq 0 ]; then
        echo ""
        echo "🎉 SUCCESSO! Tutti gli import sono stati aggiornati!"
    else
        echo ""
        echo "⚠️  Attenzione: ci sono ancora import figma:asset"
    fi
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 RIEPILOGO"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ Immagini scaricate: $IMAGES"
echo "✅ Import aggiornati: $IMPORTS"
echo "✅ Backup creato: components/ProjectDetail.tsx.backup"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 PROSSIMI PASSI"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Testa l'applicazione:"
echo "   npm run dev"
echo ""
echo "2. Verifica che tutte le immagini si carichino"
echo ""
echo "3. Se tutto OK, commit:"
echo "   git add ."
echo "   git commit -m \"feat: Add real images from GitHub\""
echo "   git push origin main"
echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║   ✅ SETUP COMPLETATO!                                     ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
