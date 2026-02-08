// ══════════════════════════════════════════════════════════════════
// CONFIGURAZIONE IMMAGINI PROGETTO - GitHub Raw URLs
// Lazy loading - Le immagini NON vengono bundlate (bundle leggero!)
// ══════════════════════════════════════════════════════════════════

const GITHUB_BASE = 'https://raw.githubusercontent.com/salvatori780-bit/imagesportfoliooo/main/prog.%20figma/';

// Helper per creare URL immagini
export const getImageUrl = (filename: string): string => `${GITHUB_BASE}${filename}`;

// Map hash → filename per tutte le 98 immagini
export const imageFiles = {
  // Graphics gallery images (Project 6)
  graphics1: '8edff57b16beb14c2ea6421668fa71a244bf9d9c.png',
  graphics2: 'dc534b792b0d338dc7bc2b27065eb9f471334dc2.png',
  graphics3: '2565569d5045bbdc037d9657cff9d89005de78e5.png',
  graphics4: 'be62aec909ecd9c2a33f69d2435b5c78fb5287e3.png',
  graphics5: '67c1d5df6152c1f7687ce984fd60aba6d269b04a.png',
  graphics6: '947b1480fd2c27cbe944c20974d59f6ee50e2436.png',
  
  // Marcel/Fifth project images
  fifthImage: '04d470ea235961b181e9f8e76df4a88df44ddd7f.png',
  marcel2: '78cc8121f7f0bfabae7d7e27f086445050a13024.png',
  marcel3: '03ab7bda2b8830582eaf387f56a7000a6a8e87d6.png',
  
  // Prigionieri project images (10 images)
  prig1: '267fb24c81eab5a763df6ff9cbfc156ccd47fd16.png',
  prig2: 'e0ee7d605cdce8368bd0f37ad1067c87cfb92517.png',
  prig3: '8841b8980b55ae583f91808ba5296810558afc0c.png',
  prig4: '827a7c43d3b9726a8e3b3c34068d16cada00a278.png',
  prig5: 'ae9095b4b79670b547795a27344bfbb1c1371bcb.png',
  prig6: '9f69aef6ba94980ec094ccf85a2f76e1c8f4442f.png',
  prig7: '5c36cb5b169722c6e6fdd053bcda4f80d86e2803.png',
  prig8: '02ac84fbc553c23f410c592569e7a9ab98f01da0.png',
  prig9: '95164f811ef1fb5598130ada0b917f2e066fefbd.png',
  prig10: 'a9d6601be4fa3e71b930add370c78cc92e75ab11.png',
  
  // Gladio project images (13 images)
  gladio1: 'e453ea91ddd57dea8dd86b2977ce20d4c7b8815b.png',
  gladio2: '7e2a7a5a23e0b7d01cf8186841caff37e8ca5e35.png',
  gladio3: 'aa48c2c3eaf9fe81a88fb45dc18fba8b533e50ca.png',
  gladio4: 'd6d71f9f16754fa9e7af06c42dd3def5e6aaea83.png',
  gladio5: '2c49b8d2fdf27f51b6aedc27e52c9ef8b664a11c.png',
  gladio6: '1f73dd940a6bfc41f39baea5ad7cbfb4938e8d01.png',
  gladio7: 'db07c727fb63c4cf3ffe06754793a7b78687f9ae.png',
  gladio8: '03ef3b1c644e6c04a954d2a2c765d942c8ef81f2.png',
  gladio9: '65a3308d66293f575deb0d34c4abfab11aef904a.png',
  gladio10: '660a235ef2ff90769846eb7fe99fe854f132cc7b.png',
  gladio11: '4dae32a8ab9d6750f1768a78bec3b279d5850100.png',
  gladio12: '248e9cafe1799179403358f6ebc2f9988f6d82e7.png',
  gladio13: '40042c74de23f20a929649cce38f8abc9f069b50.png',
  
  // Prigionieri lookbook images (18 images)
  lookbook1: 'fb72a4ffd32ad468c22c65ed131d62c2547d4106.png',
  lookbook2: '726852eda92e8f69eafeec51caa5b5a9dd8d02e3.png',
  lookbook3: 'bf89950957a1549f540206338688b8953d96defa.png',
  lookbook4: 'e698f94714f6cb88e452c9d46336d0a0c64ff282.png',
  lookbook5: '8ac6fff55297cc66082fd3d57c961f868fe810fb.png',
  lookbook6: 'aa42da660bad9b695d23d4b6441bbd44be1ce48c.png',
  lookbook7: '85fe137110ca28cbccfd8bdb0da50292f7ef13cb.png',
  lookbook8: '8a792c56c3b5680bcfd924067cb98f2fc3e10e46.png',
  lookbook9: '223e95ff32190ecc84a253b87efae5089d57545e.png',
  lookbook10: '0725ae9e28025979b9c83c2b1886f492e2858994.png',
  lookbook11: '2324d3b752ec65bc4aee210f980b5861c901968f.png',
  lookbook12: '7e7aa8e4078e091d3bf68073f03efef7ce9f11f4.png',
  lookbook13: '0a66af93681dcb0045c6851c7cfb3c5af5f86379.png',
  lookbook14: '7c6dfbaee291ee284b755a39666475a8f5eee6bc.png',
  lookbook15: '80d710de0c769c57bda09fa4042cfe35dfbb20b1.png',
  lookbook16: '708d5dce66f5dcc676ed983d954f38f5b95afe5b.png',
  lookbook17: '02dc1c2f756a60cdc6477ac890a405cc1ef402da.png',
  lookbook18: '2df32c9774b82194b53fc705f9c6d4829b5ca0e0.png',
  
  // Altre immagini rimanenti (49 immagini)
  img1: '951926a790c20808802c6d84427be07c922bfc94.png',
  img2: 'efff54ad5f23215365b94ee6e8466ac84a55950a.png',
  img3: 'd2574065653e3a5ea32f258c498e9ae79ba8135c.png',
  img4: '075e7d524d806d92dac5f807bdcd66cad7a25095.png',
  img5: 'b14eef33786a19c94d96b0fab3ce8707485cbb3b.png',
  img6: '32e569d791887e47dbed9712497d25ba34501001.png',
  img7: '90a431516799abb410c047047d6d097961108ee2.png',
  img8: 'c57f890a0a7cbbfac1022bd175abeef0a398629c.png',
  img9: 'a5d9c621a90a9c9868dbfbe3c02bcb00381321b0.png',
  img10: '760f43f470f8790c70d8bcb386cb0c7ab99a2565.png',
  img11: 'd54b3bb85ae394a41c34f90b77c7f03db2f6f8b6.png',
  img12: '73bfc2c80dfd66052d5c7cbfad68a9e4dada8314.png',
  img13: '218e1290bc6f40e01b937549d9453ab7e47084b6.png',
  img14: '7a229bc8bf0221c527a904213703a3c924154140.png',
  img15: 'c8b86b3fb0bf0091e1696e8fb50bc13f877c03df.png',
  img16: '46ba3d2657ad104c15e23cff6bba1eefe7027b39.png',
  img17: 'd5d51661c2b1b71a09720c90e601e1a1067c173b.png',
  img18: 'e93509f3c9c80a19067382f176094e7447824235.png',
  img19: '0a11200e98d6e5b219b006bf1e3e398bb3688a7e.png',
  img20: '672df381cabdb8014754438c02c7657797c99db3.png',
  img21: '600bd13fa4318d315e14ae2f5fc29b1f2e5f71fe.png',
  img22: '046b650602c286bb94dbb62991852cc04a124751.png',
  img23: '5e2175e7b4d3e8564beaa55cb21a73c9f62b3ba2.png',
  img24: 'e6573b0d87a01cf1bb6a35fd190e6fc862fc7781.png',
  img25: '653ced26d03657f5540d83c70d63d2bdae8db51e.png',
  img26: '41c8c19399749983bd08fe880502655f938816a7.png',
  img27: '85e1ffc87b6d749554d346e2d45fe40f72a9c70c.png',
  img28: '3dd8667cf5d7832244c78cabf0d7b9f1703260c1.png',
  img29: '2d244e5b302b9c523b2e948e6ab2d8a48e777891.png',
  img30: 'b49cf72e74da069ebed394558c6fcb7b64bdc944.png',
  img31: 'e700cd453546c507261cdb7afecab790184b89d3.png',
  img32: 'f8320ff2eba039f25910077471337b382289e8fd.png',
  img33: '1a2733ed89bc89213bfb3deac48132882f15b04b.png',
  img34: '04079bed68683ac8ea7b00772ae0ec142047c0fd.png',
  img35: '711fc12c3189a2d90da2c1cf0fbfbc917ba227f0.png',
  img36: 'e3cb4e47f7fc948810edebe4e42a8578489a0d79.png',
  img37: 'a3ceaaf83c60b0e8597f27a58d38af5471860418.png',
  img38: 'ba4f79a0108791fefd21ec62c8b2a2bad8e2825b.png',
  img39: '091ef3a0ff65609876ddb92fc9932866cbccd3f2.png',
  img40: '2dd2b8508142ff7e53ad2dfda83f02bc9594ccce.png',
  img41: 'e3d58225740db3f188a5d48af2ddd8c118ed513f.png',
  img42: '34c6a284abdbed2330a29648f5c4664ab88546b2.png',
  img43: 'f2be377a6e0775607a7efb78a51c689fd349546c.png',
  img44: '903a90f7612deed85df8e5b88de0409faaa0f064.png',
  img45: '18d0a9bcdd5fa0562e179bd723972c0376f829a7.png',
  img46: 'fd09b44a51e1bace8f760584aabf1e286a4363f4.png',
  img47: '22fc33b65f83a50726f8b012c985f87143596f3d.png',
  img48: 'd30bd798930c8661f28a37c80e6de829a3bda9e6.png',
} as const;

