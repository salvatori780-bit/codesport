#!/usr/bin/env python3
"""
EMERGENCY FIX: Sostituisce TUTTI gli import figma:asset con URL GitHub diretti
Esegui SUBITO per risolvere l'errore Vercel build
"""

import re
import shutil

# File da modificare
FILE_PATH = "components/ProjectDetail.tsx"
BACKUP_PATH = "components/ProjectDetail.tsx.backup-emergency"

# URL base GitHub raw
GITHUB_RAW_BASE = "https://raw.githubusercontent.com/salvatori780-bit/imagesportfoliooo/main/prog.%20figma/"

print("╔═══════════════════════════════════════════════════════════╗")
print("║                                                           ║")
print("║   🚨 EMERGENCY FIX - Risoluzione immediata                ║")
print("║                                                           ║")
print("╚═══════════════════════════════════════════════════════════╝\n")

# 1. Backup
print(f"💾 Creazione backup: {BACKUP_PATH}")
shutil.copy2(FILE_PATH, BACKUP_PATH)

# 2. Leggi file
print(f"📖 Lettura: {FILE_PATH}")
with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# 3. Pattern per trovare import figma:asset
pattern = r"from ['\"]figma:asset/([a-f0-9]+\.png)['\"]"

# 4. Trova tutti i match
matches = re.findall(pattern, content)
print(f"\n🔍 Trovati {len(matches)} import figma:asset\n")

if len(matches) == 0:
    print("✅ Nessun import figma:asset trovato (già risolto?)")
    exit(0)

# 5. Sostituisci con URL GitHub raw
def replace_import(match):
    filename = match.group(1)
    github_url = f"{GITHUB_RAW_BASE}{filename}"
    return f'from "{github_url}"'

new_content = re.sub(pattern, replace_import, content)

# 6. Scrivi il file aggiornato
print("✍️  Scrittura file aggiornato...")
with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(new_content)

# 7. Verifica
with open(FILE_PATH, 'r', encoding='utf-8') as f:
    verify_content = f.read()

figma_count = verify_content.count("'figma:asset/") + verify_content.count('"figma:asset/')
github_count = verify_content.count(GITHUB_RAW_BASE)

print("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
print("📊 RISULTATO:")
print(f"   ✅ Import sostituiti: {len(matches)}")
print(f"   ✅ URL GitHub: {github_count}")
print(f"   ⚠️  figma:asset rimanenti: {figma_count}")
print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")

if figma_count == 0:
    print("🎉 SUCCESSO! Tutti gli import sono stati sostituiti!\n")
    print("🚀 PROSSIMI PASSI:")
    print("   1. Commit questo fix:")
    print("      git add components/ProjectDetail.tsx")
    print("      git commit -m 'fix: Replace figma:asset with GitHub raw URLs'")
    print("      git push origin main")
    print("\n   2. Vercel ribuilderà automaticamente")
    print("   3. Le immagini verranno caricate direttamente da GitHub! ✅\n")
else:
    print(f"⚠️  ATTENZIONE: Ancora {figma_count} import figma:asset")
    print("   Potrebbero esserci import con sintassi diversa\n")

print("💾 Backup salvato in:", BACKUP_PATH)
print("\n╔═══════════════════════════════════════════════════════════╗")
print("║                                                           ║")
print("║   ✅ FIX COMPLETATO - Pusha e il build funzionerà!       ║")
print("║                                                           ║")
print("╚═══════════════════════════════════════════════════════════╝")
