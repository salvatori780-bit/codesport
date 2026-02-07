# Francesco Salvatori - Fashion Portfolio

Interactive fashion portfolio built with React, TypeScript, and Tailwind CSS.

## 🎨 Features

- **CV Page**: Bilingual CV (EN/IT) with download functionality
- **Portfolio Gallery**: 6 fashion projects with detailed views
- **Image Upload**: Universal upload system with IndexedDB persistence
- **Responsive**: Optimized for desktop and mobile
- **Animations**: Smooth transitions with Motion library
- **No Backend**: Fully client-side with local storage

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Clone repository
git clone https://github.com/salvatori780-bit/codesport.git
cd codesport

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **React** 18.3.1 - UI Framework
- **TypeScript** 5.7.3 - Type safety
- **Vite** 6.0.7 - Build tool
- **Tailwind CSS** 4.1.0 - Styling
- **Motion** 11.15.0 - Animations
- **Lucide React** - Icons
- **html2canvas** - CV download
- **IndexedDB** - Image persistence

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Vite configuration
4. Deploy completes automatically

### Manual Deployment

```bash
npm run build
# Deploy /dist/ folder to any static hosting
```

## 📁 Project Structure

```
/
├── components/          # React components
│   ├── CVPage.tsx      # CV page with download
│   ├── PortfolioPage.tsx # Project gallery
│   ├── ProjectDetail.tsx # Project details modal
│   └── Navigation.tsx   # Navigation component
├── utils/              # Utility functions
│   ├── placeholders.ts # SVG placeholder generator
│   └── imageStorage.ts # IndexedDB operations
├── public/             # Static assets
├── styles/             # Global CSS
└── vite.config.ts      # Vite configuration
```

## 🎯 Key Features

### CV Download
- Click "Download CV" button
- Generates JPG from current view
- Works in all modern browsers

### Image Upload
- Click any placeholder image
- Select image from device
- Automatically saved in IndexedDB
- Persists across browser sessions

### Language Switch
- Toggle between English and Italian
- Persists preference in localStorage
- Affects all text throughout the site

## 🔧 Configuration

### Environment
No environment variables needed - fully client-side application.

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 License

MIT License - see LICENSE file for details

## 👤 Author

**Francesco Salvatori**
- Email: salvatori780@gmail.com
- GitHub: [@salvatori780-bit](https://github.com/salvatori780-bit)

## 🙏 Acknowledgments

- IED (European Institute of Design)
- Cotonificio Albini 1876 (Tabula Rasa collaboration)
- All contributors and supporters

---

**Status:** Production Ready  
**Version:** 1.0.0  
**Last Updated:** February 2026
