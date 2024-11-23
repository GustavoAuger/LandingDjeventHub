import React from 'react';
import './Section.scss';

const Section = ({ image, marco, codeSnippet, gradientClass, reverse }) => {
  return (
    <div className={`section ${gradientClass} ${reverse ? 'reverse' : ''}`}>
      <div className="section-content">
        <div className="section-image">
          <div className="image-wrapper">

            
            {/* La imagen dentro del marco es la que cambia */}
            <img src={image} alt="Imagen dentro del marco" className="section-image-inside" />
            {/* El marco permanece fijo */}
            <img src={marco} alt="Marco" className="marco" />
          </div>
        </div>
        <div className="section-code">
          <pre>{codeSnippet}</pre>
        </div>
      </div>
    </div>
  );
};

export default Section;
