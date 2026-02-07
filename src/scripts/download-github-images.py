#!/usr/bin/env python3
"""
Script alternativo in Python per scaricare le immagini da GitHub
Utile se Node.js non funziona correttamente
"""

import os
import sys
import json
import urllib.request
import urllib.parse
from pathlib import Path

# Configurazione
GITHUB_REPO = "salvatori780-bit/imagesportfoliooo"
GITHUB_BRANCH = "main"
GITHUB_PATH = "prog. figma"
OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images" / "projects"

# URLs
GITHUB_API_URL = f"https://api.github.com/repos/{GITHUB_REPO}/contents/{urllib.parse.quote(GITHUB_PATH)}?ref={GITHUB_BRANCH}"
GITHUB_RAW_BASE = f"https://raw.githubusercontent.com/{GITHUB_REPO}/{GITHUB_BRANCH}/{urllib.parse.quote(GITHUB_PATH)}"

def print_header():
    print("🚀 GitHub Images Downloader (Python)")
    print("━" * 60)
    print()
    print(f"📦 Repository: {GITHUB_REPO}")
    print(f"🌿 Branch: {GITHUB_BRANCH}")
    print(f"📁 Path: {GITHUB_PATH}")
    print(f"💾 Output: {OUTPUT_DIR}")
    print()

def create_output_dir():
    """Crea directory output se non esiste"""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"✅ Directory ready: {OUTPUT_DIR}")
    print()

def get_file_list():
    """Ottieni lista file da GitHub API"""
    try:
        print("📡 Fetching file list from GitHub...")
        
        req = urllib.request.Request(GITHUB_API_URL)
        req.add_header('User-Agent', 'Python Script')
        
        with urllib.request.urlopen(req) as response:
            data = response.read()
            files = json.loads(data)
            return files
            
    except Exception as e:
        print(f"❌ Error fetching file list: {e}")
        return []

def download_file(url, output_path):
    """Scarica un file da URL"""
    try:
        urllib.request.urlretrieve(url, output_path)
        return True
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return False

def main():
    print_header()
    create_output_dir()
    
    # Ottieni lista file
    files = get_file_list()
    
    if not files:
        print("❌ Failed to fetch file list")
        print()
        print("💡 Troubleshooting:")
        print("   1. Check internet connection")
        print("   2. Verify repository is public")
        print("   3. Check the path is correct")
        sys.exit(1)
    
    # Filtra solo PNG
    image_files = [f for f in files if f.get('type') == 'file' and f['name'].lower().endswith('.png')]
    
    print(f"✅ Found {len(image_files)} PNG files")
    print()
    
    if not image_files:
        print("⚠️  No PNG files found")
        sys.exit(0)
    
    # Scarica ogni immagine
    downloaded = 0
    failed = 0
    
    for file_info in image_files:
        filename = file_info['name']
        download_url = file_info['download_url']
        output_path = OUTPUT_DIR / filename
        
        print(f"⬇️  Downloading: {filename}...")
        
        if download_file(download_url, output_path):
            downloaded += 1
            # Ottieni dimensione file
            size_kb = output_path.stat().st_size / 1024
            print(f"   ✅ Saved ({size_kb:.1f} KB)")
        else:
            failed += 1
    
    # Summary
    print()
    print("━" * 60)
    print("📊 Download Summary")
    print("━" * 60)
    print(f"✅ Downloaded: {downloaded} files")
    print(f"❌ Failed: {failed} files")
    print(f"📁 Location: {OUTPUT_DIR}")
    print()
    
    if downloaded > 0:
        print("🎉 Images downloaded successfully!")
        print()
        print("📝 Next steps:")
        print("   1. Review downloaded images")
        print("   2. Run: npm run update-imports")
        print("   3. Test: npm run dev")
        print()
    
    sys.exit(0 if failed == 0 else 1)

if __name__ == "__main__":
    main()
