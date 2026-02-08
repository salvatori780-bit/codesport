// ══════════════════════════════════════════════════════════════════
// 🖼️ IMMAGINI DA GITHUB - Lazy Loading (ZERO PNG nel bundle!)
// ══════════════════════════════════════════════════════════════════

import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, ArrowLeft, Upload, FileText, Check, Languages } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { saveImage, getImage, getAllImages } from '../utils/imageStorage';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projectTranslations } from './projectTranslations';
import { getMarcelImages, getGraphicsImages, getPrigionieriImages, getGladioImages, getLookbookImages, getImageUrl, imageFiles } from '../utils/projectImages';

// 📦 Carica immagini on-demand da GitHub (NON bundlate da Vite!)
const marcelImagesArray = getMarcelImages();
const graphicsImages = getGraphicsImages();
const prigionieriImagesArray = getPrigionieriImages();
const gladioImagesArray = getGladioImages();
const lookbookImagesGladio = getLookbookImages();

// Variabili di compatibilità per Marcel
const marcelImage1 = marcelImagesArray[0];
const marcelImage2 = marcelImagesArray[1];
const marcelImage3 = marcelImagesArray[2];
const marcelImage4 = marcelImagesArray[3];
const marcelImage5 = marcelImagesArray[4];
const marcelImage6 = marcelImagesArray[5];
const marcelImage7 = marcelImagesArray[6];

// Variabili per Gladio
const image_gladio_1 = gladioImagesArray[0];
const image_gladio_2 = gladioImagesArray[1];
const image_6 = gladioImagesArray[2];
const image_5 = gladioImagesArray[3];
const image_7 = gladioImagesArray[4];
const image_8 = gladioImagesArray[5];
const image_9 = gladioImagesArray[6];
const image_10 = gladioImagesArray[7];
const image_11 = gladioImagesArray[8];
const image_12 = gladioImagesArray[9];
const image_13 = gladioImagesArray[10];
const image_14 = gladioImagesArray[11];
const image_15 = gladioImagesArray[12];

// Variabili per Prigionieri
const image_267fb24c81eab5a763df6ff9cbfc156ccd47fd16 = prigionieriImagesArray[0];
const image_e0ee7d605cdce8368bd0f37ad1067c87cfb92517 = prigionieriImagesArray[1];
const image_8841b8980b55ae583f91808ba5296810558afc0c = prigionieriImagesArray[2];
const image_827a7c43d3b9726a8e3b3c34068d16cada00a278 = prigionieriImagesArray[3];
const image_ae9095b4b79670b547795a27344bfbb1c1371bcb = prigionieriImagesArray[4];
const image_9f69aef6ba94980ec094ccf85a2f76e1c8f4442f = prigionieriImagesArray[5];
const image_5c36cb5b169722c6e6fdd053bcda4f80d86e2803 = prigionieriImagesArray[6];
const image_02ac84fbc553c23f410c592569e7a9ab98f01da0 = prigionieriImagesArray[7];
const image_95164f811ef1fb5598130ada0b917f2e066fefbd = prigionieriImagesArray[8];
const image_a9d6601be4fa3e71b930add370c78cc92e75ab11 = prigionieriImagesArray[9];

// Variabili per Lookbook
const image_fb72a4ffd32ad468c22c65ed131d62c2547d4106 = lookbookImagesGladio[0];
const image_726852eda92e8f69eafeec51caa5b5a9dd8d02e3 = lookbookImagesGladio[1];
const image_bf89950957a1549f540206338688b8953d96defa = lookbookImagesGladio[2];
const image_e698f94714f6cb88e452c9d46336d0a0c64ff282 = lookbookImagesGladio[3];
const image_8ac6fff55297cc66082fd3d57c961f868fe810fb = lookbookImagesGladio[4];
const image_aa42da660bad9b695d23d4b6441bbd44be1ce48c = lookbookImagesGladio[5];
const image_85fe137110ca28cbccfd8bdb0da50292f7ef13cb = lookbookImagesGladio[6];
const image_8a792c56c3b5680bcfd924067cb98f2fc3e10e46 = lookbookImagesGladio[7];
const image_223e95ff32190ecc84a253b87efae5089d57545e = lookbookImagesGladio[8];
const image_0725ae9e28025979b9c83c2b1886f492e2858994 = lookbookImagesGladio[9];
const image_2324d3b752ec65bc4aee210f980b5861c901968f = lookbookImagesGladio[10];
const image_7e7aa8e4078e091d3bf68073f03efef7ce9f11f4 = lookbookImagesGladio[11];
const image_0a66af93681dcb0045c6851c7cfb3c5af5f86379 = lookbookImagesGladio[12];
const image_7c6dfbaee291ee284b755a39666475a8f5eee6bc = lookbookImagesGladio[13];
const image_80d710de0c769c57bda09fa4042cfe35dfbb20b1 = lookbookImagesGladio[14];
const image_708d5dce66f5dcc676ed983d954f38f5b95afe5b = lookbookImagesGladio[15];
const image_02dc1c2f756a60cdc6477ac890a405cc1ef402da = lookbookImagesGladio[16];
const image_2df32c9774b82194b53fc705f9c6d4829b5ca0e0 = lookbookImagesGladio[17];

// Variabili aggiuntive per altri array
const image_672df381cabdb8014754438c02c7657797c99db3 = getImageUrl(imageFiles.img20);

// Tabula Rasa project images
const image_b49cf72e74da069ebed394558c6fcb7b64bdc944 = getImageUrl(imageFiles.img30);
const image_85e1ffc87b6d749554d346e2d45fe40f72a9c70c = getImageUrl(imageFiles.img27);
const image_2d244e5b302b9c523b2e948e6ab2d8a48e777891 = getImageUrl(imageFiles.img29);
const image_e700cd453546c507261cdb7afecab790184b89d3 = getImageUrl(imageFiles.img31);
const image_f8320ff2eba039f25910077471337b382289e8fd = getImageUrl(imageFiles.img32);

// Akira project images
const image_0a11200e98d6e5b219b006bf1e3e398bb3688a7e = getImageUrl(imageFiles.img19);
const image_e93509f3c9c80a19067382f176094e7447824235 = getImageUrl(imageFiles.img18);
const image_d5d51661c2b1b71a09720c90e601e1a1067c173b = getImageUrl(imageFiles.img17);
const image_46ba3d2657ad104c15e23cff6bba1eefe7027b39 = getImageUrl(imageFiles.img16);
const image_c8b86b3fb0bf0091e1696e8fb50bc13f877c03df = getImageUrl(imageFiles.img15);
const image_7a229bc8bf0221c527a904213703a3c924154140 = getImageUrl(imageFiles.img14);
const image_218e1290bc6f40e01b937549d9453ab7e47084b6 = getImageUrl(imageFiles.img13);
const image_73bfc2c80dfd66052d5c7cbfad68a9e4dada8314 = getImageUrl(imageFiles.img12);

