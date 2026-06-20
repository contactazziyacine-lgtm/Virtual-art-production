import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { lang, setLang, t } = useLang();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/a-propos', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/portfolio', label: t.nav.portfolio },
    { to: '/blog', label: t.nav.blog },
    { to: '/contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const langs = ['FR', 'AR', 'EN'];

  const LangSwitcher = () => (
    <div style={{ display: 'flex', gap: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: 3 }}>
      {langs.map(l => (
        <button key={l} onClick={() => setLang(l.toLowerCase())} style={{
          padding: '5px 10px', borderRadius: 6, border: 'none', cursor: 'pointer',
          fontSize: 12, fontWeight: 700,
          background: lang === l.toLowerCase() ? '#0066ff' : 'transparent',
          color: lang === l.toLowerCase() ? '#fff' : 'rgba(255,255,255,0.6)',
          transition: 'all 0.2s'
        }}>{l}</button>
      ))}
    </div>
  );

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 5%', height: 72, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,15,0.97)' : 'rgba(10,10,15,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      transition: 'background 0.3s'
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo height={40} />
      </Link>

      <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <ul style={{ display: 'flex', gap: 20, listStyle: 'none', alignItems: 'center' }}>
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to} style={{
                color: pathname === l.to ? '#fff' : 'rgba(255,255,255,0.7)',
                textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s'
              }}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <LangSwitcher />
        <Link to="/devis" style={{
          background: '#0066ff', color: '#fff', padding: '9px 20px',
          borderRadius: 6, fontWeight: 700, fontSize: 13, textDecoration: 'none'
        }}>{t.nav.quote}</Link>
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{
        display: 'none', background: 'none', border: 'none', cursor: 'pointer',
        flexDirection: 'column', gap: 5, padding: 8
      }} aria-label="Menu">
        {[0,1,2].map(i => <span key={i} style={{ width: 24, height: 2, background: '#fff', display: 'block' }} />)}
      </button>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0,
          background: '#12121a', borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: 20, display: 'flex', flexDirection: 'column', gap: 16,
          maxHeight: 'calc(100vh - 72px)', overflowY: 'auto'
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{ color: '#fff', textDecoration: 'none', fontSize: 16, fontWeight: 600 }}>{l.label}</Link>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0' }}><LangSwitcher /></div>
          <Link to="/devis" style={{ background: '#0066ff', color: '#fff', padding: '12px 20px', borderRadius: 8, fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>{t.nav.quote}</Link>
        </div>
      )}
    </nav>
  );
}
