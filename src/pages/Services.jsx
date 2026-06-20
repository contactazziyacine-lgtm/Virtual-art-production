import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import ServiceIcon from '../components/ServiceIcon';
import UiIcon from '../components/UiIcon';
import AnimatedIcon from '../components/AnimatedIcon';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Cover from '../components/Cover';
import { PHOTO, PHOTO_FB, HERO, HERO_FB } from '../data/covers';

export default function Services() {
  const { t } = useLang();
  const s = t.servicesPage;
  const cardIcons = ['event', 'drone', 'tour360', 'motion', 'web'];
  const cardCats = ['event', 'all', '360', 'motion', 'web'];

  return (
    <div>
      <Seo
        title={t.nav.services}
        description="Spots publicitaires, films corporate, visites virtuelles 360°, captation drone, motion design et création de sites web — tous nos services de production audiovisuelle."
      />

      {/* ============ HÉRO ============ */}
      <section className="band--deep" style={{ position: 'relative', overflow: 'hidden', minHeight: 440, display: 'flex', alignItems: 'flex-end' }}>
        <Cover src={HERO.services} fallback={HERO_FB.services} alt="Services Virtual Art Production" style={{ position: 'absolute', inset: 0, opacity: .48 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0.55) 0%, rgba(17,5,48,0.42) 42%, rgba(17,5,48,0.92) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 140, paddingBottom: 'clamp(48px,7vw,86px)', color: '#fff' }}>
          <div className="reveal in" style={{ maxWidth: 860 }}>
            <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 20 }}>{s.tag}</div>
            <h1 className="display" style={{ color: '#fff', marginBottom: 22, textWrap: 'balance' }}>{s.title1} {s.title2}</h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 620 }}>{s.sub}</p>
          </div>
        </div>
      </section>

      {/* ============ SPOT — ligne éditoriale image / texte ============ */}
      <section className="band band--surface">
        <div className="wrap split" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'center' }}>
          <Reveal className="media media--4x3" style={{ borderRadius: 'var(--r-lg)' }}>
            <Cover src={PHOTO.cameraman} fallback={PHOTO_FB.cameraman} alt={s.spotTitle} />
          </Reveal>
          <Reveal delay={120}>
            <div className="eyebrow">{s.spotTitle}</div>
            <h2 className="h2" style={{ marginTop: 14, marginBottom: 16 }}>{s.spotTitle}</h2>
            <p className="lead" style={{ marginBottom: 26 }}>{s.spotDesc}</p>
            <div className="cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {s.spotItems.map(([icon, label]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--r)' }}>
                  <AnimatedIcon style={{ color: 'var(--accent)' }}><UiIcon e={icon} size={20} /></AnimatedIcon>
                  <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', fontWeight: 500 }}>{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FILM — ligne inversée ============ */}
      <section className="band band--paper">
        <div className="wrap split" style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'center' }}>
          <Reveal>
            <div className="eyebrow">{s.filmTitle}</div>
            <h2 className="h2" style={{ marginTop: 14, marginBottom: 16 }}>{s.filmTitle}</h2>
            <p className="lead" style={{ marginBottom: 26 }}>{s.filmDesc}</p>
            <div className="cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {s.filmItems.map(([icon, label]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r)' }}>
                  <AnimatedIcon style={{ color: 'var(--accent)' }}><UiIcon e={icon} size={20} /></AnimatedIcon>
                  <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', fontWeight: 500 }}>{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="media media--4x3 svc-media-2" style={{ borderRadius: 'var(--r-lg)' }}>
            <Cover src={PHOTO.boardroom} fallback={PHOTO_FB.boardroom} alt={s.filmTitle} />
          </Reveal>
        </div>
      </section>

      {/* ============ CARTES — grille fine ============ */}
      <section className="band band--surface">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">Expertises complémentaires</div>
            <h2 className="h2" style={{ marginTop: 14, marginBottom: 'clamp(28px,3.4vw,44px)' }}>Tout l'audiovisuel, sous un seul toit</h2>
          </Reveal>
          <div className="svc-cards cols-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
            {s.cards.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70} style={{ borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                <Link to={`/portfolio?cat=${cardCats[i]}`} style={{ display: 'block', height: '100%', color: 'inherit' }}>
                <div style={{ padding: 'clamp(24px,2.4vw,32px)', height: '100%', transition: 'background .25s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--paper)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--r)', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <AnimatedIcon style={{ color: 'var(--accent)', display: 'inline-flex' }}><ServiceIcon name={cardIcons[i]} size={26} /></AnimatedIcon>
                  </div>
                  <h3 className="h3" style={{ marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 18 }}>{c.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    {c.tags.map(tag => <span key={tag} style={{ fontSize: 11.5, fontFamily: 'var(--display)', fontWeight: 500, background: 'var(--paper)', border: '1px solid var(--line-2)', padding: '4px 11px', borderRadius: 100, color: 'var(--ink-soft)' }}>{tag}</span>)}
                  </div>
                </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOCIAL ============ */}
      <section className="band band--paper">
        <div className="wrap">
          <Reveal style={{ maxWidth: 680 }}>
            <div className="eyebrow">{s.socialTitle}</div>
            <h2 className="h2" style={{ marginTop: 14, marginBottom: 14 }}>{s.socialTitle}</h2>
            <p className="lead" style={{ marginBottom: 'clamp(26px,3vw,40px)' }}>{s.socialDesc}</p>
          </Reveal>
          <div className="social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 'clamp(12px,1.2vw,16px)' }}>
            {s.socialItems.map(([icon, label]) => (
              <div key={label} style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 'clamp(18px,2vw,26px) 14px', textAlign: 'center', transition: 'transform .25s var(--ease), border-color .25s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--line)'; }}>
                <div style={{ marginBottom: 10, color: 'var(--accent)', display: 'flex', justifyContent: 'center' }}><AnimatedIcon><UiIcon e={icon} size={30} /></AnimatedIcon></div>
                <p style={{ fontSize: 13, color: 'var(--ink-soft)', fontWeight: 500 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="band band--deep" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <Reveal>
            <h2 className="h1" style={{ color: '#fff', marginBottom: 18 }}>{s.ctaTitle}</h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.82)', margin: '0 auto 34px' }}>{s.ctaSub}</p>
            <Link to="/devis" className="btn">{s.ctaBtn} <span className="arw">→</span></Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media(max-width:860px){
          .split{grid-template-columns:1fr!important;gap:28px!important}
          .svc-media-2{order:-1}
          .svc-cards{grid-template-columns:1fr 1fr!important}
          .social-grid{grid-template-columns:1fr 1fr 1fr!important}
        }
        @media(max-width:560px){
          .svc-cards{grid-template-columns:1fr!important}
          .social-grid{grid-template-columns:1fr 1fr!important}
        }
      `}</style>
    </div>
  );
}
