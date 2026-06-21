import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { SOCIAL } from '../config';
import Logo from './Logo';

export default function Footer() {
  const { t, contact, lang } = useLang();
  const address = lang === 'ar' ? contact.addressAr : lang === 'en' ? contact.addressEn : contact.addressFr;
  const privacyLabel = lang === 'ar' ? 'سياسة الخصوصية' : lang === 'en' ? 'Privacy Policy' : 'Politique de confidentialité';
  const termsLabel = lang === 'ar' ? 'شروط الاستخدام' : lang === 'en' ? 'Terms of Use' : 'Conditions d\'utilisation';

  const services = [t.cats.pub, t.cats.corporate, t.cats.t360, t.cats.event, t.cats.social];
  const pages = [t.nav.about, t.nav.portfolio, t.nav.blog, t.nav.contact, t.nav.quote];
  const routes = ['/a-propos', '/portfolio', '/blog', '/contact', '/devis'];

  const colTitle = { fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(234,242,238,0.5)', marginBottom: 18 };
  const colLink = { fontSize: 14.5, color: 'rgba(234,242,238,0.78)' };
  const social = [['Facebook', SOCIAL.facebook], ['Instagram', SOCIAL.instagram], ['LinkedIn', SOCIAL.linkedin], ['YouTube', SOCIAL.youtube], ['TikTok', SOCIAL.tiktok]].filter(([, url]) => url);

  return (
    <footer className="band--deep" style={{ paddingBlock: '76px 30px' }}>
      <div className="wrap">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.2fr', gap: 48, marginBottom: 56 }}>
          <div>
            <div style={{ marginBottom: 18 }}><Logo height={40} tone="light" /></div>
            <p style={{ fontSize: 14.5, color: 'rgba(234,242,238,0.66)', lineHeight: 1.7, maxWidth: 330, marginBottom: 22 }}>
              {t.footer.desc}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {social.map(([label, url]) => (
                <a key={label} href={url || '#'} target={url ? '_blank' : undefined} rel={url ? 'noopener noreferrer' : undefined}
                  style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '.04em', color: 'rgba(234,242,238,0.82)', border: '1px solid rgba(234,242,238,0.18)', borderRadius: 'var(--r)', padding: '7px 13px', transition: 'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(234,242,238,0.18)'; e.currentTarget.style.color = 'rgba(234,242,238,0.82)'; }}>{label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={colTitle}>{t.footer.services}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {services.map(s => <li key={s}><Link to="/services" style={colLink}>{s}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 style={colTitle}>{t.footer.company}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {pages.map((p, i) => <li key={p}><Link to={routes[i]} style={colLink}>{p}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 style={colTitle}>{t.footer.contact}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              <li><a href={`tel:${contact.phoneRaw}`} style={colLink}>{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`} style={colLink}>{contact.email}</a></li>
              <li style={{ ...colLink, maxWidth: 240 }}>{address}</li>
              <li><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" style={colLink}>WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <hr style={{ height: 1, border: 0, background: 'rgba(234,242,238,0.12)' }} />
        <div className="footer-bottom" style={{ paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 13, color: 'rgba(234,242,238,0.45)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span><bdi dir="ltr">© 2024 Virtual Art Production.</bdi> {t.footer.rights}</span>
            <Link to="/privacy" style={{ color: 'rgba(234,242,238,0.62)', borderBottom: '1px solid rgba(234,242,238,0.28)', paddingBottom: 1 }}>{privacyLabel}</Link>
            <Link to="/conditions-utilisation" style={{ color: 'rgba(234,242,238,0.62)', borderBottom: '1px solid rgba(234,242,238,0.28)', paddingBottom: 1 }}>{termsLabel}</Link>
          </span>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.footer-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:560px){.footer-grid{grid-template-columns:1fr!important}.footer-bottom span{text-align:left!important}}`}</style>
    </footer>
  );
}
