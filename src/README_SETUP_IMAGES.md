# 🖼️ Setup Immagini GitHub - Guida Completa

## 🎯 Problema

Il deploy Vercel fallisce con l'errore:
```
Could not load /vercel/path0/src/assets/947b1480....png
ENOENT: no such file or directory
```

**Causa:** Le immagini non sono nel repository Git. Gli import `figma:asset` sono placeholder virtuali che funzionano solo in Figma Make, non in production.

---

## ✅ Soluzione

Scaricare le 98 immagini PNG da GitHub e aggiornarle nel progetto.

---

## 🚀 Esecuzione Rapida

### Metodo 1: Tutto Automatico (RACCOMANDATO)

```bash
bash scripts/setup-images-complete.sh
```

**Questo fa TUTTO:**
1. ✅ Scarica 98 PNG da GitHub via API
2. ✅ Salva in `public/images/projects/`
3. ✅ Sostituisce `figma:asset/` → `/images/projects/`
4. ✅ Crea backup automatico
5. ✅ Verifica e report completo

**Tempo:** ~2-3 minuti

---

### Metodo 2: Step by Step

```bash
# 1. Scarica immagini
python3 scripts/download-real-images.py

# 2. Aggiorna import
python3 scripts/update-all-imports.py

# 3. Verifica
ls public/images/projects/*.png | wc -l
grep "figma:asset" components/ProjectDetail.tsx
```

---

### Metodo 3: Con npm

```bash
# Setup completo
npm run setup-complete

# Oppure separato
npm run download-real-images
npm run update-all-imports
```

---

## 📋 Prerequisiti

### Python 3 (per script automatici)

**Mac:**
```bash
brew install python3
```

**Linux:**
```bash
sudo apt install python3
```

**Windows:**
Scarica da https://www.python.org/downloads/

### Alternative se non hai Python

1. **Download manuale:**
   - Vai su: https://github.com/salvatori780-bit/imagesportfoliooo/tree/main/prog.%20figma
   - Scarica tutti i file `.png`
   - Copiaii in `public/images/projects/`
   - Esegui: `python3 scripts/update-all-imports.py` (questo script è semplice, puoi anche sostituire manualmente)

2. **Usa Node.js:**
   ```bash
   npm run setup-images
   ```

---

## 🔍 Cosa Fa Ogni Script

### 1. `download-real-images.py`

**Cosa fa:**
- Usa GitHub API per ottenere lista file PNG
- Scarica ogni PNG in `public/images/projects/`
- Mostra progress e statistiche
- Gestisce errori e retry

**Input:** GitHub repo URL (hardcoded)  
**Output:** 98 file PNG in `public/images/projects/`

**Esempio output:**
```
✅ Trovati 98 file PNG
⬇️  [1/98] 947b1480fd2c27cbe944c20974d59f6ee50e2436.png... ✅
⬇️  [2/98] 67c1d5df6152c1f7687ce984fd60aba6d269b04a.png... ✅
...
📊 File scaricati: 98/98
```

---

### 2. `update-all-imports.py`

**Cosa fa:**
- Legge `components/ProjectDetail.tsx`
- Trova tutti gli import `figma:asset/[hash].png`
- Sostituisce con `/images/projects/[hash].png`
- Verifica che le immagini esistano prima di sostituire
- Crea backup automatico

**Trasformazione:**

**PRIMA:**
```typescript
import img from 'figma:asset/947b1480fd2c27cbe944c20974d59f6ee50e2436.png';
```

**DOPO:**
```typescript
import img from '/images/projects/947b1480fd2c27cbe944c20974d59f6ee50e2436.png';
```

**Backup:** `components/ProjectDetail.tsx.backup`

---

### 3. `setup-images-complete.sh`

**Cosa fa:**
- Orchestra i due script precedenti
- Esegue verifiche pre/post
- Mostra report completo
- Suggerisce prossimi passi

**È lo script MASTER raccomandato.**

---

## 🧪 Test & Verifica

### 1. Test Locale

```bash
npm run dev
```

