// =====================================================================
//  COVERS — Imagerie réelle du site (remplace les anciens dégradés)
// ---------------------------------------------------------------------
//  Chaque visuel est une vraie photographie des lieux algériens
//  (source : Wikimedia Commons, CC BY-SA — créditée dans le footer).
//  Pour passer en production avec votre propre banque d'images,
//  remplacez simplement les URLs ci-dessous : tout le site suit.
// =====================================================================

export const IMG = {
  // Alger — Baie & Notre-Dame d'Afrique  (héro, plateforme)
  alger: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Basilique_Notre-Dame_d_Afrique_Alger.jpg/1600px-Basilique_Notre-Dame_d_Afrique_Alger.jpg',
  // Constantine — la ville sur le gouffre
  constantine: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Constantine_city,_living_on_the_edge.jpg/1280px-Constantine_city,_living_on_the_edge.jpg',
  constantineBridge: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Constantine_Bridge.jpg/1280px-Constantine_Bridge.jpg',
  constantineBelle: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Constantine_la_belle.jpg/1280px-Constantine_la_belle.jpg',
  constantineMedina: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Constantine_medina.jpg/1280px-Constantine_medina.jpg',
  constantineNature: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Constantine_nature.jpg/1280px-Constantine_nature.jpg',
  // Tlemcen — minaret de Mansourah
  tlemcen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Mansourah_Tlemcen_city,_Algeria.jpg/1280px-Mansourah_Tlemcen_city,_Algeria.jpg',
  tlemcenMosque: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mosqu%C3%A9e_de_Mansourah,_Tlemcen,_2024.jpg/1280px-Mosqu%C3%A9e_de_Mansourah,_Tlemcen,_2024.jpg',
};

// Dégradé de repli (affiché si une image ne charge pas — jamais d'icône cassée)
export const FALLBACK = {
  alger: 'linear-gradient(135deg,#1B0A4D,#5B0DDD)',
  constantine: 'linear-gradient(135deg,#1c0a52,#3a18c4)',
  constantineBridge: 'linear-gradient(135deg,#1a0a4a,#4612c8)',
  constantineBelle: 'linear-gradient(135deg,#240a55,#6a1fb8)',
  constantineMedina: 'linear-gradient(135deg,#160740,#3a0fb0)',
  constantineNature: 'linear-gradient(135deg,#1a0a4d,#5b0ddd)',
  tlemcen: 'linear-gradient(135deg,#2a0a5a,#9529ac)',
  tlemcenMosque: 'linear-gradient(135deg,#1e0a52,#7715d5)',
};

// =====================================================================
//  BLOG — une image distincte et fiable par article.
//  On réutilise les photographies algériennes déjà validées (chargement
//  garanti) : carte + en-tête d'article partagent la même source.
//  Pour mettre vos propres visuels de tournage, remplacez simplement
//  les valeurs ci-dessous par vos URLs.
// =====================================================================
export const BLOG_IMG = {
  videoTrends:  '/assets/blog/video-trends.jpg',  // 5 tendances vidéo
  linkedin:     '/assets/blog/linkedin.jpg',      // présence LinkedIn
  tour360:      '/assets/blog/tour360.jpg',       // visite virtuelle 360°
  videoRoi:     '/assets/blog/video-roi.jpg',     // ROI pub vidéo vs display
  drone:        '/assets/blog/drone.jpg',         // drone & réglementation
  storytelling: '/assets/blog/storytelling.jpg',  // storytelling
};

// En-tête de la page Blog — photo réelle de tournage (image importée).
export const BLOG_HERO    = '/assets/hero/blog.jpg';
export const BLOG_HERO_FB = FALLBACK.constantineMedina;

// =====================================================================
//  EN-TÊTES DE PAGES — photos importées (héros Portfolio / À propos /
//  Services + visuel AZ Hôtel). Remplacez simplement les fichiers dans
//  /public/assets/hero pour changer ces visuels.
// =====================================================================
export const HERO = {
  portfolio: '/assets/hero/portfolio.jpg',   // héro page Portfolio
  about:     '/assets/hero/about.jpg',        // héro page À propos
  services:  '/assets/hero/services.jpg',     // héro page Services
  avt2:      '/assets/hero/avt2.jpg',         // visuel Virtual Art Production
};
export const HERO_FB = {
  portfolio: FALLBACK.constantineBridge,
  about:     FALLBACK.constantineNature,
  services:  FALLBACK.tlemcen,
  avt2:      FALLBACK.alger,
};

// Visite virtuelle AZ Hôtel Zéralda — photo réelle de la chambre.
export const AZ_HOTEL_IMG = '/assets/hero/az-hotel.jpg';

// Photos réelles (images importées) réutilisées dans les sections du site.
export const PHOTO = {
  cameraman:     '/assets/blog/cameraman.jpg',    // tournage / spot pub
  boardroom:     '/assets/blog/video-roi.jpg',    // réunion entreprise / film institutionnel
  communication: '/assets/about/vr.jpg',         // visuel page À propos (casque VR)
};
export const PHOTO_FB = {
  cameraman:     FALLBACK.constantineMedina,
  boardroom:     FALLBACK.constantineBridge,
  communication: FALLBACK.constantine,
};

export const BLOG_FB = {
  videoTrends:  FALLBACK.constantine,
  linkedin:     FALLBACK.tlemcen,
  tour360:      FALLBACK.constantineMedina,
  videoRoi:     FALLBACK.constantineBridge,
  drone:        FALLBACK.constantineNature,
  storytelling: FALLBACK.tlemcenMosque,
};
