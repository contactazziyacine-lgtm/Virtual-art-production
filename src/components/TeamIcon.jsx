import React from 'react';

/**
 * TeamIcon — icônes modernes (style trait) pour les membres de l'équipe.
 * Remplace les anciens émojis. L'icône hérite de la couleur via `currentColor`
 * (on lui passe la teinte d'accent de la carte).
 *
 * On sélectionne l'icône à partir de l'émoji défini dans les traductions
 * (robuste : on retire le sélecteur de variation U+FE0F avant la correspondance),
 * donc l'ordre et la langue n'ont aucune importance.
 */
const ICONS = {
  // 🎬 Clapperboard — Directeur Artistique / Réalisation
  '🎬': (
    <>
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
      <path d="m6.2 5.3 3.1 3.9" />
      <path d="m12.4 3.4 3.1 4" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </>
  ),
  // ✂ Scissors — Chef Monteur / Montage
  '✂': (
    <>
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </>
  ),
  // 🚁 Drone — Pilote Drone / Captation aérienne
  '🚁': (
    <>
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9.5 11h-3M17.5 11h-3M9.5 13h-3M17.5 13h-3" />
      <circle cx="4" cy="6" r="2.2" />
      <circle cx="20" cy="6" r="2.2" />
      <path d="M5.5 7.6 9 10M18.5 7.6 15 10" />
      <path d="M10 15v3M14 15v3M9 18h2M13 18h2" />
    </>
  ),
  // 📊 Bar chart — Stratège Digital / Marketing digital
  '📊': (
    <>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </>
  ),
};

const ORDER = ['🎬', '✂', '🚁', '📊'];

export default function TeamIcon({ e = '', index = 0, size = 28 }) {
  const key = [...e].filter(c => c !== '\uFE0F').join('');
  const glyph = ICONS[key] || ICONS[ORDER[index]] || ICONS['🎬'];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      style={{ display: 'block' }} aria-hidden="true">
      {glyph}
    </svg>
  );
}
