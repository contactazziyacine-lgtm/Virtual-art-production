import React, { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';

const items = [
  { cat: 'pub', video: '0Vb4MBjoRw4', title: 'Spot Publicitaire — Production 1', sub: 'Réalisation Virtual Art Production' },
  { cat: 'pub', video: '6AyGuNUa5tk', title: 'Spot Publicitaire — Production 2', sub: 'Réalisation Virtual Art Production' },
  { cat: 'pub', video: 'm_R9Ehai9g0', title: 'Spot Publicitaire — Production 3', sub: 'Réalisation Virtual Art Production' },

  { cat: 'corporate', video: 'Y87QLWrx8dE', title: 'Film Institutionnel — Entreprise 1', sub: 'Communication corporate' },
  { cat: 'corporate', video: 'Xa4nVCcB5Xg', title: 'Film Institutionnel — Entreprise 2', sub: 'Présentation d\'entreprise' },
  { cat: 'corporate', video: '_dvTG-fB4C4', title: 'Film Institutionnel — Entreprise 3', sub: 'Reportage d\'entreprise' },

  { cat: 'event', video: 'H3ZkvTk7Lys', title: 'Couverture Médiatique — Événement 1', sub: 'Captation événementielle' },
  { cat: 'event', video: 'RP7wOoqQmoU', title: 'Couverture Médiatique — Événement 2', sub: 'Reportage vidéo professionnel' },

  { cat: '360', tour: 'https://s3.algeriavirtualtravel.com/visites/safex-snc/index.htm', title: 'SAFEX — SNC', sub: 'Visite virtuelle 360° immersive', bg: 'linear-gradient(135deg,#1a0d2a,#3d1a5a)' },
  { cat: '360', tour: 'https://s3.algeriavirtualtravel.com/visites/AZ-hotel%20zeralda/index.htm', title: 'AZ Hôtel Zéralda', sub: 'Visite virtuelle 360° hôtellerie', bg: 'linear-gradient(135deg,#0d1a3a,#1428aa)' },

  { cat: 'social', video: 'WjNukodGau8', short: true, title: 'Réseaux Sociaux — Short 1', sub: 'Contenu vertical engageant' },
  { cat: 'social', video: 'JFqNpQNCCO8', short: true, title: 'Réseaux Sociaux — Short 2', sub: 'Format court & dynamique' },
  { cat: 'social', video: 'oEp7UpDA4x8', short: true, title: 'Réseaux Sociaux — Short 3', sub: 'Vidéo réseaux sociaux' },

  { cat: 'motion', video: 'G3mUgVckCtA', title: 'Production 3D — Projet 1', sub: 'Animation 3D & motion design' },
  { cat: 'motion', video: 'qWK_MgDza2U', title: 'Production 3D — Projet 2', sub: 'Habillage graphique & VFX' },
  { cat: 'motion', video: '62WtUzTOhmk', title: 'Motion Graphics — Projet 3', sub: 'Animation graphique dynamique' },
  { cat: 'motion', video: 'idVjpMBZaGM', title: 'Motion Graphics — Projet 4', sub: 'Design animé & effets visuels' },

  { cat: 'web', link: 'https://algeriavirtualtravel.com/en', title: 'Algeria Virtual Travel', sub: 'Plateforme web de tourisme digital', bg: 'linear-gradient(135deg,#0d2a1a,#0d5a3a)' },
];

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
    else if (item.tour) setModal({ type: 'tour', src: item.tour });
    else if (item.short) setModal({ type: 'short', src: item.video });
    else if (item.video) setModal({ type: 'video', src: item.video });
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: '80px 5%', background: '#12121a' }}>
        <div className="section-tag">{t.portfolio.tag}</div>
        <div className="section-title">{t.portfolio.title}</div>
        <p className="section-sub" style={{ marginTop: 16, textAlign: 'justify' }}>{t.portfolio.sub}</p>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '40px 0' }}>
          {categories.map(c => (
            <button key={c.key} onClick={() => setActive(c.key)} style={{
              padding: '9px 20px', borderRadius: 100,
              border: `1px solid ${active === c.key ? '#0066ff' : 'rgba(255,255,255,0.12)'}`,
              background: active === c.key ? '#0066ff' : 'transparent',
              color: active === c.key ? '#fff' : 'rgba(255,255,255,0.6)',
              fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
            }}>{c.label}</button>
          ))}
        </div>

        <div className="portfolio-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {filtered.map(item => {
            const thumb = item.video ? `#000 url(https://img.youtube.com/vi/${item.video}/hqdefault.jpg) center/cover` : item.bg;
            return (
              <div key={item.title} onClick={() => openItem(item)}
                style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', aspectRatio: '16/10', cursor: 'pointer', background: '#2a2a3a' }}
                onMouseEnter={e => { e.currentTarget.querySelector('.overlay').style.opacity='1'; e.currentTarget.querySelector('.play').style.opacity='1'; e.currentTarget.querySelector('.thumb').style.transform='scale(1.08)'; }}
                onMouseLeave={e => { e.currentTarget.querySelector('.overlay').style.opacity='0'; e.currentTarget.querySelector('.play').style.opacity='0'; e.currentTarget.querySelector('.thumb').style.transform='scale(1)'; }}>
                <div className="thumb" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, transition: 'transform 0.5s', background: thumb }}>
                  {item.tour && '🌐'}{item.link && '💻'}
                </div>
                <div className="play" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 52, height: 52, background: 'rgba(0,102,255,0.85)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, opacity: 0, transition: 'opacity 0.3s' }}>{item.tour ? '⤢' : item.link ? '↗' : '▶'}</div>
                <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.3) 50%,transparent)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 20 }}>
                  <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {modal && (
        <div onClick={() => setModal(null)} style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: modal.type === 'short' ? 400 : (modal.type === 'tour' ? 1100 : 960), position: 'relative' }}>
            <button onClick={() => setModal(null)} style={{ position: 'absolute', top: -44, right: 0, background: 'transparent', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer', lineHeight: 1 }} aria-label="Fermer">✕</button>
            {modal.type === 'tour' ? (
              <div style={{ position: 'relative', height: '80vh', borderRadius: 12, overflow: 'hidden', background: '#000' }}>
                <iframe src={modal.src} title="Visite virtuelle 360°" allowFullScreen style={{ width: '100%', height: '100%', border: 0 }} />
              </div>
            ) : (
              <div style={{ position: 'relative', paddingBottom: modal.type === 'short' ? '177.78%' : '56.25%', height: 0, borderRadius: 12, overflow: 'hidden', background: '#000' }}>
                <iframe src={`https://www.youtube.com/embed/${modal.src}?autoplay=1`} title="Vidéo Virtual Art Production" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            )}
          </div>
        </div>
      )}
      <style>{`@media(max-width:768px){.portfolio-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.portfolio-grid{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}
