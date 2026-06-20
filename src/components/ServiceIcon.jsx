import React from 'react';

const C = '#0066ff';

const icons = {
  spot: (
    <svg viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="6" width="19" height="13" rx="2" />
      <path d="M2.5 10h19" />
      <path d="m6 6-1.5 4M11 6 9.5 10M16 6l-1.5 4" />
      <path d="m10.5 13 4 2.5-4 2.5z" fill={C} />
    </svg>
  ),
  film: (
    <svg viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17" />
      <path d="M3 21h18M9 7h1M13 7h1M9 11h1M13 11h1M9 15h1M13 15h1" />
      <path d="M16 9h3a1 1 0 0 1 1 1v11" />
    </svg>
  ),
  tour360: (
    <svg viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
      <path d="M5.5 7.5c1.8 1 4 1.6 6.5 1.6s4.7-.6 6.5-1.6M5.5 16.5c1.8-1 4-1.6 6.5-1.6s4.7.6 6.5 1.6" />
    </svg>
  ),
  social: (
    <svg viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.8 15.8 6.2M8.2 13.2l7.6 4.6" />
    </svg>
  ),
  drone: (
    <svg viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9.5 11h-3M17.5 11h-3M9.5 13h-3M17.5 13h-3" />
      <circle cx="4" cy="6" r="2.2" /><circle cx="20" cy="6" r="2.2" />
      <path d="M5.5 7.6 9 10M18.5 7.6 15 10" />
      <path d="M10 15v3M14 15v3M9 18h2M13 18h2" />
    </svg>
  ),
  event: (
    <svg viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2.5" width="6" height="12" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v4M9 21h6" />
    </svg>
  ),
  motion: (
    <svg viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5 21 7v10l-9 4.5L3 17V7z" />
      <path d="M12 2.5V12M12 12l9-5M12 12l-9-5" />
      <path d="M12 12v9.5" opacity="0.5" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M2.5 8h19" />
      <circle cx="5.2" cy="6" r="0.5" fill={C} /><circle cx="7" cy="6" r="0.5" fill={C} /><circle cx="8.8" cy="6" r="0.5" fill={C} />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
};

export default function ServiceIcon({ name, size = 30 }) {
  return (
    <span style={{ display: 'inline-flex', width: size, height: size }}>
      {React.cloneElement(icons[name] || icons.spot, { width: size, height: size })}
    </span>
  );
}
