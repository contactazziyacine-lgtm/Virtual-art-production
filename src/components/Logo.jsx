import React from 'react';

export default function Logo({ height = 38, tone = 'ink' }) {
  const main = tone === 'light' ? '#FFFFFF' : 'var(--ink)';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 11 }}>
      <img src="/assets/logo.png" alt="Virtual Art Production"
        style={{ height, width: 'auto', display: 'block' }} />
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, whiteSpace: 'nowrap' }}>
        <span style={{ fontFamily: 'var(--display)', fontSize: height * 0.40, fontWeight: 800, letterSpacing: '-0.02em', color: main }}>
          VIRTUAL ART
        </span>
        <span style={{ fontFamily: 'var(--body)', fontSize: height * 0.22, fontWeight: 600, letterSpacing: '0.30em', color: 'var(--accent)', marginTop: 4 }}>
          PRODUCTION
        </span>
      </span>
    </span>
  );
}