// Funzioni helper per array di immagini
export const getGraphicsImages = (): string[] => [
  getImageUrl(imageFiles.graphics1),
  getImageUrl(imageFiles.graphics2),
  getImageUrl(imageFiles.graphics3),
  getImageUrl(imageFiles.graphics4),
  getImageUrl(imageFiles.graphics5),
  getImageUrl(imageFiles.graphics6),
];

export const getMarcelImages = (): string[] => [
  getImageUrl(imageFiles.fifthImage),
  getImageUrl(imageFiles.marcel2),
  getImageUrl(imageFiles.marcel3),
  'https://images.unsplash.com/photo-1634671494478-18ae96453241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzY4MjI4NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXN1YWwlMjBpZGVudGl0eSUyMGRlc2lnbnxlbnwxfHx8fDE3NjgyMjg0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1752650735608-6895f65de119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBsYXlvdXR8ZW58MXx8fHwxNzY4MTUwODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1739476478863-42b2b97eb647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZGVzaWduJTIwcG9zdGVyfGVufDF8fHx8MTc2ODI0ODI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

export const getPrigionieriImages = (): string[] => [
  getImageUrl(imageFiles.prig1),
  getImageUrl(imageFiles.prig2),
  getImageUrl(imageFiles.prig3),
  getImageUrl(imageFiles.prig4),
  getImageUrl(imageFiles.prig5),
  getImageUrl(imageFiles.prig6),
  getImageUrl(imageFiles.prig7),
  getImageUrl(imageFiles.prig8),
  getImageUrl(imageFiles.prig9),
  getImageUrl(imageFiles.prig10),
];

export const getGladioImages = (): string[] => [
  getImageUrl(imageFiles.gladio1),
  getImageUrl(imageFiles.gladio2),
  getImageUrl(imageFiles.gladio3),
  getImageUrl(imageFiles.gladio4),
  getImageUrl(imageFiles.gladio5),
  getImageUrl(imageFiles.gladio6),
  getImageUrl(imageFiles.gladio7),
  getImageUrl(imageFiles.gladio8),
  getImageUrl(imageFiles.gladio9),
  getImageUrl(imageFiles.gladio10),
  getImageUrl(imageFiles.gladio11),
  getImageUrl(imageFiles.gladio12),
  getImageUrl(imageFiles.gladio13),
];

export const getLookbookImages = (): string[] => [
  getImageUrl(imageFiles.lookbook1),
  getImageUrl(imageFiles.lookbook2),
  getImageUrl(imageFiles.lookbook3),
  getImageUrl(imageFiles.lookbook4),
  getImageUrl(imageFiles.lookbook5),
  getImageUrl(imageFiles.lookbook6),
  getImageUrl(imageFiles.lookbook7),
  getImageUrl(imageFiles.lookbook8),
  getImageUrl(imageFiles.lookbook9),
  getImageUrl(imageFiles.lookbook10),
  getImageUrl(imageFiles.lookbook11),
  getImageUrl(imageFiles.lookbook12),
  getImageUrl(imageFiles.lookbook13),
  getImageUrl(imageFiles.lookbook14),
  getImageUrl(imageFiles.lookbook15),
  getImageUrl(imageFiles.lookbook16),
  getImageUrl(imageFiles.lookbook17),
  getImageUrl(imageFiles.lookbook18),
];
