#!/usr/bin/env node

/**
 * Script per scaricare le immagini dal repository GitHub
 * e sostituirle nel progetto
 * 
 * Repo: https://github.com/salvatori780-bit/imagesportfoliooo/tree/main/prog.%20figma
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configurazione
const GITHUB_REPO = 'salvatori780-bit/imagesportfoliooo';
const GITHUB_BRANCH = 'main';
const GITHUB_PATH = 'prog. figma'; // Nota lo spazio!
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'projects');

// API GitHub per ottenere la lista dei file
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/contents/${encodeURIComponent(GITHUB_PATH)}?ref=${GITHUB_BRANCH}`;

// URL raw per scaricare i file
const GITHUB_RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${encodeURIComponent(GITHUB_PATH)}`;

console.log('🚀 GitHub Images Downloader');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');
console.log(`📦 Repository: ${GITHUB_REPO}`);
console.log(`🌿 Branch: ${GITHUB_BRANCH}`);
console.log(`📁 Path: ${GITHUB_PATH}`);
console.log(`💾 Output: ${OUTPUT_DIR}`);
console.log('');

// Crea directory output se non esiste
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✅ Created directory: ${OUTPUT_DIR}`);
}

/**
 * Scarica un file da URL
 */
function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Segui redirect
        downloadFile(response.headers.location, outputPath)
          .then(resolve)
          .catch(reject);
      } else {
        fs.unlink(outputPath, () => {});
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });
}

/**
 * Ottieni lista file da GitHub
 */
function getFileList() {
  return new Promise((resolve, reject) => {
    https.get(GITHUB_API_URL, {
      headers: {
        'User-Agent': 'Node.js Script'
      }
    }, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        if (response.statusCode === 200) {
          try {
            const files = JSON.parse(data);
            resolve(files);
          } catch (err) {
            reject(new Error('Failed to parse GitHub API response'));
          }
        } else {
          reject(new Error(`GitHub API error: ${response.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('📡 Fetching file list from GitHub...');
    const files = await getFileList();
    
    // Filtra solo le immagini PNG
    const imageFiles = files.filter(file => 
      file.type === 'file' && 
      file.name.toLowerCase().endsWith('.png')
    );
    
    console.log(`✅ Found ${imageFiles.length} PNG files`);
    console.log('');
    
    if (imageFiles.length === 0) {
      console.log('⚠️  No PNG files found in the repository');
      return;
    }
    
    // Scarica ogni immagine
    let downloaded = 0;
    let failed = 0;
    
    for (const file of imageFiles) {
      const outputPath = path.join(OUTPUT_DIR, file.name);
      
      try {
        console.log(`⬇️  Downloading: ${file.name}...`);
        await downloadFile(file.download_url, outputPath);
        downloaded++;
        console.log(`   ✅ Saved to: ${outputPath}`);
      } catch (err) {
        failed++;
        console.log(`   ❌ Failed: ${err.message}`);
      }
    }
    
    console.log('');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 Download Summary');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`✅ Downloaded: ${downloaded} files`);
    console.log(`❌ Failed: ${failed} files`);
    console.log(`📁 Location: ${OUTPUT_DIR}`);
    console.log('');
    
    if (downloaded > 0) {
      console.log('🎉 Images downloaded successfully!');
      console.log('');
      console.log('📝 Next steps:');
      console.log('   1. Review downloaded images in: ' + OUTPUT_DIR);
      console.log('   2. Run: npm run update-image-imports');
      console.log('   3. Test the application');
    }
    
  } catch (err) {
    console.error('');
    console.error('❌ Error:', err.message);
    console.error('');
    console.error('💡 Troubleshooting:');
    console.error('   1. Check your internet connection');
    console.error('   2. Verify the GitHub repository is accessible');
    console.error('   3. Check the repository path: ' + GITHUB_PATH);
    process.exit(1);
  }
}

// Run
main();
