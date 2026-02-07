#!/usr/bin/env node

/**
 * Script per aggiornare gli import figma:asset con i percorsi reali
 * delle immagini scaricate da GitHub
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'projects');
const COMPONENT_FILE = path.join(__dirname, '..', 'components', 'ProjectDetail.tsx');

console.log('🔄 Update Image Imports');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

// Verifica che la directory immagini esista
if (!fs.existsSync(IMAGES_DIR)) {
  console.error('❌ Images directory not found:', IMAGES_DIR);
  console.error('');
  console.error('💡 Run this first: npm run download-images');
  process.exit(1);
}

// Leggi tutte le immagini
const imageFiles = fs.readdirSync(IMAGES_DIR)
  .filter(file => file.toLowerCase().endsWith('.png'));

console.log(`📁 Found ${imageFiles.length} images in ${IMAGES_DIR}`);
console.log('');

if (imageFiles.length === 0) {
  console.error('❌ No PNG images found');
  console.error('');
  console.error('💡 Run this first: npm run download-images');
  process.exit(1);
}

// Leggi il file componente
if (!fs.existsSync(COMPONENT_FILE)) {
  console.error('❌ Component file not found:', COMPONENT_FILE);
  process.exit(1);
}

let content = fs.readFileSync(COMPONENT_FILE, 'utf8');
const originalContent = content;

// Conta le sostituzioni
let replaced = 0;

// Per ogni immagine, sostituisci l'import figma:asset
imageFiles.forEach(imageName => {
  // Estrai l'hash dal nome file (es: 947b1480fd2c27cbe944c20974d59f6ee50e2436.png)
  const hash = imageName.replace('.png', '');
  
  // Pattern per trovare l'import figma:asset
  const figmaImportPattern = new RegExp(
    `import\\s+(\\w+)\\s+from\\s+['"]figma:asset/${hash}\\.png['"];?`,
    'g'
  );
  
  // Sostituisci con import da /public/images/projects
  const newImport = `import $1 from '/images/projects/${imageName}';`;
  
  const beforeReplace = content;
  content = content.replace(figmaImportPattern, newImport);
  
  if (content !== beforeReplace) {
    replaced++;
    console.log(`✅ ${imageName}`);
  }
});

console.log('');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`📊 Replaced ${replaced} imports`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

if (replaced === 0) {
  console.log('⚠️  No imports were replaced');
  console.log('');
  console.log('💡 Possible reasons:');
  console.log('   1. Image filenames don\'t match the hashes in imports');
  console.log('   2. Imports were already updated');
  console.log('   3. Wrong component file path');
} else {
  // Backup del file originale
  const backupFile = COMPONENT_FILE + '.backup';
  fs.writeFileSync(backupFile, originalContent, 'utf8');
  console.log(`💾 Backup created: ${backupFile}`);
  
  // Scrivi il file aggiornato
  fs.writeFileSync(COMPONENT_FILE, content, 'utf8');
  console.log(`✅ Updated: ${COMPONENT_FILE}`);
  console.log('');
  console.log('🎉 Image imports updated successfully!');
  console.log('');
  console.log('📝 Next steps:');
  console.log('   1. Test the application: npm run dev');
  console.log('   2. If everything works, commit changes');
  console.log('   3. If issues occur, restore: cp ' + backupFile + ' ' + COMPONENT_FILE);
}

console.log('');
