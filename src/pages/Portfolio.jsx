import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Cover from '../components/Cover';
import { IMG, FALLBACK } from '../data/covers';

const items = [
  { cat: 'pub', video: '0Vb4MBjoRw4', title: 'Spot Publicitaire — Production 1', sub: 'Réalisation Virtual Art Production' },
  { cat: 'pub', video: '6AyGuNUa5tk', title: 'Spot Publicitaire — Production 2', sub: 'Réalisation Virtual Art Production' },
  { cat: 'pub', video: 'm_R9Ehai9g0', title: 'Spot Publicitaire — Production 3', sub: 'Réalisation Virtual Art Production' },

  { cat: 'corporate', video: 'Y87QLWrx8dE', title: 'Film Institutionnel — Entreprise 1', sub: 'Communication corporate' },
  { cat: 'corporate', video: 'Xa4nVCcB5Xg', title: 'Film Institutionnel — Entreprise 2', sub: 'Présentation d\'entreprise' },
  { cat: 'corporate', video: '_dvTG-fB4C4', title: 'Film Institutionnel — Entreprise 3', sub: 'Reportage d\'entreprise' },

  { cat: 'event', video: 'H3ZkvTk7Lys', title: 'Couverture Médiatique — Événement 1', sub: 'Captation événementielle' },
  { cat: 'event', video: 'RP7wOoqQmoU', title: 'Couverture Médiatique — Événement 2', sub: 'Reportage vidéo professionnel' },

  { cat: '360', tour: 'https://s3.algeriavirtualtravel.com/visites/safex-snc/index.htm', title: 'SAFEX — SNC', sub: 'Visite virtuelle 360° immersive', cover: IMG.constantineBelle, fallback: FALLBACK.constantineBelle },
  { cat: '360', tour: 'https://s3.algeriavirtualtravel.com/visites/AZ-hotel%20zeralda/index.htm', title: 'AZ Hôtel Zéralda', sub: 'Visite virtuelle 360° hôtellerie', cover: IMG.alger, fallback: FALLBACK.alger },

  { cat: 'social', video: 'WjNukodGau8', short: true, title: 'Marketing Digital — Short 1', sub: 'Contenu vertical engageant' },
  { cat: 'social', video: 'JFqNpQNCCO8', short: true, title: 'Marketing Digital — Short 2', sub: 'Format court & dynamique' },
  { cat: 'social', video: 'oEp7UpDA4x8', short: true, title: 'Marketing Digital — Short 3', sub: 'Contenu social engageant' },

  { cat: 'motion', video: 'G3mUgVckCtA', title: 'Production 3D — Projet 1', sub: 'Animation 3D & motion design' },
  { cat: 'motion', video: 'qWK_MgDza2U', title: 'Production 3D — Projet 2', sub: 'Habillage graphique & VFX' },
  { cat: 'motion', video: '62WtUzTOhmk', title: 'Motion Graphics — Projet 3', sub: 'Animation graphique dynamique' },
  { cat: 'motion', video: 'idVjpMBZaGM', title: 'Motion Graphics — Projet 4', sub: 'Design animé & effets visuels' },

  { cat: 'web', link: 'https://algeriavirtualtravel.com/en', title: 'Algeria Virtual Travel', sub: 'Plateforme web de tourisme digital', cover: IMG.tlemcen, fallback: FALLBACK.tlemcen },
];

// Destinations phares — chaque carte ouvre la plateforme réelle Algeria Virtual Travel
const destinations = [
  { name: 'Constantine', tag: 'La ville suspendue', img: IMG.constantine, fb: FALLBACK.constantine },
  { name: 'Tlemcen', tag: 'Perle du Maghreb', img: IMG.tlemcenMosque, fb: FALLBACK.tlemcenMosque },
  { name: 'Alger', tag: 'La blanche', img: IMG.alger, fb: FALLBACK.alger },
];
const AVT_PLATFORM = 'https://algeriavirtualtravel.com/en';

