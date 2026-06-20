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
  { name: 'Association El Amel CPMC', file: 'el-amel.png' },
  { name: 'ELKENDI — Part of MS Pharma', file: 'elkendi.png' },
  { name: 'Agro Alimentaire', file: 'agro.jpg' },
  { name: 'Minas', file: 'minas.png' },
  { name: 'Algeria Virtual Travel', file: 'avt.png' },
];

export default function Clients() {
  const { t } = useLang();
  const row = [...clients, ...clients];

  return (
    <section className="band--paper" style={{ paddingBlock: '70px 64px', overflow: 'hidden', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14, marginBottom: 38 }}>
        <div className="eyebrow eyebrow--muted">{t.testimonials.tag}</div>
        <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(24px,2.4vw,34px)', letterSpacing: '-.02em' }}>
          <span style={{ color: 'var(--accent)' }}>+100</span> {t.clientsTitle.toLowerCase().includes('confian') ? 'partenaires de confiance' : t.clientsTitle}
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
        .marquee { width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent); mask-image: linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent); }
        .marquee-track { display: flex; gap: 16px; width: max-content; animation: scroll-x 46s linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        .client-card { flex: 0 0 auto; width: 156px; height: 80px; background: var(--surface); border: 1px solid var(--line); border-radius: var(--r); display: flex; align-items: center; justify-content: center; padding: 16px; filter: grayscale(1); opacity: .72; transition: filter .3s, opacity .3s, transform .3s; }
        .client-card:hover { filter: grayscale(0); opacity: 1; transform: translateY(-3px); }
        .client-card img { max-width: 100%; max-height: 100%; object-fit: contain; }
        @keyframes scroll-x { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        html[dir="rtl"] .marquee-track { animation-direction: reverse; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; flex-wrap: wrap; justify-content: center; } .client-card { filter: grayscale(0); opacity: 1; } }
      `}</style>
    </section>
  );
}
