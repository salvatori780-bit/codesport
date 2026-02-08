#!/usr/bin/env python3
"""
TROVA ED ELIMINA PNG - Script di emergenza
Trova TUTTI i PNG nel progetto e li elimina IMMEDIATAMENTE
"""

import os
import sys

print("╔═══════════════════════════════════════════════════════════╗")
print("║                                                           ║")
print("║   🔍 TROVA ED ELIMINA TUTTI I PNG - IMMEDIATO            ║")
print("║                                                           ║")
print("╚═══════════════════════════════════════════════════════════╝\n")

# File da preservare
PRESERVE = {'favicon.png', 'logo.png', 'icon.png', 'placeholder.png'}

# Directory da escludere
EXCLUDE = {'node_modules', '.git', 'dist', 'build', '.next', '.vercel'}

def find_all_png():
    """Trova TUTTI i PNG nel progetto"""
    found = []
    total_size = 0
    
    print("🔍 Scansione progetto...\n")
    
    for root, dirs, files in os.walk('.', topdown=True):
        # Filtra directory da escludere
        dirs[:] = [d for d in dirs if d not in EXCLUDE]
        
        # Mostra directory scansionata
        if root != '.':
            print(f"   📁 {root}")
        
        for file in files:
            if file.lower().endswith('.png') and file not in PRESERVE:
                filepath = os.path.join(root, file)
                try:
                    size = os.path.getsize(filepath)
                    found.append((filepath, size))
                    total_size += size
                except:
                    pass
    
    return found, total_size

# Cerca tutti i PNG
png_files, total_size = find_all_png()

print(f"\n{'='*60}")
print(f"📊 RISULTATO SCANSIONE")
print(f"{'='*60}\n")

if len(png_files) == 0:
    print("✅ NESSUN PNG TROVATO!")
    print("   Il progetto è già pulito.\n")
    sys.exit(0)

print(f"🗑️  Trovati {len(png_files)} file PNG")
print(f"💾 Peso totale: {total_size / 1024 / 1024:.2f} MB\n")

# Mostra tutti i file (non solo i primi)
print(f"📋 FILE DA ELIMINARE:\n")
for filepath, size in png_files:
    size_mb = size / 1024 / 1024
    if size_mb > 1:
        print(f"   🗑️  {filepath:<50} ({size_mb:.2f} MB) ⚠️")
    else:
        size_kb = size / 1024
        print(f"   🗑️  {filepath:<50} ({size_kb:.1f} KB)")

print(f"\n{'='*60}")
print(f"⚠️  ATTENZIONE!")
print(f"{'='*60}")
print(f"Stai per eliminare {len(png_files)} file PNG")
print(f"Spazio che verrà liberato: {total_size / 1024 / 1024:.2f} MB\n")

# Chiedi conferma
risposta = input("❓ Vuoi procedere? (scrivi 'SI' per confermare): ")

if risposta.strip().upper() != 'SI':
    print("\n❌ Operazione annullata.\n")
    sys.exit(0)

# ELIMINA!
print(f"\n🗑️  ELIMINAZIONE IN CORSO...\n")

deleted_count = 0
deleted_size = 0
errors = []

for filepath, size in png_files:
    try:
        os.remove(filepath)
        deleted_count += 1
        deleted_size += size
        print(f"✅ {filepath}")
    except Exception as e:
        errors.append((filepath, str(e)))
        print(f"❌ {filepath} - {e}")

print(f"\n{'='*60}")
print(f"✅ COMPLETATO!")
print(f"{'='*60}\n")

print(f"📊 RISULTATO:")
print(f"   ✅ File eliminati: {deleted_count}/{len(png_files)}")
print(f"   💾 Spazio liberato: {deleted_size / 1024 / 1024:.2f} MB")

if errors:
    print(f"\n⚠️  Errori: {len(errors)}")
    for filepath, error in errors:
        print(f"   - {filepath}: {error}")

print(f"\n╔═══════════════════════════════════════════════════════════╗")
print(f"║                                                           ║")
print(f"║   ✅ LIBERATI {deleted_size / 1024 / 1024:.1f} MB!                                    ║")
print(f"║                                                           ║")
print(f"╚═══════════════════════════════════════════════════════════╝\n")

# Verifica finale
remaining = []
for root, dirs, files in os.walk('.', topdown=True):
    dirs[:] = [d for d in dirs if d not in EXCLUDE]
    for file in files:
        if file.lower().endswith('.png') and file not in PRESERVE:
            remaining.append(os.path.join(root, file))

if remaining:
    print(f"⚠️  ATTENZIONE: Rimangono {len(remaining)} PNG:")
    for f in remaining[:10]:
        print(f"   - {f}")
else:
    print("✅ NESSUN PNG RIMANENTE!\n")

print("🚀 PROSSIMI PASSI:")
print("   python3 scripts/fix-project-detail.py")
print("   npm run build")
print("   git add . && git commit -m 'Remove all PNG assets' && git push\n")
