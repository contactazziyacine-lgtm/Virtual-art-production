import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedIcon — enveloppe Motion (motion.dev) pour les icônes.
 * - Apparition au scroll : pop + légère rotation, une seule fois.
 * - Micro-interaction au survol : zoom + rebond ressort.
 * Respecte automatiquement `prefers-reduced-motion` via Framer Motion.
 *
 *   <AnimatedIcon><ServiceIcon name="spot" /></AnimatedIcon>
 */
export default function AnimatedIcon({ children, className, style }) {
  return (
    <motion.span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transformOrigin: 'center', ...style }}
      initial={{ opacity: 0, scale: 0.45, rotate: -14 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ scale: 1.18, rotate: -6 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 320, damping: 17 }}
    >
      {children}
    </motion.span>
  );
}
