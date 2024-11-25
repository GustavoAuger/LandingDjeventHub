import React from 'react';
import './Banner.scss';


const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Conéctate, crea y explora el mundo de la música underground</h1>
        <p>Descubre eventos únicos, conecta con DJs y productoras, y lleva tu experiencia musical a otro nivel.</p>
        <a href="#subscribe" className="banner-button">Únete a la comunidad</a>
      </div>
    </section>
  );
};

export default Banner;
