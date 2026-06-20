import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n/LanguageContext';
import Seo from '../components/Seo';

export default function NotFound() {
  const { t } = useLang();
  return (
    <div style={{ paddingTop: 72, minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Seo title="404" />
      <div style={{ textAlign: 'center', padding: '40px 5%' }}>
        <div style={{ fontSize: 'clamp(72px,14vw,140px)', fontWeight: 900, color: '#0066ff', lineHeight: 1, letterSpacing: -4 }}>404</div>
        <h2 style={{ fontSize: 'clamp(20px,4vw,28px)', fontWeight: 800, margin: '12px 0 16px' }}>Page introuvable</h2>
        <p style={{ color: '#8892a4', fontSize: 16, maxWidth: 420, margin: '0 auto 32px', lineHeight: 1.7 }}>
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn-primary">{t.nav.home}</Link>
      </div>
    </div>
  );
}
