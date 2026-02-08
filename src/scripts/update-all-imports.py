#!/usr/bin/env python3
"""
Script per sostituire TUTTI gli import figma:asset con /images/projects/
nel file ProjectDetail.tsx
"""

import os
import re
import shutil
from pathlib import Path

# Configurazione
COMPONENT_FILE = "components/ProjectDetail.tsx"
IMAGE_DIR = "public/images/projects"
BACKUP_SUFFIX = ".backup"

def create_backup(filepath):
    """Crea backup del file"""
    backup_path = filepath + BACKUP_SUFFIX
    shutil.copy2(filepath, backup_path)
    print(f"💾 Backup creato: {backup_path}\n")
    return backup_path

def get_available_images():
    """Ottiene la lista di hash delle immagini disponibili"""
    if not os.path.exists(IMAGE_DIR):
        print(f"❌ Directory {IMAGE_DIR} non trovata!")
        return set()
    
    images = set()
    for filename in os.listdir(IMAGE_DIR):
        if filename.endswith('.png'):
            hash_name = filename.replace('.png', '')
            images.add(hash_name)
    
    print(f"📦 Trovate {len(images)} immagini in {IMAGE_DIR}/\n")
    return images

def update_imports(filepath, available_hashes):
    """Aggiorna gli import nel file"""
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern per trovare import figma:asset
    pattern = r"from 'figma:asset/([a-f0-9]+)\.png'"
    
    # Trova tutti gli hash negli import
    matches = re.findall(pattern, content)
    total_imports = len(matches)
    
    print(f"🔍 Trovati {total_imports} import figma:asset\n")
    
    if total_imports == 0:
        print("ℹ️  Nessun import figma:asset trovato (potrebbero essere già stati sostituiti)")
        return 0, 0
    
    # Sostituisci gli import
    replaced_count = 0
    missing_images = []
    
    def replace_match(match):
        nonlocal replaced_count
        hash_value = match.group(1)
        
        if hash_value in available_hashes:
            replaced_count += 1
            return f"from '/images/projects/{hash_value}.png'"
        else:
            missing_images.append(hash_value)
            # Mantieni figma:asset se l'immagine non esiste
            return match.group(0)
    
    # Effettua sostituzione
    new_content = re.sub(pattern, replace_match, content)
    
    # Scrivi il file aggiornato
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return replaced_count, missing_images

def verify_result(filepath):
    """Verifica il risultato finale"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    figma_count = content.count("'figma:asset/")
    projects_count = content.count("'/images/projects/")
    
    return figma_count, projects_count

def main():
    print("╔═══════════════════════════════════════════════════════╗")
    print("║                                                       ║")
    print("║   🔄 AGGIORNA IMPORT FIGMA:ASSET                      ║")
    print("║                                                       ║")
    print("╚═══════════════════════════════════════════════════════╝\n")
    
    # 1. Verifica file esiste
    if not os.path.exists(COMPONENT_FILE):
        print(f"❌ File non trovato: {COMPONENT_FILE}")
        return 1
    
    print(f"📄 File target: {COMPONENT_FILE}\n")
    
    # 2. Ottieni immagini disponibili
    available_hashes = get_available_images()
    
    if not available_hashes:
        print("⚠️  Nessuna immagine trovata!")
        print(f"   Esegui prima: python3 scripts/download-real-images.py\n")
        return 1
    
    # 3. Crea backup
    create_backup(COMPONENT_FILE)
    
    # 4. Aggiorna import
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print("🔄 Sostituzione import in corso...\n")
    
    replaced, missing = update_imports(COMPONENT_FILE, available_hashes)
    
    # 5. Verifica finale
    figma_remaining, projects_added = verify_result(COMPONENT_FILE)
    
    # 6. Report
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print("📊 RISULTATI:\n")
    print(f"   ✅ Import sostituiti: {replaced}")
    print(f"   📦 Import /images/projects/: {projects_added}")
    print(f"   ⚠️  Import figma:asset rimanenti: {figma_remaining}")
    
    if missing:
        print(f"\n   ⚠️  Immagini mancanti ({len(missing)}):")
        for hash_val in missing[:5]:
            print(f"      - {hash_val}.png")
        if len(missing) > 5:
            print(f"      ... e altre {len(missing) - 5}")
    
    print("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    
    if figma_remaining == 0:
        print("🎉 SUCCESSO! Tutti gli import sono stati aggiornati!\n")
        print("🚀 PROSSIMI PASSI:")
        print("   1. Testa: npm run dev")
        print("   2. Verifica build: npm run build")
        print("   3. Commit:")
        print("      git add components/ProjectDetail.tsx")
        print("      git add public/images/projects/")
        print("      git commit -m 'feat: Replace figma:asset with real images'")
        print("      git push")
    else:
        print(f"⚠️  Ancora {figma_remaining} import figma:asset da sostituire")
        print("   Assicurati che tutte le immagini siano state scaricate.")
    
    print()
    return 0

if __name__ == "__main__":
    exit(main())
