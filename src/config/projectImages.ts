/**
 * Project Images Configuration
 * 
 * This file centralizes all project image paths for easy management and deployment.
 * Replace placeholder paths with your actual images in /public/images/projects/
 */

// Project 1: Prigionieri dell'Avanguardia
export const project1Images = {
  hero: '/images/projects/project1/hero.jpg',
  image1: '/images/projects/project1/image1.jpg',
  image2: '/images/projects/project1/image2.jpg',
  image3: '/images/projects/project1/image3.jpg',
  image4: '/images/projects/project1/image4.jpg',
  image5: '/images/projects/project1/image5.jpg',
  image6: '/images/projects/project1/image6.jpg',
  image7: '/images/projects/project1/image7.jpg',
  image8: '/images/projects/project1/image8.jpg',
  image9: '/images/projects/project1/image9.jpg',
  image10: '/images/projects/project1/image10.jpg',
};

// Project 2: Tabula Rasa
export const project2Images = {
  hero: '/images/projects/project2/hero.jpg',
  image1: '/images/projects/project2/image1.jpg',
  image2: '/images/projects/project2/image2.jpg',
  image3: '/images/projects/project2/image3.jpg',
  image4: '/images/projects/project2/image4.jpg',
  image5: '/images/projects/project2/image5.jpg',
  image6: '/images/projects/project2/image6.jpg',
  image7: '/images/projects/project2/image7.jpg',
  image8: '/images/projects/project2/image8.jpg',
  image9: '/images/projects/project2/image9.jpg',
  image10: '/images/projects/project2/image10.jpg',
};

// Project 3: Gladio
export const project3Images = {
  hero: '/images/projects/project3/hero.jpg',
  image1: '/images/projects/project3/image1.jpg',
  image2: '/images/projects/project3/image2.jpg',
  image3: '/images/projects/project3/image3.jpg',
  image4: '/images/projects/project3/image4.jpg',
  image5: '/images/projects/project3/image5.jpg',
  image6: '/images/projects/project3/image6.jpg',
  image7: '/images/projects/project3/image7.jpg',
  image8: '/images/projects/project3/image8.jpg',
};

// Project 4: Artusi
export const project4Images = {
  hero: '/images/projects/project4/hero.jpg',
  image1: '/images/projects/project4/image1.jpg',
  image2: '/images/projects/project4/image2.jpg',
  image3: '/images/projects/project4/image3.jpg',
  image4: '/images/projects/project4/image4.jpg',
  image5: '/images/projects/project4/image5.jpg',
  image6: '/images/projects/project4/image6.jpg',
  image7: '/images/projects/project4/image7.jpg',
  image8: '/images/projects/project4/image8.jpg',
};

// Project 5: Collection 5
export const project5Images = {
  hero: '/images/projects/project5/hero.jpg',
  image1: '/images/projects/project5/image1.jpg',
  image2: '/images/projects/project5/image2.jpg',
  image3: '/images/projects/project5/image3.jpg',
  image4: '/images/projects/project5/image4.jpg',
  image5: '/images/projects/project5/image5.jpg',
  image6: '/images/projects/project5/image6.jpg',
  image7: '/images/projects/project5/image7.jpg',
  image8: '/images/projects/project5/image8.jpg',
};

// Project 6: Prigionieri Print Design (Marcel)
export const project6Images = {
  hero: '/images/projects/project6/hero.jpg',
  image1: '/images/projects/project6/image1.jpg',
  image2: '/images/projects/project6/image2.jpg',
  image3: '/images/projects/project6/image3.jpg',
  image4: '/images/projects/project6/image4.jpg',
  image5: '/images/projects/project6/image5.jpg',
  image6: '/images/projects/project6/image6.jpg',
  image7: '/images/projects/project6/image7.jpg',
  graphics: [
    '/images/projects/project6/graphics1.jpg',
    '/images/projects/project6/graphics2.jpg',
    '/images/projects/project6/graphics3.jpg',
    '/images/projects/project6/graphics4.jpg',
    '/images/projects/project6/graphics5.jpg',
    '/images/projects/project6/graphics6.jpg',
  ]
};

// Portfolio Page Cover Images
export const portfolioCovers = [
  '/images/projects/project1/cover.jpg',  // Prigionieri dell'Avanguardia
  '/images/projects/project2/cover.jpg',  // Tabula Rasa
  '/images/projects/project3/cover.jpg',  // Gladio
  '/images/projects/project4/cover.jpg',  // Artusi
  '/images/projects/project5/cover.jpg',  // Collection 5
  '/images/projects/project6/cover.jpg',  // Marcel
];

// Helper function to get all images for a project
export function getProjectImages(projectId: number) {
  switch (projectId) {
    case 0: return project1Images;
    case 1: return project2Images;
    case 2: return project3Images;
    case 3: return project4Images;
    case 4: return project5Images;
    case 5: return project6Images;
    default: return project1Images;
  }
}

// Placeholder fallback
export const placeholderImage = '/images/placeholder.svg';
