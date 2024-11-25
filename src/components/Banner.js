import React from 'react';
import './Banner.scss';


const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Vive la música, crea expernencias <br></br> únicas</h1>
        <p>Descubre eventos únicos, experiencia musical a otro nivel.</p>
        <a href="#subscribe" className="banner-button">Ver más</a>
      </div>
    </section>
  );
};

export default Banner;
