import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const bgColors = [
  'linear-gradient(135deg,#0d1a3a,#1428aa)',
  'linear-gradient(135deg,#0d2a1a,#0d5a3a)',
  'linear-gradient(135deg,#1a0d2a,#3d0d5a)',
  'linear-gradient(135deg,#2a1a0d,#5a3a0d)',
  'linear-gradient(135deg,#0d2a2a,#0d4a4a)',
  'linear-gradient(135deg,#2a0d0d,#5a0d1a)',
];

export default function Blog() {
  const { t } = useLang();
  const b = t.blog;

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '80px 5%' }}>
        <div className="section-tag">{b.tag}</div>
        <div className="section-title">{b.title}</div>
        <p className="section-sub" style={{ marginTop: 16, textAlign: 'justify' }}>{b.sub}</p>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 60 }}>
          {b.posts.map((p, i) => (
            <div key={i} style={{ background: '#1e1e2a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
              <div style={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, background: bgColors[i] }}>{p.icon}</div>
              <div style={{ padding: 24 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#0066ff', marginBottom: 10 }}>{p.cat}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, lineHeight: 1.4 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: '#8892a4', lineHeight: 1.6, marginBottom: 16, textAlign: 'justify' }}>{p.excerpt}</p>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 14 }}>{p.date} · {p.read} {b.readTime}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <style>{`@media(max-width:768px){.grid-3{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
