import React from 'react';
import './Footer.scss';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>DJ EventHub</h2>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaYoutube />
          </a>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} DJ EventHub. Todos los derechos reservados.</p>
          <p>Contacto: info@djeventhub.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
