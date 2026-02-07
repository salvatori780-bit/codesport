#!/bin/bash

# 🔍 Deployment Verification Script
# Verifica che tutti i file necessari siano pronti per il deployment

echo "🔍 Verifica Deployment - Francesco Salvatori Portfolio"
echo "=================================================="
echo ""

# Colori per output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Funzione per check
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅${NC} $1 esiste"
        return 0
    else
        echo -e "${RED}❌${NC} $1 NON TROVATO"
        ((ERRORS++))
        return 1
    fi
}

# Funzione per check content
check_content() {
    if grep -q "$2" "$1" 2>/dev/null; then
        echo -e "${GREEN}✅${NC} $1 contiene '$2'"
        return 0
    else
        echo -e "${RED}❌${NC} $1 NON contiene '$2'"
        ((ERRORS++))
        return 1
    fi
}

# Funzione per check NOT content
check_not_content() {
    if ! grep -q "$2" "$1" 2>/dev/null; then
        echo -e "${GREEN}✅${NC} $1 non contiene '$2' (OK)"
        return 0
    else
        echo -e "${YELLOW}⚠️${NC} $1 contiene ancora '$2'"
        ((WARNINGS++))
        return 1
    fi
}

echo "📦 1. Verifica File Essenziali"
echo "================================"
check_file "package.json"
check_file "vite.config.ts"
check_file "vercel.json"
check_file ".npmrc"
check_file "tsconfig.json"
echo ""

echo "🔌 2. Verifica Plugin e Utilities"
echo "==================================="
check_file "plugins/figmaAssetPlugin.ts"
check_file "utils/placeholders.ts"
check_file "utils/imageStorage.ts"
echo ""

echo "🚫 3. Verifica File da NON Includere"
echo "======================================"
if [ -f "eslint.config.js" ]; then
    echo -e "${RED}❌${NC} eslint.config.js DEVE ESSERE ELIMINATO"
    ((ERRORS++))
else
    echo -e "${GREEN}✅${NC} eslint.config.js non esiste (OK)"
fi
echo ""

echo "📝 4. Verifica Contenuti package.json"
echo "======================================="
check_not_content "package.json" "eslint"
check_not_content "package.json" "@eslint"
check_content "package.json" "react"
check_content "package.json" "vite"
echo ""

echo "🔧 5. Verifica vite.config.ts"
echo "==============================="
check_content "vite.config.ts" "figmaAssetPlugin"
check_content "vite.config.ts" "tailwindcss"
check_content "vite.config.ts" "react"
echo ""

echo "⚙️ 6. Verifica vercel.json"
echo "============================"
check_content "vercel.json" "legacy-peer-deps"
check_content "vercel.json" "vite build"
echo ""

echo "📄 7. Verifica .npmrc"
echo "======================"
check_content ".npmrc" "legacy-peer-deps=true"
echo ""

echo "🎨 8. Verifica Componenti"
echo "=========================="
check_file "components/CVPage.tsx"
check_file "components/PortfolioPage.tsx"
check_file "components/ProjectDetail.tsx"
check_file "components/Navigation.tsx"
echo ""

echo "🖼️ 9. Verifica Import Placeholder"
echo "===================================="
check_content "components/CVPage.tsx" "PLACEHOLDERS"
check_content "components/PortfolioPage.tsx" "PLACEHOLDERS"
echo ""

echo ""
echo "=================================================="
echo "📊 RISULTATO FINALE"
echo "=================================================="

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✅ TUTTO OK! Progetto pronto per il deployment${NC}"
    echo ""
    echo "🚀 Prossimi passi:"
    echo "1. git add ."
    echo "2. git commit -m 'Fix: Complete deployment configuration'"
    echo "3. git push origin main"
    echo ""
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️ Warnings: $WARNINGS - Deployment dovrebbe funzionare${NC}"
    echo ""
    exit 0
else
    echo -e "${RED}❌ Errori trovati: $ERRORS${NC}"
    echo -e "${YELLOW}⚠️ Warnings: $WARNINGS${NC}"
    echo ""
    echo "Risolvi gli errori prima del deployment!"
    exit 1
fi
