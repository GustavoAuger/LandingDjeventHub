import React from 'react';
import './Section.scss';

const Section = ({ image, codeSnippet, gradientClass, reverse }) => {
  return (
    <div className={`section ${gradientClass} ${reverse ? 'reverse' : ''}`}>
      <div className="section-content">
        <div className="section-image">
          {image && <img src={image} alt="App Screenshot" />}
        </div>
        <div className="section-code">
          <pre>{codeSnippet}</pre>
        </div>
      </div>
    </div>
  );
};

export default Section;