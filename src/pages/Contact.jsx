import React from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function Contact() {
  const { t, contact, lang } = useLang();
  const address = lang === 'ar' ? contact.addressAr : lang === 'en' ? contact.addressEn : contact.addressFr;

  const labelStyle = { fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8, display: 'block' };

  return (
    <div style={{ paddingTop: 72 }}>
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
            ].map(([icon,title,val,href]) => (
              <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: 'rgba(0,102,255,0.12)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{icon}</div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{title}</h4>
                  {href ? <a href={href} style={{ fontSize: 14, color: '#8892a4', textDecoration: 'none' }}>{val}</a> : <p style={{ fontSize: 14, color: '#8892a4' }}>{val}</p>}
                </div>
              </div>
            ))}
            <div>
              <h4 style={{ fontSize: 14, marginBottom: 12, color: 'rgba(255,255,255,0.6)' }}>{t.contact.follow}</h4>
              <div style={{ display: 'flex', gap: 12 }}>
                {['📘','📷','💼','▶️','🎵'].map((icon,i) => (
                  <a key={i} href="#" style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, textDecoration: 'none', transition: 'background 0.2s' }}
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div><label style={labelStyle}>{t.contact.name} *</label><input type="text" /></div>
              <div><label style={labelStyle}>{t.contact.email} *</label><input type="email" /></div>
              <div><label style={labelStyle}>{t.contact.phone}</label><input type="tel" placeholder="0550 12 91 19" /></div>
              <div><label style={labelStyle}>{t.contact.subject}</label><select><option>{t.nav.quote}</option><option>Info</option><option>Partenariat</option></select></div>
              <div><label style={labelStyle}>{t.contact.message} *</label><textarea style={{ minHeight: 140 }} /></div>
              <button onClick={() => alert(t.contact.sent)} style={{ width: '100%', padding: 16, background: '#0066ff', color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
                {t.contact.send}
              </button>
            </div>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
