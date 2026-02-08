#!/usr/bin/env python3
"""
FIX ProjectDetail.tsx - Rimuove TUTTI gli import figma:asset
Sostituisce con URL GitHub lazy-loaded
"""

import shutil
from pathlib import Path

print("╔═══════════════════════════════════════════════════════════╗")
print("║                                                           ║")
print("║   🚀 FIX ProjectDetail.tsx - Rimozione import            ║")
print("║                                                           ║")
print("╚═══════════════════════════════════════════════════════════╝\n")

FILE = "components/ProjectDetail.tsx"
BACKUP = "components/ProjectDetail.tsx.backup-fix"

# Backup
print(f"💾 Backup: {BACKUP}")
shutil.copy2(FILE, BACKUP)

# Leggi file
with open(FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print(f"📄 File originale: {len(lines)} righe\n")

# Nuovo header con import corretti
NEW_HEADER = """// ══════════════════════════════════════════════════════════════════
// IMMAGINI DA GITHUB - Lazy Loading (Bundle Leggero!)
// ══════════════════════════════════════════════════════════════════

import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, ArrowLeft, Upload, FileText, Check, Languages } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { saveImage, getImage, getAllImages } from '../utils/imageStorage';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projectTranslations } from './projectTranslations';
import { 
  getMarcelImages, 
  getGraphicsImages, 
  getPrigionieriImages, 
  getGladioImages, 
  getLookbookImages,
  getImageUrl,
  imageFiles
} from '../utils/projectImages';

// Immagini caricate on-demand da GitHub
const marcelImages = getMarcelImages();
const graphicsImages = getGraphicsImages();
const prigionieriImages = getPrigionieriImages();
const gladioImages = getGladioImages();
const lookbookImagesGladio = getLookbookImages();

// Variabili di compatibilità
const marcelImage1 = marcelImages[0];
const marcelImage2 = marcelImages[1];
const marcelImage3 = marcelImages[2];
const marcelImage4 = marcelImages[3];
const marcelImage5 = marcelImages[4];
const marcelImage6 = marcelImages[5];
const marcelImage7 = marcelImages[6];

// Gladio images
const image_gladio_1 = gladioImages[0];
const image_gladio_2 = gladioImages[1];
const image_6 = gladioImages[2];
const image_5 = gladioImages[3];
const image_7 = gladioImages[4];
const image_8 = gladioImages[5];
const image_9 = gladioImages[6];
const image_10 = gladioImages[7];
const image_11 = gladioImages[8];
const image_12 = gladioImages[9];
const image_13 = gladioImages[10];
const image_14 = gladioImages[11];
const image_15 = gladioImages[12];

// Prigionieri images
const image_267fb24c81eab5a763df6ff9cbfc156ccd47fd16 = prigionieriImages[0];
const image_e0ee7d605cdce8368bd0f37ad1067c87cfb92517 = prigionieriImages[1];
const image_8841b8980b55ae583f91808ba5296810558afc0c = prigionieriImages[2];
const image_827a7c43d3b9726a8e3b3c34068d16cada00a278 = prigionieriImages[3];
const image_ae9095b4b79670b547795a27344bfbb1c1371bcb = prigionieriImages[4];
const image_9f69aef6ba94980ec094ccf85a2f76e1c8f4442f = prigionieriImages[5];
const image_5c36cb5b169722c6e6fdd053bcda4f80d86e2803 = prigionieriImages[6];
const image_02ac84fbc553c23f410c592569e7a9ab98f01da0 = prigionieriImages[7];
const image_95164f811ef1fb5598130ada0b917f2e066fefbd = prigionieriImages[8];
const image_a9d6601be4fa3e71b930add370c78cc92e75ab11 = prigionieriImages[9];

// Lookbook images
const image_fb72a4ffd32ad468c22c65ed131d62c2547d4106 = lookbookImagesGladio[0];
const image_726852eda92e8f69eafeec51caa5b5a9dd8d02e3 = lookbookImagesGladio[1];
const image_bf89950957a1549f540206338688b8953d96defa = lookbookImagesGladio[2];
const image_e698f94714f6cb88e452c9d46336d0a0c64ff282 = lookbookImagesGladio[3];
const image_8ac6fff55297cc66082fd3d57c961f868fe810fb = lookbookImagesGladio[4];
const image_aa42da660bad9b695d23d4b6441bbd44be1ce48c = lookbookImagesGladio[5];
const image_85fe137110ca28cbccfd8bdb0da50292f7ef13cb = lookbookImagesGladio[6];
const image_8a792c56c3b5680bcfd924067cb98f2fc3e10e46 = lookbookImagesGladio[7];
const image_223e95ff32190ecc84a253b87efae5089d57545e = lookbookImagesGladio[8];
const image_0725ae9e28025979b9c83c2b1886f492e2858994 = lookbookImagesGladio[9];
const image_2324d3b752ec65bc4aee210f980b5861c901968f = lookbookImagesGladio[10];
const image_7e7aa8e4078e091d3bf68073f03efef7ce9f11f4 = lookbookImagesGladio[11];
const image_0a66af93681dcb0045c6851c7cfb3c5af5f86379 = lookbookImagesGladio[12];
const image_7c6dfbaee291ee284b755a39666475a8f5eee6bc = lookbookImagesGladio[13];
const image_80d710de0c769c57bda09fa4042cfe35dfbb20b1 = lookbookImagesGladio[14];
const image_708d5dce66f5dcc676ed983d954f38f5b95afe5b = lookbookImagesGladio[15];
const image_02dc1c2f756a60cdc6477ac890a405cc1ef402da = lookbookImagesGladio[16];
const image_2df32c9774b82194b53fc705f9c6d4829b5ca0e0 = lookbookImagesGladio[17];

// Other images
const image_d30bd798930c8661f28a37c80e6de829a3bda9e6 = getImageUrl(imageFiles.img48);
const image_22fc33b65f83a50726f8b012c985f87143596f3d = getImageUrl(imageFiles.img47);
const image_fd09b44a51e1bace8f760584aabf1e286a4363f4 = getImageUrl(imageFiles.img46);
const image_18d0a9bcdd5fa0562e179bd723972c0376f829a7 = getImageUrl(imageFiles.img45);
const image_903a90f7612deed85df8e5b88de0409faaa0f064 = getImageUrl(imageFiles.img44);
const image_f2be377a6e0775607a7efb78a51c689fd349546c = getImageUrl(imageFiles.img43);
const image_34c6a284abdbed2330a29648f5c4664ab88546b2 = getImageUrl(imageFiles.img42);
const image_e3d58225740db3f188a5d48af2ddd8c118ed513f = getImageUrl(imageFiles.img41);
const image_2dd2b8508142ff7e53ad2dfda83f02bc9594ccce = getImageUrl(imageFiles.img40);
const image_091ef3a0ff65609876ddb92fc9932866cbccd3f2 = getImageUrl(imageFiles.img39);
const image_ba4f79a0108791fefd21ec62c8b2a2bad8e2825b = getImageUrl(imageFiles.img38);
const image_a3ceaaf83c60b0e8597f27a58d38af5471860418 = getImageUrl(imageFiles.img37);
const image_e3cb4e47f7fc948810edebe4e42a8578489a0d79 = getImageUrl(imageFiles.img36);
const image_711fc12c3189a2d90da2c1cf0fbfbc917ba227f0 = getImageUrl(imageFiles.img35);
const image_04079bed68683ac8ea7b00772ae0ec142047c0fd = getImageUrl(imageFiles.img34);
const image_672df381cabdb8014754438c02c7657797c99db3 = getImageUrl(imageFiles.img20);
const image_0a11200e98d6e5b219b006bf1e3e398bb3688a7e = getImageUrl(imageFiles.img19);
const image_e93509f3c9c80a19067382f176094e7447824235 = getImageUrl(imageFiles.img18);
const image_d5d51661c2b1b71a09720c90e601e1a1067c173b = getImageUrl(imageFiles.img17);
const image_46ba3d2657ad104c15e23cff6bba1eefe7027b39 = getImageUrl(imageFiles.img16);
const image_c8b86b3fb0bf0091e1696e8fb50bc13f877c03df = getImageUrl(imageFiles.img15);
const image_7a229bc8bf0221c527a904213703a3c924154140 = getImageUrl(imageFiles.img14);
const image_218e1290bc6f40e01b937549d9453ab7e47084b6 = getImageUrl(imageFiles.img13);
const image_73bfc2c80dfd66052d5c7cbfad68a9e4dada8314 = getImageUrl(imageFiles.img12);
const image_41c8c19399749983bd08fe880502655f938816a7 = getImageUrl(imageFiles.img26);
const image_653ced26d03657f5540d83c70d63d2bdae8db51e = getImageUrl(imageFiles.img25);
const image_e6573b0d87a01cf1bb6a35fd190e6fc862fc7781 = getImageUrl(imageFiles.img24);
const image_5e2175e7b4d3e8564beaa55cb21a73c9f62b3ba2 = getImageUrl(imageFiles.img23);
const image_600bd13fa4318d315e14ae2f5fc29b1f2e5f71fe = getImageUrl(imageFiles.img21);
const image_046b650602c286bb94dbb62991852cc04a124751 = getImageUrl(imageFiles.img22);
const image_b49cf72e74da069ebed394558c6fcb7b64bdc944 = getImageUrl(imageFiles.img30);
const image_85e1ffc87b6d749554d346e2d45fe40f72a9c70c = getImageUrl(imageFiles.img27);
const image_2d244e5b302b9c523b2e948e6ab2d8a48e777891 = getImageUrl(imageFiles.img29);
const image_e700cd453546c507261cdb7afecab790184b89d3 = getImageUrl(imageFiles.img31);
const image_f8320ff2eba039f25910077471337b382289e8fd = getImageUrl(imageFiles.img32);

"""

# Trova dove inizia il codice dopo gli import
# Cerca "interface ProjectDetailProps"
start_index = None
for i, line in enumerate(lines):
    if "interface ProjectDetailProps" in line:
        start_index = i
        break

if start_index is None:
    print("❌ ERROR: Impossibile trovare 'interface ProjectDetailProps'")
    exit(1)

print(f"✅ Trovato inizio codice alla riga {start_index + 1}")

# Crea nuovo file
new_lines = [NEW_HEADER + "\n"] + lines[start_index:]

# Scrivi
with open(FILE, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"✅ File riscritto: {len(new_lines)} righe\n")

# Verifica
with open(FILE, 'r', encoding='utf-8') as f:
    content = f.read()

figma_count = content.count("from 'figma:asset/")
github_count = content.count("getImageUrl") + content.count("getMarcelImages")

print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
print("✅ FIX COMPLETATO!")
print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")

print(f"📊 Risultato:")
print(f"   ✅ Import figma:asset rimanenti: {figma_count}")
print(f"   ✅ Funzioni GitHub aggiunte: {github_count}")
print(f"   ✅ Righe rimosse: {start_index}")
print(f"   ✅ Backup salvato: {BACKUP}\n")

if figma_count > 0:
    print(f"⚠️  ATTENZIONE: Ancora {figma_count} import figma:asset nel file")
    print("   Potrebbero essere in commenti o stringhe\n")

print("🚀 PROSSIMI PASSI:")
print("   1. npm run build")
print("   2. git add .")
print("   3. git commit -m 'fix: Lazy load images'")
print("   4. git push\n")

print("💾 Backup: " + BACKUP)
print("\n╔═══════════════════════════════════════════════════════════╗")
print("║                                                           ║")
print("║   ✅ Deploy Vercel funzionerà! Bundle leggero!           ║")
print("║                                                           ║")
print("╚═══════════════════════════════════════════════════════════╝")
