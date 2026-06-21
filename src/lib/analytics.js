// =====================================================================
//  Google Tag Manager — chargement compatible CSP (aucun <script> inline).
//  Le conteneur se configure via REACT_APP_GTM_ID (ex. GTM-XXXXXXX) dans .env.
//  GA4 et les autres balises se configurent ENSUITE dans l'interface GTM.
//
//  Repli : si aucun GTM mais un REACT_APP_GA_ID est fourni, on charge GA4 direct.
//  Sans aucun ID, tout reste inerte.
// =====================================================================
const GTM_ID = process.env.REACT_APP_GTM_ID;
const GA_ID = process.env.REACT_APP_GA_ID;

// Détecte le robot de pré-rendu (react-snap) pour NE PAS compter ses visites.
const isPrerender =
  typeof navigator !== 'undefined' && /ReactSnap/i.test(navigator.userAgent || '');

export function initAnalytics() {
  if (typeof window === 'undefined' || isPrerender) return;
  if (window.__analyticsLoaded) return;

  // --- Google Tag Manager (équivalent du snippet officiel, sans inline) ----
  if (GTM_ID) {
    window.__analyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(s);
    return;
  }

  // --- Repli GA4 direct (si pas de GTM) -----------------------------------
  if (GA_ID) {
    window.__analyticsLoaded = true;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID, { send_page_view: false, anonymize_ip: true });
  }
}

// Envoie une vue de page à chaque navigation (indispensable pour une SPA).
// Avec GTM : pousse un événement « page_view » dans le dataLayer — créez dans
// GTM un déclencheur « Événement personnalisé = page_view » pour votre balise GA4.
export function trackPageView(path) {
  if (typeof window === 'undefined' || isPrerender) return;

  if (GTM_ID) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
    return;
  }

  if (GA_ID && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}
