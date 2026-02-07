# 🖼️ GUIDA: Sostituzione Immagini da GitHub

## 📋 Obiettivo

Sostituire tutte le 98 immagini `figma:asset` nel progetto con le immagini reali presenti nel repository GitHub.

**Repository Immagini:** https://github.com/salvatori780-bit/imagesportfoliooo/tree/main/prog.%20figma

---

## ⚡ Metodo Automatico (RACCOMANDATO)

### Opzione 1: Setup Completo (1 comando)

```bash
npm run setup-images
```

Questo comando:
1. Scarica tutte le immagini PNG da GitHub
2. Le salva in `/public/images/projects/`
3. Aggiorna automaticamente tutti gli import in `ProjectDetail.tsx`
4. Crea un backup del file originale

### Opzione 2: Step-by-Step

Se preferisci controllo maggiore:

```bash
# 1. Scarica le immagini da GitHub
npm run download-images

# 2. Verifica le immagini scaricate
ls -lh public/images/projects/

# 3. Aggiorna gli import nel codice
npm run update-imports

# 4. Testa l'applicazione
npm run dev
```

---

## 🔍 Verifica Post-Installazione

### 1. Controlla le Immagini Scaricate

```bash
# Conta le immagini
ls public/images/projects/*.png | wc -l

# Dovrebbe mostrare il numero di immagini scaricate
```

### 2. Controlla gli Import Aggiornati

```bash
# Cerca import figma:asset rimasti
grep "figma:asset" components/ProjectDetail.tsx

# Se mostra risultati, alcuni import non sono stati aggiornati
# Se non mostra nulla, tutto è stato aggiornato! ✅
```

### 3. Testa l'Applicazione

```bash
npm run dev
```

Apri http://localhost:3000 e verifica:
- [ ] Tutte le immagini si caricano
- [ ] Nessun errore console
- [ ] Le immagini sono quelle corrette da GitHub

---

## 📂 Struttura File

```
├── public/
│   └── images/
│       └── projects/          ← Immagini scaricate qui
│           ├── [hash1].png
│           ├── [hash2].png
│           └── ...
├── components/
│   └── ProjectDetail.tsx      ← Import aggiornati qui
└── scripts/
    ├── download-github-images.js
    └── update-image-imports.js
```

---

## 🛠️ Metodo Manuale (Alternativo)

Se gli script automatici non funzionano, puoi farlo manualmente:

### Passo 1: Scarica Immagini Manualmente

1. Vai su: https://github.com/salvatori780-bit/imagesportfoliooo/tree/main/prog.%20figma
2. Per ogni immagine PNG:
   - Clicca sull'immagine
   - Clicca su "Download" (o tasto destro → Salva con nome)
   - Salvala in `public/images/projects/` nel tuo progetto
3. Mantieni i nomi file originali (gli hash)

### Passo 2: Clona Repository (Più Veloce)

```bash
# Clona il repository
cd /tmp
git clone https://github.com/salvatori780-bit/imagesportfoliooo.git

# Copia tutte le immagini
cp imagesportfoliooo/"prog. figma"/*.png /percorso/tuo/progetto/public/images/projects/

# Verifica
ls -l /percorso/tuo/progetto/public/images/projects/
```

### Passo 3: Aggiorna Import Manualmente

Apri `components/ProjectDetail.tsx` e sostituisci:

**Prima:**
```typescript
import image_947b1480fd2c27cbe944c20974d59f6ee50e2436 from 'figma:asset/947b1480fd2c27cbe944c20974d59f6ee50e2436.png';
```

**Dopo:**
```typescript
import image_947b1480fd2c27cbe944c20974d59f6ee50e2436 from '/images/projects/947b1480fd2c27cbe944c20974d59f6ee50e2436.png';
```

Ripeti per tutte le 98 immagini.

**💡 Tip:** Usa find & replace del tuo editor:
- Trova: `from 'figma:asset/`
- Sostituisci con: `from '/images/projects/`

---

## 🚨 Troubleshooting

### Problema: "404 Not Found" durante download

**Causa:** Repository privato o path errato

**Soluzione:**
1. Verifica che il repository sia pubblico
2. Controlla il percorso esatto su GitHub
3. Prova a clonare il repository manualmente (vedi metodo sopra)

### Problema: Script fallisce con errore permessi

**Causa:** Script non eseguibile

**Soluzione:**
```bash
chmod +x scripts/download-github-images.js
chmod +x scripts/update-image-imports.js
npm run setup-images
```

### Problema: Immagini non si caricano in dev

**Causa:** Path non corretto

**Soluzione:**
1. Verifica che le immagini siano in `public/images/projects/`
2. Verifica gli import: `from '/images/projects/[filename]'`
3. Riavvia dev server: `npm run dev`

### Problema: Alcune immagini non vengono sostituite

**Causa:** Mismatch tra nomi file

**Soluzione:**
1. Controlla i nomi file in GitHub
2. Controlla gli hash negli import
3. Assicurati che i nomi file corrispondano esattamente

---

## 📊 Corrispondenza Nomi File

Gli hash nei nomi file devono corrispondere a quelli negli import:

```typescript
// Import con hash
import img from 'figma:asset/947b1480fd2c27cbe944c20974d59f6ee50e2436.png';

// File su GitHub deve chiamarsi:
947b1480fd2c27cbe944c20974d59f6ee50e2436.png
```

Se i nomi non corrispondono:
1. Rinomina i file per matchare gli hash
2. Oppure aggiorna gli import per usare i nuovi nomi

---

## ✅ Checklist Finale

Dopo aver completato la sostituzione:

- [ ] 98 immagini scaricate in `public/images/projects/`
- [ ] Tutti gli import aggiornati (nessun `figma:asset` rimanente)
- [ ] Backup creato (`components/ProjectDetail.tsx.backup`)
- [ ] App testata con `npm run dev`
- [ ] Tutte le immagini si caricano correttamente
- [ ] Nessun errore console
- [ ] Build completa senza errori: `npm run build`

---

## 🎯 Prossimi Passi

Dopo aver verificato che tutto funziona:

```bash
# Commit delle modifiche
git add public/images/projects/
git add components/ProjectDetail.tsx
git add package.json
git add scripts/

git commit -m "feat: Replace figma:asset images with real GitHub images"

# Push su GitHub
git push origin main

# Vercel auto-deploya!
```

---

## 📝 Note Importanti

1. **Dimensioni File:** Le immagini reali saranno probabilmente più grandi dei placeholder. Monitora le performance.

2. **Build Size:** Il bundle finale sarà più grande. Considera:
   - Ottimizzazione immagini (compressione)
   - Lazy loading
   - Progressive loading

3. **Cache:** Dopo il deploy, gli utenti potrebbero vedere ancora i placeholder per qualche tempo (browser cache). Clear cache risolve.

4. **Backup:** Lo script crea automaticamente backup. Non eliminarli finché non sei sicuro che tutto funzioni!

---

## 🎉 Risultato Atteso

Dopo la sostituzione:
- ✅ Tutte le immagini reali visibili
- ✅ Nessun placeholder SVG
- ✅ Immagini da GitHub caricate
- ✅ Portfolio completo e funzionante

---

**COMANDO RAPIDO PER INIZIARE:**

```bash
npm run setup-images
```

**Tempo stimato: 2-5 minuti** ⚡
