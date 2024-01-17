// Footer.js
import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../../style/Footer.css';

const Footer = () => {
  const currentDate = new Date();

  return (
    <footer className="footer-container">
        <div className="text-center">
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
          <p className="copyright">
            Copyright © Sowbaranika {currentDate.getFullYear()}
          </p>
        </div>
    </footer>
  );
};

export default Footer;
