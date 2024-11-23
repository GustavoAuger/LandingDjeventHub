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

  // Títulos y textos que acompañan las imágenes
  const sectionContent = [
    { title: "Imagen 1", text: "Este es un texto breve para la imagen 1." },
    { title: "Imagen 2", text: "Este es un texto breve para la imagen 2." },
    { title: "Imagen 3", text: "Este es un texto breve para la imagen 3." },
    { title: "Imagen 4", text: "Este es un texto breve para la imagen 4." }
  ];

  // Cambia la imagen cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
  }, [images.length]); // Dependencia de images.length para evitar el warning

  // Obtener el contenido (título y texto) de la imagen actual
  const currentContent = sectionContent[currentImageIndex];

  const sectionsData = [
    {
      image: images[currentImageIndex], // La imagen actual que cambia
      marco: marco,  // Marco fijo
      codeSnippet: `Inicia sesión para acceder a un mundo de posibilidades...`,
      gradientClass: 'gradient1',
      reverse: false,
      title: currentContent.title, // Título de la imagen actual
      text: currentContent.text, // Texto de la imagen actual
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
          title={section.title} // Título dinámico
          text={section.text} // Texto dinámico
        />
      ))}
      <Features />
      <Footer />
    </div>
  );
}

export default App;
