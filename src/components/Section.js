import React from 'react';
import './Section.scss';

const Section = ({ image, codeSnippet, backgroundColor, reverse }) => {
  return (
    <div className="section" style={{ backgroundColor }}>
      <div className={`section-content ${reverse ? 'reverse' : ''}`}>
        <div className="section-image">
          <img src={image} alt="App Screenshot" />
        </div>
        <div className="section-code">
          <pre>{codeSnippet}</pre>
        </div>
      </div>
    </div>
  );
};

export default Section;