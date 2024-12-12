import React from 'react';
import { Link } from 'react-router-dom';

import '../src/assets/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">

<nav>
        <ul className="header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <a href="https://github.com/mel-garcia/visionagent" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </ul>
      </nav>
      <p>&copy; 2024 My Website. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;