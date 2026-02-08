#!/bin/bash

# Quick Start Script per Setup Immagini
# Esegui questo se vuoi una guida interattiva

clear

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║   🚀 QUICK START - SETUP IMMAGINI GITHUB                 ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""
echo "Questo script ti guiderà nel setup delle immagini."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎯 PROBLEMA"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Vercel build fallisce perché le immagini non sono nel repository."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ SOLUZIONE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Scaricare le 98 immagini PNG da GitHub e aggiornare gli import."
echo ""
echo "Tempo: ~2-3 minuti"
echo ""

read -p "Premi INVIO per continuare..."

clear

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║   📋 SCEGLI METODO                                        ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""
echo "1. 🚀 Automatico completo (raccomandato)"
echo "   → Scarica + Aggiorna + Verifica tutto automaticamente"
echo ""
echo "2. 📦 Step by step"
echo "   → Esegui ogni step manualmente con controllo"
echo ""
echo "3. 📚 Mostra documentazione"
echo "   → Leggi prima la guida completa"
echo ""
echo "4. ❌ Annulla"
echo ""

read -p "Scegli (1-4): " choice

case $choice in
    1)
        clear
        echo "╔═══════════════════════════════════════════════════════════╗"
        echo "║                                                           ║"
        echo "║   ⚡ SETUP AUTOMATICO                                     ║"
        echo "║                                                           ║"
        echo "╚═══════════════════════════════════════════════════════════╝"
        echo ""
        echo "Verrà eseguito:"
        echo "  bash scripts/setup-images-complete.sh"
        echo ""
        read -p "Confermi? (y/n): " confirm
        
        if [ "$confirm" = "y" ] || [ "$confirm" = "Y" ]; then
            echo ""
            bash scripts/setup-images-complete.sh
            
            echo ""
            echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
            echo "✅ SETUP COMPLETATO!"
            echo ""
            read -p "Vuoi testare l'app adesso? (y/n): " test
            
            if [ "$test" = "y" ] || [ "$test" = "Y" ]; then
                echo ""
                echo "Avvio dev server..."
                npm run dev
            else
                echo ""
                echo "Quando sei pronto, esegui: npm run dev"
            fi
        else
            echo ""
            echo "❌ Annullato"
        fi
        ;;
        
    2)
        clear
        echo "╔═══════════════════════════════════════════════════════════╗"
        echo "║                                                           ║"
        echo "║   📦 STEP BY STEP                                         ║"
        echo "║                                                           ║"
        echo "╚═══════════════════════════════════════════════════════════╝"
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "STEP 1/3: Download immagini"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        read -p "Eseguire download? (y/n): " step1
        
        if [ "$step1" = "y" ] || [ "$step1" = "Y" ]; then
            python3 scripts/download-real-images.py
        fi
        
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "STEP 2/3: Aggiorna import"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        read -p "Eseguire aggiornamento import? (y/n): " step2
        
        if [ "$step2" = "y" ] || [ "$step2" = "Y" ]; then
            python3 scripts/update-all-imports.py
        fi
        
        echo ""
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "STEP 3/3: Verifica"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        
        IMAGE_COUNT=$(find public/images/projects -name "*.png" 2>/dev/null | wc -l | tr -d ' ')
        echo "📦 Immagini: $IMAGE_COUNT"
        
        PROJECTS=$(grep -c "'/images/projects/" components/ProjectDetail.tsx || echo "0")
        echo "✅ Import aggiornati: $PROJECTS"
        
        FIGMA=$(grep -c "'figma:asset/" components/ProjectDetail.tsx || echo "0")
        echo "⚠️  figma:asset rimanenti: $FIGMA"
        
        echo ""
        if [ "$FIGMA" -eq 0 ]; then
            echo "🎉 TUTTO OK!"
            read -p "Testare app? (y/n): " test
            if [ "$test" = "y" ] || [ "$test" = "Y" ]; then
                npm run dev
            fi
        else
            echo "⚠️  Alcuni import non sono stati aggiornati"
        fi
        ;;
        
    3)
        clear
        echo "╔═══════════════════════════════════════════════════════════╗"
        echo "║                                                           ║"
        echo "║   📚 DOCUMENTAZIONE                                       ║"
        echo "║                                                           ║"
        echo "╚═══════════════════════════════════════════════════════════╝"
        echo ""
        echo "File disponibili:"
        echo ""
        echo "1. ESEGUI_ORA.txt"
        echo "   → Istruzioni rapide per iniziare"
        echo ""
        echo "2. README_SETUP_IMAGES.md"
        echo "   → Guida completa con tutti i dettagli"
        echo ""
        echo "3. SETUP_COMPLETO.md"
        echo "   → Documentazione tecnica del sistema"
        echo ""
        
        read -p "Quale file vuoi leggere? (1-3): " doc_choice
        
        case $doc_choice in
            1)
                cat ESEGUI_ORA.txt | less
                ;;
            2)
                cat README_SETUP_IMAGES.md | less
                ;;
            3)
                cat SETUP_COMPLETO.md | less
                ;;
        esac
        ;;
        
    4)
        echo ""
        echo "❌ Annullato"
        echo ""
        exit 0
        ;;
        
    *)
        echo ""
        echo "❌ Scelta non valida"
        echo ""
        exit 1
        ;;
esac

echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                                                           ║"
echo "║   ✅ FATTO!                                               ║"
echo "║                                                           ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""
echo "Prossimi passi:"
echo "1. npm run dev      → Testa locale"
echo "2. npm run build    → Verifica build"
echo "3. git add . && git commit && git push → Deploy"
echo ""
