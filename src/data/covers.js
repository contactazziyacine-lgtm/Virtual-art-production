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
  alger: 'linear-gradient(135deg,#0a322a,#0e6e54)',
  constantine: 'linear-gradient(135deg,#1b2a4a,#2b4a7a)',
  constantineBridge: 'linear-gradient(135deg,#243b55,#3a5f86)',
  constantineBelle: 'linear-gradient(135deg,#2a1f3d,#4a3a6a)',
  constantineMedina: 'linear-gradient(135deg,#3a2a1a,#6a4a2a)',
  constantineNature: 'linear-gradient(135deg,#143226,#1f5a40)',
  tlemcen: 'linear-gradient(135deg,#3a2410,#7a4a1f)',
  tlemcenMosque: 'linear-gradient(135deg,#42250f,#864a1f)',
};
