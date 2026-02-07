# 🚀 Quick Start - Portfolio Francesco Salvatori

Guida rapida per iniziare in 5 minuti!

## ⚡ Setup Veloce

### 1. Installa Dipendenze

```bash
npm install
```

### 2. Avvia il Server di Sviluppo

```bash
npm run dev
```

Il sito sarà disponibile su: **http://localhost:3000**

## 🧪 Test Locale

```bash
# Build di produzione
npm run build

# Preview della build
npm run preview

# Lint del codice
npm run lint
```

## 🚀 Deploy su Vercel in 3 Step

### Step 1: Push su GitHub

```bash
git init
git add .
git commit -m "Initial commit - Portfolio Francesco Salvatori"
git remote add origin https://github.com/TUO-USERNAME/francesco-salvatori-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Importa su Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Fai login con GitHub
3. Click **"Add New Project"**
4. Seleziona il repository `francesco-salvatori-portfolio`
5. Click **"Deploy"**

### Step 3: Fatto! ✅

Vercel rileverà automaticamente:
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`

Il tuo portfolio sarà live in 1-2 minuti!

## 📁 Struttura Progetto

```
/
├── App.tsx              # App principale
├── components/          # Componenti React
│   ├── CVPage.tsx       # Pagina CV
│   └── PortfolioPage.tsx # Pagina progetti
├── styles/
│   └── globals.css      # Stili globali
├── public/              # File statici
├── utils/               # Utility functions
└── index.html           # HTML template
```

## 🎨 Features Principali

- ✅ **CV Download**: Scarica CV come immagine
- ✅ **Portfolio Interattivo**: 6 progetti fashion
- ✅ **Multilingual**: Italiano/Inglese
- ✅ **Image Upload**: Carica tue immagini (IndexedDB)
- ✅ **Responsive**: Mobile, Tablet, Desktop

## 🔧 Comandi Utili

```bash
# Sviluppo
npm run dev          # Avvia dev server

# Build
npm run build        # Build produzione
npm run preview      # Preview build locale

# Quality
npm run lint         # Check codice con ESLint

# Verifica
bash verify-deployment.sh  # Verifica pre-deployment
```

## 🌐 Environment Variables (Opzionale)

Se hai bisogno di API keys:

```bash
# Copia template
cp .env.example .env.local

# Modifica .env.local con tue keys
# NON committare .env.local!
```

## 📦 Tech Stack

- **React** 18.3.1
- **TypeScript** 5.7.3
- **Tailwind CSS** v4.1.0
- **Vite** 6.0.7
- **Motion** 11.15.0

## 🎯 URLs Importanti

- **Sviluppo**: http://localhost:3000
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Documentazione**: Vedi [README.md](./README.md)
- **Deployment Guide**: Vedi [DEPLOY.md](./DEPLOY.md)

## 🆘 Problemi Comuni

### Build fallisce?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port 3000 già in uso?
```bash
# Vite userà automaticamente la porta successiva disponibile
# Oppure modifica vite.config.ts
```

### Errori TypeScript?
```bash
# Check errori
npx tsc --noEmit
```

## ✅ Checklist Pre-Deployment

- [ ] `npm install` funziona
- [ ] `npm run build` funziona
- [ ] `npm run preview` mostra il sito correttamente
- [ ] Hai pushato su GitHub
- [ ] Hai collegato Vercel al repository

## 📚 Documentazione Completa

- [📖 README.md](./README.md) - Documentazione completa
- [🚀 DEPLOY.md](./DEPLOY.md) - Guida deployment dettagliata
- [✅ DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Checklist completa
- [📊 DEPLOYMENT_STATUS.md](./DEPLOYMENT_STATUS.md) - Status e configurazioni

## 💡 Tips

1. **Modifica Contenuti**: Aggiorna `CVPage.tsx` e `PortfolioPage.tsx`
2. **Cambia Stili**: Modifica `styles/globals.css`
3. **Aggiungi Progetti**: Edita `projectTranslations.ts`
4. **Custom Domain**: Configura in Vercel Dashboard → Settings → Domains

## 🎉 Fatto!

Il tuo portfolio è pronto! 

**Prossimo step**: Condividi il link del tuo portfolio! 🌟

---

Hai domandi? Controlla [README.md](./README.md) o [DEPLOY.md](./DEPLOY.md)

Buon deployment! 🚀
