/**
 * Utility functions for generating placeholder images
 * Used as fallbacks when figma:asset imports are not available
 */

/**
 * Generate a placeholder SVG data URL
 * @param width - Image width
 * @param height - Image height
 * @param text - Text to display in placeholder
 * @param bgColor - Background color (hex)
 * @param textColor - Text color (hex)
 */
export function generatePlaceholder(
  width: number = 800,
  height: number = 600,
  text: string = 'Image',
  bgColor: string = '#f5f5f0',
  textColor: string = '#a3a3a3'
): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${textColor}" stroke-width="0.5" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="Montserrat, sans-serif"
        font-size="24"
        fill="${textColor}"
        opacity="0.5"
      >${text}</text>
    </svg>
  `.trim();
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Common placeholder presets
 */
export const PLACEHOLDERS = {
  signatureImage: generatePlaceholder(300, 100, 'Signature', '#f5f5f0', '#a3a3a3'),
  profileImage: generatePlaceholder(400, 500, 'Profile Photo', '#f5f5f0', '#a3a3a3'),
  coverImage: generatePlaceholder(800, 1200, 'Gladio', '#f5f5f0', '#a3a3a3'),
  prigionieriImage: generatePlaceholder(800, 1200, 'Prigionieri', '#f5f5f0', '#a3a3a3'),
  thirdImage: generatePlaceholder(800, 1200, 'Tabula Rasa', '#f5f5f0', '#a3a3a3'),
  fourthImage: generatePlaceholder(800, 1200, 'Akira', '#f5f5f0', '#a3a3a3'),
  fifthImage: generatePlaceholder(800, 1200, 'Marcel', '#f5f5f0', '#a3a3a3'),
  sixthImage: generatePlaceholder(800, 1200, 'Prigionieri Print', '#f5f5f0', '#a3a3a3'),
  projectCover: generatePlaceholder(800, 1000, 'Project Cover', '#f5f5f0', '#a3a3a3'),
  projectImage: generatePlaceholder(1200, 800, 'Project Image', '#f5f5f0', '#a3a3a3'),
  lookbookImage: generatePlaceholder(600, 800, 'Lookbook', '#f5f5f0', '#a3a3a3'),
  graphicsImage: generatePlaceholder(800, 1066, 'Graphics', '#f5f5f0', '#a3a3a3'),
} as const;

/**
 * Get placeholder by type
 */
export function getPlaceholder(type: keyof typeof PLACEHOLDERS): string {
  return PLACEHOLDERS[type];
}
