import React from 'react';
import { useLang } from '../i18n/LanguageContext';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Cover from '../components/Cover';
import UiIcon from '../components/UiIcon';
import AnimatedIcon from '../components/AnimatedIcon';
import { IMG, FALLBACK, PHOTO, PHOTO_FB } from '../data/covers';

const teamColors = [
  { color: 'rgba(91,13,221,0.14)', tc: 'var(--accent)' },
  { color: 'rgba(14,134,84,0.14)', tc: 'var(--accent-2)' },
  { color: 'rgba(27,10,77,0.10)', tc: 'var(--deep)' },
  { color: 'rgba(91,13,221,0.10)', tc: 'var(--accent)' },
];

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div>
      <Seo
        title={t.nav.about}
        description="Découvrez Virtual Art Production : une équipe créative algérienne spécialisée dans la production audiovisuelle, le film corporate et la communication visuelle."
      />

      {/* ============ HÉRO ============ */}
      <section className="band--deep" style={{ position: 'relative', overflow: 'hidden', minHeight: 440, display: 'flex', alignItems: 'flex-end' }}>
        <Cover src={IMG.constantineNature} fallback={FALLBACK.constantineNature} alt="Algérie" style={{ position: 'absolute', inset: 0, opacity: .5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0.5) 0%, rgba(17,5,48,0.40) 42%, rgba(17,5,48,0.92) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 140, paddingBottom: 'clamp(48px,7vw,86px)', color: '#fff' }}>
          <div className="reveal in" style={{ maxWidth: 860 }}>
            <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 20 }}>{a.tag}</div>
            <h1 className="display" style={{ color: '#fff', textWrap: 'balance' }}>{a.title1} {a.title2}</h1>
          </div>
        </div>
      </section>

      {/* ============ HISTOIRE + VALEURS ============ */}
      <section className="band band--surface">
        <div className="wrap split" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(36px,5vw,84px)', alignItems: 'start' }}>
          <Reveal>
            <p className="lead justify" style={{ marginBottom: 18 }}>{a.p1}</p>
            <p className="justify" style={{ color: 'var(--muted)', marginBottom: 18, fontSize: 16, lineHeight: 1.8 }}>{a.p2}</p>
            <p className="justify" style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.8 }}>{a.p3}</p>
            <div className="cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 36 }}>
              {a.values.map(v => (
                <div key={v.title} style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 22 }}>
                  <div style={{ width: 42, height: 42, background: 'var(--accent-soft)', borderRadius: 'var(--r)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><AnimatedIcon style={{ color: 'var(--accent)' }}><UiIcon e={v.icon} size={22} /></AnimatedIcon></div>
                  <h4 style={{ fontFamily: 'var(--display)', fontSize: 15.5, fontWeight: 700, marginBottom: 7 }}>{v.title}</h4>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{v.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} style={{ position: 'sticky', top: 100 }}>
            <div style={{ position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', aspectRatio: '3/4' }}>
              <Cover src={PHOTO.communication} fallback={PHOTO_FB.communication} alt="Virtual Art Production" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0) 45%, rgba(17,5,48,0.9) 100%)' }} />
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(22px,2.4vw,30px)', display: 'flex', gap: 'clamp(20px,3vw,38px)', flexWrap: 'wrap' }}>
                {a.stats.map(([n, l]) => (
                  <div key={l}>
                    <span style={{ fontFamily: 'var(--display)', fontSize: 'clamp(26px,3vw,38px)', fontWeight: 800, letterSpacing: '-.02em', color: '#fff', display: 'block' }}>{n}</span>
                    <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.72)', textTransform: 'uppercase', letterSpacing: '.12em' }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ÉQUIPE ============ */}
      <section className="band band--paper">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">{a.teamTag}</div>
            <h2 className="h2" style={{ marginTop: 14, marginBottom: 10 }}>{a.teamTitle}</h2>
            <p className="lead measure" style={{ marginBottom: 'clamp(30px,4vw,50px)' }}>{a.teamSub}</p>
          </Reveal>
          <div className="team-grid cols-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'clamp(14px,1.4vw,20px)' }}>
            {a.team.map((m, i) => {
              const c = teamColors[i % teamColors.length];
              return (
                <Reveal key={i} delay={(i % 4) * 70}>
                  <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', padding: 'clamp(22px,2.2vw,30px)', textAlign: 'center', height: '100%', transition: 'transform .25s var(--ease), border-color .25s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'var(--line)'; }}>
                    <div style={{ width: 76, height: 76, background: c.color, borderRadius: '50%', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30 }}><AnimatedIcon style={{ fontSize: 30 }}>{m.icon}</AnimatedIcon></div>
                    <h3 style={{ fontFamily: 'var(--display)', fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{m.name}</h3>
                    <p style={{ fontSize: 13, color: c.tc, fontWeight: 600, marginBottom: 8 }}>{m.role}</p>
                    <p style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.6 }}>{m.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:860px){.split{grid-template-columns:1fr!important;gap:32px!important}.team-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:560px){.team-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  );
}
