#!/bin/bash

# 🚀 QUICK DEPLOY SCRIPT
# Esegui questo script per deployare immediatamente

echo "🔍 Verifica file modificati..."
git status

echo ""
echo "📦 Aggiunta file modificati..."
git add .

echo ""
echo "💾 Commit..."
git commit -m "Fix: Complete deployment - output dir build, ESLint removed, figma plugin added"

echo ""
echo "🚀 Push su GitHub (trigger Vercel deploy)..."
git push origin main

echo ""
echo "✅ FATTO!"
echo ""
echo "📊 Vai su Vercel Dashboard per monitorare il deployment:"
echo "   https://vercel.com/dashboard"
echo ""
echo "⏱️  Il deployment completerà in ~60 secondi"
echo ""
echo "🎉 Il sito sarà LIVE!"
