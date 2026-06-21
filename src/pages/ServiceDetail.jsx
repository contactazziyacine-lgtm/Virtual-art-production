import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLang } from '../i18n/LanguageContext';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';
import Cover from '../components/Cover';
import NotFound from './NotFound';
import { SERVICE_DETAILS, findService } from '../data/serviceDetails';
import { HERO, HERO_FB } from '../data/covers';

const SITE = 'https://virtualart-dz.com';

// Libellés d'interface localisés (le contenu éditorial vient des données i18n).
const UI = {
  fr: { devis: 'Demander un devis gratuit', prestations: 'Prestations', includes: 'Ce qui est inclus', atouts: 'Nos atouts', why: 'Pourquoi Virtual Art Production', faqEy: 'Questions fréquentes', faq: 'FAQ', othersEy: 'Nos autres services', others: 'Découvrez aussi', allServices: 'Tous les services →', ctaTitle: (s) => `Un projet de ${s.toLowerCase()} ?`, ctaSub: 'Parlons-en. Obtenez un devis personnalisé et gratuit sous 48h.', ctaBtn: 'Obtenir mon devis gratuit', inCity: ' à Alger' },
  en: { devis: 'Request a free quote', prestations: 'Services', includes: "What's included", atouts: 'Our strengths', why: 'Why Virtual Art Production', faqEy: 'Frequently asked questions', faq: 'FAQ', othersEy: 'Our other services', others: 'Discover also', allServices: 'All services →', ctaTitle: (s) => `A ${s.toLowerCase()} project?`, ctaSub: 'Let’s talk. Get a free, personalised quote within 48h.', ctaBtn: 'Get my free quote', inCity: ' in Algiers' },
  ar: { devis: 'اطلب عرض سعر مجاني', prestations: 'الخدمات', includes: 'ما الذي يشمله', atouts: 'مزايانا', why: 'لماذا Virtual Art Production', faqEy: 'أسئلة شائعة', faq: 'الأسئلة الشائعة', othersEy: 'خدماتنا الأخرى', others: 'اكتشف أيضًا', allServices: 'كل الخدمات →', ctaTitle: (s) => `هل لديك مشروع ${s}؟`, ctaSub: 'لنتحدث. احصل على عرض سعر مخصّص ومجاني خلال 48 ساعة.', ctaBtn: 'احصل على عرض السعر المجاني', inCity: ' في الجزائر العاصمة' },
};

