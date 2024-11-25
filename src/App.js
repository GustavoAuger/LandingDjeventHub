import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Banner from './components/Banner';
import Features from './components/Features';
import PreFooter from './components/PreFooter';
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
    {
      title: "🎵 Unete en pocos segundos 🎵",
      text: [
        "•   Crea una cuenta en pocos segundos.",
        "•   Elige entre Productora o DJ.",
        "•   Conecta con otros dj o productoras."
      ]
    },
    {
      title: "🎧 Descubre tu perfil musical 🎧",
      text: [
        "•   Gestiona tu perfil, en sensillos pasos",
        "•   Hazte visible, impulsa tu correra como DJ o Productra",
        "•   Marca tendencia con tus BPM."
      ]
    },
    {
      title: "🎶 Visualiza eventos 🎶",
      text: [
        "•   Explora eventos actuales",
        "•   Únete o crea eventos exclusivos.",
        "•   Conecta al más puro estilo"
      ]
    },
    {
      title: "🎤 Pública tu evento 🎤",
      text: [
        "•   Organiza tu evento",
        "•   Gestiona, impulsa, y promueve.",
        "•   Tú evento en el siguiente nivel."
      ]
    }
  ];

  // Cambia la imagen y el contenido cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
  }, [images.length]);

  // Obtener el contenido (título y texto) de la imagen actual
  const currentContent = sectionContent[currentImageIndex];

  const sectionsData = [
    {
      image: images[currentImageIndex], // La imagen actual que cambia
      marco: marco,  // Marco fijo
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
      <Banner />
      <Features />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
