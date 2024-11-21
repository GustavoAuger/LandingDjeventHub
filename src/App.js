import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import Features from './components/Features';
import Footer from './components/Footer';
import './components/App.scss';



// Importa las imágenes desde la carpeta assets
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';

function App() {
  // Datos para las secciones
  const sectionsData = [
    {
      image: image1,
      codeSnippet: `<div>Fragmento de código relacionado con la imagen 1</div>`,
      backgroundColor: '#f0f0f0', // Fondo claro
      reverse: false,
    },
    {
      image: image2,
      codeSnippet: `<div>Fragmento de código relacionado con la imagen 2</div>`,
      backgroundColor: '#1a1a1a', // Fondo oscuro
      reverse: true,
    },
    {
      image: image3,
      codeSnippet: `<div>Fragmento de código relacionado con la imagen 3</div>`,
      backgroundColor: '#f0f0f0',
      reverse: false,
    },
    {
      image: image4,
      codeSnippet: `<div>Fragmento de código relacionado con la imagen 4</div>`,
      backgroundColor: '#1a1a1a',
      reverse: true,
    },
  ];

  return (
    <div className="App">
      <Header />
      <HeroSection />
      {sectionsData.map((section, index) => (
        <Section
          key={index}
          image={section.image}
          codeSnippet={section.codeSnippet}
          backgroundColor={section.backgroundColor}
          reverse={section.reverse}
        />
      ))}
      <Features />
      <Footer />
    </div>
  );
}

export default App;