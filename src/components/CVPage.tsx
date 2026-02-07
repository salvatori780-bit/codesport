import { motion } from 'motion/react';
import { Languages, Download } from 'lucide-react';
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { PLACEHOLDERS } from '../utils/placeholders';

interface CVPageProps {
  onViewProjects?: () => void;
}

// Translation object
const translations = {
  en: {
    cvTitle: "CV & Fashion Portfolio —",
    gallery: "Gallery",
    bio: "Fashion Designer born in 2003 with a clean but original aesthetic, particularly attached to the world of military and avant-garde clothing, from England to Japan. Strong spirit of dedication to work, co-working and leadership.",
    contacts: "Contacts",
    city: "City:",
    email: "E-mail:",
    cell: "Cell:",
    linkedin: "Linkedin:",
    viewGallery: "VIEW GALLERY",
    downloadCV: "Download CV",
    background: "Background",
    backgroundText: "Francesco Salvatori was born in Rome on January 1, 2003. After completing his studies at Stanislao Cannizzaro state scientific high school, he pursued law for one year at Sapienza University of Rome before discovering his true passion. In 2021, he enrolled at the European Institute of Design, where he specialized in Fashion Design, graduating on July 7, 2025.",
    experience: "Experience",
    experienceItem: "\"Tabula Rasa\", IED x Cotonificio Albini 1876",
    experienceItem2: "Assistant at \"Raffaella Frezza\" showroom, Via Taro, 1, Rome",
    workExperience: "Work Experience",
    workItem1: "Currently waiter at Vicino Enoteca, Largo Pannonia, 13",
    workItem2: "Waiter at CO.AL.SA, Sabaudia, LT",
    skills: "Skills & Values",
    personalValues: "Personal Values",
    professionalSkills: "Professional Skills",
    values: {
      problemSolving: "Problem solving",
      responsibility: "Responsibility",
      dedication: "Dedication",
      flexibility: "Flexibility",
      cooperation: "Cooperation",
      humility: "Humility",
      curiosity: "Curiosity",
      organization: "Organization",
      punctuality: "Punctuality"
    },
    professionalSkillsList: {
      men: "Men Collection",
      women: "Women Collection",
      knitwear: "Knitwear Collection",
      sportswear: "Sportswear Collection",
      textile: "Textile Research",
      modeling: "Modeling",
      trend: "Trend Research"
    }
  },
  it: {
    cvTitle: "CV & Portfolio Moda —",
    gallery: "Galleria",
    bio: "Fashion Designer nato nel 2003 con un'estetica pulita ma originale, particolarmente legato al mondo dell'abbigliamento militare e d'avanguardia, dall'Inghilterra al Giappone. Forte spirito di dedizione al lavoro, collaborazione e leadership.",
    contacts: "Contatti",
    city: "Città:",
    email: "E-mail:",
    cell: "Cell:",
    linkedin: "Linkedin:",
    viewGallery: "VEDI GALLERIA",
    downloadCV: "Scarica CV",
    background: "Background",
    backgroundText: "Francesco Salvatori è nato a Roma il 1 gennaio 2003. Dopo aver completato gli studi al liceo scientifico statale Stanislao Cannizzaro, ha studiato giurisprudenza per un anno all'Università La Sapienza di Roma prima di scoprire la sua vera passione. Nel 2021 si è iscritto all'Istituto Europeo di Design, dove si è specializzato in Fashion Design, laureandosi il 7 luglio 2025.",
    experience: "Esperienza",
    experienceItem: "\"Tabula Rasa\", IED x Cotonificio Albini 1876",
    experienceItem2: "Assistente presso showroom \"Raffaella Frezza\", Via Taro, 1, Roma",
    workExperience: "Esperienza Lavorativa",
    workItem1: "Attualmente cameriere presso Vicino Enoteca, Largo Pannonia, 13",
    workItem2: "Cameriere presso CO.AL.SA, Sabaudia, LT",
    skills: "Competenze & Valori",
    personalValues: "Valori Personali",
    professionalSkills: "Competenze Professionali",
    values: {
      problemSolving: "Problem solving",
      responsibility: "Responsabilità",
      dedication: "Dedizione",
      flexibility: "Flessibilità",
      cooperation: "Cooperazione",
      humility: "Umiltà",
      curiosity: "Curiosità",
      organization: "Organizzazione",
      punctuality: "Puntualità"
    },
    professionalSkillsList: {
      men: "Collezione Uomo",
      women: "Collezione Donna",
      knitwear: "Collezione Maglieria",
      sportswear: "Collezione Sportswear",
      textile: "Ricerca Tessile",
      modeling: "Modellistica",
      trend: "Ricerca Trend"
    }
  }
};

