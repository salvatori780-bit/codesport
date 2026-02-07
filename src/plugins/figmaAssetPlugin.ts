import { Plugin } from 'vite';
import { PLACEHOLDERS, generatePlaceholder } from '../utils/placeholders';

/**
 * Vite plugin to handle figma:asset imports during build
 * Converts figma:asset URLs to placeholder SVGs
 */
export function figmaAssetPlugin(): Plugin {
  const FIGMA_ASSET_PREFIX = 'figma:asset/';
  
  return {
    name: 'vite-plugin-figma-asset',
    
    resolveId(id: string) {
      // Handle figma:asset imports
      if (id.startsWith(FIGMA_ASSET_PREFIX)) {
        return '\0' + id; // Mark as virtual module
      }
      return null;
    },
    
    load(id: string) {
      // Generate placeholder for figma:asset imports
      if (id.startsWith('\0' + FIGMA_ASSET_PREFIX)) {
        const assetId = id.replace('\0' + FIGMA_ASSET_PREFIX, '').replace('.png', '');
        
        // Generate a placeholder SVG
        const placeholder = generatePlaceholder(
          800, 
          1200, 
          'Project Image', 
          '#f5f5f0', 
          '#a3a3a3'
        );
        
        // Return as default export
        return `export default "${placeholder}";`;
      }
      return null;
    },
  };
}
