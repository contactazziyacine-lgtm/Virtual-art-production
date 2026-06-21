import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Cover from './Cover';
import { portfolioThumb } from '../data/portfolio';
import { FALLBACK } from '../data/covers';

/**
 * Carrousel « coverflow » 3D (inspiré de l'exemple Motion).
 * Carte centrale à plat et en avant, cartes latérales inclinées et reculées.
 * Navigation : flèches, points, glisser/swipe, clic sur une carte latérale.
 */
export default function Coverflow({ items = [], catLabel = {} }) {
  const navigate = useNavigate();
  const stageRef = useRef(null);
  const draggingRef = useRef(false);
  const [w, setW] = useState(960);
  const [active, setActive] = useState(items.length ? Math.floor((items.length - 1) / 2) : 0);
  const [paused, setPaused] = useState(false);
  const dirRef = useRef(1);

  // Mesure de la largeur disponible (responsive)
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setW(el.clientWidth || 960);
    measure();
    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(measure);
      ro.observe(el);
    } else {
      window.addEventListener('resize', measure);
    }
    return () => { ro ? ro.disconnect() : window.removeEventListener('resize', measure); };
  }, []);

  const cardW = Math.max(260, Math.min(w * 0.72, 520));
  const cardH = Math.round(cardW * 9 / 16);
  const spread = cardW * 0.52;

  const clamp = useCallback((n) => Math.max(0, Math.min(items.length - 1, n)), [items.length]);
  const go = useCallback((dir) => setActive((a) => clamp(a + dir)), [clamp]);

  // Flèches du clavier quand le carrousel a le focus
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [go]);

  const onCardClick = (i) => {
    if (draggingRef.current) return;
    if (i !== active) { setActive(i); return; }
    navigate(`/portfolio?cat=${items[i].cat}`);
  };

  // Défilement automatique (va-et-vient). En pause au survol, pendant un glisser,
  // et désactivé si l'utilisateur préfère réduire les animations.
  useEffect(() => {
    if (paused || items.length <= 1) return;
    const reduce = typeof window !== 'undefined' && window.matchMedia
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = setInterval(() => {
      if (draggingRef.current) return;
      setActive((a) => {
        let d = dirRef.current;
        if (a + d > items.length - 1) { dirRef.current = -1; d = -1; }
        else if (a + d < 0) { dirRef.current = 1; d = 1; }
        return a + d;
      });
    }, 3500);
    return () => clearInterval(id);
  }, [paused, items.length]);

  if (!items.length) return null;

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Conteneur de clipping : empêche les cartes latérales de déborder la page */}
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <motion.div
          ref={stageRef}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          dragSnapToOrigin
          onDragStart={() => { draggingRef.current = true; }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -55 || info.velocity.x < -350) go(1);
            else if (info.offset.x > 55 || info.velocity.x > 350) go(-1);
            requestAnimationFrame(() => { draggingRef.current = false; });
          }}
          tabIndex={0}
          role="group"
          aria-roledescription="carrousel"
          aria-label="Nos réalisations"
          style={{
            position: 'relative',
            height: cardH + 52,
            perspective: 1200,
            cursor: 'grab',
            touchAction: 'pan-y',
            outline: 'none',
            userSelect: 'none',
          }}
        >
          {items.map((item, i) => {
            const offset = i - active;
            const abs = Math.abs(offset);
            const isActive = offset === 0;
            const visible = abs <= 2;
            const isExternal = !!item.link;
            const is360 = !!item.tour;
            const pill = is360 ? '360° Immersif' : isExternal ? 'Plateforme web' : (catLabel[item.cat] || 'Vidéo');
            return (
              <motion.div
                key={item.title}
                onClick={() => onCardClick(i)}
                initial={false}
                animate={{
                  x: -cardW / 2 + offset * spread,
                  rotateY: Math.max(-2, Math.min(2, offset)) * -38,
                  scale: isActive ? 1 : Math.max(0.78, 1 - abs * 0.12),
                  z: -abs * 120,
                  opacity: visible ? 1 : 0,
                }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                style={{
                  position: 'absolute',
                  top: 26,
                  left: '50%',
                  width: cardW,
                  height: cardH,
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                  zIndex: 100 - abs,
                  pointerEvents: visible ? 'auto' : 'none',
                  cursor: 'pointer',
                  borderRadius: 'var(--r-lg)',
                  overflow: 'hidden',
                  background: 'var(--deep)',
                  boxShadow: isActive ? '0 26px 54px rgba(17,5,48,.45)' : '0 14px 28px rgba(17,5,48,.30)',
                }}
              >
                <div style={{ position: 'absolute', inset: 0 }}>
                  <Cover src={portfolioThumb(item)} fallback={item.fallback || FALLBACK.constantine} alt={item.title} />
                </div>

                {/* Dégradé bas (toujours) pour la lisibilité du titre */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(17,5,48,0.06) 0%, rgba(17,5,48,0.34) 55%, rgba(17,5,48,0.90) 100%)' }} />

                {/* Voile qui assombrit les cartes latérales */}
                <motion.div animate={{ opacity: isActive ? 0 : 0.55 }} transition={{ duration: 0.3 }}
                  style={{ position: 'absolute', inset: 0, background: 'rgb(13,6,38)', pointerEvents: 'none' }} />

                {/* Pastille + titre : uniquement sur la carte active */}
                <motion.div animate={{ opacity: isActive ? 1 : 0 }} transition={{ duration: 0.25 }}
                  style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                  <div style={{ position: 'absolute', top: 14, left: 14, padding: '6px 12px', borderRadius: 100, background: 'rgba(17,5,48,0.55)', backdropFilter: 'blur(6px)', color: '#fff', fontSize: 11.5, fontFamily: 'var(--display)', fontWeight: 600, letterSpacing: '.04em' }}>{pill}</div>
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 'clamp(16px,1.6vw,22px)', color: '#fff' }}>
                    <h3 style={{ fontFamily: 'var(--display)', fontSize: 17, fontWeight: 700, marginBottom: 4, letterSpacing: '-.01em' }}>{item.title}</h3>
                    <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.80)' }}>{item.sub}</p>
                  </div>
                </motion.div>

                {/* Bouton lecture central sur la carte active */}
                {isActive && (
                  <div style={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%,-50%)', width: 54, height: 54, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 10px 30px rgba(91,13,221,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', pointerEvents: 'none' }}>
                    <span style={{ fontSize: 17, lineHeight: 1 }}>{is360 ? '⤢' : isExternal ? '↗' : '▶'}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Contrôles : flèche ‹ • points • flèche › */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, marginTop: 'clamp(18px,2.2vw,28px)' }}>
        <button type="button" aria-label="Projet précédent" onClick={() => go(-1)} disabled={active === 0} style={ctrlBtn(active === 0)}>
          <span style={{ fontSize: 20, lineHeight: 1, marginTop: -2 }}>‹</span>
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {items.map((_, i) => (
            <button key={i} type="button" aria-label={`Aller au projet ${i + 1}`} aria-current={i === active}
              onClick={() => setActive(i)}
              style={{ width: i === active ? 26 : 9, height: 9, borderRadius: 100, border: 0, padding: 0, cursor: 'pointer', background: i === active ? 'var(--accent)' : 'rgba(20,16,42,0.18)', transition: 'all .3s' }} />
          ))}
        </div>
        <button type="button" aria-label="Projet suivant" onClick={() => go(1)} disabled={active === items.length - 1} style={ctrlBtn(active === items.length - 1)}>
          <span style={{ fontSize: 20, lineHeight: 1, marginTop: -2 }}>›</span>
        </button>
      </div>
    </div>
  );
}

function ctrlBtn(disabled) {
  return {
    width: 46, height: 46, borderRadius: '50%', border: '1px solid var(--line)',
    background: 'var(--surface)', color: 'var(--ink)', cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.35 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all .2s', boxShadow: '0 6px 16px rgba(20,16,42,.06)',
  };
}
