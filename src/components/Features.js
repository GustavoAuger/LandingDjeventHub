import React from 'react';
import './Features.scss';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2>Características de la APP</h2>
        <ul>
          <li>
            <span className="feature-icon">🚀</span>
            Rápida e Intuitiva
          </li>
          <li>
            <span className="feature-icon">🔒</span>
            Cifrado de Contraseña
          </li>
          <li>
            <span className="feature-icon">🛡️</span>
            Gestión de Cuentas
          </li>
          <li>
            <span className="feature-icon">📅</span>
            Gestión de Eventos
          </li>
          <li>
            <span className="feature-icon">📍</span>
            Geolocalización de los eventos
          </li>
          <li>
            <span className="feature-icon">👥</span>
            Roles de Usuario: DJ & Productora
          </li>
          <li>
            <span className="feature-icon">⭐</span>
            Sistema de Calificación
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
