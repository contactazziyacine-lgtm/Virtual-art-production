import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import { SERVICE_DETAILS } from '../data/serviceDetails';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang, setLang, t } = useLang();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/a-propos', label: t.nav.about },
    { to: '/services', label: t.nav.services, dropdown: true },
    { to: '/portfolio', label: t.nav.portfolio },
    { to: '/blog', label: t.nav.blog },
    { to: '/contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setSvcOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Dropdown stability: delayed close so the cursor can cross the gap
  const svcTimer = useRef(null);
  const openSvc = () => { clearTimeout(svcTimer.current); setSvcOpen(true); };
  const closeSvc = () => { svcTimer.current = setTimeout(() => setSvcOpen(false), 140); };
  useEffect(() => () => clearTimeout(svcTimer.current), []);

  const langs = ['FR', 'AR', 'EN'];
  const svcLabel = (sv) => (lang === 'fr' ? sv.h1 : (sv.i18n && sv.i18n[lang] && sv.i18n[lang].h1) || sv.h1);
  const LangSwitcher = () => (
    <div style={{ display: 'flex', gap: 2, border: `1px solid ${scrolled ? 'var(--line-2)' : 'rgba(255,255,255,0.35)'}`, borderRadius: 'var(--r)', padding: 2 }}>
      {langs.map(l => {
        const on = lang === l.toLowerCase();
        const offColor = scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.80)';
        return (
          <button key={l} onClick={() => setLang(l.toLowerCase())} aria-pressed={on} style={{
            padding: '5px 10px', borderRadius: 3, border: 'none', cursor: 'pointer',
            fontFamily: 'var(--body)', fontSize: 12, fontWeight: 700,
            background: on ? (scrolled ? 'var(--ink)' : 'rgba(255,255,255,0.95)') : 'transparent',
            color: on ? (scrolled ? '#fff' : 'var(--deep-2)') : offColor,
            transition: 'all .2s',
          }}>{l}</button>
        );
      })}
    </div>
  );

  return (
    <nav style={{
      position: 'fixed', top: 0, insetInline: 0, zIndex: 1000,
      height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      paddingInline: 'var(--pad)',
      background: scrolled ? 'rgba(251,250,248,0.86)' : 'rgba(251,250,248,0.0)',
      backdropFilter: scrolled ? 'saturate(180%) blur(14px)' : 'none',
      borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      transition: 'background .3s, border-color .3s',
    }}>
      <Link to="/" aria-label="Accueil"><Logo height={36} tone={scrolled ? 'ink' : 'light'} /></Link>

      <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
        <ul style={{ display: 'flex', gap: 24, listStyle: 'none', alignItems: 'center' }}>
          {links.map(l => {
            const on = l.dropdown ? pathname.startsWith('/services') : pathname === l.to;
            const idle = scrolled ? 'var(--ink-soft)' : 'rgba(255,255,255,0.86)';
            const active = scrolled ? 'var(--ink)' : '#fff';
            const linkEl = (
              <Link to={l.to} aria-haspopup={l.dropdown ? 'menu' : undefined} aria-expanded={l.dropdown ? svcOpen : undefined} style={{
                position: 'relative', fontSize: 14.5, fontWeight: on ? 600 : 500,
                color: on ? active : idle, paddingBottom: 4,
                borderBottom: `2px solid ${on ? (scrolled ? 'var(--accent)' : '#C9B6FF') : 'transparent'}`, transition: 'color .2s',
              }}>{l.label}{l.dropdown && <span aria-hidden="true" style={{ fontSize: 10, marginInlineStart: 5, opacity: .7 }}>▾</span>}</Link>
            );
            if (!l.dropdown) return <li key={l.to}>{linkEl}</li>;
            return (
              <li key={l.to} style={{ position: 'relative' }}
                onMouseEnter={openSvc} onMouseLeave={closeSvc}
                onFocus={openSvc} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setSvcOpen(false); }}>
                {linkEl}
                {svcOpen && (
                  <div role="menu" style={{
                    position: 'absolute', top: 'calc(100% + 14px)', insetInlineStart: '50%', transform: 'translateX(-50%)',
                    background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--r-lg)',
                    boxShadow: '0 18px 50px rgba(17,5,48,0.16)', padding: 8, width: 290, display: 'grid', gap: 2, zIndex: 1001,
                  }}>
                    {SERVICE_DETAILS.map(sv => (
                      <Link key={sv.slug} to={`/services/${sv.slug}`} role="menuitem" style={{
                        display: 'block', padding: '9px 12px', borderRadius: 'var(--r)', fontSize: 13.5, fontWeight: 500,
                        color: 'var(--ink-soft)', transition: 'background .15s, color .15s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-soft)'; e.currentTarget.style.color = 'var(--accent)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-soft)'; }}>
                        {svcLabel(sv)}
                      </Link>
                    ))}
                    <Link to="/services" role="menuitem" style={{ display: 'block', padding: '9px 12px', borderRadius: 'var(--r)', fontSize: 13, fontWeight: 600, color: 'var(--accent)', borderTop: '1px solid var(--line)', marginTop: 2 }}>
                      Tous les services →
                    </Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <LangSwitcher />
        <Link to="/devis" className="btn" style={{ padding: '10px 18px', fontSize: 14 }}>{t.nav.quote}</Link>
      </div>

      <button onClick={() => setMenuOpen(o => !o)} className="hamburger" aria-label="Menu" aria-expanded={menuOpen}
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 8 }}>
        {[0,1,2].map(i => (
          <span key={i} style={{
            width: 24, height: 2, background: (scrolled || menuOpen) ? 'var(--ink)' : '#fff', display: 'block', transition: 'transform .25s, opacity .2s',
            transform: menuOpen ? (i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none') : 'none',
            opacity: menuOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 70, insetInline: 0, zIndex: 1001,
          background: 'var(--surface, #FBFAF8)',
          borderBottom: '1px solid var(--line)', padding: 'var(--pad)',
          display: 'flex', flexDirection: 'column', gap: 14,
          height: 'calc(100vh - 70px)', overflowY: 'auto',
        }}>
          {links.map(l => (
            <div key={l.to}>
              <Link to={l.to} style={{ fontFamily: 'var(--display)', fontSize: 20, fontWeight: 700, color: 'var(--ink)' }}>{l.label}</Link>
              {l.dropdown && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 10, paddingInlineStart: 14, borderInlineStart: '2px solid var(--line)' }}>
                  {SERVICE_DETAILS.map(sv => (
                    <Link key={sv.slug} to={`/services/${sv.slug}`} style={{ fontFamily: 'var(--body)', fontSize: 14.5, fontWeight: 500, color: 'var(--ink-soft)' }}>{svcLabel(sv)}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ paddingBlock: 6 }}><LangSwitcher /></div>
          <Link to="/devis" className="btn" style={{ justifyContent: 'center' }}>{t.nav.quote}</Link>
        </div>
      )}
    </nav>
  );
}
