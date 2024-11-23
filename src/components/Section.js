import React from 'react';
import './Section.scss';

const Section = ({ image, marco, codeSnippet, gradientClass, reverse, title, text }) => {
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
          <div className="section-title">{title}</div>
          <div className="section-text">
            {text.map((point, index) => (
              <div key={index} className="point">
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;

