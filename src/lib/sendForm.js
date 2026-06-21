import { CONTACT } from '../i18n/translations';

// Point de réception (script PHP à la racine du site). Surchargeable via .env.
const ENDPOINT = process.env.REACT_APP_MAIL_ENDPOINT || '/send-mail.php';

// Construit un corps de message lisible à partir d'une liste [label, valeur].
const buildBody = (fields) =>
  fields
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== '')
    .map(([label, v]) => `${label}: ${Array.isArray(v) ? v.join(', ') : v}`)
    .join('\n');

/**
 * Envoie le contenu d'un formulaire (champs + fichiers) vers le script PHP,
 * qui transmet le tout par e-mail avec les fichiers EN PIÈCES JOINTES.
 * Repli mailto: (texte seul) si le script est indisponible.
 * @returns {Promise<'email'|'mailto'>} le canal réellement utilisé.
 */
export async function sendForm({ subject, fields, replyTo = '', files = [] }) {
  const message = buildBody(fields);

  const fd = new FormData();
  fd.append('subject', subject);
  fd.append('message', message);
  fd.append('reply_to', replyTo);
  fd.append('to_email', CONTACT.email);
  (files || []).forEach((f) => { if (f && f.size > 0) fd.append('files[]', f, f.name); });

  try {
    const res = await fetch(ENDPOINT, { method: 'POST', body: fd });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data && data.success) return 'email';
    throw new Error('mail_failed');
  } catch (e) {
    // Repli : ouvre l'application e-mail du visiteur (texte seul, SANS pièces jointes).
    const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = href;
    return 'mailto';
  }
}
