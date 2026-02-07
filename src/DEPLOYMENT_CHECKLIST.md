# ✅ Checklist Pre-Deployment

Usa questa checklist prima di fare il deployment del portfolio.

## 📋 Verifica File di Configurazione

- [x] `.gitignore` - Presente ed esclude node_modules, dist, .env
- [x] `package.json` - Tutte le dipendenze corrette
- [x] `vercel.json` - Configurazione Vercel completa
- [x] `vite.config.ts` - Build ottimizzato
- [x] `tsconfig.json` - TypeScript configurato
- [x] `eslint.config.js` - ESLint configurato
- [x] `postcss.config.js` - PostCSS per Tailwind
- [x] `.github/workflows/ci.yml` - GitHub Actions CI
- [x] `LICENSE` - Licenza MIT
- [x] `README.md` - Documentazione completa

## 🔍 Verifica Codice

### Build e Compilazione
```bash
# Esegui questi comandi e verifica che non ci siano errori
npm install
npm run lint
npm run build
```

- [ ] `npm install` - Completa senza errori
- [ ] `npm run lint` - Nessun errore critico
- [ ] `npm run build` - Build completata con successo
- [ ] Cartella `dist/` creata correttamente
- [ ] File `dist/index.html` esiste

### Preview Locale
```bash
npm run preview
```

- [ ] Preview funziona su http://localhost:3000
- [ ] Tutte le pagine si caricano correttamente
- [ ] Navigation funziona
- [ ] Immagini si caricano
- [ ] Animazioni funzionano
- [ ] Language switcher EN/IT funziona
- [ ] CV download funziona
- [ ] Sistema upload immagini funziona

## 🖼️ Verifica Assets

- [ ] Tutte le immagini sono committate
- [ ] `public/favicon.svg` esiste
- [ ] `public/robots.txt` esiste
- [ ] `public/sitemap.xml` esiste
- [ ] Font Montserrat carica correttamente

## 🌐 Verifica SEO

- [ ] `index.html` ha meta tags
- [ ] Title corretto: "Francesco Salvatori - Fashion Portfolio"
- [ ] Meta description presente
- [ ] Open Graph tags (opzionale)
- [ ] Favicon configurato

## 📱 Verifica Responsive

Testa su:
- [ ] Desktop (1920px+)
- [ ] Laptop (1440px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

## ♿ Verifica Accessibilità

- [ ] Tutti i link hanno testi descrittivi
- [ ] Immagini hanno attributi alt
- [ ] Contrasto colori adeguato
- [ ] Navigazione da tastiera funziona

## 🔒 Verifica Sicurezza

- [ ] Nessuna API key hardcoded
- [ ] `.env` in `.gitignore`
- [ ] Nessun dato sensibile nel codice
- [ ] Headers di sicurezza in `vercel.json`

## 📊 Verifica Performance

Dopo il deployment, controlla:
- [ ] Lighthouse Score > 90
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] Cumulative Layout Shift < 0.1

## 🚀 GitHub Setup

- [ ] Repository creato su GitHub
- [ ] `.gitignore` funziona (node_modules non committati)
- [ ] README.md aggiornato con link al repo
- [ ] Licenza presente
- [ ] Branch principale è `main`

### Comandi Git
```bash
git init
git add .
git commit -m "Initial commit - Portfolio Francesco Salvatori"
git remote add origin https://github.com/USERNAME/francesco-salvatori-portfolio.git
git branch -M main
git push -u origin main
```

- [ ] Primo commit fatto
- [ ] Push su GitHub completato
- [ ] Repository visibile su GitHub
- [ ] GitHub Actions CI attivato

## 🌐 Vercel Setup

- [ ] Account Vercel creato
- [ ] Repository importato
- [ ] Framework rilevato: Vite
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Primo deployment riuscito

### Verifica Deployment Vercel
- [ ] Build logs senza errori
- [ ] Deployment completato
- [ ] URL live accessibile
- [ ] Tutte le funzionalità funzionano in produzione

## 🎨 Configurazione Domini (Opzionale)

- [ ] Dominio personalizzato acquistato
- [ ] DNS configurato su Vercel
- [ ] HTTPS attivo
- [ ] Redirect www configurato

## 📈 Analytics (Opzionale)

- [ ] Vercel Analytics attivato
- [ ] Google Analytics configurato (se necessario)

## 🔄 Deployment Continuo

- [ ] Push su `main` triggera deployment automatico
- [ ] Preview deployments per PR
- [ ] Notifiche deployment configurate

## 📝 Documentazione

- [ ] README.md completo
- [ ] DEPLOY.md con istruzioni
- [ ] Commenti nel codice dove necessario
- [ ] Changelog iniziale creato

## ✅ Final Check

Prima di dichiarare il deployment completo:

1. [ ] Visita il sito in produzione
2. [ ] Testa ogni pagina e funzionalità
3. [ ] Verifica su mobile
4. [ ] Verifica su diversi browser (Chrome, Firefox, Safari)
5. [ ] Condividi il link con qualcuno per feedback
6. [ ] Verifica analytics funzionanti (se configurati)

## 🎉 Post-Deployment

Dopo il deployment:

1. [ ] Condividi il link sui social
2. [ ] Aggiungi il link al profilo LinkedIn
3. [ ] Monitora analytics per le prime settimane
4. [ ] Raccogli feedback dagli utenti
5. [ ] Pianifica aggiornamenti futuri

---

## 🆘 Troubleshooting

### Build fallisce
```bash
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Immagini non si vedono
- Verifica percorsi (iniziano con `/` o `./`)
- Controlla che siano in `public/` o importate correttamente
- Verifica su Vercel dashboard i file deployati

### 404 su refresh
- Verifica `vercel.json` rewrites
- Controlla routing in `App.tsx`

### Performance bassa
- Attiva code splitting
- Ottimizza immagini (WebP, dimensioni corrette)
- Verifica bundle size con `npm run build`

---

**Data ultimo check:** _____________

**Checked by:** _____________

**Deployment URL:** _____________

**Status:** 🟢 Live | 🟡 In Progress | 🔴 Issues

---

Creato per il deployment del portfolio di Francesco Salvatori