// Lookbook additional images
const image_d30bd798930c8661f28a37c80e6de829a3bda9e6 = getImageUrl(imageFiles.img48);
const image_22fc33b65f83a50726f8b012c985f87143596f3d = getImageUrl(imageFiles.img47);
const image_fd09b44a51e1bace8f760584aabf1e286a4363f4 = getImageUrl(imageFiles.img46);
const image_18d0a9bcdd5fa0562e179bd723972c0376f829a7 = getImageUrl(imageFiles.img45);
const image_903a90f7612deed85df8e5b88de0409faaa0f064 = getImageUrl(imageFiles.img44);
const image_f2be377a6e0775607a7efb78a51c689fd349546c = getImageUrl(imageFiles.img43);
const image_34c6a284abdbed2330a29648f5c4664ab88546b2 = getImageUrl(imageFiles.img42);
const image_e3d58225740db3f188a5d48af2ddd8c118ed513f = getImageUrl(imageFiles.img41);
const image_2dd2b8508142ff7e53ad2dfda83f02bc9594ccce = getImageUrl(imageFiles.img40);
const image_091ef3a0ff65609876ddb92fc9932866cbccd3f2 = getImageUrl(imageFiles.img39);
const image_ba4f79a0108791fefd21ec62c8b2a2bad8e2825b = getImageUrl(imageFiles.img38);
const image_a3ceaaf83c60b0e8597f27a58d38af5471860418 = getImageUrl(imageFiles.img37);
const image_e3cb4e47f7fc948810edebe4e42a8578489a0d79 = getImageUrl(imageFiles.img36);
const image_711fc12c3189a2d90da2c1cf0fbfbc917ba227f0 = getImageUrl(imageFiles.img35);
const image_04079bed68683ac8ea7b00772ae0ec142047c0fd = getImageUrl(imageFiles.img34);
const image_41c8c19399749983bd08fe880502655f938816a7 = getImageUrl(imageFiles.img26);
const image_653ced26d03657f5540d83c70d63d2bdae8db51e = getImageUrl(imageFiles.img25);
const image_e6573b0d87a01cf1bb6a35fd190e6fc862fc7781 = getImageUrl(imageFiles.img24);
const image_5e2175e7b4d3e8564beaa55cb21a73c9f62b3ba2 = getImageUrl(imageFiles.img23);
const image_046b650602c286bb94dbb62991852cc04a124751 = getImageUrl(imageFiles.img22);
const image_600bd13fa4318d315e14ae2f5fc29b1f2e5f71fe = getImageUrl(imageFiles.img21);

interface ProjectDetailProps {
  projectIndex: number;
  onClose: () => void;
}

