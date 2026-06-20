import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import Clients from '../components/Clients';
import ServiceIcon from '../components/ServiceIcon';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Cover from '../components/Cover';
import { IMG, FALLBACK } from '../data/covers';

export default function Home() {
  const { t } = useLang();

  const services = [
    { ic: 'spot', title: t.cats.pub, desc: 'Conception créative, storyboard, tournage et post-production pour des campagnes percutantes.', tags: ['TV', 'Social', '4K'] },
    { ic: 'film', title: t.cats.corporate, desc: 'Valorisez votre image d\'entreprise avec des productions corporate de haute qualité.', tags: ['Corporate', 'RH', 'Reportage'] },
    { ic: 'tour360', title: t.cats.t360, desc: 'Offrez une immersion totale dans vos espaces avec notre technologie de pointe.', tags: ['Hôtel', 'Immobilier', 'Commerce'] },
    { ic: 'social', title: t.cats.social, desc: 'Stratégie marketing digitale complète : SEO, publicité en ligne, content marketing et performance.', tags: ['SEO', 'Ads', 'Analytics'] },
    { ic: 'drone', title: 'Captation drone', desc: 'Prises de vue aériennes spectaculaires avec nos drones professionnels certifiés.', tags: ['4K', 'Certifié', 'Pro'] },
    { ic: 'event', title: t.cats.event, desc: 'Conférences, salons, séminaires — nous capturons chaque instant de vos événements.', tags: ['Live', 'Photo', 'Vidéo'] },
    { ic: 'motion', title: 'Production 3D & Motion', desc: 'Animations 3D, motion design, habillage graphique et effets visuels modernes.', tags: ['3D', 'Motion', 'VFX'] },
    { ic: 'web', title: 'Création de site web', desc: 'Sites modernes, responsives et optimisés SEO. Vitrines, plateformes et applications.', tags: ['Web', 'Responsive', 'SEO'] },
  ];

  return (
    <div>
      <Seo title={t.nav.home} description="Virtual Art Production — production audiovisuelle en Algérie : spots publicitaires, films corporate, visites virtuelles 360°, captation drone et motion design." />

      {/* ============ HÉRO — pleine page, fond dégradé de marque + photo ============ */}
      <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: 'var(--deep-2)' }}>
        {/* dégradé de marque (toujours rendu) */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1B0A4D 0%, #2202EB 52%, #9529AC 100%)' }} />
        {/* photo, fondue dans la palette ; si elle échoue, le dégradé reste */}
        <Cover src={IMG.alger} fallback={FALLBACK.alger} alt="Baie d'Alger" style={{ position: 'absolute', inset: 0, opacity: .42, mixBlendMode: 'overlay' }} />
        {/* halo lumineux + voile sombre pour la lisibilité du texte */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 90% at 78% 8%, rgba(149,41,172,0.55) 0%, rgba(149,41,172,0) 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0.30) 0%, rgba(17,5,48,0.10) 36%, rgba(17,5,48,0.82) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingBottom: 'clamp(56px, 9vw, 110px)', paddingTop: 120, color: '#fff' }}>
          <div className="reveal in" style={{ maxWidth: 980 }}>
            <div className="eyebrow no-tick" style={{ color: '#fff', opacity: .95, marginBottom: 22 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff', boxShadow: '0 0 14px rgba(255,255,255,.9)' }} /> {t.hero.badge}
            </div>
            <h1 className="display" style={{ color: '#fff', marginBottom: 26, textWrap: 'balance' }}>
              {t.hero.title1} {t.hero.title2}<br />{t.hero.title3}
            </h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.92)', marginBottom: 38 }}>{t.hero.sub}</p>
            <div className="stack-sm" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/devis" className="btn btn--light">{t.hero.cta1} <span className="arw">→</span></Link>
              <Link to="/portfolio" className="btn btn--ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>{t.hero.cta2}</Link>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 'clamp(28px,5vw,64px)', flexWrap: 'wrap', marginTop: 'clamp(40px,6vw,72px)', borderTop: '1px solid rgba(255,255,255,0.24)', paddingTop: 30 }}>
            {[['+ 100', t.hero.stat1], ['+ 8', t.hero.stat2], ['4K', t.hero.stat3]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(28px,3vw,42px)', fontWeight: 800, letterSpacing: '-.02em', color: '#fff' }}>{n}</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.74)', textTransform: 'uppercase', letterSpacing: '.12em', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTRO ÉDITORIALE ============ */}
      <section className="band band--surface">
        <div className="wrap split" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 'clamp(36px,6vw,96px)', alignItems: 'start' }}>
          <Reveal>
            <div className="eyebrow">{t.services.tag}</div>
            <h2 className="h1" style={{ marginTop: 18 }}>{t.services.title1} {t.services.title2}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead justify" style={{ marginBottom: 22 }}>{t.cta.sub}</p>
            <Link to="/services" className="alink">Découvrir nos expertises <span className="arw">→</span></Link>
          </Reveal>
        </div>

        {/* Services en grille fine */}
        <div className="wrap" style={{ marginTop: 'clamp(40px,5vw,68px)' }}>
          <div className="cols-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderTop: '1px solid var(--line)', borderLeft: '1px solid var(--line)' }}>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 70} style={{ borderRight: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                <div className="svc-cell" style={{ padding: 'clamp(22px,2.2vw,30px)', height: '100%', transition: 'background .25s', cursor: 'default' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--paper)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ width: 46, height: 46, borderRadius: 'var(--r)', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <span style={{ color: 'var(--accent)', display: 'inline-flex' }}><ServiceIcon name={s.ic} size={24} /></span>
                  </div>
                  <h3 className="h3" style={{ marginBottom: 9 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VISITES VIRTUELLES — teaser plein cadre ============ */}
      <section className="band--deep" style={{ position: 'relative', overflow: 'hidden', minHeight: 520, display: 'flex', alignItems: 'center' }}>
        <Cover src={IMG.constantine} fallback={FALLBACK.constantine} alt="Constantine" style={{ position: 'absolute', inset: 0, opacity: .5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(17,5,48,0.92) 0%, rgba(17,5,48,0.62) 55%, rgba(17,5,48,0.30) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <Reveal style={{ maxWidth: 640 }}>
            <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 18 }}>Visites virtuelles 360°</div>
            <h2 className="h1" style={{ color: '#fff', marginBottom: 20 }}>L'Algérie, explorée en immersion totale</h2>
            <p className="lead justify" style={{ color: 'rgba(255,255,255,0.84)', marginBottom: 32 }}>
              Constantine, Tlemcen, Alger — faites entrer vos visiteurs à l'intérieur de vos espaces et des plus beaux sites du pays, en 360°, depuis n'importe quel écran.
            </p>
            <Link to="/portfolio" className="btn">Explorer les visites <span className="arw">→</span></Link>
          </Reveal>
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <Clients />

      {/* ============ CTA ============ */}
      <section className="band band--surface">
        <div className="wrap split" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'center' }}>
          <Reveal>
            <div className="eyebrow">{t.cta.tag}</div>
            <h2 className="h1" style={{ marginTop: 16 }}>{t.cta.title}</h2>
          </Reveal>
          <Reveal delay={120} style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Link to="/devis" className="btn" style={{ padding: '16px 30px', fontSize: 16 }}>{t.cta.btn} <span className="arw">→</span></Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
