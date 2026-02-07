# Images Directory

This directory contains all images used in the portfolio.

## Structure

```
/public/images/
├── cv/
│   ├── profile.jpg         # Profile photo for CV page
│   └── signature.png       # Signature image
├── projects/
│   ├── project1/          # Prigionieri dell'Avanguardia
│   ├── project2/          # Tabula Rasa
│   ├── project3/          # Third Collection
│   ├── project4/          # Fourth Collection
│   ├── project5/          # Fifth Collection
│   └── project6/          # Sixth Collection
└── placeholder.jpg        # Default placeholder image
```

## How to Replace Images

1. Place your images in the appropriate directory
2. Keep the same filename or update the import in the component
3. Recommended formats: JPG for photos, PNG for graphics with transparency
4. Recommended sizes:
   - Profile photo: 800x1000px
   - Project covers: 1200x1600px
   - Project detail images: 1920x1080px (landscape) or 1080x1920px (portrait)

## IndexedDB System

The portfolio includes a universal image replacement system that allows you to:
- Replace any image in all 6 projects
- Save replacements permanently in IndexedDB
- Use the camera icon on each image to upload a new one

Replaced images are stored in the browser's IndexedDB and persist across sessions.
