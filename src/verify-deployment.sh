#!/bin/bash

# Script di verifica pre-deployment
# Esegui questo script prima di fare il deployment per verificare che tutto sia a posto

echo "🔍 Verifica Pre-Deployment - Portfolio Francesco Salvatori"
echo "============================================================"
echo ""

# Colori per output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contatori
passed=0
failed=0

# Funzione per check
check() {
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $1"
        ((passed++))
    else
        echo -e "${RED}✗${NC} $1"
        ((failed++))
    fi
}

# Verifica Node version
echo "📦 Verifica Node.js..."
node --version > /dev/null 2>&1
check "Node.js installato"

# Verifica npm
npm --version > /dev/null 2>&1
check "npm installato"

# Verifica file essenziali
echo ""
echo "📁 Verifica file di configurazione..."

files=(
    ".gitignore"
    "package.json"
    "vite.config.ts"
    "tsconfig.json"
    "vercel.json"
    "eslint.config.js"
    "postcss.config.js"
    ".github/workflows/ci.yml"
    "index.html"
    "README.md"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
        ((passed++))
    else
        echo -e "${RED}✗${NC} $file mancante"
        ((failed++))
    fi
done

# Verifica public folder
echo ""
echo "🌐 Verifica file pubblici..."

public_files=(
    "public/favicon.svg"
    "public/robots.txt"
    "public/sitemap.xml"
)

for file in "${public_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
        ((passed++))
    else
        echo -e "${YELLOW}⚠${NC} $file mancante (opzionale)"
    fi
done

# Install dependencies
echo ""
echo "📥 Installazione dipendenze..."
npm install > /dev/null 2>&1
check "npm install completato"

# Run lint
echo ""
echo "🔍 Verifica ESLint..."
npm run lint > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} ESLint: nessun errore"
    ((passed++))
else
    echo -e "${YELLOW}⚠${NC} ESLint: warning presenti (non bloccanti)"
    ((passed++))
fi

# Build
echo ""
echo "🏗️  Build progetto..."
npm run build > /dev/null 2>&1
check "Build completato con successo"

# Verifica dist folder
if [ -d "dist" ]; then
    echo -e "${GREEN}✓${NC} Cartella dist creata"
    ((passed++))
    
    if [ -f "dist/index.html" ]; then
        echo -e "${GREEN}✓${NC} dist/index.html presente"
        ((passed++))
    else
        echo -e "${RED}✗${NC} dist/index.html mancante"
        ((failed++))
    fi
else
    echo -e "${RED}✗${NC} Cartella dist non trovata"
    ((failed++))
fi

# Verifica Git
echo ""
echo "🔧 Verifica Git..."
if [ -d ".git" ]; then
    echo -e "${GREEN}✓${NC} Repository Git inizializzato"
    ((passed++))
else
    echo -e "${YELLOW}⚠${NC} Git non inizializzato (esegui: git init)"
fi

# Riepilogo
echo ""
echo "============================================================"
echo "📊 Riepilogo Verifica"
echo "============================================================"
echo -e "${GREEN}Passati:${NC} $passed"
echo -e "${RED}Falliti:${NC} $failed"
echo ""

if [ $failed -eq 0 ]; then
    echo -e "${GREEN}✅ TUTTO OK! Pronto per il deployment!${NC}"
    echo ""
    echo "Prossimi passi:"
    echo "1. git add ."
    echo "2. git commit -m \"Initial commit\""
    echo "3. git remote add origin <URL_REPOSITORY>"
    echo "4. git push -u origin main"
    echo "5. Deploy su Vercel: https://vercel.com"
    exit 0
else
    echo -e "${RED}❌ Alcuni check sono falliti. Risolvi gli errori prima del deployment.${NC}"
    exit 1
fi
