import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import Clients from '../components/Clients';
import ServiceIcon from '../components/ServiceIcon';
import Seo from '../components/Seo';

export default function Home() {
  const { t } = useLang();

  const services = [
    { ic: 'spot', title: t.cats.pub, desc: 'Conception créative, storyboard, tournage et post-production pour des campagnes percutantes.', tags: ['TV','Social','4K'] },
    { ic: 'film', title: t.cats.corporate, desc: 'Valorisez votre image d\'entreprise avec des productions corporate de haute qualité.', tags: ['Corporate','RH','Reportage'] },
    { ic: 'tour360', title: t.cats.t360, desc: 'Offrez une immersion totale dans vos espaces avec notre technologie de pointe.', tags: ['Hôtel','Immobilier','Commerce'] },
    { ic: 'social', title: t.cats.social, desc: 'Stratégie digitale complète, création de contenu et community management.', tags: ['Instagram','LinkedIn','TikTok'] },
    { ic: 'drone', title: 'Captation drone', desc: 'Prises de vue aériennes spectaculaires avec nos drones professionnels certifiés.', tags: ['4K','Certifié','Pro'] },
    { ic: 'event', title: t.cats.event, desc: 'Conférences, salons, séminaires — nous capturons chaque instant de vos événements.', tags: ['Live','Photo','Vidéo'] },
    { ic: 'motion', title: 'Production 3D & Motion Graphics', desc: 'Animations 3D, motion design, habillage graphique et effets visuels pour des contenus modernes et dynamiques.', tags: ['3D','Motion','VFX'] },
    { ic: 'web', title: 'Création de Site Web', desc: 'Sites web modernes, responsives et optimisés SEO. Vitrines, plateformes et applications web sur mesure.', tags: ['Web','Responsive','SEO'] },
  ];

  return (
    <div>
      <Seo
        title={t.nav.home}
        description="Virtual Art Production — production audiovisuelle en Algérie : spots publicitaires, films corporate, visites virtuelles 360°, captation drone et motion design."
      />
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', padding: '0 5%', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#0a0a0f 0%,#0d0d1a 40%,#0a1428 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,102,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,102,255,0.04) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', width: 600, height: 600, background: 'radial-gradient(circle,rgba(0,102,255,0.12) 0%,transparent 70%)', top: '50%', left: '60%', transform: 'translate(-50%,-50%)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 720, paddingTop: 72 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(0,102,255,0.12)', border: '1px solid rgba(0,102,255,0.3)', borderRadius: 100, padding: '6px 16px', fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#0066ff', marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, background: '#0066ff', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            {t.hero.badge}
          </div>
          <h1 style={{ fontSize: 'clamp(42px,6vw,80px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, marginBottom: 24 }}>
            {t.hero.title1}<br /><span style={{ color: '#0066ff' }}>{t.hero.title2}</span><br />{t.hero.title3}
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 560, marginBottom: 44, lineHeight: 1.8, textAlign: 'justify' }}>
            {t.hero.sub}
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/devis" className="btn-primary">{t.hero.cta1}</Link>
            <Link to="/portfolio" className="btn-outline">{t.hero.cta2}</Link>
          </div>
        </div>

        <div className="hero-stats" style={{ position: 'absolute', bottom: 60, right: '5%', display: 'flex', gap: 40, zIndex: 2 }}>
          {[['+ 100',t.hero.stat1],['+ 8',t.hero.stat2],['4K',t.hero.stat3]].map(([n,l]) => (
            <div key={l} style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: -1 }}>{n}</div>
              <div style={{ fontSize: 12, color: '#8892a4', textTransform: 'uppercase', letterSpacing: 1 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '100px 5%' }}>
        <div className="section-tag">{t.services.tag}</div>
        <div className="section-title">{t.services.title1}<br />{t.services.title2}</div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 50 }}>
          {services.map(s => (
            <div key={s.title} style={{ background: '#1e1e2a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 32, transition: 'all 0.35s', cursor: 'pointer' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,102,255,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'none'; }}>
              <div style={{ width: 52, height: 52, background: 'rgba(0,102,255,0.1)', border: '1px solid rgba(0,102,255,0.2)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}><ServiceIcon name={s.ic} size={28} /></div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#8892a4', lineHeight: 1.7, textAlign: 'justify' }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                {s.tags.map(tag => <span key={tag} style={{ fontSize: 11, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', padding: '4px 10px', borderRadius: 100, color: '#8892a4' }}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS — Ils nous ont fait confiance */}
      <Clients />

      {/* CTA */}
      <section style={{ padding: '100px 5%', textAlign: 'center', background: 'linear-gradient(135deg,#0d1a3a,#0a0a1f)' }}>
        <div className="section-tag" style={{ display: 'inline-block' }}>{t.cta.tag}</div>
        <h2 className="section-title" style={{ margin: '0 auto' }}>{t.cta.title}</h2>
        <p className="section-sub" style={{ margin: '20px auto 40px', textAlign: 'center' }}>{t.cta.sub}</p>
        <Link to="/devis" className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>{t.cta.btn}</Link>
      </section>

      <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}@media(max-width:768px){.grid-3{grid-template-columns:1fr!important}.hero-stats{position:static!important;margin-top:40px;right:auto!important}}`}</style>
    </div>
  );
}
