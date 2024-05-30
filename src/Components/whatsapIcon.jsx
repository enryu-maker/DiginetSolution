// src/Components/WhatsappIcon.js
import React from 'react';

const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber"
      style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '2.5rem',
        color: '#25D366',
        zIndex: 1000,
        textDecoration: 'none',
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsappIcon;
