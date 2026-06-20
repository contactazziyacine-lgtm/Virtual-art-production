import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import ServiceIcon from '../components/ServiceIcon';
import Seo from '../components/Seo';

export default function Services() {
  const { t } = useLang();
  const s = t.servicesPage;
  const cardColors = ['#f59e0b','#0066ff','#a855f7','#10b981','#ec4899'];

  return (
    <div style={{ paddingTop: 72 }}>
      <Seo
        title={t.nav.services}
        description="Spots publicitaires, films corporate, visites virtuelles 360°, captation drone, motion design et création de sites web — tous nos services de production audiovisuelle."
      />
      <section style={{ padding: '80px 5%' }}>
        <div className="section-tag">{s.tag}</div>
        <div className="section-title">{s.title1}<br />{s.title2}</div>
        <p className="section-sub" style={{ marginTop: 16 }}>{s.sub}</p>
        <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 32 }}>

          <div className="svc-row" style={{ background: '#1e1e2a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 40, display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display:'inline-flex', width:90, height:90, alignItems:'center', justifyContent:'center', background:'rgba(0,102,255,0.1)', border:'1px solid rgba(0,102,255,0.2)', borderRadius:20, marginBottom: 16 }}><ServiceIcon name="spot" size={48} /></div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: '#0066ff' }}>{s.spotTitle}</h2>
            </div>
            <div>
              <p style={{ color: '#8892a4', marginBottom: 20, lineHeight: 1.8 }}>{s.spotDesc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {s.spotItems.map(([icon, label]) => (
                  <div key={label} style={{ background: 'rgba(0,102,255,0.08)', border: '1px solid rgba(0,102,255,0.15)', borderRadius: 8, padding: 14 }}>
                    <span style={{ fontSize: 18 }}>{icon}</span>
                    <p style={{ fontSize: 13, marginTop: 6, color: 'rgba(255,255,255,0.8)' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="svc-row" style={{ background: '#1e1e2a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, padding: 40, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 40, alignItems: 'center' }}>
            <div>
              <p style={{ color: '#8892a4', marginBottom: 20, lineHeight: 1.8 }}>{s.filmDesc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {s.filmItems.map(([icon, label]) => (
                  <div key={label} style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: 8, padding: 14 }}>
                    <span style={{ fontSize: 18 }}>{icon}</span>
                    <p style={{ fontSize: 13, marginTop: 6, color: 'rgba(255,255,255,0.8)' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display:'inline-flex', width:90, height:90, alignItems:'center', justifyContent:'center', background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.2)', borderRadius:20, marginBottom: 16 }}><ServiceIcon name="film" size={48} /></div>
              <h2 style={{ fontSize: 22, fontWeight: 900, color: '#10b981' }}>{s.filmTitle}</h2>
            </div>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            {s.cards.map((c, i) => (
              <div key={c.title} style={{ background: '#1e1e2a', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28 }}>
                <div style={{ display:'inline-flex', width:56, height:56, alignItems:'center', justifyContent:'center', background:'rgba(0,102,255,0.08)', border:'1px solid rgba(0,102,255,0.15)', borderRadius:14, marginBottom: 16 }}><ServiceIcon name={['event','drone','tour360','motion','web'][i]} size={30} /></div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: cardColors[i], marginBottom: 12 }}>{c.title}</h3>
                <p style={{ fontSize: 14, color: '#8892a4', lineHeight: 1.7, marginBottom: 16 }}>{c.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {c.tags.map(tag => <span key={tag} style={{ fontSize: 11, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: 100, color: '#8892a4' }}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'linear-gradient(135deg,rgba(0,102,255,0.08),rgba(168,85,247,0.08))', border: '1px solid rgba(0,102,255,0.2)', borderRadius: 20, padding: 40 }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div style={{ display:'inline-flex', width:64, height:64, alignItems:'center', justifyContent:'center', background:'rgba(0,102,255,0.1)', border:'1px solid rgba(0,102,255,0.2)', borderRadius:16, marginBottom: 12 }}><ServiceIcon name="social" size={34} /></div>
              <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>{s.socialTitle}</h2>
              <p style={{ color: '#8892a4', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>{s.socialDesc}</p>
            </div>
            <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16 }}>
              {s.socialItems.map(([icon, label]) => (
                <div key={label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 16, textAlign: 'center' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 5%', textAlign: 'center', background: '#12121a' }}>
        <h2 className="section-title">{s.ctaTitle}</h2>
        <p className="section-sub" style={{ margin: '16px auto 36px', textAlign: 'center' }}>{s.ctaSub}</p>
        <Link to="/devis" className="btn-primary">{s.ctaBtn}</Link>
      </section>
      <style>{`@media(max-width:768px){.svc-row{grid-template-columns:1fr!important}.grid-3{grid-template-columns:1fr!important}.grid-5{grid-template-columns:1fr 1fr!important}}`}</style>
    </div>
  );
}
