import React from 'react';
import { useLang } from '../i18n/LanguageContext';

const clients = [
  { name: 'Télévision Algérienne', file: 'eptv.png' },
  { name: 'Sonatrach', file: 'sonatrach.svg' },
  { name: 'LG', file: 'lg.webp' },
  { name: 'NAPEC', file: 'napec.png' },
  { name: 'Syngenta', file: 'syngenta.jpg' },
  { name: 'SNC Metal', file: 'snc-metal.png' },
  { name: 'Rail Electr', file: 'rail-electr.jpeg' },
  { name: 'FAAPAC', file: 'faapac.png' },
  { name: 'Association El Amel CPMC', file: 'el-amel.webp' },
  { name: 'Agro Alimentaire', file: 'agro.jpg' },
  { name: 'Minas', file: 'minas.png' },
  { name: 'Algeria Virtual Travel', file: 'avt.png' },
];

export default function Clients() {
  const { t } = useLang();
  const row = [...clients, ...clients]; // doublé pour défilement continu

  return (
    <section style={{ padding: '56px 0', background: '#12121a', overflow: 'hidden' }}>
      <div style={{ padding: '0 5%' }}>
        <div className="section-tag" style={{ textAlign: 'center' }}>{t.testimonials.tag}</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 8 }}>{t.clientsTitle}</h2>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <span style={{ fontSize: 40, fontWeight: 900, color: '#0066ff' }}>+100</span>
          <span style={{ fontSize: 15, color: '#8892a4', marginLeft: 10 }}>clients &amp; partenaires</span>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {row.map((c, i) => (
            <div key={i} className="client-card" title={c.name}>
              <img src={`/assets/clients/${c.file}`} alt={c.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee { width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
        .marquee-track { display: flex; gap: 18px; width: max-content; animation: scroll-x 40s linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        .client-card { flex: 0 0 auto; width: 150px; height: 78px; background: #fff; border-radius: 12px; display: flex; align-items: center; justify-content: center; padding: 14px; }
        .client-card img { max-width: 100%; max-height: 100%; object-fit: contain; }
        @keyframes scroll-x { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        html[dir="rtl"] .marquee-track { animation-direction: reverse; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; flex-wrap: wrap; justify-content: center; } }
      `}</style>
    </section>
  );
}
