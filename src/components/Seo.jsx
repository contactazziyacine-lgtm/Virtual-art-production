import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE = 'Virtual Art Production';

export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} · ${BASE}` : `${BASE} – Production Audiovisuelle Premium`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  );
}
