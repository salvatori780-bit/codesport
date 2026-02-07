import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: 'cv' | 'portfolio';
  onPageChange: (page: 'cv' | 'portfolio') => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-6 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <motion.button
          whileHover={{ x: -5 }}
          onClick={() => onPageChange('cv')}
          className={`text-xs tracking-[0.2em] uppercase transition-colors ${
            currentPage === 'cv' ? 'text-neutral-900 font-medium' : 'text-neutral-400 hover:text-neutral-900'
          }`}
        >
          CV
        </motion.button>
        
        <div className="flex gap-8">
          <motion.button
            whileHover={{ y: -2 }}
            onClick={() => onPageChange('portfolio')}
            className={`text-xs tracking-[0.2em] uppercase transition-colors ${
              currentPage === 'portfolio' ? 'text-neutral-900 font-medium' : 'text-neutral-400 hover:text-neutral-900'
            }`}
          >
            PORTFOLIO
          </motion.button>
        </div>
      </div>
    </nav>
  );
}