Apri http://localhost:3000 e verifica:
- ✅ Tutte le immagini si caricano
- ✅ Nessun placeholder grigio
- ✅ Nessun errore console (F12)
- ✅ Tutti i 6 progetti funzionano

### 2. Test Build Production

```bash
npm run build
```

**Deve completare SENZA errori.**

Se vedi:
```
✓ built in 15s
```

Sei a posto! ✅

### 3. Preview Build

```bash
npm run preview
```

Testa la versione di production locale.

---

## 📦 Commit & Deploy

### 1. Verifica Modifiche

```bash
git status
```

Dovresti vedere:
- ✅ `public/images/projects/` (98 nuovi PNG)
- ✅ `components/ProjectDetail.tsx` (import aggiornati)

### 2. Add

```bash
git add public/images/projects/
git add components/ProjectDetail.tsx
```

**IMPORTANTE:** Assicurati che `public/images/projects/` sia incluso! Vercel ha bisogno di questi file.

### 3. Commit

```bash
git commit -m "feat: Add real images from GitHub

- Downloaded 98 PNG images from GitHub repository
- Updated all import statements from figma:asset to /images/projects/
- Fixed Vercel build error: ENOENT image files
- Backup created: components/ProjectDetail.tsx.backup"
```

### 4. Push

```bash
git push origin main
```

### 5. Vercel Deploy

Vercel rileverà il push e avvierà il deploy automaticamente.

**Vai su:** https://vercel.com/dashboard

Dovresti vedere:
- 🟢 Building...
- 🟢 ✓ Build succeeded
- 🟢 Deployment ready

---

## 🎉 Risultato Finale

**PRIMA:**
```typescript
// Virtual asset (non funziona in production)
import img from 'figma:asset/947b1480...png';
```
- ❌ Vercel build fails
- ❌ Nessun file fisico

**DOPO:**
```typescript
// Real asset path
import img from '/images/projects/947b1480...png';
```
- ✅ Vercel build success
- ✅ 98 file PNG nel repo
- ✅ Portfolio con immagini reali

---

## 🛠️ Troubleshooting

### ❌ "Python not found"

**Soluzione A - Installa Python:**
```bash
brew install python3         # Mac
sudo apt install python3     # Linux
```

**Soluzione B - Download manuale:**
1. https://github.com/salvatori780-bit/imagesportfoliooo/tree/main/prog.%20figma
2. Scarica tutti i PNG
3. Copia in `public/images/projects/`
4. Esegui: `python3 scripts/update-all-imports.py`

---

### ❌ "GitHub API rate limit exceeded"

**Soluzione:**
- Aspetta 10-15 minuti
- Oppure scarica manualmente (vedi sopra)
- Oppure usa token GitHub (modifica script)

---

### ❌ "Script not executable"

```bash
chmod +x scripts/setup-images-complete.sh
chmod +x scripts/download-real-images.py
chmod +x scripts/update-all-imports.py
```

Oppure esegui:
```bash
bash scripts/make-executable.sh
```

---

### ❌ Build ancora fallisce dopo push

**Verifica checklist:**

```bash
# 1. Immagini nel repo?
ls public/images/projects/*.png | wc -l
# Deve mostrare ~98

# 2. Import aggiornati?
grep "figma:asset" components/ProjectDetail.tsx
# Nessun output = ✅

# 3. File committati?
git status
# Nessun "untracked file" per public/images/projects/

# 4. Pushati?
git log --oneline -1
# Deve mostrare il tuo ultimo commit con "feat: Add real images"
```

**Se mancano file:**
```bash
git add public/images/projects/
git commit --amend --no-edit
git push -f origin main
```

---

### ❌ "Alcune immagini non si caricano"

**Verifica hash mismatch:**

```bash
# Estrai hash da import
grep "from '/images/projects/" components/ProjectDetail.tsx | head -5

# Verifica che esistano
ls public/images/projects/[hash].png
```

**Se mancano:**
- Riesegui download: `python3 scripts/download-real-images.py`
- Verifica nome file esatto su GitHub

---

## 📊 Struttura File Finale

