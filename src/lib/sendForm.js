import emailjs from '@emailjs/browser';
import { EMAILJS } from '../config';
import { CONTACT } from '../i18n/translations';

const isConfigured = () =>
  Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey);

// Construit un corps de message lisible à partir d'une liste [label, valeur].
const buildBody = (fields) =>
  fields
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== '')
    .map(([label, v]) => `${label}: ${Array.isArray(v) ? v.join(', ') : v}`)
    .join('\n');

/**
 * Envoie le contenu d'un formulaire.
 * @returns {Promise<'email'|'mailto'>} le canal réellement utilisé.
 */
export async function sendForm({ subject, fields, replyTo = '' }) {
  const message = buildBody(fields);

  if (isConfigured()) {
    await emailjs.send(
      EMAILJS.serviceId,
      EMAILJS.templateId,
      { subject, message, reply_to: replyTo, to_email: CONTACT.email },
      { publicKey: EMAILJS.publicKey }
    );
    return 'email';
  }

  // Repli sans configuration : on ouvre le client e-mail pré-rempli.
  const href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = href;
  return 'mailto';
}
