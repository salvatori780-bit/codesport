# Quick Start Guide

## Installazione

1. **Installa le dipendenze**
   ```bash
   npm install
   ```

2. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```
   Il portfolio sarà disponibile su `http://localhost:3000`

3. **Build per produzione**
   ```bash
   npm run build
   ```

4. **Preview del build di produzione**
   ```bash
   npm run preview
   ```

## Struttura File

```
francesco-salvatori-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI
├── components/
│   ├── CVPage.tsx              # Pagina CV con download
│   ├── Navigation.tsx          # Navigazione principale
│   ├── PortfolioPage.tsx       # Galleria progetti
│   ├── ProjectDetail.tsx       # Modal dettaglio progetto
│   ├── projectTranslations.ts  # Traduzioni EN/IT
│   └── figma/
│       └── ImageWithFallback.tsx
├── public/
│   ├── favicon.svg             # Icona del sito (FS)
│   ├── robots.txt              # SEO
│   └── sitemap.xml             # SEO
├── styles/
│   └── globals.css             # Tailwind CSS v4 + stili globali
├── utils/
│   └── imageStorage.ts         # IndexedDB per immagini
├── App.tsx                     # Componente principale
├── main.tsx                    # Entry point
├── index.html                  # HTML template
├── package.json                # Dipendenze e scripts
├── vite.config.ts              # Configurazione Vite
├── tsconfig.json               # Configurazione TypeScript
├── vercel.json                 # Configurazione Vercel
├── eslint.config.js            # Configurazione ESLint
├── postcss.config.js           # Configurazione PostCSS
└── .gitignore                  # File da ignorare
```

## Funzionalità Principali

### 1. Pagina CV
- CV interattivo con sezioni: Background, Experience, Skills
- Download CV come immagine JPG con pulsante dedicato
- Foto profilo e firma
- Traduzioni EN/IT sincronizzate

### 2. Portfolio
- 6 progetti completi:
  1. Gladio (Menswear)
  2. Prigionieri (Thesis)
  3. Tabula Rasa (IED x Albini)
  4. Akira (Womenswear)
  5. Marcel (Graphic Design)
  6. Prigionieri Print Design
- Grid 3x2 con hover effects (grayscale → color)
- Modal full-screen per ogni progetto
- Lookbook integrati

### 3. Sistema di Traduzione
- Language switcher EN/IT in alto a destra
- Sincronizzazione automatica tra tutte le pagine
- Salvataggio preferenza in localStorage

### 4. Upload Immagini
- Sistema universale di upload per tutti i progetti
- Salvataggio permanente in IndexedDB
- Icona upload su ogni immagine sostituibile

### 5. Design
- Stile editoriale minimalista
- Texture carta con grain naturale
- Font Montserrat per tutto il portfolio
- Palette: beige, grigio, nero, bianco
- Animazioni fluide con Motion (Framer Motion)

## Tecnologie

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite 6** - Build tool veloce
- **Tailwind CSS v4** - Styling utility-first
- **Motion** - Animazioni fluide
- **IndexedDB** - Storage locale immagini
- **html2canvas** - Export CV come immagine
- **Lucide React** - Icone moderne

## Scripts NPM

```bash
npm run dev      # Sviluppo locale (porta 3000)
npm run build    # Build produzione
npm run preview  # Preview build locale
npm run lint     # Linting con ESLint
```

## Browser Support

- Chrome/Edge (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari (ultime 2 versioni)
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

Vedi `DEPLOYMENT_GUIDE.md` per istruzioni complete su:
- Push su GitHub
- Deploy su Vercel
- Configurazione dominio personalizzato
- Monitoraggio e analytics

## Personalizzazione

### Modificare Contenuti CV
Modifica `components/CVPage.tsx` - oggetto `translations`

### Aggiungere/Modificare Progetti
Modifica `components/projectTranslations.ts` e `components/ProjectDetail.tsx`

### Cambiare Colori
Modifica `styles/globals.css` - variabili CSS custom

### Aggiungere Font
Aggiungi link in `index.html` e usa in Tailwind

## Note Importanti

⚠️ **IndexedDB**: Le immagini caricate sono salvate localmente nel browser dell'utente, non su un server. Non sono sincronizzate tra dispositivi.

⚠️ **Figma Assets**: Gli asset importati con `figma:asset` sono gestiti automaticamente da Vite/Vercel.

⚠️ **Dominio**: Aggiorna `robots.txt` e `sitemap.xml` dopo il deployment con il tuo dominio reale.

## Supporto

Per problemi o domande:
- Controlla `PRE_DEPLOYMENT_CHECKLIST.md`
- Vedi documentazione in `/guidelines` e `/ARCHITECTURE.md`
- Consulta log di build per errori specifici

---

**Versione**: 1.0.0  
**Autore**: Francesco Salvatori  
**Data**: 6 Febbraio 2026
