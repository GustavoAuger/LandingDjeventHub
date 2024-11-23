import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Features from './components/Features';
import Footer from './components/Footer';
import './components/App.scss';

// Importa las imágenes desde la carpeta assets
import marco from './assets/images/marco.png'; // Marco fijo
import image1 from './assets/images/image1.png'; // Primera imagen
import image2 from './assets/images/image2.png';  // Segunda imagen
import image3 from './assets/images/image3.png';  // Tercera imagen
import image4 from './assets/images/image4.png';  // Cuarta imagen

function App() {
  const images = [image1, image2, image3, image4]; // Arreglo de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para la imagen actual

  // Cambia la imagen cada 3 segundos
  // UseEffect para cambiar la imagen cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
  }, [images.length]); // Dependencia de images.length para evitar el warning

  const sectionsData = [
    {
      image: images[currentImageIndex], // La imagen actual que cambia
      marco: marco,  // Marco fijo
      codeSnippet: `Inicia sesión para acceder a un mundo de posibilidades...`,
      gradientClass: 'gradient1',
      reverse: false,
    },
  ];

  return (
    <div className="App">
      <Header />
      <HeroSection />
      {sectionsData.map((section, index) => (
        <Section
          key={index}
          image={section.image} // Pasa la imagen que cambia
          marco={section.marco} // El marco fijo
          codeSnippet={section.codeSnippet}
          gradientClass={section.gradientClass}
          reverse={section.reverse}
        />
      ))}
      <Features />
      <Footer />
    </div>
  );
}

export default App;
