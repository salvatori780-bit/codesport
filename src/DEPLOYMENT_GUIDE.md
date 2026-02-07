# Guida al Deployment

## Preparazione per GitHub

### 1. Inizializza il repository Git
```bash
git init
git add .
git commit -m "Initial commit: Francesco Salvatori Portfolio"
```

### 2. Crea un repository su GitHub
1. Vai su [GitHub](https://github.com) e accedi al tuo account
2. Clicca sul pulsante "+" in alto a destra e seleziona "New repository"
3. Nome del repository: `francesco-salvatori-portfolio` (o il nome che preferisci)
4. Lascia il repository pubblico o privato secondo le tue preferenze
5. **NON** inizializzare con README, .gitignore o license (sono già presenti)
6. Clicca su "Create repository"

### 3. Collega il repository locale a GitHub
```bash
git remote add origin https://github.com/TUO_USERNAME/francesco-salvatori-portfolio.git
git branch -M main
git push -u origin main
```

## Deployment su Vercel

### Opzione 1: Deploy tramite Dashboard Vercel (Consigliato)

1. Vai su [Vercel](https://vercel.com) e accedi (puoi usare il tuo account GitHub)
2. Clicca su "Add New" → "Project"
3. Importa il repository GitHub che hai appena creato
4. Vercel rileverà automaticamente che è un progetto Vite
5. Configurazione automatica:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Clicca su "Deploy"

### Opzione 2: Deploy tramite Vercel CLI

```bash
# Installa Vercel CLI
npm install -g vercel

# Accedi a Vercel
vercel login

# Deploy
vercel
```

## Configurazione Post-Deployment

### 1. Dominio Personalizzato (Opzionale)
- Nella dashboard Vercel, vai su Settings → Domains
- Aggiungi il tuo dominio personalizzato
- Aggiorna i file `robots.txt` e `sitemap.xml` con il nuovo dominio

### 2. Variabili d'Ambiente (Se necessarie in futuro)
- Vai su Settings → Environment Variables nella dashboard Vercel
- Aggiungi le variabili necessarie

### 3. Aggiornamenti Automatici
- Ogni push sul branch `main` triggerà automaticamente un nuovo deployment su Vercel
- I pull request creeranno preview deployments automatici

## Risoluzione Problemi

### Build Fallisce
Se il build fallisce, controlla:
1. Che tutte le dipendenze siano installate: `npm install`
2. Che il build funzioni localmente: `npm run build`
3. I log di build nella dashboard Vercel per errori specifici

### Immagini Non Caricano
- Vercel supporta automaticamente le immagini importate tramite `figma:asset`
- Assicurati che tutte le immagini siano correttamente importate nei file

### IndexedDB
- IndexedDB funziona solo in ambiente browser
- Le immagini caricate dagli utenti vengono salvate localmente nel browser
- Non sono persistenti tra dispositivi diversi

## Performance

Il portfolio è ottimizzato per:
- ✅ Code splitting automatico
- ✅ Lazy loading delle immagini
- ✅ Bundle size ottimizzato
- ✅ Caching delle risorse statiche
- ✅ Compression Brotli/Gzip

## Monitoraggio

Dopo il deployment, puoi monitorare:
- **Analytics**: Nella dashboard Vercel → Analytics
- **Speed Insights**: Per performance metrics
- **Logs**: Per debugging

## Supporto

Per problemi specifici:
- [Documentazione Vercel](https://vercel.com/docs)
- [Documentazione Vite](https://vitejs.dev)
- [GitHub Issues](https://github.com/TUO_USERNAME/francesco-salvatori-portfolio/issues)
