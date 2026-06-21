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

  // ---- Valeurs (À propos) ----
  '⚡': (                                    // Innovation (éclair)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10.5H13z" />
    </svg>
  ),
  '✅': (                                    // Qualité (validation)
    <svg viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  ),
  '🤝': (                                    // Engagement (poignée de main)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M11 7 8.5 9.5a2 2 0 0 0 2.8 2.8l1.2-1.2 3.5 3.5a1.6 1.6 0 0 1-2.3 2.3" />
      <path d="m13 17 1.4 1.4a1.6 1.6 0 0 0 2.3-2.3M4 8l3.5-3.5a2 2 0 0 1 2.8 0L12 6" />
      <path d="m2.5 13.5 3 3M21.5 8l-3 3" />
    </svg>
  ),
  // ---- Équipe (À propos) ----
  '\u2702': (                                 // Chef monteur / montage (ciseaux)
    <svg viewBox="0 0 24 24" {...base}>
      <circle cx="6" cy="6" r="2.8" />
      <circle cx="6" cy="18" r="2.8" />
      <path d="M20 4 8.5 15.5M14.5 14.5 20 20M8.5 8.5 12 12" />
    </svg>
  ),
  '\uD83D\uDE81': (                            // Pilote drone (drone quadricoptère)
    <svg viewBox="0 0 24 24" {...base}>
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9.5 11h-3M17.5 11h-3M9.5 13h-3M17.5 13h-3" />
      <circle cx="4" cy="6" r="2.2" />
      <circle cx="20" cy="6" r="2.2" />
      <path d="M5.5 7.6 9 10M18.5 7.6 15 10" />
      <path d="M10 15v3M14 15v3M9 18h2M13 18h2" />
    </svg>
  ),

  // ---- Coordonnées de contact (icônes de ligne) ----
  '📞': (                                   // Téléphone (combiné)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M6.8 3.5h2.7l1.4 3.8-1.9 1.4a11.5 11.5 0 0 0 4.9 4.9l1.4-1.9 3.8 1.4v2.7a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.8 5.7a2 2 0 0 1 2-2.2z" />
    </svg>
  ),
  '📧': (                                   // Email (enveloppe)
    <svg viewBox="0 0 24 24" {...base}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="m3.8 7.2 8.2 6 8.2-6" />
    </svg>
  ),
  '📍': (                                   // Adresse (épingle de localisation)
    <svg viewBox="0 0 24 24" {...base}>
      <path d="M12 21.5c4.2-4.1 7-7.6 7-11.1a7 7 0 0 0-14 0c0 3.5 2.8 7 7 11.1z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </svg>
  ),

  // ---- Marques (icônes pleines, reconnaissables) ----
  'whatsapp': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2.5c-5.23 0-9.48 4.25-9.48 9.48 0 1.67.44 3.3 1.27 4.74L2.5 21.5l4.9-1.28a9.43 9.43 0 0 0 4.63 1.18h.004c5.23 0 9.48-4.25 9.48-9.48a9.42 9.42 0 0 0-2.77-6.7 9.42 9.42 0 0 0-6.7-2.72zm0 1.67a7.8 7.8 0 0 1 5.52 13.32 7.8 7.8 0 0 1-9.5 1.18l-.34-.2-2.9.76.78-2.83-.22-.36a7.78 7.78 0 0 1 6.66-11.87zm-3.3 4.2c-.16 0-.41.06-.62.29-.21.23-.81.79-.81 1.93 0 1.13.83 2.23.95 2.38.12.16 1.63 2.49 3.95 3.49.55.24.98.38 1.32.49.55.18 1.06.15 1.46.09.45-.07 1.37-.56 1.56-1.1.19-.54.19-1 .14-1.1-.06-.1-.21-.16-.45-.27-.23-.12-1.37-.68-1.58-.75-.21-.08-.37-.12-.52.11-.16.23-.6.75-.73.9-.14.16-.27.18-.5.06-.23-.12-.98-.36-1.86-1.15-.69-.61-1.15-1.37-1.29-1.6-.13-.23-.01-.36.1-.47.1-.1.23-.27.35-.4.11-.14.15-.23.23-.39.08-.15.04-.29-.02-.41-.06-.11-.52-1.26-.71-1.72-.19-.45-.38-.39-.52-.4h-.45z" />
    </svg>
  ),
  'facebook': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7.03C18.34 21.2 22 17.06 22 12.06z" />
    </svg>
  ),
  'instagram': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="16.9" cy="7.1" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  ),
  'linkedin': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  'youtube': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5C0 8.4 0 12 0 12s0 3.6.5 5.5a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.6 24 12 24 12s0-3.6-.5-5.5zM9.6 15.6V8.4l6.25 3.6-6.25 3.6z" />
    </svg>
  ),
  'tiktok': (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 2h-3.2v13.1a2.65 2.65 0 1 1-2.07-2.59V9.2a5.92 5.92 0 1 0 5.27 5.88V8.42a7.2 7.2 0 0 0 4.2 1.35V6.55a4.18 4.18 0 0 1-2.95-1.25A4.18 4.18 0 0 1 16.6 2z" />
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
