import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Révélation fluide au défilement.
 * <Reveal as="section" delay={120}>…</Reveal>
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '-8% 0px' });
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`.trim()}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
