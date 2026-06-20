import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Cover from '../components/Cover';
import { IMG, FALLBACK, BLOG_IMG, BLOG_FB } from '../data/covers';

export default function Blog() {
  const { t } = useLang();
  const b = t.blog;

  return (
    <div>
      <Seo
        title={t.nav.blog}
        description="Le blog de Virtual Art Production : conseils, tendances et coulisses de la production audiovisuelle, du film corporate et de la communication digitale en Algérie."
      />

      {/* ============ HÉRO ============ */}
      <section className="band--deep" style={{ position: 'relative', overflow: 'hidden', minHeight: 400, display: 'flex', alignItems: 'flex-end' }}>
        <Cover src={IMG.constantineMedina} fallback={FALLBACK.constantineMedina} alt="Médina" style={{ position: 'absolute', inset: 0, opacity: .48 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0.5) 0%, rgba(17,5,48,0.42) 42%, rgba(17,5,48,0.92) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 140, paddingBottom: 'clamp(48px,7vw,80px)', color: '#fff' }}>
          <div className="reveal in" style={{ maxWidth: 820 }}>
            <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 20 }}>{b.tag}</div>
            <h1 className="display" style={{ color: '#fff', marginBottom: 20, textWrap: 'balance' }}>{b.title}</h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 600 }}>{b.sub}</p>
          </div>
        </div>
      </section>

      {/* ============ ARTICLES ============ */}
      <section className="band band--surface">
        <div className="wrap">
          <div className="blog-grid cols-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(18px,2vw,28px)' }}>
            {b.posts.map((p, i) => {
              const src = BLOG_IMG[p.key];
              const fb = BLOG_FB[p.key];
              return (
                <Reveal key={i} delay={(i % 3) * 80}>
                  <Link to={`/blog/${p.slug}`} style={{ display: 'block', height: '100%' }}>
                  <article className="blog-card" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden', cursor: 'pointer', height: '100%', transition: 'transform .3s var(--ease), box-shadow .3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 18px 40px rgba(27,10,77,.12)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                      <div className="blog-img" style={{ position: 'absolute', inset: 0, transition: 'transform .6s var(--ease)' }}>
                        <Cover src={src} fallback={fb} alt={p.title} />
                      </div>
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0) 55%, rgba(17,5,48,0.55) 100%)' }} />
                      <span style={{ position: 'absolute', top: 14, left: 14, padding: '6px 12px', borderRadius: 100, background: 'var(--accent)', color: '#fff', fontFamily: 'var(--display)', fontSize: 11, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' }}>{p.cat}</span>
                    </div>
                    <div style={{ padding: 'clamp(20px,2vw,26px)' }}>
                      <h3 style={{ fontFamily: 'var(--display)', fontSize: 17, fontWeight: 700, marginBottom: 10, lineHeight: 1.35, letterSpacing: '-.01em' }}>{p.title}</h3>
                      <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 18 }}>{p.excerpt}</p>
                      <div style={{ fontSize: 12, color: 'var(--muted)', borderTop: '1px solid var(--line)', paddingTop: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span>{p.date}</span><span style={{ opacity: .5 }}>·</span><span>{p.read} {b.readTime}</span>
                      </div>
                    </div>
                  </article>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .blog-card:hover .blog-img{transform:scale(1.06)}
        @media(max-width:860px){.blog-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:560px){.blog-grid{grid-template-columns:1fr!important}}
      `}</style>
    </div>
  );
}
