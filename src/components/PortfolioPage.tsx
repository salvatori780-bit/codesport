import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Languages } from 'lucide-react';
import { ProjectDetail } from './ProjectDetail';
import { PLACEHOLDERS } from '../utils/placeholders';

// Translation object
const translations = {
  en: {
    gallery: "Gallery",
    description: "A curated selection of my most representative fashion projects. Each collection explores the balance between form and function, tradition and contemporary innovation."
  },
  it: {
    gallery: "Galleria",
    description: "Una selezione curata dei miei progetti di moda più rappresentativi. Ogni collezione esplora l'equilibrio tra forma e funzione, tradizione e innovazione contemporanea."
  }
};

export function PortfolioPage() {
  const [images, setImages] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  // Sync language with localStorage
  const getInitialLanguage = (): 'en' | 'it' => {
    const saved = localStorage.getItem('portfolioLanguage');
    return (saved === 'it' || saved === 'en') ? saved : 'en';
  };
  
  const [language, setLanguage] = useState<'en' | 'it'>(getInitialLanguage);
  const t = translations[language];
  
  // Update localStorage when language changes
  const handleLanguageChange = (newLang: 'en' | 'it') => {
    setLanguage(newLang);
    localStorage.setItem('portfolioLanguage', newLang);
  };

  useEffect(() => {
    // Simulating fetching images
    const mockImages = [
      PLACEHOLDERS.coverImage,
      PLACEHOLDERS.prigionieriImage,
      PLACEHOLDERS.thirdImage,
      PLACEHOLDERS.fourthImage,
      PLACEHOLDERS.fifthImage,
      PLACEHOLDERS.sixthImage,
    ];
    setImages(mockImages);
  }, []);

  return (
    <>
      <div className="min-h-screen pt-24 pb-20 px-8 md:px-16 bg-white">
        {/* Language Switcher */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-20 right-20 z-50 flex items-center gap-3"
        >
          <Languages className="w-4 h-4 text-neutral-600" />
          <button
            onClick={() => handleLanguageChange(language === 'en' ? 'it' : 'en')}
            className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase"
          >
            <span className={`transition-colors ${language === 'en' ? 'text-neutral-900' : 'text-neutral-400'}`}>
              EN
            </span>
            <span className="text-neutral-300">/</span>
            <span className={`transition-colors ${language === 'it' ? 'text-neutral-900' : 'text-neutral-400'}`}>
              IT
            </span>
          </button>
        </motion.div>

        <div className="max-w-[1400px] mx-auto">
          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl text-neutral-900 mb-4" style={{ letterSpacing: '-0.02em', fontFamily: 'Montserrat, sans-serif' }}>
              {t.gallery}
            </h1>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-neutral-600 leading-relaxed text-sm md:text-base font-[Montserrat]">
              {t.description}
            </p>
          </motion.div>

          {/* Grid Layout - 3 columns x 2 rows */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-3 max-w-4xl mx-auto"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedProject(index)}
              >
                {/* Paper background */}
                <div 
                  className="relative overflow-hidden shadow-lg bg-white"
                >
                  {/* Image container */}
                  <div className="p-2">
                    <div className="relative overflow-hidden" style={{ aspectRatio: '2/3' }}>
                      <img 
                        src={image}
                        alt={`Collection ${Math.floor(index / 2) + 1} - Look ${index + 1}`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Caption */}
                    <div className="mt-2 text-center">
                      <p className="text-[9px] text-neutral-700 tracking-wider uppercase font-[Montserrat]">
                        {['Gladio - Menswear Collection', 'Prigionieri - Thesis Project', 'Tabula Rasa - IED x Albini 1876', 'Akira - Womenswear Collection', 'Marcel - Graphic Design Project', 'Prigionieri - Print Design Project'][index] || 'Untitled'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative number */}
                <div className="absolute top-2 right-2 text-neutral-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectDetail
            projectIndex={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}