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
  const sectionsData = [
    {
      image: image1,
      codeSnippet: `<div>Fragmento de código 1</div>`,
      gradientClass: 'gradient1', // Primer fondo con gradiente
      reverse: false,
    },
    {
      image: image2,
      codeSnippet: `<div>Fragmento de código 2</div>`,
      gradientClass: 'white-background', // Segundo fondo blanco
      reverse: true,
    },
    {
      image: image3,
      codeSnippet: `<div>Fragmento de código 3</div>`,
      gradientClass: 'gradient2', // Tercer fondo con gradiente
      reverse: false,
    },
    {
      image: image4,
      codeSnippet: `<div>Fragmento de código 4</div>`,
      gradientClass: 'white-background', // Cuarto fondo blanco
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
