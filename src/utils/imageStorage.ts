// IndexedDB utilities for storing images
const DB_NAME = 'PortfolioImagesDB';
const STORE_NAME = 'images';
const DB_VERSION = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

export async function saveImage(key: string, imageData: string): Promise<void> {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.put(imageData, key);
    
    return new Promise((resolve, reject) => {
      transaction.oncomplete = () => {
        db.close();
        resolve();
      };
      transaction.onerror = () => {
        db.close();
        reject(transaction.error);
      };
    });
  } catch (error) {
    console.error('Error saving image:', error);
    throw error;
  }
}

export async function getImage(key: string): Promise<string | null> {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(key);
    
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        db.close();
        resolve(request.result || null);
      };
      request.onerror = () => {
        db.close();
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Error getting image:', error);
    return null;
  }
}

export async function getAllImages(prefix: string): Promise<{[key: string]: string}> {
  try {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAllKeys();
    
    return new Promise((resolve, reject) => {
      request.onsuccess = async () => {
        const keys = request.result as string[];
        const matchingKeys = keys.filter(key => key.startsWith(prefix));
        const images: {[key: string]: string} = {};
        
        for (const key of matchingKeys) {
          const getRequest = store.get(key);
          await new Promise<void>((resolveGet) => {
            getRequest.onsuccess = () => {
              images[key] = getRequest.result;
              resolveGet();
            };
          });
        }
        
        db.close();
        resolve(images);
      };
      request.onerror = () => {
        db.close();
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Error getting all images:', error);
    return {};
  }
}