const pick = (svc, lang) => (lang === 'fr' ? svc : (svc.i18n && svc.i18n[lang]) || svc);

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const svc = findService(slug);
  if (!svc) return <NotFound />;

  const c = pick(svc, lang);
  const ui = UI[lang] || UI.fr;
  const url = `${SITE}/services/${svc.slug}`;
  const others = SERVICE_DETAILS.filter((s) => s.slug !== svc.slug).map((o) => ({ slug: o.slug, h1: pick(o, lang).h1 }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: c.h1, serviceType: c.h1, description: c.metaDescription, areaServed: { '@type': 'Country', name: 'Algérie' }, provider: { '@id': `${SITE}/#organization` }, url },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.nav.home, item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: t.nav.services, item: `${SITE}/services` },
        { '@type': 'ListItem', position: 3, name: c.h1, item: url },
      ] },
      { '@type': 'FAQPage', mainEntity: c.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ],
  };

  return (
    <div>
      <Seo title={c.metaTitle} description={c.metaDescription} keywords={c.keywords} />
      <Helmet><script type="application/ld+json">{JSON.stringify(jsonLd)}</script></Helmet>

      {/* ============ HÉRO ============ */}
      <section className="band--deep" style={{ position: 'relative', overflow: 'hidden', minHeight: 420, display: 'flex', alignItems: 'flex-end' }}>
        <Cover src={HERO.services} fallback={HERO_FB.services} alt={c.h1} style={{ position: 'absolute', inset: 0, opacity: .42 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0.6) 0%, rgba(17,5,48,0.45) 42%, rgba(17,5,48,0.94) 100%)' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 140, paddingBottom: 'clamp(44px,6vw,78px)', color: '#fff' }}>
          <nav className="reveal in" aria-label="Fil d'Ariane" style={{ fontSize: 13, marginBottom: 18, color: 'rgba(255,255,255,0.7)' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)' }}>{t.nav.home}</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link to="/services" style={{ color: 'rgba(255,255,255,0.7)' }}>{t.nav.services}</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span style={{ color: '#fff' }}>{c.h1}</span>
          </nav>
          <div className="reveal in" style={{ maxWidth: 860 }}>
            <div className="eyebrow no-tick" style={{ color: '#fff', marginBottom: 18 }}>{c.eyebrow}</div>
            <h1 className="display" style={{ color: '#fff', marginBottom: 20, textWrap: 'balance' }}>{c.h1}</h1>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.86)', maxWidth: 640 }}>{c.lead}</p>
            <Link to="/devis" className="btn" style={{ marginTop: 28 }}>{ui.devis} <span className="arw">→</span></Link>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="band band--surface">
        <div className="wrap split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,80px)', alignItems: 'center' }}>
          <Reveal className="media media--4x3" style={{ borderRadius: 'var(--r-lg)' }}>
            <Cover src={svc.image} fallback={svc.imageFb} alt={c.h1} />
          </Reveal>
          <Reveal delay={120}>
            <div className="eyebrow">{c.eyebrow}</div>
            <h2 className="h2" style={{ marginTop: 14, marginBottom: 18 }}>{c.h1}{ui.inCity}</h2>
            {c.intro.map((p, i) => <p key={i} className="lead" style={{ marginBottom: 16 }}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      {/* ============ CE QUI EST INCLUS ============ */}
      <section className="band band--paper">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">{ui.prestations}</div>
            <h2 className="h2" style={{ marginTop: 14, marginBottom: 'clamp(26px,3vw,40px)' }}>{ui.includes}</h2>
          </Reveal>
          <div className="incl-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {c.includes.map((it, i) => (
              <Reveal key={it} delay={(i % 2) * 60}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '15px 18px', background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="12" cy="12" r="10" fill="var(--accent-soft)" />
                    <path d="m8 12.5 2.5 2.5 5-5.5" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p style={{ fontSize: 14, color: 'var(--ink-soft)', fontWeight: 500 }}>{it}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POURQUOI NOUS ============ */}
      <section className="band band--surface">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">{ui.atouts}</div>
            <h2 className="h2" style={{ marginTop: 14, marginBottom: 'clamp(26px,3vw,40px)' }}>{ui.why}</h2>
          </Reveal>
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'clamp(16px,1.6vw,24px)' }}>
            {c.why.map(([title, text], i) => (
              <Reveal key={title} delay={i * 70}>
                <div style={{ padding: 'clamp(22px,2.2vw,30px)', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', height: '100%' }}>
                  <h3 className="h3" style={{ marginBottom: 10 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="band band--paper">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <Reveal>
            <div className="eyebrow">{ui.faqEy}</div>
            <h2 className="h2" style={{ marginTop: 14, marginBottom: 'clamp(24px,3vw,36px)' }}>{ui.faq} — {c.h1}</h2>
          </Reveal>
          {c.faq.map(([q, a], i) => (
            <Reveal key={q} delay={i * 50}>
              <details style={{ borderBottom: '1px solid var(--line)', padding: '16px 0' }}>
                <summary style={{ cursor: 'pointer', fontFamily: 'var(--display)', fontWeight: 600, fontSize: 16, color: 'var(--ink)', listStyle: 'none' }}>{q}</summary>
                <p style={{ marginTop: 12, fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.7 }}>{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ AUTRES SERVICES (maillage interne) ============ */}
      <section className="band band--surface">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow">{ui.othersEy}</div>
            <h2 className="h2" style={{ marginTop: 14, marginBottom: 'clamp(22px,2.6vw,34px)' }}>{ui.others}</h2>
          </Reveal>
          <div className="other-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
            {others.map((o) => (
              <Link key={o.slug} to={`/services/${o.slug}`}
                style={{ display: 'block', padding: '16px 18px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--r)', color: 'var(--ink)', textDecoration: 'none', fontFamily: 'var(--display)', fontWeight: 500, fontSize: 14, transition: 'border-color .2s, transform .2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'none'; }}>
                {o.h1} <span style={{ color: 'var(--accent)' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="band band--deep" style={{ textAlign: 'center' }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <Reveal>
            <h2 className="h1" style={{ color: '#fff', marginBottom: 18 }}>{ui.ctaTitle(c.h1)}</h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.82)', margin: '0 auto 34px' }}>{ui.ctaSub}</p>
            <Link to="/devis" className="btn">{ui.ctaBtn} <span className="arw">→</span></Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media(max-width:860px){
          .split{grid-template-columns:1fr!important;gap:28px!important}
          .incl-grid{grid-template-columns:1fr!important}
          .why-grid{grid-template-columns:1fr!important}
          .other-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:560px){ .other-grid{grid-template-columns:1fr!important} }
      `}</style>
    </div>
  );
}
