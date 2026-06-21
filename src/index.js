import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const app = <React.StrictMode><App /></React.StrictMode>;

// Si react-snap a déjà injecté le HTML pré-rendu, on HYDRATE (on réutilise le
// markup existant). Sinon (dev, ou pré-rendu désactivé), on rend normalement.
if (el.hasChildNodes()) {
  ReactDOM.hydrateRoot(el, app);
} else {
  ReactDOM.createRoot(el).render(app);
}
