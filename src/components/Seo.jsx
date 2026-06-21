import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLang } from '../i18n/LanguageContext';

const BASE = 'Virtual Art Production';
const SITE_URL = 'https://virtualart-dz.com';        // domaine de production
const DEFAULT_IMG = `${SITE_URL}/assets/logo.png`;   // URL ABSOLUE (requis par Open Graph)

// Mots-clés cibles (référencement Google + moteurs IA). Les <meta keywords>
// n'influencent plus le classement Google, mais restent lus par certains
// moteurs IA ; l'essentiel est leur présence dans les titres/descriptions/JSON-LD.
const DEFAULT_KEYWORDS = [
  'boîte de communication Alger', 'agence de communication Algérie',
  'boîte de production audiovisuelle', 'société de production vidéo Alger',
  'film institutionnel', 'vidéo corporate', 'film publicitaire', 'spot publicitaire',
  'shooting photo professionnel', 'photographe entreprise Alger',
  'couverture médiatique', 'couverture événementielle',
  'community management', 'gestion réseaux sociaux', 'contenu réseaux sociaux',
  'captation drone 4K', 'visite virtuelle 360°', 'motion design 3D',
  'production audiovisuelle Algérie', 'Virtual Art Production',
].join(', ');

const OG_LOCALE = { fr: 'fr_FR', ar: 'ar_DZ', en: 'en_US' };

/**
 * Seo — métadonnées par page.
 * Rétro-compatible : <Seo title="…" description="…" /> continue de fonctionner.
 * Props optionnelles : image (URL absolue), path (chemin canonique), type, noindex.
 */
export default function Seo({ title, description, image, path, type = 'website', noindex = false, keywords }) {
  const { lang } = useLang();
  const fullTitle = title ? `${title} · ${BASE}` : `${BASE} – Production Audiovisuelle Premium`;
  const img = image || DEFAULT_IMG;
  const kw = keywords || DEFAULT_KEYWORDS;

  // Canonical : on privilégie le chemin courant, sinon le path fourni.
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : (path || '/');
  const canonical = `${SITE_URL}${pathname}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="keywords" content={kw} />
      <link rel="canonical" href={canonical} />
      {noindex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-image-preview:large" />}

      {/* hreflang — versions linguistiques (même URL, langue via le sélecteur) */}
      <link rel="alternate" hrefLang="fr" href={canonical} />
      <link rel="alternate" hrefLang="ar" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={BASE} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content={OG_LOCALE[lang] || 'fr_FR'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}
