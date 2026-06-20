// =====================================================================
//  PORTFOLIO — source unique des réalisations.
//  Utilisé par la page /portfolio (galerie complète + lightbox) ET par
//  la vitrine de la page d'accueil. Un seul endroit à mettre à jour.
// =====================================================================
import { IMG, FALLBACK, AZ_HOTEL_IMG } from './covers';

export const portfolioItems = [
  { cat: 'pub', video: '0Vb4MBjoRw4', title: 'Spot Publicitaire — Production 1', sub: 'Réalisation Virtual Art Production' },
  { cat: 'pub', video: '6AyGuNUa5tk', title: 'Spot Publicitaire — Production 2', sub: 'Réalisation Virtual Art Production' },
  { cat: 'pub', video: 'm_R9Ehai9g0', title: 'Spot Publicitaire — Production 3', sub: 'Réalisation Virtual Art Production' },

  { cat: 'corporate', video: 'Y87QLWrx8dE', title: 'Film Institutionnel — Entreprise 1', sub: 'Communication corporate' },
  { cat: 'corporate', video: 'Xa4nVCcB5Xg', title: 'Film Institutionnel — Entreprise 2', sub: 'Présentation d\'entreprise' },
  { cat: 'corporate', video: '_dvTG-fB4C4', title: 'Film Institutionnel — Entreprise 3', sub: 'Reportage d\'entreprise' },
  { cat: 'corporate', video: 'up9vN1RuifU', title: 'Film Institutionnel — Entreprise 4', sub: 'Communication corporate' },

  { cat: 'event', video: 'H3ZkvTk7Lys', title: 'Couverture Médiatique — Événement 1', sub: 'Captation événementielle' },
  { cat: 'event', video: 'RP7wOoqQmoU', title: 'Couverture Médiatique — Événement 2', sub: 'Reportage vidéo professionnel' },

  { cat: '360', tour: 'https://s3.algeriavirtualtravel.com/visites/safex-snc/index.htm', title: 'SAFEX — SNC', sub: 'Visite virtuelle 360° immersive', cover: IMG.constantineBelle, fallback: FALLBACK.constantineBelle },
  { cat: '360', tour: 'https://s3.algeriavirtualtravel.com/visites/AZ-hotel%20zeralda/index.htm', title: 'AZ Hôtel Zéralda', sub: 'Visite virtuelle 360° hôtellerie', cover: AZ_HOTEL_IMG, fallback: FALLBACK.alger },

  { cat: 'social', video: 'WjNukodGau8', short: true, title: 'Marketing Digital — Short 1', sub: 'Contenu vertical engageant' },
  { cat: 'social', video: 'JFqNpQNCCO8', short: true, title: 'Marketing Digital — Short 2', sub: 'Format court & dynamique' },
  { cat: 'social', video: 'oEp7UpDA4x8', short: true, title: 'Marketing Digital — Short 3', sub: 'Contenu social engageant' },

  { cat: 'motion', video: 'G3mUgVckCtA', title: 'Production 3D — Projet 1', sub: 'Animation 3D & motion design' },
  { cat: 'motion', video: 'qWK_MgDza2U', title: 'Production 3D — Projet 2', sub: 'Habillage graphique & VFX' },
  { cat: 'motion', video: '62WtUzTOhmk', title: 'Motion Graphics — Projet 3', sub: 'Animation graphique dynamique' },
  { cat: 'motion', video: 'idVjpMBZaGM', title: 'Motion Graphics — Projet 4', sub: 'Design animé & effets visuels' },

  { cat: 'web', link: 'https://algeriavirtualtravel.com/en', title: 'Algeria Virtual Travel', sub: 'Plateforme web de tourisme digital', cover: IMG.tlemcen, fallback: FALLBACK.tlemcen },
];

// Aperçu page d'accueil : un échantillon représentatif (un par grande famille).
const FEATURED_VIDEOS = ['0Vb4MBjoRw4', 'Y87QLWrx8dE', 'H3ZkvTk7Lys', 'G3mUgVckCtA'];
export const featuredPortfolio = [
  ...portfolioItems.filter(i => FEATURED_VIDEOS.includes(i.video)),
  portfolioItems.find(i => i.title === 'SAFEX — SNC'),                 // 360°
  portfolioItems.find(i => i.title === 'Algeria Virtual Travel'),      // web
].filter(Boolean);

// Vignette d'une réalisation (thumbnail YouTube ou photo de couverture).
export const portfolioThumb = item =>
  item.video ? `https://img.youtube.com/vi/${item.video}/hqdefault.jpg` : item.cover;
