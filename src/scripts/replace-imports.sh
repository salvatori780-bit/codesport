#!/bin/bash

# Script per sostituire in massa figma:asset con /images/projects/ 
# nel file ProjectDetail.tsx

FILE="components/ProjectDetail.tsx"

echo "🔄 Sostituendo figma:asset con /images/projects/ in ProjectDetail.tsx..."
echo ""

# Verifica che il file esista
if [ ! -f "$FILE" ]; then
    echo "❌ Errore: File $FILE non trovato!"
    exit 1
fi

# Conta quanti figma:asset ci sono prima
BEFORE=$(grep -c "figma:asset" "$FILE" || echo "0")
echo "📊 Import figma:asset trovati: $BEFORE"

# Usa sed per sostituire tutte le occorrenze
sed -i.backup "s|from 'figma:asset/|from '/images/projects/|g" "$FILE"

# Conta quanti /images/projects/ ci sono dopo
AFTER=$(grep -c "/images/projects/" "$FILE" || echo "0")

echo ""
echo "✅ Sostituzione completata!"
echo "💾 Backup creato: ${FILE}.backup"
echo ""
echo "📊 Risultati:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "   Import sostituiti: $AFTER"

# Verifica che non ci siano più figma:asset
REMAINING=$(grep -c "figma:asset" "$FILE" || echo "0")
if [ "$REMAINING" -eq 0 ]; then
    echo "   ✅ Nessun figma:asset rimanente!"
else
    echo "   ⚠️  Ancora $REMAINING figma:asset rimanenti"
fi

echo ""
echo "🎉 Fatto! Ora puoi testare con: npm run dev"