export function CVPage({ onViewProjects }: CVPageProps) {
  // Sync language with localStorage
  const getInitialLanguage = (): 'en' | 'it' => {
    const saved = localStorage.getItem('portfolioLanguage');
    return (saved === 'it' || saved === 'en') ? saved : 'en';
  };
  
  const [language, setLanguage] = useState<'en' | 'it'>(getInitialLanguage);
  const [isDownloading, setIsDownloading] = useState(false);
  const t = translations[language];
  const cvRef = useRef<HTMLDivElement>(null);
  
  // Update localStorage when language changes
  const handleLanguageChange = (newLang: 'en' | 'it') => {
    setLanguage(newLang);
    localStorage.setItem('portfolioLanguage', newLang);
  };

  const handleDownload = async () => {
    if (cvRef.current) {
      setIsDownloading(true);
      // Wait for the button to disappear
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Create a temporary wrapper to apply inline styles
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'fixed';
      tempDiv.style.left = '-9999px';
      tempDiv.style.top = '0';
      document.body.appendChild(tempDiv);
      
      // Clone the CV content
      const clone = cvRef.current.cloneNode(true) as HTMLElement;
      tempDiv.appendChild(clone);
      
      // Apply computed styles inline to all elements
      const applyComputedStyles = (original: Element, cloned: Element) => {
        const computedStyle = window.getComputedStyle(original);
        const clonedEl = cloned as HTMLElement;
        
        // Apply essential color properties inline
        clonedEl.style.color = computedStyle.color;
        clonedEl.style.backgroundColor = computedStyle.backgroundColor;
        clonedEl.style.borderColor = computedStyle.borderColor;
        
        // Recursively apply to children
        for (let i = 0; i < original.children.length; i++) {
          applyComputedStyles(original.children[i], cloned.children[i]);
        }
      };
      
      applyComputedStyles(cvRef.current, clone);
      
      // Use html2canvas on the styled clone
      try {
        const canvas = await html2canvas(clone, {
          backgroundColor: '#ffffff',
          scale: 2,
          logging: false,
          useCORS: true
        });
        
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 0.95);
        link.download = 'Francesco_Salvatori_CV.jpg';
        link.click();
      } catch (error) {
        console.error('Error generating CV:', error);
      } finally {
        document.body.removeChild(tempDiv);
        setIsDownloading(false);
      }
    }
  };

  return (
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
        {/* Single Page Layout */}
        <div 
          ref={cvRef}
          data-cv-content
          className="shadow-2xl relative overflow-hidden"
          style={{
            background: 'white',
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
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-12 md:p-20 relative font-[Montserrat]"
          >
            {/* Top Section with Image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 border-b border-neutral-400 pb-8">
              {/* Left side */}
              <div className="relative flex flex-col">
                <div className="text-xs text-neutral-800 -mt-10 mb-8 relative z-10">
                  {t.cvTitle}<br />
                  <span className="italic">{t.gallery}</span>
                </div>
                
                {/* Name and Bio Section - moved here */}
                <div className="mb-8">
                  <h1 className="text-3xl mb-3" style={{ letterSpacing: '-0.02em' }}>
                    Francesco Salvatori
                  </h1>
                  
                  {/* Decorative underline */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-[1px] bg-neutral-400"></div>
                    <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                    <div className="w-6 h-[1px] bg-neutral-400"></div>
                  </div>
                  
                  <div className="text-xs leading-relaxed text-neutral-800">
                    {t.bio}
                  </div>
                </div>
                
                {/* Contacts Section - centered vertically */}
                <div className="flex-1 flex items-center">
                  <div className="text-xs text-neutral-800 relative z-10 w-full">
                    {/* Decorative elements */}
                    <div className="absolute -top-4 left-0 w-full h-[1px] bg-neutral-300"></div>
                    
                    {/* Decorative corner element */}
                    <div className="absolute -left-3 -top-3 w-2 h-2 border-l border-t border-neutral-400"></div>
                    
                    <div className="font-medium mb-3 uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
                      {t.contacts}
                    </div>
                    
                    <div className="space-y-2 text-neutral-700">
                      <div className="flex items-start gap-2">
                        <span className="text-neutral-500">{t.city}:</span>
                        <span>Rome, Italy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-neutral-500">{t.email}:</span>
                        <span>salvatori780@gmail.com</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-neutral-500">{t.cell}:</span>
                        <span>+39 3471605323</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-neutral-500">{t.linkedin}:</span>
                        <span>linkedin.com/in/francesco-salvatori-1a515036a/</span>
                      </div>
                    </div>
                    
                    {/* View Gallery Button - below contacts section */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onViewProjects}
                      className="mt-6 px-6 py-2.5 border-2 border-neutral-900 text-[10px] tracking-[0.3em] uppercase text-neutral-900 hover:bg-neutral-900 hover:text-[#e8e3d8] transition-colors duration-300"
                    >
                      {t.viewGallery}
                    </motion.button>
                  </div>
                </div>
              </div>
              
              {/* Right side - Photo with vertical text */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center z-10" style={{ width: '60px' }}>
                  <div 
                    className="text-2xl tracking-widest text-neutral-900"
                    style={{ 
                      writingMode: 'vertical-rl',
                      textOrientation: 'upright',
                      letterSpacing: '0.3em'
                    }}
                  >
                    神は見下さない
                  </div>
                </div>
                
                <div className="ml-16 flex flex-col">
                  <div className="w-full h-[400px] overflow-hidden relative">
                    {/* Profile image */}
                    <img 
                      src={PLACEHOLDERS.profileImage} 
                      alt="Francesco Salvatori" 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 25%' }}
                    />
                  </div>
                  <div className="text-[10px] text-neutral-700 mt-2">
                    01 - 01 - 2003, Rome, Italy
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Section */}
            <div className="max-w-[1100px] mx-auto">
              <div className="grid grid-cols-[200px_1fr] gap-12 mb-12">
                <div className="relative">
                  {/* Section number */}
                  <div className="text-[10px] text-neutral-500 tracking-widest mb-1">— 01</div>
                  <h2 className="text-sm mb-4 text-neutral-900">
                    {t.background}
                  </h2>
                </div>
                
                <div>
                  <p className="text-sm leading-relaxed text-neutral-800 mb-6">
                    {t.backgroundText}
                  </p>
                </div>
              </div>

              {/* Experience Section */}
              <div className="grid grid-cols-[200px_1fr] gap-12 mb-12">
                <div className="relative">
                  {/* Section number */}
                  <div className="text-[10px] text-neutral-500 tracking-widest mb-1">— 02</div>
                  <h2 className="text-sm mb-4 text-neutral-900">
                    {t.experience}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="relative pl-6">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-neutral-400"></div>
                    
                    <div className="text-xs text-neutral-600 mb-1">
                      2024
                    </div>
                    <p className="text-sm text-neutral-900">{t.experienceItem}</p>
                  </div>
                  <div className="relative pl-6">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-neutral-400"></div>
                    
                    <div className="text-xs text-neutral-600 mb-1">
                      2026
                    </div>
                    <p className="text-sm text-neutral-900">{t.experienceItem2}</p>
                  </div>
                </div>
              </div>

              {/* Work Experience Section */}
              <div className="grid grid-cols-[200px_1fr] gap-12 mb-12">
                <div className="relative">
                  {/* Section number */}
                  <div className="text-[10px] text-neutral-500 tracking-widest mb-1">— 03</div>
                  <h2 className="text-sm mb-4 text-neutral-900">
                    {t.workExperience}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="relative pl-6">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-neutral-400"></div>
                    
                    <div className="text-xs text-neutral-600 mb-1">
                      2025 - present
                    </div>
                    <p className="text-sm text-neutral-900">{t.workItem1}</p>
                  </div>
                  <div className="relative pl-6">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full border border-neutral-400"></div>
                    
                    <div className="text-xs text-neutral-600 mb-1">
                      2021
                    </div>
                    <p className="text-sm text-neutral-900">{t.workItem2}</p>
                  </div>
                </div>
              </div>

              {/* Skills Table Section */}
              <div className="grid grid-cols-[200px_1fr] gap-12 mb-12">
                <div className="relative">
                  {/* Section number */}
                  <div className="text-[10px] text-neutral-500 tracking-widest mb-1">— 04</div>
                  <h2 className="text-sm mb-4 text-neutral-900">
                    {t.skills}
                  </h2>
                </div>
                
                <div>
                  {/* Skills Table */}
                  <div className="text-xs text-neutral-800 relative grid grid-cols-2 gap-6">
                    {/* Decorative elements around the section */}
                    <div className="absolute -top-4 left-0 w-full h-[1px] bg-neutral-300"></div>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-400"></div>
                    
                    <div className="relative">
                      {/* Decorative corner element */}
                      <div className="absolute -left-3 -top-3 w-2 h-2 border-l border-t border-neutral-400"></div>
                      
                      <div className="font-medium mb-3 uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
                        {t.personalValues}
                      </div>
                      <ul className="space-y-1 text-neutral-700">
                        <li>• {t.values.problemSolving}</li>
                        <li>• {t.values.responsibility}</li>
                        <li>• {t.values.dedication}</li>
                        <li>• {t.values.flexibility}</li>
                        <li>• {t.values.cooperation}</li>
                        <li>• {t.values.humility}</li>
                        <li>• {t.values.curiosity}</li>
                        <li>• {t.values.organization}</li>
                        <li>• {t.values.punctuality}</li>
                      </ul>
                    </div>
                    
                    {/* Vertical divider line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-300"></div>
                    
                    <div className="relative">
                      {/* Decorative corner element */}
                      <div className="absolute -right-3 -top-3 w-2 h-2 border-r border-t border-neutral-400"></div>
                      
                      <div className="font-medium mb-3 uppercase tracking-wider text-neutral-900 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
                        {t.professionalSkills}
                      </div>
                      <ul className="space-y-1 text-neutral-700">
                        <li>• {t.professionalSkillsList.men}</li>
                        <li>• {t.professionalSkillsList.women}</li>
                        <li>• {t.professionalSkillsList.knitwear}</li>
                        <li>• {t.professionalSkillsList.sportswear}</li>
                        <li>• {t.professionalSkillsList.textile}</li>
                        <li>• {t.professionalSkillsList.modeling}</li>
                        <li>• {t.professionalSkillsList.trend}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row with Download button and Signature */}
            <div className="flex justify-between items-center mt-12">
              {/* Download Button - left side */}
              {!isDownloading && (
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors text-xs group"
                >
                  <Download className="w-4 h-4" />
                  <span className="uppercase tracking-wider">{t.downloadCV}</span>
                </button>
              )}
              
              {/* Spacer when downloading */}
              {isDownloading && <div></div>}
              
              {/* Signature - right side */}
              <div className="text-right">
                <img 
                  src={PLACEHOLDERS.signatureImage} 
                  alt="Francesco Salvatori signature" 
                  className="inline-block h-12 opacity-80"
                  style={{ 
                    filter: 'contrast(1.2)',
                    mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}