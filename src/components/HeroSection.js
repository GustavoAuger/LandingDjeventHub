import React, { useState, useEffect } from 'react';
import './HeroSection.scss';
import qrCodeImage from '../assets/images/qr-code.png'; // Importa la imagen QR desde assets correctamente

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si el usuario está en un dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ancho máximo para considerar móvil
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verifica en el primer renderizado

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">


        <div className={`functionalities ${isMobile ? 'mobile' : 'web'}`}>

         
          {/* Condicional para mostrar el botón o el QR */}
          {isMobile ? (
            <a href="https://me-qr.com/LrXwZZ8y" target="_blank" rel="noopener noreferrer">
              <button className="download-btn">Descargar la app</button>
            </a>
          ) : (
            <img src={qrCodeImage} alt="QR Code" className="qr-code" />
          )}
        
        </div>
        <h2>Conéctate, crea, gestiona y lleva el evento a otro nivel.</h2>
      </div>
    </section>
  );
};

export default HeroSection;
