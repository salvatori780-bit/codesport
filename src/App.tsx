import { useState } from 'react';
import { CVPage } from './components/CVPage';
import { PortfolioPage } from './components/PortfolioPage';
import { Navigation } from './components/Navigation';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'cv' | 'portfolio'>('cv');

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'cv' ? (
          <motion.div
            key="cv"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <CVPage onViewProjects={() => setCurrentPage('portfolio')} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PortfolioPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}