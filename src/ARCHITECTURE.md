# Architecture Documentation

## Overview

This portfolio is a Single Page Application (SPA) built with React, TypeScript, and Tailwind CSS. It features a minimalist editorial design with smooth animations and persistent image storage.

## Technology Stack

### Core
- **React 18**: UI library with hooks and functional components
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Tailwind CSS v4**: Utility-first CSS framework

### Libraries
- **Motion (Framer Motion)**: Animation library
- **html2canvas**: DOM to canvas conversion for CV export
- **Lucide React**: Icon library
- **IndexedDB**: Browser storage for images

## Project Structure

```
/
├── components/              # React components
│   ├── CVPage.tsx          # CV page component
│   ├── Navigation.tsx      # Navigation bar
│   ├── PortfolioPage.tsx   # Portfolio gallery
│   ├── ProjectDetail.tsx   # Project detail view
│   ├── projectTranslations.ts  # i18n translations
│   ├── figma/              # Figma-specific components
│   └── ui/                 # Reusable UI components
├── utils/                  # Utility functions
│   └── imageStorage.ts     # IndexedDB operations
├── styles/                 # Global styles
│   └── globals.css         # Tailwind and custom styles
├── App.tsx                 # Root component
├── main.tsx                # Application entry point
└── index.html              # HTML template
```

## Component Architecture

### App.tsx
- Root component
- Manages page state (CV or Portfolio)
- Handles page transitions with AnimatePresence

### CVPage.tsx
- Displays curriculum vitae
- Bilingual content (EN/IT)
- CV export functionality
- Paper texture effects

### PortfolioPage.tsx
- Grid layout of 6 projects
- Language switcher
- Project navigation

### ProjectDetail.tsx
- Full-screen project view
- Image galleries (lookbooks, graphics)
- Image upload system
- Credits management

## State Management

### Local State
- Component-level state with `useState`
- No global state management library needed

### Persistent State
- **IndexedDB** for uploaded images
- **localStorage** for language preference

## Data Flow

```
User Action → Component State Update → Re-render → IndexedDB/localStorage
                                                  ↓
                                            Persist Data
```

## Internationalization (i18n)

### Implementation
- Translation objects in TypeScript
- Language state in localStorage
- Synchronized across all components
- Supported languages: English (EN), Italian (IT)

### Translation Files
- `/components/CVPage.tsx`: CV translations (inline)
- `/components/projectTranslations.ts`: Project translations

## Image Management

### Figma Assets
- Imported using `figma:asset` scheme
- Virtual module system (no file paths)
- Automatically optimized

### User Uploads
- Stored as base64 in IndexedDB
- Permanent persistence
- Per-project organization

### Image Storage Keys
```
akira_hero              # Akira project hero image
akira_img_{index}       # Akira gallery images
project_{key}           # Universal project images
marcel_graphics_{index} # Marcel graphics
marcel_captions         # Marcel image captions
```

## Performance Optimizations

### Code Splitting
- Vendor chunks (React, Motion)
- Route-based splitting

### Asset Optimization
- Image lazy loading
- Grayscale to color transitions
- Cache headers in Vercel config

### Build Optimization
- Minification with esbuild
- Tree shaking
- Source map removal in production

## Browser Storage

### IndexedDB Schema
```javascript
Database: PortfolioImagesDB
Store: images (key-value pairs)
  - Key: string (e.g., "akira_hero")
  - Value: string (base64 image data)
```

### Storage API
```typescript
saveImage(key: string, imageData: string): Promise<void>
getImage(key: string): Promise<string | null>
getAllImages(prefix: string): Promise<{[key: string]: string}>
```

## Styling System

### Tailwind CSS v4
- Utility-first approach
- Custom color palette
- Paper texture effects
- Responsive breakpoints

### Custom Styles
- CSS variables for theming
- oklch color space
- Typography scale
- Dark mode support (ready)

## Animation System

### Motion (Framer Motion)
- Page transitions
- Hover effects
- Image galleries
- Scroll animations

### Animation Patterns
```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.6 }}
```

## Security Considerations

### Client-Side
- No sensitive data stored
- XSS protection headers
- Content Security Policy ready

### Data Privacy
- Images stored locally (IndexedDB)
- No external tracking
- GDPR compliant

## Future Enhancements

### Planned Features
- [ ] Admin panel for content management
- [ ] More projects support
- [ ] Video integration
- [ ] Social media integration
- [ ] Contact form
- [ ] Newsletter signup

### Technical Improvements
- [ ] Progressive Web App (PWA)
- [ ] Offline support
- [ ] Image compression before storage
- [ ] Backend integration option
- [ ] Analytics integration

## Testing Strategy

### Manual Testing
- Cross-browser compatibility
- Responsive design
- Image upload flow
- Language switching
- CV export

### Automated Testing (Future)
- Unit tests with Vitest
- Component tests with Testing Library
- E2E tests with Playwright

## Deployment

### Vercel Configuration
- `vercel.json` for routing and headers
- Automatic deployments from GitHub
- Preview deployments for PRs
- Custom domain support

### Environment
- Node.js >= 18.0.0
- npm or yarn package manager
- Modern browser support

## Maintenance

### Updates
- Regular dependency updates
- Security patches
- Performance monitoring
- Bug fixes

### Content Updates
- Project information in `projectTranslations.ts`
- CV content in `CVPage.tsx`
- Images via upload system

## Troubleshooting

### Common Issues

**Build Errors**
- Check TypeScript errors
- Verify all imports
- Clear node_modules and reinstall

**Storage Issues**
- Check IndexedDB browser support
- Clear browser data
- Check storage quota

**Performance Issues**
- Optimize images before upload
- Check network tab
- Profile React components

## Support

For technical questions or issues:
- Email: salvatori780@gmail.com
- GitHub Issues: (if repository is public)
