import { motion } from 'motion/react';

interface PortfolioSpreadProps {
  leftImage: string;
  rightImage: string;
  leftCaption?: string;
  rightCaption?: string;
  spreadNumber: number;
}

export function PortfolioSpread({ 
  leftImage, 
  rightImage, 
  leftCaption, 
  rightCaption,
  spreadNumber 
}: PortfolioSpreadProps) {
  return (
    <div className="mb-32 last:mb-0">
      <div 
        className="shadow-2xl relative overflow-hidden"
        style={{
          background: '#e8e3d8',
        }}
      >
        {/* Paper grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />
        
        {/* Fine paper fibers */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter2'%3E%3CfeTurbulence type='turbulence' baseFrequency='2.5' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter2)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px'
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          {/* Center binding shadow */}
          <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 z-10 pointer-events-none hidden md:block"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05))'
            }}
          />

          {/* Left Page */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 lg:p-16 relative"
          >
            <div className="aspect-[3/4] bg-white overflow-hidden relative group">
              <img 
                src={leftImage} 
                alt="Portfolio item"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>
            {leftCaption && (
              <p className="text-xs text-neutral-700 mt-4 italic">
                {leftCaption}
              </p>
            )}
            
            {/* Page number bottom left */}
            <div className="absolute bottom-6 left-6 text-[10px] text-neutral-500">
              {spreadNumber * 2 - 1}
            </div>
          </motion.div>

          {/* Right Page */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 lg:p-16 relative"
          >
            <div className="aspect-[3/4] bg-white overflow-hidden relative group">
              <img 
                src={rightImage} 
                alt="Portfolio item"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>
            {rightCaption && (
              <p className="text-xs text-neutral-700 mt-4 italic">
                {rightCaption}
              </p>
            )}
            
            {/* Page number bottom right */}
            <div className="absolute bottom-6 right-6 text-[10px] text-neutral-500">
              {spreadNumber * 2}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
