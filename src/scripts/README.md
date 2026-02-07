# Scripts Directory

Questa directory contiene script di utility per la gestione del progetto.

## 📜 Script Disponibili

### `download-github-images.js`

**Linguaggio:** Node.js  
**Scopo:** Scarica automaticamente tutte le immagini PNG dal repository GitHub

**Utilizzo:**
```bash
npm run download-images
# oppure
node scripts/download-github-images.js
```

**Cosa fa:**
1. Si connette all'API GitHub
2. Recupera la lista di file dalla cartella `prog. figma`
3. Filtra solo i file PNG
4. Scarica ogni immagine in `public/images/projects/`
5. Mostra progress e summary

**Output:**
- Directory: `public/images/projects/`
- Files: `[hash].png` (es: `947b1480fd2c27cbe944c20974d59f6ee50e2436.png`)

---

### `download-github-images.py`

**Linguaggio:** Python 3  
**Scopo:** Alternativa Python allo script Node.js

**Utilizzo:**
```bash
python3 scripts/download-github-images.py
```

**Quando usarlo:**
- Node.js non disponibile
- Problemi con npm
- Preferenza per Python

**Funzionalità identiche allo script Node.js**

---

### `update-image-imports.js`

**Linguaggio:** Node.js  
**Scopo:** Aggiorna automaticamente gli import `figma:asset` con path reali

**Utilizzo:**
```bash
npm run update-imports
# oppure
node scripts/update-image-imports.js
```

**Cosa fa:**
1. Legge tutte le immagini da `public/images/projects/`
2. Apre `components/ProjectDetail.tsx`
3. Trova tutti gli import `figma:asset/[hash].png`
4. Li sostituisce con `/images/projects/[hash].png`
5. Crea backup del file originale

**Output:**
- File aggiornato: `components/ProjectDetail.tsx`
- Backup: `components/ProjectDetail.tsx.backup`
- Log: Numero di import sostituiti

---

## 🚀 Comandi npm

Aggiunti a `package.json`:

```json
{
  "scripts": {
    "download-images": "node scripts/download-github-images.js",
    "update-imports": "node scripts/update-image-imports.js",
    "setup-images": "npm run download-images && npm run update-imports"
  }
}
```

### Comando Combinato

```bash
npm run setup-images
```

Esegue entrambi gli script in sequenza:
1. Download immagini da GitHub
2. Aggiornamento import

---

## 🔧 Configurazione

### Repository GitHub

Configurato in entrambi gli script:

```javascript
const GITHUB_REPO = 'salvatori780-bit/imagesportfoliooo';
const GITHUB_BRANCH = 'main';
const GITHUB_PATH = 'prog. figma'; // Nota lo spazio!
```

### Directory Output

```javascript
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'projects');
```

Path assoluto: `public/images/projects/`

---

## 📊 Flusso Completo

```
GitHub Repository
    │
    ├─ download-github-images.js
    │      │
    │      └─→ public/images/projects/*.png
    │              │
    │              └─→ update-image-imports.js
    │                     │
    │                     └─→ components/ProjectDetail.tsx
    │                            (figma:asset → /images/projects)
    │
    └─→ Immagini pronte per uso in app!
```

---

## ⚠️ Note Importanti

### Nomi File

I nomi file devono corrispondere agli hash negli import:

**Import:**
```typescript
import img from 'figma:asset/947b1480fd2c27cbe944c20974d59f6ee50e2436.png';
```

**File GitHub:**
```
947b1480fd2c27cbe944c20974d59f6ee50e2436.png
```

Se non corrispondono, lo script non potrà sostituire l'import.

### Backup

`update-image-imports.js` crea sempre un backup:
- `components/ProjectDetail.tsx.backup`

Per ripristinare:
```bash
cp components/ProjectDetail.tsx.backup components/ProjectDetail.tsx
```

### Permissions

Su Linux/Mac, potrebbe essere necessario rendere eseguibili gli script:

```bash
chmod +x scripts/download-github-images.js
chmod +x scripts/download-github-images.py
chmod +x scripts/update-image-imports.js
```

---

## 🐛 Troubleshooting

### Errore: Cannot find module

```bash
# Assicurati di essere nella root del progetto
cd /percorso/progetto
npm run setup-images
```

### Errore: Permission denied

```bash
chmod +x scripts/*.js
chmod +x scripts/*.py
```

### Errore: GitHub API rate limit

L'API GitHub ha limiti:
- 60 richieste/ora (non autenticato)
- 5000 richieste/ora (autenticato)

Se superi il limite, aspetta 1 ora o usa:
```bash
# Clona il repository invece
git clone https://github.com/salvatori780-bit/imagesportfoliooo.git
cp imagesportfoliooo/"prog. figma"/*.png public/images/projects/
```

---

## 📝 Manutenzione

### Aggiungere Nuove Immagini

Se vengono aggiunte immagini su GitHub:

```bash
# Re-run download
npm run download-images

# Le nuove immagini verranno scaricate
# Gli import esistenti non verranno toccati
```

### Modificare Repository Source

Edita `download-github-images.js` e `download-github-images.py`:

```javascript
const GITHUB_REPO = 'nuovo-owner/nuovo-repo';
const GITHUB_PATH = 'nuovo/percorso';
```

---

## ✅ Testing

Verifica che gli script funzionino:

```bash
# Test download
npm run download-images
ls public/images/projects/*.png | wc -l
# Dovrebbe mostrare numero di immagini

# Test import update
npm run update-imports
grep "figma:asset" components/ProjectDetail.tsx
# Nessun output = successo

# Test app
npm run dev
# Verifica che le immagini si carichino
```

---

## 🔐 Security

Gli script:
- ✅ Non richiedono autenticazione GitHub (repo pubblico)
- ✅ Non modificano file sensibili
- ✅ Creano backup prima di modificare
- ✅ Solo lettura API GitHub
- ✅ No npm packages esterni richiesti (solo Node.js built-in)

---

## 📚 Documentazione Correlata

- `REPLACE_IMAGES_GUIDE.md` - Guida completa sostituzione immagini
- `IMAGES_QUICK_START.txt` - Quick reference visual
- `package.json` - Script npm configurations

---

**Creato per:** Francesco Salvatori Portfolio  
**Repository:** https://github.com/salvatori780-bit/codesport  
**Immagini Source:** https://github.com/salvatori780-bit/imagesportfoliooo
