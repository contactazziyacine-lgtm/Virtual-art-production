import React, { useState } from 'react';

/**
 * Image de couverture robuste : si la photo ne charge pas,
 * on bascule sur un dégradé (jamais d'icône d'image cassée).
 *   <Cover src={IMG.alger} fallback={FALLBACK.alger} alt="Alger" />
 */
export default function Cover({ src, fallback, alt = '', className = '', style }) {
  const [failed, setFailed] = useState(false);
  if (failed || !src) {
    return <div className={className} role="img" aria-label={alt}
      style={{ background: fallback || 'linear-gradient(135deg,#0a322a,#0e6e54)', width: '100%', height: '100%', ...style }} />;
  }
  return (
    <img src={src} alt={alt} loading="lazy" className={className}
      onError={() => setFailed(true)}
      style={{ width: '100%', height: '100%', objectFit: 'cover', ...style }} />
  );
}
