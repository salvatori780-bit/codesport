#!/usr/bin/env python3
"""
Script per scaricare TUTTE le immagini PNG dal repository GitHub
e salvarle in public/images/projects/
"""

import os
import sys
import json
import urllib.request
import urllib.error
from pathlib import Path

# Configurazione
GITHUB_USER = "salvatori780-bit"
GITHUB_REPO = "imagesportfoliooo"
GITHUB_BRANCH = "main"
GITHUB_PATH = "prog. figma"  # Path con spazio
OUTPUT_DIR = "public/images/projects"

# GitHub API
API_URL = f"https://api.github.com/repos/{GITHUB_USER}/{GITHUB_REPO}/contents/{urllib.parse.quote(GITHUB_PATH)}?ref={GITHUB_BRANCH}"

def create_output_dir():
    """Crea la directory di output"""
    Path(OUTPUT_DIR).mkdir(parents=True, exist_ok=True)
    print(f"✅ Directory creata: {OUTPUT_DIR}\n")

def get_file_list():
    """Ottiene la lista di file PNG dal repository GitHub"""
    print("📡 Connessione a GitHub API...")
    print(f"   Repository: {GITHUB_USER}/{GITHUB_REPO}")
    print(f"   Branch: {GITHUB_BRANCH}")
    print(f"   Path: {GITHUB_PATH}\n")
    
    try:
        req = urllib.request.Request(API_URL)
        req.add_header('Accept', 'application/vnd.github.v3+json')
        
        with urllib.request.urlopen(req, timeout=30) as response:
            data = json.loads(response.read().decode())
            
        # Filtra solo i file PNG
        png_files = [
            item for item in data 
            if item['type'] == 'file' and item['name'].endswith('.png')
        ]
        
        print(f"✅ Trovati {len(png_files)} file PNG\n")
        return png_files
        
    except urllib.error.HTTPError as e:
        print(f"❌ Errore HTTP {e.code}: {e.reason}")
        print(f"   URL: {API_URL}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Errore: {e}")
        sys.exit(1)

def download_file(url, filename, index, total):
    """Scarica un singolo file"""
    output_path = os.path.join(OUTPUT_DIR, filename)
    
    # Salta se già esiste
    if os.path.exists(output_path):
        print(f"⏭️  [{index}/{total}] {filename} (già esistente)")
        return True
    
    try:
        print(f"⬇️  [{index}/{total}] {filename}...", end=' ', flush=True)
        urllib.request.urlretrieve(url, output_path)
        print("✅")
        return True
    except Exception as e:
        print(f"❌ Errore: {e}")
        return False

def main():
    print("╔════════════════════════════════════════════════════════╗")
    print("║                                                        ║")
    print("║   📥 DOWNLOAD IMMAGINI DA GITHUB                       ║")
    print("║                                                        ║")
    print("╚════════════════════════════════════════════════════════╝\n")
    
    # 1. Crea directory
    create_output_dir()
    
    # 2. Ottieni lista file
    files = get_file_list()
    
    if not files:
        print("❌ Nessun file PNG trovato!")
        sys.exit(1)
    
    # 3. Scarica ogni file
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print("📦 Download in corso...\n")
    
    success_count = 0
    total = len(files)
    
    for index, file_info in enumerate(files, 1):
        filename = file_info['name']
        download_url = file_info['download_url']
        
        if download_file(download_url, filename, index, total):
            success_count += 1
    
    # 4. Report finale
    print("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print("📊 REPORT FINALE\n")
    print(f"   File scaricati: {success_count}/{total}")
    print(f"   Directory: {OUTPUT_DIR}/")
    
    if success_count == total:
        print("\n✅ DOWNLOAD COMPLETATO CON SUCCESSO!")
    else:
        print(f"\n⚠️  {total - success_count} file non scaricati")
    
    # 5. Lista hash file scaricati
    print("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print("📋 HASH FILE SCARICATI:\n")
    
    downloaded_files = sorted(os.listdir(OUTPUT_DIR))
    for f in downloaded_files[:5]:  # Mostra primi 5
        hash_name = f.replace('.png', '')
        print(f"   {hash_name}")
    
    if len(downloaded_files) > 5:
        print(f"   ... e altri {len(downloaded_files) - 5} file")
    
    print("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print("🚀 PROSSIMI PASSI:\n")
    print("1. Verifica immagini:")
    print(f"   ls {OUTPUT_DIR}/*.png | wc -l\n")
    print("2. Aggiorna import:")
    print("   python3 scripts/update-all-imports.py\n")
    print("3. Testa:")
    print("   npm run dev\n")
    print("4. Commit:")
    print("   git add public/images/projects/")
    print("   git commit -m 'feat: Add real images from GitHub'")
    print("   git push\n")

if __name__ == "__main__":
    main()
