import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { SOCIAL } from '../config';
import { sendForm } from '../lib/sendForm';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';

export default function Contact() {
  const { t, contact, lang } = useLang();
  const address = lang === 'ar' ? contact.addressAr : lang === 'en' ? contact.addressEn : contact.addressFr;

  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: t.nav.quote, message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      await sendForm({
        subject: `${t.contact.tag} — ${form.subject}`,
        replyTo: form.email,
        fields: [
          [t.contact.name, form.name],
          [t.contact.email, form.email],
          [t.contact.phone, form.phone],
          [t.contact.subject, form.subject],
          [t.contact.message, form.message],
        ],
      });
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', subject: t.nav.quote, message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  const socials = [['📘', SOCIAL.facebook], ['📷', SOCIAL.instagram], ['💼', SOCIAL.linkedin], ['▶️', SOCIAL.youtube], ['🎵', SOCIAL.tiktok]];

  return (
    <div>
      <Seo title={t.contact.title} description={t.contact.title} />

      {/* ============ HÉRO ============ */}
      <section className="band--deep" style={{ position: 'relative', paddingTop: 132 }}>
        <div className="wrap" style={{ color: '#fff', paddingTop: 'clamp(24px,4vw,40px)', paddingBottom: 'clamp(8px,2vw,18px)' }}>
          <div className="reveal in" style={{ maxWidth: 760 }}>
            <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 18 }}>{t.contact.tag}</div>
            <h1 className="display" style={{ color: '#fff', textWrap: 'balance' }}>{t.contact.title}</h1>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="band band--surface">
        <div className="wrap contact-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 'clamp(36px,5vw,72px)', alignItems: 'start' }}>

          {/* Colonne infos */}
          <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {[
              ['📞', t.contact.phone, contact.phone, `tel:${contact.phoneRaw}`],
              ['📧', t.contact.email, contact.email, `mailto:${contact.email}`],
              ['📍', t.contact.address, address, null],
              ['💬', t.contact.whatsapp, t.contact.whatsappDesc, `https://wa.me/${contact.whatsapp}`],
            ].map(([icon, title, val, href]) => (
              <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 46, height: 46, background: 'var(--accent-soft)', borderRadius: 'var(--r)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{icon}</div>
                <div style={{ minWidth: 0, wordBreak: 'break-word' }}>
                  <h4 style={{ fontFamily: 'var(--display)', fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{title}</h4>
                  {href ? <a href={href} style={{ fontSize: 14.5, color: 'var(--muted)', textDecoration: 'none' }}>{val}</a> : <p style={{ fontSize: 14.5, color: 'var(--muted)' }}>{val}</p>}
                </div>
              </div>
            ))}

            <div>
              <h4 className="eyebrow" style={{ marginBottom: 14 }}>{t.contact.follow}</h4>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {socials.map(([icon, url], i) => (
                  <a key={i} href={url || '#'} target={url ? '_blank' : undefined} rel={url ? 'noopener noreferrer' : undefined}
                    style={{ width: 44, height: 44, background: 'var(--paper)', border: '1px solid var(--line-2)', borderRadius: 'var(--r)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, textDecoration: 'none', transition: 'all .2s var(--ease)' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--paper)'; e.currentTarget.style.borderColor = 'var(--line-2)'; e.currentTarget.style.transform = 'none'; }}>{icon}</a>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--line)', height: 230 }}>
              <iframe
                title="Localisation Virtual Art Production"
                src="https://www.google.com/maps?q=Beni+Messous,+Alger&output=embed"
                style={{ width: '100%', height: '100%', border: 0 }}
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Colonne formulaire */}
          <Reveal delay={120}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 'clamp(28px,3.4vw,48px)', boxShadow: '0 10px 40px rgba(27,10,77,.05)' }}>
              <h3 className="h3" style={{ marginBottom: 26, fontSize: 22 }}>{t.contact.msgTitle}</h3>

              {status === 'sent' ? (
                <div style={{ textAlign: 'center', padding: '36px 0' }}>
                  <div style={{ width: 64, height: 64, margin: '0 auto 18px', borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}>✓</div>
                  <p style={{ color: 'var(--ink-soft)', fontSize: 16, lineHeight: 1.7 }}>{t.contact.sent}</p>
                  <button onClick={() => setStatus('idle')} className="btn btn--ghost" style={{ marginTop: 24 }}>{t.contact.msgTitle}</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div><label className="field-label">{t.contact.name} *</label><input type="text" value={form.name} onChange={set('name')} required /></div>
                  <div><label className="field-label">{t.contact.email} *</label><input type="email" value={form.email} onChange={set('email')} required /></div>
                  <div><label className="field-label">{t.contact.phone}</label><input type="tel" value={form.phone} onChange={set('phone')} placeholder="0550 12 91 19" /></div>
                  <div><label className="field-label">{t.contact.subject}</label>
                    <select value={form.subject} onChange={set('subject')}>
                      <option>{t.nav.quote}</option><option>Info</option><option>Partenariat</option>
                    </select>
                  </div>
                  <div><label className="field-label">{t.contact.message} *</label><textarea value={form.message} onChange={set('message')} required style={{ minHeight: 140 }} /></div>
                  {status === 'error' && (
                    <p style={{ color: '#c0392b', fontSize: 14 }}>Une erreur est survenue. Réessayez ou écrivez-nous directement à {contact.email}.</p>
                  )}
                  <button type="submit" disabled={status === 'sending'} className="btn" style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.8 : 1, cursor: status === 'sending' ? 'wait' : 'pointer' }}>
                    {status === 'sending' ? 'Envoi…' : t.contact.send}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`@media(max-width:860px){.contact-grid{grid-template-columns:1fr!important;gap:36px!important}}`}</style>
    </div>
  );
}
