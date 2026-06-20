import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Cover from '../components/Cover';
import NotFound from './NotFound';
import { BLOG_IMG, BLOG_FB } from '../data/covers';

export default function Article() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const b = t.blog;
  const post = b.posts.find(p => p.slug === slug);

  if (!post) return <NotFound />;

  const img = BLOG_IMG[post.key];
  const fb = BLOG_FB[post.key];
  const backLabel = lang === 'ar' ? 'العودة إلى المدونة' : lang === 'en' ? 'Back to the blog' : 'Retour au blog';
  const ctaTitle = lang === 'ar' ? 'مشروع في الأفق؟'
    : lang === 'en' ? 'A project in mind?'
    : 'Un projet en tête ?';
  const ctaText = lang === 'ar' ? 'تحدّثوا إلينا — نرافقكم من الفكرة إلى التسليم النهائي.'
    : lang === 'en' ? 'Let\u2019s talk \u2014 we guide you from idea to final delivery.'
    : 'Parlons-en — nous vous accompagnons de l\u2019idée à la livraison finale.';

  return (
    <article>
      <Seo title={post.title} description={post.excerpt} />

      {/* ============ HÉRO ARTICLE ============ */}
      <header className="band--deep" style={{ position: 'relative', overflow: 'hidden', minHeight: 480, display: 'flex', alignItems: 'flex-end' }}>
        <Cover src={img} fallback={fb} alt={post.title} style={{ position: 'absolute', inset: 0, opacity: .42 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0.55) 0%, rgba(17,5,48,0.45) 40%, rgba(17,5,48,0.94) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 150, paddingBottom: 'clamp(44px,6vw,72px)', color: '#fff' }}>
          <div className="reveal in" style={{ maxWidth: 820 }}>
            <Link to="/blog" className="alink" style={{ color: 'rgba(255,255,255,0.86)', marginBottom: 22, borderColor: 'transparent' }}>
              <span className="arw" style={{ display: 'inline-block', transform: 'scaleX(-1)' }}>→</span> {backLabel}
            </Link>
            <div style={{ height: 18 }} />
            <span style={{ display: 'inline-block', padding: '6px 14px', borderRadius: 100, background: 'var(--accent)', color: '#fff', fontFamily: 'var(--display)', fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', marginBottom: 20 }}>{post.cat}</span>
            <h1 className="h1" style={{ color: '#fff', marginBottom: 18, textWrap: 'balance' }}>{post.title}</h1>
            <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.74)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span>{post.date}</span><span style={{ opacity: .5 }}>·</span><span>{post.read} {b.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ============ CORPS DE L'ARTICLE ============ */}
      <section className="band band--surface">
        <div className="wrap">
          <Reveal className="prose" style={{ margin: '0 auto' }}>
            <p className="lead" style={{ fontSize: 20, color: 'var(--ink-soft)', marginBottom: 30 }}>{post.intro}</p>

            {post.sections.map((s, i) => (
              <div key={i}>
                <h2 className="h2" style={{ fontSize: 'clamp(22px,2.4vw,30px)' }}>{s.h}</h2>
                {(s.p || []).map((para, j) => <p key={j}>{para}</p>)}
                {s.l && (
                  <ul>{s.l.map((li, k) => <li key={k}>{li}</li>)}</ul>
                )}
              </div>
            ))}

            <p style={{ marginTop: 26, paddingTop: 26, borderTop: '1px solid var(--line)', fontWeight: 600, color: 'var(--ink)' }}>{post.outro}</p>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="band--deep band--tight">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 720, marginInline: 'auto' }}>
          <h2 className="h2" style={{ color: '#fff', marginBottom: 14 }}>{ctaTitle}</h2>
          <p className="lead" style={{ color: 'rgba(255,255,255,0.84)', marginInline: 'auto', marginBottom: 28 }}>{ctaText}</p>
          <Link to="/devis" className="btn btn--light">{t.cta.btn} <span className="arw">→</span></Link>
        </div>
      </section>
    </article>
  );
}
