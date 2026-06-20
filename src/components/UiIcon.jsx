import React from 'react';

/**
 * UiIcon — remplace les emojis d'interface (📡, 🎯, 🔍…) par des icônes SVG
 * fiables qui s'affichent partout, sans jamais de glyphe cassé.
 *
 * L'emoji d'origine reste la clé : on le passe tel quel et on récupère le SVG
 * correspondant. Si un emoji n'est pas mappé, on le réaffiche en repli.
 *
 *   <UiIcon e="📡" size={22} />   // antenne → SVG marketing digital
 *
 * Les tracés héritent de `currentColor` : la couleur vient du parent.
 */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const PATHS = {
  // ---- Sections du formulaire de devis ----
  '📋': (                                   // Informations générales (presse-papier)
    <svg viewBox="0 0 24 24" {...base}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <rect x="9" y="2.5" width="6" height="3.2" rx="1" />
      <path d="M8.5 10h7M8.5 13.5h7M8.5 17h4" />
    </svg>
  ),
  '🎬': (                                   // Service souhaité (clap de cinéma)
    <svg viewBox="0 0 24 24" {...base}>
      <rect x="3" y="8.5" width="18" height="12" rx="1.5" />
      <path d="M3 8.5 5.5 4l3 3.4M9 8.2 11.5 3.6l3 3.4M15 8.2 17.5 3.6 20.5 6" />
    </svg>
  ),
  '🎯': (                                   // Objectif du projet (cible)
    <svg viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  '🎥': (                                   // Spécifications vidéo (caméra)
    <svg viewBox="0 0 24 24" {...base}>
      <rect x="2.5" y="7" width="13" height="10" rx="2" />
      <circle cx="9" cy="12" r="2.4" />
      <path d="m15.5 10 5-2.6v9.2L15.5 14z" />
    </svg>
  ),
  '📡': (                                   // Marketing digital (parabole + signal)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M4 10a7.31 7.31 0 0 0 10 10z" />
      <path d="m9 15 3-3" />
      <path d="M17 13a6 6 0 0 0-6-6" />
      <path d="M21 9a10 10 0 0 0-10-10" />
    </svg>
  ),
  '💰': (                                   // Budget estimatif (pièce)
    <svg viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M14.4 9.3c-.6-.7-1.5-1.1-2.6-1.1-1.6 0-2.6.8-2.6 1.9 0 2.6 5.2 1.3 5.2 4 0 1.2-1.1 2-2.7 2-1.2 0-2.2-.4-2.8-1.2" />
    </svg>
  ),
  '📎': (                                   // Documents (trombone)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M19 11.5 12 18.5a4.5 4.5 0 0 1-6.4-6.4l7.7-7.7a3 3 0 0 1 4.3 4.3l-7.7 7.7a1.5 1.5 0 0 1-2.1-2.1l7-7" />
    </svg>
  ),

  // ---- Spot publicitaire (Services) ----
  '✍': (                                   // Conception créative / contenu (stylo)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M15.5 4.5 19.5 8.5 9 19l-4.5 1L5.5 15.5z" />
      <path d="m13.5 6.5 4 4" />
    </svg>
  ),
  '🎞': (                                  // Storyboard (pellicule)
    <svg viewBox="0 0 24 24" {...base}>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M3 9h18M3 15h18M7.5 6v12M16.5 6v12" />
    </svg>
  ),
  '📺': (                                   // Diffusion TV
    <svg viewBox="0 0 24 24" {...base}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="m8.5 3.5 3.5 3.5 3.5-3.5" />
    </svg>
  ),

  // ---- Film institutionnel (Services) ----
  '🏢': (                                   // Présentation d'entreprise (immeuble)
    <svg viewBox="0 0 24 24" {...base}>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 21v-3h4v3" />
    </svg>
  ),
  '👔': (                                   // RH & recrutement (cravate)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M9.5 3h5l-1.2 3 1.4 9-3.2 3.5L8.3 18l1.4-9z" />
      <path d="m9.5 3 2.5 3 2.5-3" />
    </svg>
  ),
  '📰': (                                   // Reportages (journal)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M4 5h13v14H5.5A1.5 1.5 0 0 1 4 17.5z" />
      <path d="M17 8h2.5A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-3 0V5" />
      <path d="M7 8h7M7 11.5h7M7 15h4" />
    </svg>
  ),
  '🌍': (                                   // Communication corporate (globe)
    <svg viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
    </svg>
  ),

  // ---- Marketing digital (Services) ----
  '🔍': (                                   // SEO & référencement (loupe)
    <svg viewBox="0 0 24 24" {...base}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
    </svg>
  ),
  '📢': (                                   // Publicité en ligne (porte-voix)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M4 9.5v5a1 1 0 0 0 1 1h2.5l8 4v-15l-8 4H5a1 1 0 0 0-1 1z" />
      <path d="M19 9.5a4 4 0 0 1 0 5" />
    </svg>
  ),
  '💬': (                                   // Community management (bulle)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 16.5H9l-4.5 3.5V16.5H4A1.5 1.5 0 0 1 2.5 15V7A1.5 1.5 0 0 1 4 5.5z" />
      <path d="M7.5 10.5h9M7.5 13h6" />
    </svg>
  ),
  '📊': (                                   // Analyse & reporting (histogramme)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M4 4v16h16" />
      <rect x="7" y="11" width="2.6" height="6" rx=".4" />
      <rect x="11.7" y="8" width="2.6" height="9" rx=".4" />
      <rect x="16.4" y="13" width="2.6" height="4" rx=".4" />
    </svg>
  ),
};

export default function UiIcon({ e, size = 20, style }) {
  const key = typeof e === 'string' ? e.replace(/[\uFE0F\u200D]/g, '') : e;
  const svg = PATHS[key];
  if (!svg) {
    // Repli : emoji d'origine (ne devrait pas arriver pour les icônes d'UI)
    return <span style={{ fontSize: size, lineHeight: 1, ...style }}>{e}</span>;
  }
  return (
    <span style={{ display: 'inline-flex', width: size, height: size, ...style }}>
      {React.cloneElement(svg, { width: size, height: size })}
    </span>
  );
}
