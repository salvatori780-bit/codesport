# Fashion Portfolio - Francesco Salvatori

[![CI](https://github.com/USERNAME/francesco-salvatori-portfolio/workflows/CI/badge.svg)](https://github.com/USERNAME/francesco-salvatori-portfolio/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

Un portfolio di moda interattivo minimalista con estetica editoriale, texture beige, fotografie in bianco e nero, e layout a doppia pagina come un magazine.

🌐 **[Live Demo](https://francesco-salvatori-portfolio.vercel.app)**

## ✨ Caratteristiche

- **CV Interattivo**: Pagina dedicata al CV con foto personale e pulsante "Download CV"
- **Sezione Portfolio**: Galleria progetti navigabile con animazioni fluide
- **Sistema di Traduzione**: Supporto completo EN/IT con language switcher minimale
- **Caricamento Immagini**: Sistema universale di caricamento con integrazione IndexedDB per salvataggio permanente
- **Design Minimalista**: Stile di carta naturale con texture sottili che simulano le fibre della carta
- **Responsive Design**: Ottimizzato per desktop, tablet e mobile
- **SEO Ottimizzato**: Meta tags e sitemap configurati

## 🚀 Tecnologie Utilizzate

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS v4.1.0
- **Animations**: Motion 11.15.0 (Framer Motion)
- **Build Tool**: Vite 6.0.7
- **Storage**: IndexedDB per la persistenza delle immagini
- **Export**: html2canvas per il download del CV
- **Icons**: Lucide React 0.469.0
- **Linting**: ESLint 9.17.0

## 📁 Struttura del Progetto

```
/
├── .github/
│   └── workflows/
│       ├── ci.yml              # GitHub Actions CI
│       └── deploy.yml          # GitHub Pages deployment (opzionale)
├── components/
│   ├── CVPage.tsx              # Pagina CV
│   ├── Navigation.tsx          # Navigazione
│   ├── PortfolioPage.tsx       # Pagina galleria progetti
│   ├── PortfolioSpread.tsx     # Layout doppia pagina
│   ├── ProjectDetail.tsx       # Dettaglio progetto
│   ├── projectTranslations.ts  # Traduzioni progetti
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/                     # Componenti UI
├── utils/
│   └── imageStorage.ts         # Utility per IndexedDB
├── styles/
│   └── globals.css             # Stili globali
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── App.tsx                     # Componente principale
├── main.tsx                    # Entry point
├── index.html                  # HTML template
├── vite.config.ts              # Configurazione Vite
├── vercel.json                 # Configurazione Vercel
├── tsconfig.json               # Configurazione TypeScript
├── eslint.config.js            # Configurazione ESLint
├── postcss.config.js           # Configurazione PostCSS
└── .gitignore                  # File ignorati da Git
```

## 🎨 Progetti Inclusi

1. **Gladio** - Collezione Menswear
2. **Prigionieri** - Progetto di Tesi
3. **Tabula Rasa** - IED x Albini 1876
4. **Akira** - Collezione Womenswear
5. **Marcel** - Progetto Graphic Design
6. **Prigionieri Print Design**

## 🛠️ Installazione e Sviluppo

### Prerequisiti

- Node.js >= 18.0.0
- npm o yarn

### Setup Locale

```bash
# Clona il repository
git clone https://github.com/USERNAME/francesco-salvatori-portfolio.git
cd francesco-salvatori-portfolio

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Il progetto sarà disponibile su http://localhost:3000
```

### Build Produzione

```bash
# Crea build di produzione
npm run build

# Preview della build
npm run preview
```

### Linting

```bash
# Esegui ESLint
npm run lint
```

## 🚀 Deployment

### Deployment su Vercel (Consigliato)

1. **Push su GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Importa su Vercel**:
   - Vai su [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Importa il repository GitHub
   - Vercel rileverà automaticamente la configurazione
   - Click "Deploy"

3. **Configurazione Automatica**:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Deployment su GitHub Pages (Opzionale)

1. Abilita GitHub Pages nel repository settings
2. Seleziona "GitHub Actions" come source
3. Ogni push su `main` triggerera il deployment automatico

### Deployment Continuo

Ogni push sul branch `main` triggerera:
- ✅ CI/CD pipeline (test e build)
- 🚀 Deployment automatico su Vercel
- 📦 Build artifacts su GitHub

## 📊 Monitoring e Analytics

### Vercel Analytics (Opzionale)

Attiva Vercel Analytics per monitorare:
- Traffico e visite
- Performance metrics
- Web Vitals (LCP, FID, CLS)
- Real User Monitoring

### Performance Optimization

Il progetto include:
- ✅ Code splitting automatico
- ✅ Lazy loading componenti
- ✅ Ottimizzazione bundle con Vite
- ✅ Cache headers per assets statici
- ✅ Preconnect per Google Fonts
- ✅ Sourcemaps disabilitati in produzione

## 🔒 Sicurezza

Headers di sicurezza configurati in `vercel.json`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`

## 🌍 SEO e Metadata

- ✅ Meta tags ottimizzati in `index.html`
- ✅ Sitemap XML in `/public/sitemap.xml`
- ✅ robots.txt configurato
- ✅ Favicon ottimizzato
- ✅ Open Graph tags (opzionale)

## 📄 Documentazione Aggiuntiva

- [📋 Deployment Guide](./DEPLOY.md) - Guida dettagliata al deployment
- [✅ Pre-Deployment Checklist](./DEPLOYMENT_CHECKLIST.md) - Checklist completa
- [📝 Changelog](./CHANGELOG.md) - Storia delle modifiche

## 🐛 Troubleshooting

### Build fallisce

```bash
# Pulisci e reinstalla
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Immagini non si caricano

- Verifica che le immagini siano committate su Git
- Controlla i percorsi delle immagini
- Verifica la console del browser per errori

### Errori TypeScript

```bash
# Verifica errori TypeScript
npx tsc --noEmit
```

## 🤝 Contribuire

Questo è un portfolio personale. Per suggerimenti o bug report, apri una issue.

## 📝 License

© 2025 Francesco Salvatori. All rights reserved.

Questo progetto è sotto licenza MIT - vedi il file [LICENSE](./LICENSE) per i dettagli.

## 👤 Autore

**Francesco Salvatori**
- Email: salvatori780@gmail.com
- LinkedIn: [francesco-salvatori-1a515036a](https://linkedin.com/in/francesco-salvatori-1a515036a/)
- Portfolio: [francesco-salvatori-portfolio.vercel.app](https://francesco-salvatori-portfolio.vercel.app)

---

Sviluppato con ❤️ da Francesco Salvatori | Powered by React, TypeScript, Tailwind CSS

