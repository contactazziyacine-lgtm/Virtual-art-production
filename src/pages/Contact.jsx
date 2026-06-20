import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { SOCIAL } from '../config';
import { sendForm } from '../lib/sendForm';
import Seo from '../components/Seo';

export default function Contact() {
  const { t, contact, lang } = useLang();
  const address = lang === 'ar' ? contact.addressAr : lang === 'en' ? contact.addressEn : contact.addressFr;

  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: t.nav.quote, message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const labelStyle = { fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8, display: 'block' };

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
    <div style={{ paddingTop: 72 }}>
      <Seo title={t.contact.title} description={t.contact.title} />
      <section style={{ padding: '80px 5%', background: '#12121a' }}>
        <div className="section-tag">{t.contact.tag}</div>
        <div className="section-title">{t.contact.title}</div>
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 60, marginTop: 60, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              ['📞', t.contact.phone, contact.phone, `tel:${contact.phoneRaw}`],
              ['📧', t.contact.email, contact.email, `mailto:${contact.email}`],
              ['📍', t.contact.address, address, null],
              ['💬', t.contact.whatsapp, t.contact.whatsappDesc, `https://wa.me/${contact.whatsapp}`],
            ].map(([icon, title, val, href]) => (
              <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: 'rgba(0,102,255,0.12)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{icon}</div>
                <div style={{ minWidth: 0, wordBreak: 'break-word' }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{title}</h4>
                  {href ? <a href={href} style={{ fontSize: 14, color: '#8892a4', textDecoration: 'none' }}>{val}</a> : <p style={{ fontSize: 14, color: '#8892a4' }}>{val}</p>}
                </div>
              </div>
            ))}
            <div>
              <h4 style={{ fontSize: 14, marginBottom: 12, color: 'rgba(255,255,255,0.6)' }}>{t.contact.follow}</h4>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {socials.map(([icon, url], i) => (
                  <a key={i} href={url || '#'} target={url ? '_blank' : undefined} rel={url ? 'noopener noreferrer' : undefined}
                    style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, textDecoration: 'none', transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#0066ff'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>{icon}</a>
                ))}
              </div>
            </div>
            {/* Google Maps */}
            <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', height: 220 }}>
              <iframe
                title="Localisation Virtual Art Production"
                src="https://www.google.com/maps?q=Beni+Messous,+Alger&output=embed"
                style={{ width: '100%', height: '100%', border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          <div style={{ background: '#1e1e2a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 40 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 28 }}>{t.contact.msgTitle}</h3>

            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <p style={{ color: '#8892a4', fontSize: 16, lineHeight: 1.7 }}>{t.contact.sent}</p>
                <button onClick={() => setStatus('idle')} className="btn-outline" style={{ marginTop: 24 }}>{t.contact.msgTitle}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div><label style={labelStyle}>{t.contact.name} *</label><input type="text" value={form.name} onChange={set('name')} required /></div>
                <div><label style={labelStyle}>{t.contact.email} *</label><input type="email" value={form.email} onChange={set('email')} required /></div>
                <div><label style={labelStyle}>{t.contact.phone}</label><input type="tel" value={form.phone} onChange={set('phone')} placeholder="0550 12 91 19" /></div>
                <div><label style={labelStyle}>{t.contact.subject}</label>
                  <select value={form.subject} onChange={set('subject')}>
                    <option>{t.nav.quote}</option><option>Info</option><option>Partenariat</option>
                  </select>
                </div>
                <div><label style={labelStyle}>{t.contact.message} *</label><textarea value={form.message} onChange={set('message')} required style={{ minHeight: 140 }} /></div>
                {status === 'error' && (
                  <p style={{ color: '#ff6b6b', fontSize: 14 }}>Une erreur est survenue. Réessayez ou écrivez-nous directement à {contact.email}.</p>
                )}
                <button type="submit" disabled={status === 'sending'} style={{ width: '100%', padding: 16, background: status === 'sending' ? '#0a4bb0' : '#0066ff', color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: status === 'sending' ? 'wait' : 'pointer', opacity: status === 'sending' ? 0.8 : 1 }}>
                  {status === 'sending' ? '⏳ Envoi…' : t.contact.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
