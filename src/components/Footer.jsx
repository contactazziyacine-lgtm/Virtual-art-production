import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { SOCIAL } from '../config';
import Logo from './Logo';

export default function Footer() {
  const { t, contact, lang } = useLang();
  const address = lang === 'ar' ? contact.addressAr : lang === 'en' ? contact.addressEn : contact.addressFr;

  const services = [t.cats.pub, t.cats.corporate, t.cats.t360, t.cats.event, t.cats.social];
  const pages = [t.nav.about, t.nav.portfolio, t.nav.blog, t.nav.contact, t.nav.quote];
  const routes = ['/a-propos','/portfolio','/blog','/contact','/devis'];

  return (
    <footer style={{ background: '#0a0a0f', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '60px 5% 32px' }}>
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          <div style={{ marginBottom: 16 }}><Logo height={42} /></div>
          <p style={{ fontSize: 14, color: '#8892a4', lineHeight: 1.7, marginBottom: 20, maxWidth: 320 }}>
            {t.footer.desc}
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            {[['📘', SOCIAL.facebook], ['📷', SOCIAL.instagram], ['💼', SOCIAL.linkedin], ['▶️', SOCIAL.youtube]].map(([icon, url], i) => (
              <a key={i} href={url || '#'} target={url ? '_blank' : undefined} rel={url ? 'noopener noreferrer' : undefined}
                 style={{ width: 38, height: 38, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, textDecoration: 'none' }}>{icon}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{t.footer.services}</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {services.map(s => <li key={s}><Link to="/services" style={{ fontSize: 14, color: '#8892a4', textDecoration: 'none' }}>{s}</Link></li>)}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{t.footer.company}</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {pages.map((p, i) => <li key={p}><Link to={routes[i]} style={{ fontSize: 14, color: '#8892a4', textDecoration: 'none' }}>{p}</Link></li>)}
          </ul>
        </div>

        <div>
          <h4 style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>{t.footer.contact}</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <li><a href={`tel:${contact.phoneRaw}`} style={{ fontSize: 14, color: '#8892a4', textDecoration: 'none' }}>{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`} style={{ fontSize: 14, color: '#8892a4', textDecoration: 'none' }}>{contact.email}</a></li>
            <li style={{ fontSize: 14, color: '#8892a4' }}>{address}</li>
            <li><a href={`https://wa.me/${contact.whatsapp}`} style={{ fontSize: 14, color: '#8892a4', textDecoration: 'none' }}>WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, color: 'rgba(255,255,255,0.3)', flexWrap: 'wrap', gap: 8 }}>
        <span>© 2024 Virtual Art Production. {t.footer.rights}</span>
        <span>Production 4K · Drone · 360° · Digital</span>
      </div>
    </footer>
  );
}