```
progetto/
├── public/
│   └── images/
│       └── projects/              ← 98 PNG da GitHub
│           ├── 947b1480fd2c27cbe944c20974d59f6ee50e2436.png
│           ├── 67c1d5df6152c1f7687ce984fd60aba6d269b04a.png
│           ├── be62aec909ecd9c2a33f69d2435b5c78fb5287e3.png
│           └── ... (altre 95)
│
├── components/
│   ├── ProjectDetail.tsx          ← Import aggiornati
│   └── ProjectDetail.tsx.backup   ← Backup automatico
│
├── scripts/
│   ├── download-real-images.py       ← Scarica da GitHub
│   ├── update-all-imports.py         ← Aggiorna import
│   ├── setup-images-complete.sh      ← SCRIPT MASTER ⭐
│   ├── setup-github-images.sh        ← Alternativa bash
│   ├── replace-imports.sh            ← Tuo script originale
│   └── make-executable.sh            ← Rende eseguibili
│
├── ESEGUI_ORA.txt                 ← Quick start
├── README_SETUP_IMAGES.md         ← Questa guida
└── package.json                    ← Script npm aggiunti
```

---

## 📚 Script npm Disponibili

```json
{
  "download-real-images": "python3 scripts/download-real-images.py",
  "update-all-imports": "python3 scripts/update-all-imports.py",
  "setup-complete": "bash scripts/setup-images-complete.sh",
  "setup-images-bash": "bash scripts/setup-github-images.sh",
  "replace-imports": "bash scripts/replace-imports.sh"
}
```

---

## ⏱️ Timeline Completa

```
T+0:00  → Esegui: bash scripts/setup-images-complete.sh
T+0:10  → Download immagini inizia
T+2:00  → 98 PNG scaricate
T+2:05  → Import aggiornati
T+2:10  → Verifica completata
         ✅ Setup completo!

T+2:15  → npm run dev (test locale)
T+2:45  → Tutto funziona ✅

T+3:00  → npm run build
T+3:30  → Build success ✅

T+3:35  → git add + commit + push
T+4:00  → Vercel deploy inizia
T+6:30  → Deploy completato ✅

TOTALE: ~6-7 minuti dalla prima esecuzione al deploy live! 🚀
```

---

## 🎯 Checklist Finale

Prima di considerare il lavoro completo:

- [ ] Script eseguito senza errori
- [ ] 98 PNG in `public/images/projects/`
- [ ] Nessun `figma:asset` in `ProjectDetail.tsx`
- [ ] Backup creato (`ProjectDetail.tsx.backup`)
- [ ] `npm run dev` funziona
- [ ] Tutte le immagini visibili in browser
- [ ] Nessun errore console
- [ ] `npm run build` completa con successo
- [ ] `npm run preview` funziona
- [ ] File committati in Git
- [ ] Pushati su GitHub
- [ ] Vercel deploy completato
- [ ] Portfolio live con immagini reali! 🎉

---

## 📞 Quick Reference

```bash
# Setup completo (raccomandato)
bash scripts/setup-images-complete.sh

# Con npm
npm run setup-complete

# Step by step
python3 scripts/download-real-images.py
python3 scripts/update-all-imports.py

# Verifica
ls public/images/projects/*.png | wc -l
grep "figma:asset" components/ProjectDetail.tsx

# Test
npm run dev
npm run build

# Deploy
git add public/images/projects/ components/ProjectDetail.tsx
git commit -m "feat: Add real images from GitHub"
git push origin main
```

---

## 🙌 Credits

**Creato per risolvere:** Errore Vercel build - immagini mancanti  
**Soluzione:** Download automatico da GitHub + aggiornamento import  
**Tempo risparmio:** Da ~2 ore manuali a ~5 minuti automatici  
**Risultato:** Portfolio production-ready con 98 immagini reali! 🎨✨

---

## 🚀 ESEGUI ORA

```bash
bash scripts/setup-images-complete.sh
```

**Poi:**
```bash
npm run dev    # Test
npm run build  # Verifica
git push       # Deploy
```

**Fatto! 🎉**
