#!/usr/bin/env python3
"""
ELIMINA PNG AGGRESSIVO - Trova anche directory nascoste
Scansiona TUTTO il progetto incluse cartelle .hidden
"""

import os
import sys
from pathlib import Path

print("╔═══════════════════════════════════════════════════════════╗")
print("║                                                           ║")
print("║   🔥 ELIMINA PNG AGGRESSIVO - SCANSIONE TOTALE           ║")
print("║                                                           ║")
print("╚═══════════════════════════════════════════════════════════╝\n")

# File da preservare
PRESERVE = {'favicon.png', 'logo.png', 'icon.png', 'placeholder.png', 'apple-touch-icon.png'}

# Directory da SALTARE (troppo grandi/inutili)
SKIP_DIRS = {'node_modules', '.git'}

def scan_all_directories():
    """Scansiona TUTTE le directory, incluse quelle nascoste"""
    found_png = []
    total_size = 0
    scanned_dirs = 0
    
    print("🔍 SCANSIONE AGGRESSIVA IN CORSO...\n")
    print("   (incluse directory nascoste .hidden)\n")
    
    for root, dirs, files in os.walk('.', topdown=True):
        # Rimuovi solo le directory che DOBBIAMO saltare
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        
        scanned_dirs += 1
        
        # Mostra directory scandita (solo quelle interessanti)
        rel_path = os.path.relpath(root, '.')
        if rel_path != '.' and not any(skip in rel_path for skip in SKIP_DIRS):
            print(f"   📁 {rel_path}")
        
        # Cerca PNG
        for file in files:
            if file.lower().endswith('.png'):
                # Salta solo i file da preservare
                if file in PRESERVE:
                    print(f"      ✓ Preservato: {file}")
                    continue
                
                filepath = os.path.join(root, file)
                try:
                    size = os.path.getsize(filepath)
                    found_png.append((filepath, size, file))
                    total_size += size
                    
                    # Mostra immediatamente se è grande
                    if size > 1024 * 1024:  # > 1 MB
                        print(f"      🔥 TROVATO: {file} ({size / 1024 / 1024:.2f} MB)")
                except Exception as e:
                    print(f"      ⚠️  Errore: {file} - {e}")
    
    return found_png, total_size, scanned_dirs

# Scansiona
print("="*60)
png_files, total_size, scanned_dirs = scan_all_directories()
print(f"\n{'='*60}")

print(f"\n📊 RISULTATO SCANSIONE:")
print(f"   📁 Directory scansionate: {scanned_dirs}")
print(f"   🗑️  PNG trovati: {len(png_files)}")
print(f"   💾 Peso totale PNG: {total_size / 1024 / 1024:.2f} MB\n")

if len(png_files) == 0:
    print("╔═══════════════════════════════════════════════════════════╗")
    print("║                                                           ║")
    print("║   ✅ NESSUN PNG DA ELIMINARE!                            ║")
    print("║                                                           ║")
    print("║   Il progetto è completamente pulito.                    ║")
    print("║                                                           ║")
    print("╚═══════════════════════════════════════════════════════════╝\n")
    
    # Mostra peso progetto
    print("💡 VERIFICA PESO PROGETTO:")
    print("   du -sh --exclude=node_modules .")
    print("")
    sys.exit(0)

# Raggruppa per dimensione
large = [(f, s, n) for f, s, n in png_files if s > 1024 * 1024]  # > 1 MB
medium = [(f, s, n) for f, s, n in png_files if 100 * 1024 < s <= 1024 * 1024]  # 100KB - 1MB
small = [(f, s, n) for f, s, n in png_files if s <= 100 * 1024]  # < 100KB

print("📋 DETTAGLIO FILE:\n")

if large:
    print(f"🔥 FILE GRANDI (> 1 MB): {len(large)}")
    for filepath, size, name in large[:20]:
        print(f"   {filepath:<60} {size / 1024 / 1024:>7.2f} MB")
    if len(large) > 20:
        print(f"   ... e altri {len(large) - 20} file grandi")
    print()

