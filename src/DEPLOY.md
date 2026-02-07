# 🚀 Guida al Deployment

Questa guida ti aiuterà a deployare il portfolio di Francesco Salvatori su Vercel e GitHub.

## 📋 Prerequisiti

- Account GitHub
- Account Vercel (gratuito)
- Git installato sul tuo computer
- Node.js >= 18.0.0

## 🔧 Preparazione del Progetto

### 1. Verifica Build Locale

Prima di deployare, assicurati che il progetto compili correttamente:

```bash
# Installa le dipendenze
npm install

# Testa il build
npm run build

# Verifica che la cartella dist sia stata creata
ls dist/
```

Se il build ha successo, sei pronto per il deployment!

## 📤 Deployment su GitHub

### Passo 1: Crea un Repository GitHub

1. Vai su [github.com](https://github.com)
2. Clicca su "New repository"
3. Nome repository: `francesco-salvatori-portfolio`
4. Scegli pubblico o privato
5. **NON** inizializzare con README (è già presente)
6. Clicca "Create repository"

### Passo 2: Collega il Progetto Locale a GitHub

```bash
# Inizializza git (se non già fatto)
git init

# Aggiungi tutti i file
git add .

# Fai il primo commit
git commit -m "Initial commit - Portfolio Francesco Salvatori"

# Aggiungi il repository remoto (sostituisci USERNAME con il tuo username GitHub)
git remote add origin https://github.com/USERNAME/francesco-salvatori-portfolio.git

# Push sul branch main
git branch -M main
git push -u origin main
```

✅ Il tuo codice è ora su GitHub!

## 🌐 Deployment su Vercel

### Metodo 1: Import da GitHub (Consigliato)

1. Vai su [vercel.com](https://vercel.com)
2. Fai login con GitHub
3. Clicca "Add New Project"
4. Seleziona il repository `francesco-salvatori-portfolio`
5. Vercel rileverà automaticamente:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Clicca "Deploy"
7. Attendi 1-2 minuti

✅ Il portfolio è ora live su Vercel!

### Metodo 2: Vercel CLI

```bash
# Installa Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Per produzione
vercel --prod
```

## 🔄 Aggiornamenti Futuri

Ogni volta che fai modifiche:

```bash
# Aggiungi le modifiche
git add .

# Commit
git commit -m "Descrizione delle modifiche"

# Push
git push origin main
```

Vercel rileverà automaticamente il push e farà il re-deploy!

## 🎨 Personalizzazione Domini

### Su Vercel:

1. Vai su Project Settings
2. Clicca su "Domains"
3. Aggiungi il tuo dominio personalizzato
4. Segui le istruzioni per configurare i DNS

## 📊 Monitoraggio

### Analytics Vercel

Vercel fornisce analytics gratuite:
- Visite alla pagina
- Performance metrics
- Web Vitals

Attivali in: Project Settings > Analytics

## 🐛 Troubleshooting

### Build fallisce su Vercel

```bash
# Verifica il build locale
npm run build

# Controlla che node_modules sia in .gitignore
cat .gitignore | grep node_modules
```

### Errore "Module not found"

```bash
# Pulisci cache e reinstalla
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Immagini non caricate

Verifica che:
- Le immagini siano nella cartella `/public/`
- I percorsi siano corretti (iniziano con `/`)
- Le immagini siano committate su Git

## 🔒 Variabili d'Ambiente (Opzionale)

Se in futuro aggiungi API keys:

1. Crea file `.env.local` (già in .gitignore)
2. Aggiungi le variabili:
   ```
   VITE_API_KEY=your_key_here
   ```
3. Su Vercel: Settings > Environment Variables

## ✅ Checklist Pre-Deployment

- [ ] Build locale funziona (`npm run build`)
- [ ] Nessun errore TypeScript
- [ ] Nessun errore ESLint
- [ ] Tutte le immagini sono committate
- [ ] .gitignore esclude node_modules e dist
- [ ] package.json ha tutte le dipendenze
- [ ] File di configurazione presenti:
  - [ ] vercel.json
  - [ ] vite.config.ts
  - [ ] tsconfig.json
  - [ ] .gitignore
  - [ ] .github/workflows/ci.yml

## 🎉 Successo!

Il tuo portfolio è ora live! Condividi il link:
- `https://francesco-salvatori-portfolio.vercel.app`
- O il tuo dominio personalizzato

## 📞 Supporto

Problemi? Controlla:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [GitHub Issues](https://github.com/USERNAME/francesco-salvatori-portfolio/issues)

---

Creato con ❤️ per Francesco Salvatori
