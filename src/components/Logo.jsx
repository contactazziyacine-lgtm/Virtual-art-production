import React from 'react';

export default function Logo({ height = 40, showText = true }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <img
        src="/assets/logo.png"
        alt="Virtual Art Production"
        style={{ height, width: 'auto', display: 'block' }}
      />
      {showText && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, whiteSpace: 'nowrap' }}>
          <span style={{ fontSize: height * 0.40, fontWeight: 800, letterSpacing: -0.5, color: '#fff' }}>
            VIRTUAL ART
          </span>
          <span style={{ fontSize: height * 0.24, fontWeight: 600, letterSpacing: 3, color: '#0066ff', marginTop: 3 }}>
            PRODUCTION
          </span>
        </span>
      )}
    </span>
  );
}
