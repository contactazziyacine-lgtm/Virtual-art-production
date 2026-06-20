import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import Clients from '../components/Clients';
import ServiceIcon from '../components/ServiceIcon';
import AnimatedIcon from '../components/AnimatedIcon';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Cover from '../components/Cover';
import Coverflow from '../components/Coverflow';
import { IMG, FALLBACK } from '../data/covers';
import { featuredPortfolio } from '../data/portfolio';

export default function Home() {
  const { t } = useLang();

  const services = [
    { ic: 'spot', to: 'pub', title: t.cats.pub, desc: 'Conception créative, storyboard, tournage et post-production pour des campagnes percutantes.', tags: ['TV', 'Social', '4K'] },
    { ic: 'film', to: 'corporate', title: t.cats.corporate, desc: 'Valorisez votre image d\'entreprise avec des productions corporate de haute qualité.', tags: ['Corporate', 'RH', 'Reportage'] },
    { ic: 'tour360', to: '360', title: t.cats.t360, desc: 'Offrez une immersion totale dans vos espaces avec notre technologie de pointe.', tags: ['Hôtel', 'Immobilier', 'Commerce'] },
    { ic: 'social', to: 'social', title: t.cats.social, desc: 'Stratégie marketing digitale complète : SEO, publicité en ligne, content marketing et performance.', tags: ['SEO', 'Ads', 'Analytics'] },
    { ic: 'drone', to: 'all', title: 'Captation drone', desc: 'Prises de vue aériennes spectaculaires avec nos drones professionnels certifiés.', tags: ['4K', 'Certifié', 'Pro'] },
    { ic: 'event', to: 'event', title: t.cats.event, desc: 'Conférences, salons, séminaires — nous capturons chaque instant de vos événements.', tags: ['Live', 'Photo', 'Vidéo'] },
    { ic: 'motion', to: 'motion', title: 'Production 3D & Motion', desc: 'Animations 3D, motion design, habillage graphique et effets visuels modernes.', tags: ['3D', 'Motion', 'VFX'] },
    { ic: 'web', to: 'web', title: 'Création de site web', desc: 'Sites modernes, responsives et optimisés SEO. Vitrines, plateformes et applications.', tags: ['Web', 'Responsive', 'SEO'] },
  ];

  // Libellé de catégorie pour les pastilles de la vitrine portfolio
  const catLabel = { pub: t.cats.pub, corporate: t.cats.corporate, event: t.cats.event, motion: t.cats.motion, social: t.cats.social, web: t.cats.web };

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
                <Link to={`/portfolio?cat=${s.to}`} className="svc-cell" style={{ display: 'block', padding: 'clamp(22px,2.2vw,30px)', height: '100%', color: 'inherit', transition: 'background .25s' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 'var(--r)', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <AnimatedIcon style={{ color: 'var(--accent)', display: 'inline-flex' }}><ServiceIcon name={s.ic} size={24} /></AnimatedIcon>
                  </div>
                  <h3 className="h3" style={{ marginBottom: 9, display: 'flex', alignItems: 'center', gap: 8 }}>
                    {s.title}
                    <span className="svc-arw" aria-hidden="true" style={{ opacity: 0, transform: 'translateX(-4px)', transition: 'opacity .25s var(--ease), transform .25s var(--ease)', color: 'var(--accent)' }}>→</span>
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO — aperçu des réalisations ============ */}
      <section className="band band--paper">
        <div className="wrap">
          <Reveal className="stack-sm" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 18, marginBottom: 'clamp(28px,3.4vw,44px)' }}>
            <div>
              <div className="eyebrow">Portfolio</div>
              <h2 className="h1" style={{ marginTop: 16 }}>Nos réalisations</h2>
            </div>
            <Link to="/portfolio" className="alink">Voir tout le portfolio <span className="arw">→</span></Link>
          </Reveal>

          <Coverflow items={featuredPortfolio} catLabel={catLabel} />
        </div>
      </section>

      {/* ============ VISITES VIRTUELLES — teaser texte + visuel AVT ============ */}
      <section className="band band--deep">
        <div className="wrap split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center' }}>
          <Reveal style={{ maxWidth: 640 }}>
            <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 18 }}>Visites virtuelles 360°</div>
            <h2 className="h1" style={{ color: '#fff', marginBottom: 20 }}>L'Algérie, explorée en immersion totale</h2>
            <p className="lead justify" style={{ color: 'rgba(255,255,255,0.84)', marginBottom: 32 }}>
              Constantine, Tlemcen, Alger — faites entrer vos visiteurs à l'intérieur de vos espaces et des plus beaux sites du pays, en 360°, depuis n'importe quel écran.
            </p>
            <a href="https://algeriavirtualtravel.com/en" target="_blank" rel="noopener noreferrer" className="btn">Explorer les visites <span className="arw">→</span></a>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="/assets/hero/avt2.jpg"
              alt="Algeria Virtual Travel — par Virtual Art Production"
              loading="lazy"
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16, boxShadow: '0 30px 70px rgba(0,0,0,0.45)' }}
            />
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

      <style>{`
        .svc-cell:hover{background:var(--paper)}
        .svc-cell:hover .svc-arw{opacity:1;transform:none}
        .svc-cell:focus-visible{background:var(--paper);outline-offset:-2px}
        .home-port-card:hover .home-port-img{transform:scale(1.06)}
        .home-port-card:hover .home-port-play{opacity:1;transform:translate(-50%,-50%) scale(1)}
        @media(max-width:900px){.port-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:560px){.port-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  );
}
