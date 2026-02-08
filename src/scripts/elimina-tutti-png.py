#!/usr/bin/env python3
"""
ELIMINA TUTTI I FILE PNG - Script aggressivo
Trova ed elimina TUTTI i file .png nel progetto (eccetto favicon/logo)
"""

import os
import sys
from pathlib import Path

print("╔═══════════════════════════════════════════════════════════╗")
print("║                                                           ║")
print("║   🗑️  ELIMINA TUTTI I FILE PNG DAL PROGETTO              ║")
print("║                                                           ║")
print("╚═══════════════════════════════════════════════════════════╝\n")

# File PNG da PRESERVARE (favicon, logo, etc.)
PRESERVE_FILES = {
    'favicon.png',
    'logo.png',
    'icon.png',
    'apple-touch-icon.png',
    'placeholder.png',
}

# Directory da ESCLUDERE dalla ricerca
EXCLUDE_DIRS = {
    'node_modules',
    '.git',
    '.next',
    '.vercel',
    'dist',
    'build',
    '.cache',
    '__pycache__',
}

def should_exclude_dir(dir_path):
    """Verifica se la directory deve essere esclusa"""
    parts = Path(dir_path).parts
    return any(excluded in parts for excluded in EXCLUDE_DIRS)

def should_preserve_file(filename):
    """Verifica se il file deve essere preservato"""
    return filename.lower() in PRESERVE_FILES

# Cerca tutti i file PNG nel progetto
print("🔍 Cerco tutti i file PNG nel progetto...")
print(f"📁 Directory root: {os.getcwd()}\n")

png_files = []
total_size = 0

for root, dirs, files in os.walk('.'):
    # Rimuovi directory da escludere
    dirs[:] = [d for d in dirs if not should_exclude_dir(os.path.join(root, d))]
    
    for file in files:
        if file.lower().endswith('.png'):
            filepath = os.path.join(root, file)
            
            # Salta file da preservare
            if should_preserve_file(file):
                print(f"✓ Preservo: {filepath} (file di sistema)")
                continue
            
            try:
                size = os.path.getsize(filepath)
                png_files.append((filepath, size))
                total_size += size
            except Exception as e:
                print(f"⚠️  Errore lettura: {filepath} - {e}")

print(f"\n📊 TROVATI {len(png_files)} FILE PNG")
print(f"💾 Peso totale: {total_size / 1024 / 1024:.2f} MB\n")

if len(png_files) == 0:
    print("╔═══════════════════════════════════════════════════════════╗")
    print("║                                                           ║")
    print("║   ✅ NESSUN FILE PNG DA ELIMINARE!                       ║")
    print("║                                                           ║")
    print("║   Il progetto è già pulito.                              ║")
    print("║   Le immagini sono caricate solo da GitHub.              ║")
    print("║                                                           ║")
    print("╚═══════════════════════════════════════════════════════════╝")
    sys.exit(0)

# Mostra i file trovati (max 20)
print("📋 FILE PNG TROVATI:\n")
for filepath, size in png_files[:20]:
    size_mb = size / 1024 / 1024
    print(f"   🗑️  {filepath:<60} ({size_mb:.2f} MB)")

if len(png_files) > 20:
    print(f"\n   ... e altri {len(png_files) - 20} file")

print("\n" + "━" * 60)
print(f"⚠️  ATTENZIONE: Stai per eliminare {len(png_files)} file PNG!")
print(f"💾 Spazio che verrà liberato: {total_size / 1024 / 1024:.2f} MB")
print("━" * 60 + "\n")

# Chiedi conferma
risposta = input("❓ Confermi l'eliminazione? (scrivi 'SI' per confermare): ")

if risposta.strip().upper() != 'SI':
    print("\n❌ Operazione annullata.")
    sys.exit(0)

# Elimina i file
print("\n🗑️  ELIMINAZIONE IN CORSO...\n")

deleted_count = 0
deleted_size = 0
errors = []

for filepath, size in png_files:
    try:
        os.remove(filepath)
        deleted_count += 1
        deleted_size += size
        print(f"✅ Eliminato: {filepath}")
    except Exception as e:
        errors.append((filepath, str(e)))
        print(f"❌ Errore: {filepath} - {e}")

print("\n" + "━" * 60)
print("✅ ELIMINAZIONE COMPLETATA!")
print("━" * 60 + "\n")

print(f"📊 RISULTATO:")
print(f"   ✅ File eliminati: {deleted_count}/{len(png_files)}")
print(f"   💾 Spazio liberato: {deleted_size / 1024 / 1024:.2f} MB")

if errors:
    print(f"\n⚠️  Errori: {len(errors)}")
    for filepath, error in errors[:10]:
        print(f"   - {filepath}: {error}")

print("\n" + "═" * 60)
print("╔═══════════════════════════════════════════════════════════╗")
print("║                                                           ║")
print(f"║   ✅ LIBERATI {deleted_size / 1024 / 1024:.1f} MB!                                    ║")
print("║                                                           ║")
print("║   Tutti i PNG sono stati eliminati.                      ║")
print("║   Le immagini ora sono caricate solo da GitHub!          ║")
print("║                                                           ║")
print("╚═══════════════════════════════════════════════════════════╝")

print("\n🚀 PROSSIMI PASSI:")
print("   1. python3 scripts/fix-project-detail.py")
print("   2. npm run build")
print("   3. git add . && git commit && git push\n")

print("💡 VERIFICA PESO PROGETTO:")
print("   du -sh . | grep -v node_modules")
print("   Dovrebbe essere < 50 MB\n")