if medium:
    print(f"📦 FILE MEDI (100KB - 1MB): {len(medium)}")
    for filepath, size, name in medium[:10]:
        print(f"   {filepath:<60} {size / 1024:>7.1f} KB")
    if len(medium) > 10:
        print(f"   ... e altri {len(medium) - 10} file medi")
    print()

if small:
    print(f"📄 FILE PICCOLI (< 100KB): {len(small)}")
    for filepath, size, name in small[:5]:
        print(f"   {filepath:<60} {size / 1024:>7.1f} KB")
    if len(small) > 5:
        print(f"   ... e altri {len(small) - 5} file piccoli")
    print()

print("="*60)
print(f"⚠️  ATTENZIONE!")
print("="*60)
print(f"Stai per eliminare {len(png_files)} file PNG")
print(f"Spazio totale: {total_size / 1024 / 1024:.2f} MB")
print()
print("File preservati:")
for p in PRESERVE:
    print(f"   ✓ {p}")
print()

# Chiedi conferma
risposta = input("❓ Confermi eliminazione di TUTTI i PNG? (scrivi 'SI'): ")

if risposta.strip().upper() != 'SI':
    print("\n❌ Operazione annullata.\n")
    sys.exit(0)

# ELIMINA!
print(f"\n🔥 ELIMINAZIONE IN CORSO...\n")

deleted_count = 0
deleted_size = 0
errors = []

for filepath, size, name in png_files:
    try:
        os.remove(filepath)
        deleted_count += 1
        deleted_size += size
        
        if size > 1024 * 1024:
            print(f"✅ {filepath} ({size / 1024 / 1024:.2f} MB)")
        else:
            print(f"✅ {filepath}")
            
    except Exception as e:
        errors.append((filepath, str(e)))
        print(f"❌ {filepath} - {e}")

print(f"\n{'='*60}")
print("✅ ELIMINAZIONE COMPLETATA!")
print(f"{'='*60}\n")

print(f"📊 RISULTATO FINALE:")
print(f"   ✅ File eliminati: {deleted_count}/{len(png_files)}")
print(f"   💾 Spazio liberato: {deleted_size / 1024 / 1024:.2f} MB")

if deleted_count < len(png_files):
    print(f"   ⚠️  Non eliminati: {len(png_files) - deleted_count}")

if errors:
    print(f"\n⚠️  ERRORI ({len(errors)}):")
    for filepath, error in errors:
        print(f"   - {filepath}")
        print(f"     {error}")

print(f"\n╔═══════════════════════════════════════════════════════════╗")
print(f"║                                                           ║")
print(f"║   🎉 LIBERATI {deleted_size / 1024 / 1024:.1f} MB!                                   ║")
print(f"║                                                           ║")
print(f"║   Progetto pulito e pronto per il deploy!                ║")
print(f"║                                                           ║")
print(f"╚═══════════════════════════════════════════════════════════╝\n")

# Verifica finale
print("🔍 VERIFICA FINALE...")
remaining = []
for root, dirs, files in os.walk('.', topdown=True):
    dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
    for file in files:
        if file.lower().endswith('.png') and file not in PRESERVE:
            remaining.append(os.path.join(root, file))

if remaining:
    print(f"⚠️  ATTENZIONE: Rimangono {len(remaining)} PNG!")
    for f in remaining[:20]:
        print(f"   - {f}")
else:
    print("✅ ZERO PNG RIMANENTI!\n")

print("🚀 PROSSIMI PASSI:")
print("   1. python3 scripts/fix-project-detail.py")
print("   2. npm run build")
print("   3. git add . && git commit -m 'Remove all PNG' && git push\n")

print("💡 O usa lo script completo:")
print("   bash PULIZIA_TOTALE.sh\n")