export default function Portfolio() {
  const { t } = useLang();
  const [active, setActive] = useState('all');
  const [modal, setModal] = useState(null);

  const categories = [
    { key: 'all', label: t.cats.all },
    { key: 'pub', label: t.cats.pub },
    { key: 'corporate', label: t.cats.corporate },
    { key: 'event', label: t.cats.event },
    { key: '360', label: t.cats.t360 },
    { key: 'social', label: t.cats.social },
    { key: 'motion', label: t.cats.motion },
    { key: 'web', label: t.cats.web },
  ];

  const filtered = active === 'all' ? items : items.filter(i => i.cat === active);

  const openItem = item => {
    if (item.link) window.open(item.link, '_blank', 'noopener');
    else if (item.tour) setModal({ type: 'tour', src: item.tour, title: item.title });
    else if (item.short) setModal({ type: 'short', src: item.video, title: item.title });
    else if (item.video) setModal({ type: 'video', src: item.video, title: item.title });
  };

  return (
    <div>
      <Seo
        title={t.nav.portfolio}
        description="Nos réalisations : spots publicitaires, films institutionnels, couvertures événementielles et visites virtuelles 360° produits par Virtual Art Production."
      />

      {/* ============ HÉRO ============ */}
      <section className="band--deep" style={{ position: 'relative', overflow: 'hidden', minHeight: 460, display: 'flex', alignItems: 'flex-end' }}>
        <Cover src={IMG.constantineBridge} fallback={FALLBACK.constantineBridge} alt="Constantine" style={{ position: 'absolute', inset: 0, opacity: .5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0.55) 0%, rgba(17,5,48,0.40) 40%, rgba(17,5,48,0.92) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 140, paddingBottom: 'clamp(48px,7vw,86px)', color: '#fff' }}>
          <div className="reveal in" style={{ maxWidth: 860 }}>
            <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 20 }}>{t.portfolio.tag}</div>
            <h1 className="display" style={{ color: '#fff', marginBottom: 22, textWrap: 'balance' }}>{t.portfolio.title}</h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 620 }}>{t.portfolio.sub}</p>
          </div>
        </div>
      </section>

      {/* ============ DESTINATIONS PHARES — visites virtuelles ============ */}
      <section className="band band--surface">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">Visites virtuelles 360°</div>
            <h2 className="h1" style={{ marginTop: 16, marginBottom: 14 }}>L'Algérie en immersion</h2>
            <p className="lead measure" style={{ marginBottom: 'clamp(28px,4vw,46px)' }}>
              Des médinas de Constantine aux minarets de Tlemcen — entrez dans les plus beaux sites du pays, en 360°, depuis n'importe quel écran.
            </p>
          </Reveal>

          <div className="cols-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(16px,1.6vw,22px)' }}>
            {destinations.map((d, i) => (
              <Reveal key={d.name} delay={i * 90}>
                <a href={AVT_PLATFORM} target="_blank" rel="noopener noreferrer"
                  className="dest-card"
                  style={{ display: 'block', position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', aspectRatio: '3/4', textDecoration: 'none', color: '#fff' }}>
                  <div className="dest-img" style={{ position: 'absolute', inset: 0, transition: 'transform .7s var(--ease)' }}>
                    <Cover src={d.img} fallback={d.fb} alt={d.name} />
                  </div>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0) 40%, rgba(17,5,48,0.88) 100%)' }} />
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(20px,2.2vw,28px)' }}>
                    <div className="eyebrow no-tick" style={{ color: 'rgba(255,255,255,0.82)', marginBottom: 8 }}>{d.tag}</div>
                    <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 800, letterSpacing: '-.02em', display: 'flex', alignItems: 'center', gap: 10 }}>
                      {d.name} <span className="dest-arw" style={{ display: 'inline-block', transition: 'transform .3s var(--ease)' }}>→</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALERIE COMPLÈTE ============ */}
      <section className="band band--paper">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">Toutes nos réalisations</div>
            <h2 className="h2" style={{ marginTop: 14 }}>Le portfolio</h2>
          </Reveal>

          {/* Filtres */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: 'clamp(28px,3.4vw,40px) 0' }}>
            {categories.map(c => {
              const on = active === c.key;
              return (
                <button key={c.key} onClick={() => setActive(c.key)} style={{
                  padding: '9px 18px', borderRadius: 100,
                  border: `1px solid ${on ? 'var(--accent)' : 'var(--line-2)'}`,
                  background: on ? 'var(--accent)' : 'transparent',
                  color: on ? '#fff' : 'var(--ink-soft)',
                  fontFamily: 'var(--display)', fontSize: 13, fontWeight: 600, letterSpacing: '.01em',
                  cursor: 'pointer', transition: 'all .2s var(--ease)'
                }}>{c.label}</button>
              );
            })}
          </div>

          {/* Grille */}
          <motion.div layout className="port-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(14px,1.4vw,20px)' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map(item => {
                const ytThumb = item.video ? `https://img.youtube.com/vi/${item.video}/hqdefault.jpg` : null;
                const isExternal = !!item.link;
                const is360 = !!item.tour;
                return (
                  <motion.div key={item.title} layout
                    initial={{ opacity: 0, scale: .96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: .96 }}
                    transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => openItem(item)}
                    className="port-card"
                    style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', aspectRatio: '16/10', cursor: 'pointer', background: 'var(--deep)' }}>
                    <div className="port-img" style={{ position: 'absolute', inset: 0, transition: 'transform .6s var(--ease)' }}>
                      <Cover src={ytThumb || item.cover} fallback={item.fallback || FALLBACK.constantine} alt={item.title} />
                    </div>
                    <div className="port-scrim" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0.05) 0%, rgba(17,5,48,0.35) 55%, rgba(17,5,48,0.92) 100%)', transition: 'opacity .3s' }} />

                    {/* Pastille type */}
                    <div style={{ position: 'absolute', top: 14, left: 14, display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 12px', borderRadius: 100, background: 'rgba(17,5,48,0.55)', backdropFilter: 'blur(6px)', color: '#fff', fontSize: 11.5, fontFamily: 'var(--display)', fontWeight: 600, letterSpacing: '.04em' }}>
                      {is360 ? '360° Immersif' : isExternal ? 'Plateforme web' : 'Vidéo'}
                    </div>

                    {/* Bouton lecture / explorer */}
                    <div className="port-play" style={{ position: 'absolute', top: '46%', left: '50%', transform: 'translate(-50%,-50%) scale(.85)', width: 58, height: 58, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 10px 30px rgba(91,13,221,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', opacity: 0, transition: 'all .3s var(--ease)' }}>
                      <span style={{ fontSize: 18, lineHeight: 1 }}>{is360 ? '⤢' : isExternal ? '↗' : '▶'}</span>
                    </div>

                    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(16px,1.6vw,22px)', color: '#fff' }}>
                      <h4 style={{ fontFamily: 'var(--display)', fontSize: 16, fontWeight: 700, marginBottom: 4, letterSpacing: '-.01em' }}>{item.title}</h4>
                      <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.74)' }}>
                        {is360 ? 'Explorer 360° →' : isExternal ? 'Ouvrir la plateforme →' : item.sub}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ============ LIGHTBOX ============ */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: .25 }}
            onClick={() => setModal(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(6,24,19,0.94)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(16px,4vw,40px)' }}>
            <motion.div
              initial={{ opacity: 0, y: 24, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: .97 }}
              transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ width: '100%', maxWidth: modal.type === 'short' ? 420 : (modal.type === 'tour' ? 1160 : 980), position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, gap: 16 }}>
                <span style={{ color: '#fff', fontFamily: 'var(--display)', fontSize: 15, fontWeight: 600, letterSpacing: '.01em' }}>{modal.title}</span>
                <button onClick={() => setModal(null)} aria-label="Fermer"
                  style={{ width: 40, height: 40, borderRadius: '50%', flexShrink: 0, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: 20, lineHeight: 1, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>✕</button>
              </div>
              {modal.type === 'tour' ? (
                <div style={{ position: 'relative', height: '78vh', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: '#000', boxShadow: '0 30px 80px rgba(0,0,0,.5)' }}>
                  <iframe src={modal.src} title="Visite virtuelle 360°" allowFullScreen style={{ width: '100%', height: '100%', border: 0 }} />
                </div>
              ) : (
                <div style={{ position: 'relative', paddingBottom: modal.type === 'short' ? '177.78%' : '56.25%', height: 0, borderRadius: 'var(--r-lg)', overflow: 'hidden', background: '#000', boxShadow: '0 30px 80px rgba(0,0,0,.5)' }}>
                  <iframe src={`https://www.youtube.com/embed/${modal.src}?autoplay=1`} title="Vidéo Virtual Art Production" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .dest-card:hover .dest-img{transform:scale(1.06)}
        .dest-card:hover .dest-arw{transform:translateX(6px)}
        .port-card:hover .port-img{transform:scale(1.08)}
        .port-card:hover .port-play{opacity:1;transform:translate(-50%,-50%) scale(1)}
        .port-card:hover .port-scrim{opacity:.92}
        @media(max-width:900px){.port-grid{grid-template-columns:1fr 1fr!important}.cols-3{grid-template-columns:1fr 1fr!important}}
        @media(max-width:560px){.port-grid{grid-template-columns:1fr!important}.cols-3{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  );
}