export function ProjectDetail({ projectIndex, onClose }: ProjectDetailProps) {
  // Sync language with localStorage
  const getInitialLanguage = (): 'en' | 'it' => {
    const saved = localStorage.getItem('portfolioLanguage');
    return (saved === 'it' || saved === 'en') ? saved : 'en';
  };
  
  const [language, setLanguage] = useState<'en' | 'it'>(getInitialLanguage);
  const t = projectTranslations[language];
  
  // Update localStorage when language changes
  const handleLanguageChange = (newLang: 'en' | 'it') => {
    setLanguage(newLang);
    localStorage.setItem('portfolioLanguage', newLang);
  };
  
  const [lookbookOpen, setLookbookOpen] = useState(false);
  const [prigionieriLookbookOpen, setPrigionieriLookbookOpen] = useState(false);
  const [tabulaRasaLookbookOpen, setTabulaRasaLookbookOpen] = useState(false);
  const [graphicsGalleryOpen, setGraphicsGalleryOpen] = useState(false);
  const [threeDCollectionOpen, setThreeDCollectionOpen] = useState(false);
  const [creditsOpen, setCreditsOpen] = useState(false);
  const [creditsText, setCreditsText] = useState('Photography: [Nome Fotografo]\nStyling: Francesco Salvatori\nModels: [Nomi Modelli]\nMakeup: [Nome Makeup Artist]\nLocation: [Location]\n\nSpecial Thanks:\n[Ringraziamenti]');
  const [creditsSaved, setCreditsSaved] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<{[key: string]: string}>({});
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const heroInputRef = useRef<HTMLInputElement>(null);
  const [currentUploadIndex, setCurrentUploadIndex] = useState<number | null>(null);
  const [akiraImages, setAkiraImages] = useState<{[key: number]: string}>({});
  const [akiraHeroImage, setAkiraHeroImage] = useState<string>(image_672df381cabdb8014754438c02c7657797c99db3);
  
  // Universal state for all project images
  const [projectImages, setProjectImages] = useState<{[key: string]: string}>({});
  
  // State for Marcel graphics captions
  const [marcelCaptions, setMarcelCaptions] = useState<string[]>(Array(6).fill(''));
  
  // State for Marcel graphics images
  const [marcelGraphicsImages, setMarcelGraphicsImages] = useState<{[key: number]: string}>({});
  
  // Load saved images and credits from IndexedDB on mount
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Load credits text
        const savedCredits = await getImage('project_2_credits');
        if (savedCredits) {
          setCreditsText(savedCredits);
        }
        
        // Load Akira hero image
        const savedHero = await getImage('akira_hero');
        if (savedHero) {
          setAkiraHeroImage(savedHero);
        }
        
        // Load Akira gallery images
        const savedImages = await getAllImages('akira_img_');
        if (savedImages && Object.keys(savedImages).length > 0) {
          const imageMap: {[key: number]: string} = {};
          Object.entries(savedImages).forEach(([key, value]) => {
            const index = parseInt(key.replace('akira_img_', ''));
            imageMap[index] = value;
          });
          setAkiraImages(imageMap);
        }
        
        // Load all project images
        const allProjectImages = await getAllImages('project_');
        if (allProjectImages && Object.keys(allProjectImages).length > 0) {
          setProjectImages(allProjectImages);
        }
        
        // Load Marcel graphics images
        const marcelGraphics = await getAllImages('marcel_graphics_');
        if (marcelGraphics && Object.keys(marcelGraphics).length > 0) {
          const graphicsMap: {[key: number]: string} = {};
          Object.entries(marcelGraphics).forEach(([key, value]) => {
            const index = parseInt(key.replace('marcel_graphics_', ''));
            graphicsMap[index] = value;
          });
          setMarcelGraphicsImages(graphicsMap);
        }
        
        // Load Marcel captions
        const savedCaptions = await getImage('marcel_captions');
        if (savedCaptions) {
          try {
            const captionsArray = JSON.parse(savedCaptions);
            if (Array.isArray(captionsArray) && captionsArray.length === 6) {
              setMarcelCaptions(captionsArray);
            }
          } catch (error) {
            console.error('Error parsing saved captions:', error);
          }
        }
      } catch (error) {
        console.error('Error loading saved images:', error);
      }
    };
    
    loadImages();
  }, []);
  
  // Save akiraHeroImage to IndexedDB whenever it changes
  useEffect(() => {
    if (akiraHeroImage !== image_672df381cabdb8014754438c02c7657797c99db3) {
      saveImage('akira_hero', akiraHeroImage).catch(error => {
        console.error('Error saving hero image:', error);
      });
    }
  }, [akiraHeroImage]);
  
  // Save akiraImages to IndexedDB whenever they change
  useEffect(() => {
    if (Object.keys(akiraImages).length > 0) {
      Object.entries(akiraImages).forEach(([index, imageData]) => {
        saveImage(`akira_img_${index}`, imageData).catch(error => {
          console.error(`Error saving image ${index}:`, error);
        });
      });
    }
  }, [akiraImages]);
  
  // Save Marcel captions to IndexedDB whenever they change
  useEffect(() => {
    const hasContent = marcelCaptions.some(caption => caption.trim() !== '');
    if (hasContent) {
      saveImage('marcel_captions', JSON.stringify(marcelCaptions)).catch(error => {
        console.error('Error saving Marcel captions:', error);
      });
    }
  }, [marcelCaptions]);
  
  // Save Marcel graphics images to IndexedDB whenever they change
  useEffect(() => {
    if (Object.keys(marcelGraphicsImages).length > 0) {
      Object.entries(marcelGraphicsImages).forEach(([index, imageData]) => {
        saveImage(`marcel_graphics_${index}`, imageData).catch(error => {
          console.error(`Error saving Marcel graphics image ${index}:`, error);
        });
      });
    }
  }, [marcelGraphicsImages]);
  
  // Lookbook images array - Gladio lookbook with Unsplash placeholders
  const lookbookImages = [
    image_d30bd798930c8661f28a37c80e6de829a3bda9e6,
    image_22fc33b65f83a50726f8b012c985f87143596f3d,
    image_fd09b44a51e1bace8f760584aabf1e286a4363f4,
    image_18d0a9bcdd5fa0562e179bd723972c0376f829a7,
    image_903a90f7612deed85df8e5b88de0409faaa0f064,
    image_f2be377a6e0775607a7efb78a51c689fd349546c,
    image_34c6a284abdbed2330a29648f5c4664ab88546b2,
    image_e3d58225740db3f188a5d48af2ddd8c118ed513f,
    image_2dd2b8508142ff7e53ad2dfda83f02bc9594ccce,
    image_091ef3a0ff65609876ddb92fc9932866cbccd3f2,
    image_ba4f79a0108791fefd21ec62c8b2a2bad8e2825b,
    image_a3ceaaf83c60b0e8597f27a58d38af5471860418,
    image_e3cb4e47f7fc948810edebe4e42a8578489a0d79,
    image_711fc12c3189a2d90da2c1cf0fbfbc917ba227f0,
    image_04079bed68683ac8ea7b00772ae0ec142047c0fd,
  ];

  // Prigionieri lookbook images from Unsplash
  const prigionieriLookbookImages = [
    image_fb72a4ffd32ad468c22c65ed131d62c2547d4106,
    image_726852eda92e8f69eafeec51caa5b5a9dd8d02e3,
    image_bf89950957a1549f540206338688b8953d96defa,
    image_e698f94714f6cb88e452c9d46336d0a0c64ff282,
    image_8ac6fff55297cc66082fd3d57c961f868fe810fb,
    image_aa42da660bad9b695d23d4b6441bbd44be1ce48c,
    image_85fe137110ca28cbccfd8bdb0da50292f7ef13cb,
    image_8a792c56c3b5680bcfd924067cb98f2fc3e10e46,
    image_223e95ff32190ecc84a253b87efae5089d57545e,
    image_0725ae9e28025979b9c83c2b1886f492e2858994,
    image_2324d3b752ec65bc4aee210f980b5861c901968f,
    image_7e7aa8e4078e091d3bf68073f03efef7ce9f11f4,
    image_0a66af93681dcb0045c6851c7cfb3c5af5f86379,
    image_7c6dfbaee291ee284b755a39666475a8f5eee6bc,
    image_80d710de0c769c57bda09fa4042cfe35dfbb20b1,
    image_708d5dce66f5dcc676ed983d954f38f5b95afe5b,
    image_02dc1c2f756a60cdc6477ac890a405cc1ef402da,
    image_2df32c9774b82194b53fc705f9c6d4829b5ca0e0,
  ];

  // Tabula Rasa lookbook images from Unsplash
  const tabulaRasaLookbookImages = [
    image_41c8c19399749983bd08fe880502655f938816a7,
    image_653ced26d03657f5540d83c70d63d2bdae8db51e,
    image_e6573b0d87a01cf1bb6a35fd190e6fc862fc7781,
    image_5e2175e7b4d3e8564beaa55cb21a73c9f62b3ba2,
    image_600bd13fa4318d315e14ae2f5fc29b1f2e5f71fe,
    image_046b650602c286bb94dbb62991852cc04a124751,
  ];
  
  // Mock data for projects
  const projects = [
    {
      title: t.projects.gladio.title,
      description: t.projects.gladio.description,
      year: '2025',
      category: 'Menswear',
      images: [
        // First two images - User uploaded images
        uploadedImages['gladio-1'] || image_gladio_1,
        uploadedImages['gladio-2'] || image_gladio_2,
        image_7,
        image_8,
        image_9,
        image_10,
        image_11,
        image_12,
        image_13,
        image_14,
        image_15,
      ]
    },
    {
      title: t.projects.prigionieri.title,
      description: t.projects.prigionieri.description,
      year: '2025',
      category: 'Thesis',
      images: [
        image_267fb24c81eab5a763df6ff9cbfc156ccd47fd16,
        image_e0ee7d605cdce8368bd0f37ad1067c87cfb92517,
        image_8841b8980b55ae583f91808ba5296810558afc0c,
        image_827a7c43d3b9726a8e3b3c34068d16cada00a278,
        image_ae9095b4b79670b547795a27344bfbb1c1371bcb,
        image_9f69aef6ba94980ec094ccf85a2f76e1c8f4442f,
        image_5c36cb5b169722c6e6fdd053bcda4f80d86e2803,
        image_02ac84fbc553c23f410c592569e7a9ab98f01da0,
        image_95164f811ef1fb5598130ada0b917f2e066fefbd,
        image_a9d6601be4fa3e71b930add370c78cc92e75ab11,
      ],
      placeholderCount: 10,
    },
    {
      title: t.projects.tabulaRasa.title,
      description: t.projects.tabulaRasa.description,
      year: '2024',
      category: 'Collaboration',
      images: [
        image_b49cf72e74da069ebed394558c6fcb7b64bdc944,
        image_85e1ffc87b6d749554d346e2d45fe40f72a9c70c,
        image_2d244e5b302b9c523b2e948e6ab2d8a48e777891,
        image_e700cd453546c507261cdb7afecab790184b89d3,
        image_f8320ff2eba039f25910077471337b382289e8fd,
      ]
    },
    {
      title: t.projects.akira.title,
      description: t.projects.akira.description,
      year: '2024',
      category: 'Womenswear',
      images: [],
      placeholderImages: [
        image_0a11200e98d6e5b219b006bf1e3e398bb3688a7e,
        image_e93509f3c9c80a19067382f176094e7447824235,
        image_d5d51661c2b1b71a09720c90e601e1a1067c173b,
        image_46ba3d2657ad104c15e23cff6bba1eefe7027b39,
        image_c8b86b3fb0bf0091e1696e8fb50bc13f877c03df,
        image_7a229bc8bf0221c527a904213703a3c924154140,
        image_218e1290bc6f40e01b937549d9453ab7e47084b6,
        image_73bfc2c80dfd66052d5c7cbfad68a9e4dada8314
      ]
    },
    {
      title: t.projects.marcel.title,
      description: t.projects.marcel.description,
      year: '2023',
      category: 'Graphic Design',
      images: [
        marcelImage1,
        marcelImage2,
        marcelImage3,
        marcelImage4,
        marcelImage5,
        marcelImage6,
        marcelImage7
      ]
    },
    {
      title: t.projects.prigionieriPrint.title,
      description: t.projects.prigionieriPrint.description,
      year: '2025',
      category: 'Print Design',
      images: []
    },
  ];

  const project = projects[projectIndex];

  const handleSaveCredits = async () => {
    // Save credits to IndexedDB
    await saveImage('project_2_credits', creditsText);
    setCreditsSaved(true);
    setTimeout(() => {
      setCreditsSaved(false);
    }, 2000);
  };

  // Universal image upload handler for all projects
  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>, imageKey: string) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const result = e.target?.result as string;
        
        // Save to state
        setProjectImages(prev => ({
          ...prev,
          [imageKey]: result
        }));
        
        // Save to IndexedDB
        try {
          await saveImage(imageKey, result);
        } catch (error) {
          console.error('Error saving image:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image upload for Akira hero image
  const handleAkiraHeroUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setAkiraHeroImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image upload for Akira project
  const handleAkiraImageUpload = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setAkiraImages(prev => ({
          ...prev,
          [index]: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 bg-white z-50 overflow-hidden"
      >
        {/* Back to Gallery button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={onClose}
          className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-3 hover:bg-neutral-100 transition-colors rounded-full group"
        >
          <ArrowLeft className="w-5 h-5 text-neutral-900 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-xs uppercase tracking-wider text-neutral-600 font-[Montserrat]">{t.backToGallery}</span>
        </motion.button>

        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={onClose}
          className="fixed top-8 right-8 z-50 p-3 hover:bg-neutral-100 transition-colors rounded-full group"
        >
          <X className="w-6 h-6 text-neutral-900 group-hover:rotate-90 transition-transform duration-300" />
        </motion.button>

        {/* Language Switcher */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
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

        {/* Conditional layout based on project */}
        {projectIndex === 0 ? (
          // Vertical scrolling layout for Gladio (Project 1)
          <div className="h-full overflow-y-auto">
            {/* Text section at top */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="px-16 md:px-24 pt-24 pb-12"
            >
              <div className="max-w-6xl mx-auto text-center">
                {/* Project number */}
                <div className="text-xs text-neutral-500 tracking-widest mb-4 font-[Montserrat]">
                  — PROJECT {String(projectIndex + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl mb-6 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                  {project.title}
                </h1>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <div className="w-12 h-[1px] bg-neutral-400"></div>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                  <div className="w-12 h-[1px] bg-neutral-400"></div>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed font-[Montserrat]">
                  {project.description}
                </p>

                {/* Project details */}
                <div className="flex items-center justify-center gap-8 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-neutral-400 uppercase tracking-wider font-[Montserrat]">Year</div>
                    <div className="text-xs text-neutral-600 font-[Montserrat]">{project.year}</div>
                  </div>
                  <div className="w-[1px] h-3 bg-neutral-300"></div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-neutral-400 uppercase tracking-wider font-[Montserrat]">{t.categoryLabel}</div>
                    <div className="text-xs text-neutral-600 font-[Montserrat]">{t.categories[project.category as keyof typeof t.categories]}</div>
                  </div>
                  <button
                    onClick={() => setLookbookOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-200 text-neutral-700 text-[10px] uppercase tracking-wider hover:bg-neutral-300 transition-colors rounded-sm"
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>{t.viewLookbook}</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Images section - vertical scroll */}
            <div className="px-16 md:px-24 pb-16">
              <div className="max-w-4xl mx-auto space-y-8">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="relative bg-white shadow-2xl"
                  >
                    {/* Paper grain texture */}
                    <div 
                      className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '200px 200px'
                      }}
                    />
                    
                    <div className="p-3">
                      <img
                        src={projectImages[`project_${projectIndex}_img_${index}`] || image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* Image number */}
                    <div className="absolute bottom-4 right-4 text-xs text-neutral-400 font-[Montserrat]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ) : projectIndex === 5 ? (
          // Vertical scrolling layout for Prigionieri Print Design (Project 6)
          <div className="h-full overflow-y-auto">
            {/* Text section at top */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="px-16 md:px-24 pt-24 pb-12"
            >
              <div className="max-w-6xl mx-auto text-center">
                {/* Project number */}
                <div className="text-xs text-neutral-500 tracking-widest mb-4 font-[Montserrat]">
                  — PROJECT {String(projectIndex + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl mb-6 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                  {project.title}
                </h1>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <div className="w-12 h-[1px] bg-neutral-400"></div>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                  <div className="w-12 h-[1px] bg-neutral-400"></div>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed font-[Montserrat]">
                  {project.description}
                </p>

                {/* Project details */}
                <div className="flex items-center justify-center gap-8 mt-6">
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-neutral-400 uppercase tracking-wider font-[Montserrat]">Year</div>
                    <div className="text-xs text-neutral-600 font-[Montserrat]">{project.year}</div>
                  </div>
                  <div className="w-[1px] h-3 bg-neutral-300"></div>
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-neutral-400 uppercase tracking-wider font-[Montserrat]">{t.categoryLabel}</div>
                    <div className="text-xs text-neutral-600 font-[Montserrat]">{t.categories[project.category as keyof typeof t.categories]}</div>
                  </div>
                  <button
                    onClick={() => setThreeDCollectionOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-400 text-white text-[10px] uppercase tracking-wider hover:bg-neutral-500 transition-colors rounded-sm"
                  >
                    <span>View 3D renders</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Images section - vertical scroll */}
            <div className="px-16 md:px-24 pb-16">
              <div className="max-w-5xl mx-auto space-y-8">
                {/* Large horizontal hero image */}
                <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative bg-white shadow-2xl inline-block"
                  style={{ maxWidth: '900px' }}
                >
                  {/* Paper grain texture */}
                  <div 
                    className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'repeat',
                      backgroundSize: '200px 200px'
                    }}
                  />
                  
                  <div className="p-2 h-full flex items-center justify-center">
                    <div className="relative w-full h-full group">
                      <img
                        src={projectImages[`project_${projectIndex}_hero`] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80'}
                        alt="Prigionieri Print Design - Hero"
                        className="w-full h-full object-contain"
                      />
                      {/* Upload overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <button
                          onClick={() => {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.accept = 'image/*';
                            input.onchange = (e) => handleImageUpload(e as any, `project_${projectIndex}_hero`);
                            input.click();
                          }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-white text-neutral-900 text-xs uppercase tracking-wider font-[Montserrat] rounded-sm"
                        >
                          Carica Immagine
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 right-6 text-xs text-neutral-400 font-[Montserrat]">
                    01
                  </div>
                </motion.div>
                </div>

                {/* Grid of images - 2 columns */}
                <div className="grid grid-cols-2 gap-8">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + (index % 2) * 0.1 }}
                      className="relative bg-white shadow-xl inline-block"
                      style={{ maxWidth: '600px' }}
                    >
                      {/* Paper grain texture */}
                      <div 
                        className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'repeat',
                          backgroundSize: '200px 200px'
                        }}
                      />
                      
                      <div className="p-2 h-full flex items-center justify-center">
                        <div className="relative w-full h-full group">
                          <img
                            src={projectImages[`project_${projectIndex}_img_${index + 1}`] || `https://images.unsplash.com/photo-${['1558618666-fcd25c85cd64', '1509631179647-1cd69ade2909', '1558618666-0ba61ca5eae0', '1509631179641-7e0f6c6f8c0e', '1558618666-8a5d37b3b8e9', '1509631179643-9c5d1f3e9e9e', '1558618666-9b9b9b9b9b9b', '1509631179645-9c5d1f3e9e9f'][index]}?w=800&q=80`}
                            alt={`Prigionieri Print Design - ${index + 2}`}
                            className={`w-full h-full ${index === 2 || index === 4 ? 'object-cover' : 'object-contain'}`}
                          />
                          {/* Upload overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                            <button
                              onClick={() => {
                                const input = document.createElement('input');
                                input.type = 'file';
                                input.accept = 'image/*';
                                input.onchange = (e) => handleImageUpload(e as any, `project_${projectIndex}_img_${index + 1}`);
                                input.click();
                              }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-white text-neutral-900 text-xs uppercase tracking-wider font-[Montserrat] rounded-sm"
                            >
                              Carica Immagine
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Image number */}
                      <div className="absolute bottom-4 right-4 text-xs text-neutral-400 font-[Montserrat]">
                        {String(index + 2).padStart(2, '0')}
                      </div>
                    </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : projectIndex === 3 ? (
          // Vertical scrolling layout for Akira (Project 4) with 3 columns grid
          <div className="h-full overflow-y-auto">
            {/* Text section at top */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="px-16 md:px-24 pt-24 pb-12"
            >
              <div className="max-w-6xl mx-auto text-center">
                {/* Project number */}
                <div className="text-xs text-neutral-500 tracking-widest mb-4 font-[Montserrat]">
                  — PROJECT {String(projectIndex + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl mb-6 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                  {project.title}
                </h1>

                {/* Decorative line */}
                <div className="flex items-center justify-center gap-2 mb-8">
                  <div className="w-12 h-[1px] bg-neutral-400"></div>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                </div>

                {/* Meta info */}
                <div className="flex justify-center gap-8 mb-8 text-xs text-neutral-600 font-[Montserrat]">
                  <div>
                    <div className="text-neutral-400 uppercase tracking-wider mb-1">Year</div>
                    <div>{project.year}</div>
                  </div>
                  <div>
                    <div className="text-neutral-400 uppercase tracking-wider mb-1">{t.categoryLabel}</div>
                    <div>{t.categories[project.category as keyof typeof t.categories]}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-neutral-700 font-[Montserrat] mb-8 max-w-2xl mx-auto">
                  {projectIndex === 3
                    ? t.projects.akira.description
                    : project.description
                  }
                </p>

                {/* Scroll indicator */}
                <div className="flex items-center justify-center gap-3 text-xs text-neutral-400 uppercase tracking-wider">
                  <div className="w-8 h-[1px] bg-neutral-300"></div>
                  <span>{t.scrollToSee}</span>
                  <div className="w-8 h-[1px] bg-neutral-300"></div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image - Large horizontal image */}
            <div className="px-16 md:px-24 pb-8">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative bg-white shadow-2xl group"
                  style={{ aspectRatio: '16/9' }}
                >
                  {/* Paper grain texture */}
                  <div 
                    className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'repeat',
                      backgroundSize: '200px 200px'
                    }}
                  />
                  
                  <div className="p-4 h-full">
                    <img
                      src={akiraHeroImage}
                      alt={`${project.title} - Hero Image`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Replace button */}
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleAkiraHeroUpload}
                      className="hidden"
                      id="upload-akira-hero"
                    />
                    <label
                      htmlFor="upload-akira-hero"
                      className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-1.5 px-3 py-2 bg-neutral-900/80 text-white text-[10px] uppercase tracking-wider hover:bg-neutral-900 rounded-sm backdrop-blur-sm"
                    >
                      <Upload className="w-3 h-3" />
                      <span>Replace Hero Image</span>
                    </label>
                  </>
                </motion.div>
              </div>
            </div>

            {/* Images section - vertical grid with 2 columns */}
            <div className="px-16 md:px-24 pb-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 gap-8">
                  {(project.placeholderImages || []).map((placeholderImg: string, index: number) => {
                    const displayImage = akiraImages[index] || placeholderImg;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + (index % 2) * 0.1 }}
                        className="relative bg-white shadow-xl group"
                        style={{ aspectRatio: '4/3' }}
                      >
                        {/* Paper grain texture */}
                        <div 
                          className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'repeat',
                            backgroundSize: '200px 200px'
                          }}
                        />
                        
                        <div className="p-3 h-full">
                          <img
                            src={displayImage}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Image number */}
                        <div className="absolute bottom-4 right-4 text-xs text-neutral-400 font-[Montserrat]">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : projectIndex === 1 ? (
          // Vertical scrolling layout for Project 2 (Prigionieri)
          <div className="h-full overflow-y-auto">
            {/* Text section at top */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="px-16 md:px-24 pt-24 pb-12"
            >
              <div className="max-w-4xl mx-auto">
                {/* Project number */}
                <div className="text-xs text-neutral-500 tracking-widest mb-4 font-[Montserrat]">
                  — PROJECT {String(projectIndex + 1).padStart(2, '0')}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl mb-6 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                  {project.title}
                </h1>

                {/* Decorative line */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-12 h-[1px] bg-neutral-400"></div>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                </div>

                {/* Meta info */}
                <div className="flex gap-8 mb-8 text-xs text-neutral-600 font-[Montserrat]">
                  <div>
                    <div className="text-neutral-400 uppercase tracking-wider mb-1">Year</div>
                    <div>{project.year}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-neutral-400 uppercase tracking-wider mb-1">Category</div>
                      <div>{project.category}</div>
                    </div>
                    {project.category === 'Thesis' && (
                      <button
                        onClick={() => setPrigionieriLookbookOpen(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-200 text-neutral-700 text-[10px] uppercase tracking-wider hover:bg-neutral-300 transition-colors rounded-sm mt-4"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>{t.viewLookbook}</span>
                      </button>
                    )}
                    {project.category === 'Graphic Design' && (
                      <button
                        onClick={() => setGraphicsGalleryOpen(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-200 text-neutral-700 text-[10px] uppercase tracking-wider hover:bg-neutral-300 transition-colors rounded-sm mt-4"
                      >
                        <FileText className="w-3 h-3" />
                        <span>{t.viewGraphics}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-neutral-700 font-[Montserrat] mb-8">
                  {project.description}
                </p>

                {/* Scroll indicator */}
                <div className="flex items-center gap-3 text-xs text-neutral-400 uppercase tracking-wider">
                  <div className="w-8 h-[1px] bg-neutral-300"></div>
                  <span>{t.scrollToSee}</span>
                  <div className="w-8 h-[1px] bg-neutral-300"></div>
                </div>
              </div>
            </motion.div>

            {/* Images section - vertical grid with 2 columns */}
            <div className="px-12 md:px-16 pb-16">
              <div className="max-w-6xl mx-auto">
                {/* New horizontal Unsplash box at the top */}
                <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="relative bg-white shadow-2xl p-2 inline-block"
                  style={{ maxWidth: '900px' }}
                >
                  {/* Paper grain texture */}
                  <div 
                    className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'repeat',
                      backgroundSize: '200px 200px'
                    }}
                  />
                  
                  <div className="relative group">
                      <img
                        src={projectImages[`project_${projectIndex}_unsplash_top`] || 'https://images.unsplash.com/photo-1664293797551-2cf5c308d3c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcHJpbnQlMjBkZXNpZ24lMjB0ZXh0dXJlfGVufDF8fHx8MTc2ODMxMzg1MXww&ixlib=rb-4.1.0&q=80&w=1080'}
                        alt="Tabula Rasa - Top Image"
                        className="w-full h-auto block"
                        style={{ maxWidth: '900px', margin: '0 auto' }}
                      />
                      {/* Upload overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <button
                          onClick={() => {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.accept = 'image/*';
                            input.onchange = (e) => handleImageUpload(e as any, `project_${projectIndex}_unsplash_top`);
                            input.click();
                          }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-white text-neutral-900 text-xs uppercase tracking-wider font-[Montserrat] rounded-sm"
                        >
                          Carica Immagine
                        </button>
                      </div>
                    </div>
                  
                  <div className="absolute bottom-6 right-6 text-xs text-neutral-400 font-[Montserrat]">
                    00
                  </div>
                </motion.div>
                </div>

                {/* Large hero image */}
                {project.heroImage && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative bg-white shadow-2xl mb-8"
                    style={{ aspectRatio: '21/9', width: '100%' }}
                  >
                    {/* Paper grain texture */}
                    <div 
                      className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat',
                        backgroundSize: '200px 200px'
                      }}
                    />
                    
                    <div className="p-4 h-full">
                      <img
                        src={project.heroImage}
                        alt={`${project.title} - Hero Image`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Grid of 2 columns */}
                <div className="grid grid-cols-2 gap-8">
                  {project.images.length > 0 ? (
                    project.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + (index % 2) * 0.1 }}
                        className="relative bg-white shadow-xl"
                        style={{ aspectRatio: '4/3' }}
                      >
                        {/* Paper grain texture */}
                        <div 
                          className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'repeat',
                            backgroundSize: '200px 200px'
                          }}
                        />
                        
                        <div className="p-3 h-full">
                          <img
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Image number */}
                        <div className="absolute bottom-4 right-4 text-xs text-neutral-400 font-[Montserrat]">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    // Placeholder boxes for empty projects
                    Array.from({ length: project.placeholderCount || 12 }).map((_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + (index % 2) * 0.1 }}
                        className="relative bg-white border-2 border-dashed border-neutral-300 shadow-xl flex items-center justify-center"
                        style={{ aspectRatio: '4/3' }}
                      >
                        <div className="text-center text-neutral-400 font-[Montserrat]">
                          <div className="text-4xl mb-2">{String(index + 1).padStart(2, '0')}</div>
                          <div className="text-xs tracking-wider uppercase">Immagine da inserire</div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Horizontal scrolling layout for other projects
          <div className="h-full overflow-x-auto overflow-y-hidden">
            <div className="h-full inline-flex" style={{ minWidth: '100%' }}>
              {/* Text section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex-shrink-0 h-full flex items-center px-16 md:px-24"
                style={{ width: '50vw' }}
              >
                <div className="max-w-xl">
                  {/* Project number */}
                  <div className="text-xs text-neutral-500 tracking-widest mb-4 font-[Montserrat]">
                    — PROJECT {String(projectIndex + 1).padStart(2, '0')}
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl mb-6 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                    {project.title}
                  </h1>

                  {/* Decorative line */}
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                    <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                  </div>

                  {/* Meta info */}
                  <div className="flex gap-8 mb-8 text-xs text-neutral-600 font-[Montserrat]">
                    <div>
                      <div className="text-neutral-400 uppercase tracking-wider mb-1">Year</div>
                      <div>{project.year}</div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <div className="text-neutral-400 uppercase tracking-wider mb-1">Category</div>
                        <div>{project.category}</div>
                      </div>
                      {project.category === 'Graphic Design' && (
                        <button
                          onClick={() => setGraphicsGalleryOpen(true)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-200 text-neutral-700 text-[10px] uppercase tracking-wider hover:bg-neutral-300 transition-colors rounded-sm mt-4"
                        >
                          <FileText className="w-3 h-3" />
                          <span>View Graphics</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* View Lookbook button */}
                  {project.category === 'Menswear' && (
                    <div className="mb-8">
                      <button
                        onClick={() => setLookbookOpen(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-200 text-neutral-700 text-[10px] uppercase tracking-wider hover:bg-neutral-300 transition-colors rounded-sm"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>{t.viewLookbook}</span>
                      </button>
                    </div>
                  )}

                  {/* View Lookbook button for Tabula Rasa */}
                  {project.category === 'Collaboration' && (
                    <div className="mb-8">
                      <button
                        onClick={() => setTabulaRasaLookbookOpen(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-500 text-white text-[10px] uppercase tracking-wider hover:bg-neutral-600 transition-colors rounded-sm"
                      >
                        <BookOpen className="w-3 h-3" />
                        <span>{t.viewLookbook}</span>
                      </button>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-neutral-700 font-[Montserrat]">
                    {project.description}
                  </p>

                  {/* Scroll indicator */}
                  <div className="mt-12 flex items-center gap-3 text-xs text-neutral-400 uppercase tracking-wider">
                    <div className="w-8 h-[1px] bg-neutral-300"></div>
                    <span>{t.scrollToSee}</span>
                    <div className="w-8 h-[1px] bg-neutral-300"></div>
                  </div>
                </div>
              </motion.div>

              {/* Images section - horizontal gallery */}
              <div className="flex-shrink-0 h-full flex items-center gap-6 pl-0 pr-24 pb-8">
                {project.images.length > 0 ? (
                  project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="relative bg-white shadow-xl group"
                      style={{ 
                        height: '50vh', 
                        width: (projectIndex === 2 && index === 2) ? '35vh' : '70vh'
                      }}
                    >
                      {/* Paper grain texture */}
                      <div 
                        className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'repeat',
                          backgroundSize: '200px 200px'
                        }}
                      />
                      
                      <div className="p-3 h-full">
                        <img
                          src={projectImages[`project_${projectIndex}_img_${index}`] || image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover p-[0px] rounded-[0px]"
                          style={index === 1 ? { objectPosition: 'center 30%' } : undefined}
                        />
                      </div>

                      {/* Image number */}
                      <div className="absolute bottom-4 right-4 text-xs text-neutral-400 font-[Montserrat]">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  // Placeholder boxes for empty projects
                  Array.from({ length: project.placeholderCount || 6 }).map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="relative bg-white border-2 border-dashed border-neutral-300 shadow-xl flex items-center justify-center"
                      style={{ height: '50vh', width: '70vh' }}
                    >
                      <div className="text-center text-neutral-400 font-[Montserrat]">
                        <div className="text-4xl mb-2">{String(index + 1).padStart(2, '0')}</div>
                        <div className="text-xs tracking-wider uppercase">Immagine da inserire</div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* End spacer */}
              <div className="flex-shrink-0" style={{ width: '10vw' }}></div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Lookbook Overlay */}
      <AnimatePresence>
        {lookbookOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-[60] overflow-hidden"
          >
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setLookbookOpen(false)}
              className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-3 hover:bg-neutral-100 transition-colors rounded-full group"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-900 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-xs uppercase tracking-wider text-neutral-600 font-[Montserrat]">Back to Project</span>
            </motion.button>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="fixed top-8 right-8 z-50 p-3 hover:bg-neutral-100 transition-colors rounded-full group"
            >
              <X className="w-6 h-6 text-neutral-900 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Lookbook content - vertical scroll with grid */}
            <div className="h-full overflow-y-auto">
              {/* Title section */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="px-16 md:px-24 pt-24 pb-12"
              >
                <div className="max-w-4xl mx-auto text-center">
                  <div className="text-xs text-neutral-400 uppercase tracking-widest mb-4 font-[Montserrat]">
                    — Lookbook
                  </div>
                  <h2 className="text-5xl mb-4 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                    Gladio
                  </h2>
                  <div className="flex items-center gap-2 justify-center mb-6">
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                    <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                  </div>
                  <p className="text-sm text-neutral-600 font-[Montserrat]">Gladio - Fotogrammi</p>
                  
                  {/* Scroll indicator */}
                  <div className="flex items-center gap-3 text-xs text-neutral-400 uppercase tracking-wider justify-center mt-8">
                    <div className="w-8 h-[1px] bg-neutral-300"></div>
                    <span>Scroll per esplorare</span>
                    <div className="w-8 h-[1px] bg-neutral-300"></div>
                  </div>
                </div>
              </motion.div>

              {/* Lookbook Images - vertical grid with 3 columns */}
              <div className="px-16 md:px-24 pb-16">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-3 gap-6">
                    {lookbookImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + (index % 3) * 0.1 }}
                        className="relative bg-white shadow-2xl"
                        style={{ aspectRatio: '3/4' }}
                      >
                        {/* Paper grain texture */}
                        <div 
                          className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'repeat',
                            backgroundSize: '200px 200px'
                          }}
                        />

                        {/* Image content */}
                        <div className="p-3 h-full">
                          <img
                            src={image}
                            alt={`Gladio Lookbook - Look ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Prigionieri Lookbook Overlay - Horizontal Scroll */}
      <AnimatePresence>
        {prigionieriLookbookOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-[60] overflow-hidden"
          >
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setPrigionieriLookbookOpen(false)}
              className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-3 hover:bg-neutral-100 transition-colors rounded-full group"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-900 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-xs uppercase tracking-wider text-neutral-600 font-[Montserrat]">Back to Project</span>
            </motion.button>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="fixed top-8 right-8 z-50 p-3 hover:bg-neutral-100 transition-colors rounded-full group"
            >
              <X className="w-6 h-6 text-neutral-900 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Lookbook content - vertical scroll */}
            <div className="h-full overflow-y-auto">
              {/* Title section */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="px-16 md:px-24 pt-24 pb-12"
              >
                <div className="max-w-7xl mx-auto text-center">
                  <div className="text-xs text-neutral-400 uppercase tracking-widest mb-4 font-[Montserrat]">
                    — Lookbook
                  </div>
                  <h2 className="text-5xl mb-4 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                    Prigionieri
                  </h2>
                  <div className="flex items-center gap-2 justify-center mb-6">
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                    <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                  </div>
                  <p className="text-sm text-neutral-600 font-[Montserrat] mb-8">
                    Prigionieri - Lookbook
                  </p>
                  
                  {/* Scroll indicator */}
                  <div className="flex items-center gap-3 text-xs text-neutral-400 uppercase tracking-wider justify-center">
                    <div className="w-8 h-[1px] bg-neutral-300"></div>
                    <span>Scroll per esplorare</span>
                    <div className="w-8 h-[1px] bg-neutral-300"></div>
                  </div>
                </div>
              </motion.div>

              {/* Lookbook Images - vertical grid with 3 columns */}
              <div className="px-16 md:px-24 pb-8">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-3 gap-8">
                    {prigionieriLookbookImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + (index % 3) * 0.1 }}
                        className="relative bg-white shadow-2xl"
                        style={{ aspectRatio: '3/4' }}
                      >
                        {/* Paper grain texture */}
                        <div 
                          className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'repeat',
                            backgroundSize: '200px 200px'
                          }}
                        />

                        {/* Image content */}
                        <div className="p-4 h-full">
                          <img
                            src={image}
                            alt={`Prigionieri Lookbook - Look ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Image number */}
                        <div className="absolute bottom-6 right-6 text-xs text-neutral-400 font-[Montserrat]">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Credits Button - Centered below grid */}
              <div className="px-16 md:px-24 pb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex justify-center"
                >
                  <button
                    onClick={() => setCreditsOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-neutral-500 text-white text-xs uppercase tracking-wider hover:bg-neutral-600 transition-colors rounded-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Credits</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tabula Rasa Lookbook Overlay - Vertical Scroll */}
      <AnimatePresence>
        {tabulaRasaLookbookOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-[60] overflow-hidden"
          >
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setTabulaRasaLookbookOpen(false)}
              className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-3 hover:bg-neutral-100 transition-colors rounded-full group"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-900 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-xs uppercase tracking-wider text-neutral-600 font-[Montserrat]">Back to Project</span>
            </motion.button>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="fixed top-8 right-8 z-50 p-3 hover:bg-neutral-100 transition-colors rounded-full group"
            >
              <X className="w-6 h-6 text-neutral-900 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Lookbook content - vertical scroll */}
            <div className="h-full overflow-y-auto">
              {/* Title section */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="px-16 md:px-24 pt-24 pb-12"
              >
                <div className="max-w-7xl mx-auto text-center">
                  <div className="text-xs text-neutral-400 uppercase tracking-widest mb-4 font-[Montserrat]">
                    — Lookbook
                  </div>
                  <h2 className="text-5xl mb-4 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                    Tabula Rasa
                  </h2>
                  <div className="flex items-center gap-2 justify-center mb-6">
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                    <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                  </div>
                  <p className="text-sm text-neutral-600 font-[Montserrat] mb-8">
                    Tabula Rasa - Lookbook
                  </p>
                  
                  {/* Scroll indicator */}
                  <div className="flex items-center gap-3 text-xs text-neutral-400 uppercase tracking-wider justify-center">
                    <div className="w-8 h-[1px] bg-neutral-300"></div>
                    <span>Scroll per esplorare</span>
                    <div className="w-8 h-[1px] bg-neutral-300"></div>
                  </div>
                </div>
              </motion.div>

              {/* Lookbook Images - vertical grid with 3 columns */}
              <div className="px-16 md:px-24 pb-8">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-3 gap-6">
                    {tabulaRasaLookbookImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 + (index % 3) * 0.1 }}
                        className="relative bg-white shadow-2xl"
                        style={{ aspectRatio: '3/5' }}
                      >
                        {/* Paper grain texture */}
                        <div 
                          className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'repeat',
                            backgroundSize: '200px 200px'
                          }}
                        />

                        {/* Image content */}
                        <div className="p-4 h-full">
                          <img
                            src={image}
                            alt={`Tabula Rasa Lookbook - ${index + 1}`}
                            className="w-full h-full object-contain grayscale"
                          />
                        </div>

                        {/* Image number */}
                        <div className="absolute bottom-6 right-6 text-xs text-neutral-400 font-[Montserrat]">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Graphics Gallery Overlay - Horizontal Scroll */}
      <AnimatePresence>
        {graphicsGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-[60] overflow-hidden"
          >
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setGraphicsGalleryOpen(false)}
              className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-3 hover:bg-neutral-100 transition-colors rounded-full group"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-900 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-xs uppercase tracking-wider text-neutral-600 font-[Montserrat]">Back to Project</span>
            </motion.button>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="fixed top-8 right-8 z-50 p-3 hover:bg-neutral-100 transition-colors rounded-full group"
            >
              <X className="w-6 h-6 text-neutral-900 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Graphics Gallery - Vertical Scroll */}
            <div className="h-full overflow-y-auto">
              {/* Title section */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="px-16 md:px-24 pt-24 pb-12"
              >
                <div className="max-w-7xl mx-auto text-center">
                  <div className="text-xs text-neutral-400 uppercase tracking-widest mb-4 font-[Montserrat]">
                    — {t.graphicsGallery}
                  </div>
                  <h2 className="text-5xl mb-4 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                    Marcel
                  </h2>
                  <div className="flex items-center gap-2 justify-center mb-6">
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                    <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                  </div>
                  <p className="text-sm text-neutral-600 font-[Montserrat] mb-8">
                    {t.projects.marcel.graphicsSubtitle}
                  </p>
                  
                  {/* Scroll indicator */}
                  <div className="flex items-center gap-3 text-xs text-neutral-400 uppercase tracking-wider justify-center">
                    <div className="w-8 h-[1px] bg-neutral-300"></div>
                    <span>{t.scrollToSee}</span>
                    <div className="w-8 h-[1px] bg-neutral-300"></div>
                  </div>
                </div>
              </motion.div>

              {/* Vertical scrolling images - mixed grid */}
              <div className="px-16 md:px-24 pb-16">
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-3 gap-6">
                    {graphicsImages.map((image, index) => {
                      const displayImage = marcelGraphicsImages[index] || image;
                      return (
                      <div key={index} className="flex flex-col">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 + (index % 3) * 0.1 }}
                          className="relative bg-white shadow-2xl"
                          style={{ aspectRatio: '3/4' }}
                        >
                          {/* Paper grain texture */}
                          <div 
                            className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-multiply"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                              backgroundRepeat: 'repeat',
                              backgroundSize: '200px 200px'
                            }}
                          />

                          {/* Image content */}
                          <div className="p-3 h-full">
                            <ImageWithFallback
                              src={displayImage}
                              alt={`Marcel Graphics - ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Image number */}
                          <div className="absolute bottom-4 right-4 text-xs text-neutral-400 font-[Montserrat]">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </motion.div>
                        
                        {/* Caption input */}
                        <motion.input
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 + (index % 3) * 0.1 }}
                          type="text"
                          value={marcelCaptions[index]}
                          onChange={(e) => {
                            const newCaptions = [...marcelCaptions];
                            newCaptions[index] = e.target.value;
                            setMarcelCaptions(newCaptions);
                          }}
                          placeholder={t.addCaption}
                          className="mt-3 px-3 py-2 text-xs text-center text-neutral-600 bg-neutral-50 border border-neutral-200 rounded-sm font-[Montserrat] focus:outline-none focus:border-neutral-400 transition-colors placeholder:text-neutral-400"
                        />
                      </div>
                    )})}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Credits Overlay */}
      <AnimatePresence>
        {creditsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-[70] overflow-hidden"
          >
            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setCreditsOpen(false)}
              className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-3 hover:bg-neutral-100 transition-colors rounded-full group"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-900 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-xs uppercase tracking-wider text-neutral-600 font-[Montserrat]">Back to Lookbook</span>
            </motion.button>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setCreditsOpen(false)}
              className="fixed top-8 right-8 z-50 p-3 hover:bg-neutral-100 transition-colors rounded-full group"
            >
              <X className="w-6 h-6 text-neutral-900 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Credits content */}
            <div className="h-full flex items-center justify-center px-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-3xl"
              >
                {/* Title */}
                <div className="text-center mb-8">
                  <div className="text-xs text-neutral-400 uppercase tracking-widest mb-4 font-[Montserrat]">
                    — Credits
                  </div>
                  <h2 className="text-4xl mb-4 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                    Prigionieri
                  </h2>
                  <div className="flex items-center gap-2 justify-center mb-6">
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                    <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                  </div>
                </div>

                {/* Credits text area - clean minimal style */}
                <textarea
                  value={creditsText}
                  onChange={(e) => setCreditsText(e.target.value)}
                  className="w-full h-96 bg-transparent hover:bg-neutral-50/50 focus:bg-neutral-50/30 focus:outline-none text-sm text-neutral-800 font-[Montserrat] resize-none leading-relaxed text-center transition-colors cursor-text"
                  placeholder="Inserisci i credits del progetto..."
                  autoFocus
                />
                {/* Save button */}
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleSaveCredits}
                    className="flex items-center gap-2 px-6 py-3 bg-neutral-500 text-white text-xs uppercase tracking-wider hover:bg-neutral-600 transition-colors rounded-sm"
                  >
                    <Check className="w-4 h-4" />
                    <span>Save Credits</span>
                  </button>
                </div>
                {/* Confirmation message */}
                {creditsSaved && (
                  <div className="text-center mt-2 text-sm text-neutral-500 font-[Montserrat]">
                    Credits saved!
                  </div>
                )}

                {/* Back to Gallery button */}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={onClose}
                    className="flex items-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-600 text-xs uppercase tracking-wider hover:bg-neutral-100 hover:border-neutral-400 transition-colors rounded-sm group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span>{t.backToGallery}</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 3D Collection Overlay - Vertical Scroll */}
      <AnimatePresence>
        {threeDCollectionOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-50 z-50 overflow-y-auto"
          >
            <div className="min-h-screen py-16">
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setThreeDCollectionOpen(false)}
                className="fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-3 hover:bg-neutral-100 transition-colors rounded-full group"
              >
                <ArrowLeft className="w-5 h-5 text-neutral-700 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm text-neutral-700 uppercase tracking-wider font-[Montserrat]">Back</span>
              </motion.button>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-7xl mx-auto px-16"
              >
                {/* Title */}
                <div className="text-center mb-16">
                  <div className="text-xs text-neutral-400 uppercase tracking-widest mb-4 font-[Montserrat]">
                    — 3D Digital Collection
                  </div>
                  <h2 className="text-5xl mb-4 text-neutral-900 font-[Montserrat]" style={{ letterSpacing: '-0.02em' }}>
                    Prigionieri - Printdesign
                  </h2>
                  <div className="flex items-center gap-2 justify-center mb-6">
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                    <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                    <div className="w-12 h-[1px] bg-neutral-400"></div>
                  </div>
                  <p className="text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed font-[Montserrat]">
                    Selection of 3D renders based on the print design project "Prigionieri"
                  </p>
                </div>

                {/* Images in pairs of 2 */}
                <div className="space-y-6">
                  {/* Pair 1 */}
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-neutral-100 overflow-hidden flex items-center justify-center"
                      style={{ height: '450px' }}
                    >
                      <img
                        src={image_d54b3bb85ae394a41c34f90b77c7f03db2f6f8b6}
                        alt="3D Render - 1"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-neutral-100 overflow-hidden flex items-center justify-center"
                      style={{ height: '450px' }}
                    >
                      <img
                        src={image_760f43f470f8790c70d8bcb386cb0c7ab99a2565}
                        alt="3D Render - 2"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Pair 2 */}
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="bg-neutral-100 overflow-hidden flex items-center justify-center"
                      style={{ height: '450px' }}
                    >
                      <img
                        src={image_a5d9c621a90a9c9868dbfbe3c02bcb00381321b0}
                        alt="3D Render - 3"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="bg-neutral-100 overflow-hidden flex items-center justify-center"
                      style={{ height: '450px' }}
                    >
                      <img
                        src={image_90a431516799abb410c047047d6d097961108ee2}
                        alt="3D Render - 4"
                        className="w-full h-full object-contain"
                        style={{ transform: 'scale(1.52)' }}
                      />
                    </motion.div>
                  </div>

                  {/* Pair 3 */}
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="bg-neutral-100 overflow-hidden flex items-center justify-center"
                      style={{ height: '450px' }}
                    >
                      <img
                        src={image_32e569d791887e47dbed9712497d25ba34501001}
                        alt="3D Render - 5"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="bg-neutral-100 overflow-hidden flex items-center justify-center"
                      style={{ height: '450px' }}
                    >
                      <img
                        src={image_b14eef33786a19c94d96b0fab3ce8707485cbb3b}
                        alt="3D Render - 6"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Pair 4 */}
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                      className="bg-neutral-100 overflow-hidden flex items-center justify-center"
                      style={{ height: '450px' }}
                    >
                      <img
                        src={image_075e7d524d806d92dac5f807bdcd66cad7a25095}
                        alt="3D Render - 7"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                      className="bg-neutral-100 overflow-hidden flex items-center justify-center"
                      style={{ height: '450px' }}
                    >
                      <img
                        src={image_d2574065653e3a5ea32f258c498e9ae79ba8135c}
                        alt="3D Render - 8"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Pair 5 */}
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="bg-neutral-100 overflow-hidden flex items-center justify-center"
                      style={{ height: '450px' }}
                    >
                      <img
                        src={image_efff54ad5f23215365b94ee6e8466ac84a55950a}
                        alt="3D Render - 9"
                        className="w-full h-full object-contain"
                        style={{ transform: 'scale(0.98)' }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 }}
                      className="bg-neutral-100 overflow-hidden flex items-center justify-center"
                      style={{ height: '450px' }}
                    >
                      <img
                        src={image_951926a790c20808802c6d84427be07c922bfc94}
                        alt="3D Render - 10"
                        className="w-full h-full object-contain"
                        style={{ transform: 'scale(0.98)' }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}