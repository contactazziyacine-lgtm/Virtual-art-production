import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const teamColors = [
  { color: 'rgba(0,102,255,0.3)', tc: '#0066ff' },
  { color: 'rgba(16,185,129,0.2)', tc: '#10b981' },
  { color: 'rgba(245,158,11,0.2)', tc: '#f59e0b' },
  { color: 'rgba(168,85,247,0.2)', tc: '#a855f7' },
];

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '80px 5%' }}>
        <div className="section-tag">{a.tag}</div>
        <div className="section-title">{a.title1}<br />{a.title2}</div>
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginTop: 60 }}>
          <div>
            <p style={{ color: '#8892a4', marginBottom: 20, fontSize: 16, lineHeight: 1.8, textAlign: 'justify' }}>{a.p1}</p>
            <p style={{ color: '#8892a4', marginBottom: 20, fontSize: 16, lineHeight: 1.8, textAlign: 'justify' }}>{a.p2}</p>
            <p style={{ color: '#8892a4', fontSize: 16, lineHeight: 1.8, textAlign: 'justify' }}>{a.p3}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 36 }}>
              {a.values.map(v => (
                <div key={v.title} style={{ background: '#2a2a3a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: 20 }}>
                  <div style={{ width: 40, height: 40, background: 'rgba(0,102,255,0.12)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 12 }}>{v.icon}</div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{v.title}</h4>
                  <p style={{ fontSize: 13, color: '#8892a4', lineHeight: 1.6, textAlign: 'justify' }}>{v.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'linear-gradient(135deg,#0d1a2e,#1a0d1a,#0a1428)', borderRadius: 20, padding: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400, gap: 32 }}>
            <div style={{ fontSize: 80 }}>🎬</div>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center' }}>
              {a.stats.map(([n,l]) => (
                <div key={l} style={{ textAlign: 'center' }}>
                  <span style={{ fontSize: 30, fontWeight: 900, color: '#0066ff', display: 'block' }}>{n}</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 1 }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 5%', background: '#12121a' }}>
        <div className="section-tag">{a.teamTag}</div>
        <div className="section-title">{a.teamTitle}</div>
        <p className="section-sub" style={{ marginTop: 16, textAlign: 'justify' }}>{a.teamSub}</p>
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 50 }}>
          {a.team.map((m, i) => (
            <div key={i} style={{ background: '#2a2a3a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28, textAlign: 'center' }}>
              <div style={{ width: 72, height: 72, background: teamColors[i].color, borderRadius: '50%', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>{m.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{m.name}</h3>
              <p style={{ fontSize: 13, color: teamColors[i].tc, marginBottom: 8 }}>{m.role}</p>
              <p style={{ fontSize: 12, color: '#8892a4' }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:40px!important}.grid-4{grid-template-columns:1fr 1fr!important}}`}</style>
    </div>
  );
}
