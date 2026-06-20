import React from 'react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/213550129119"
      target="_blank"
      rel="noopener noreferrer"
      title="Contactez-nous sur WhatsApp"
      className="whatsapp-float"
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 999,
        width: 60, height: 60, background: '#25d366', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 28, boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        transition: 'transform 0.2s', textDecoration: 'none'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      💬
    </a>
  );
}
