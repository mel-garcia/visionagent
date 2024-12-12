import React from 'react';
import { Link } from 'react-router-dom';
import '../src/assets/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>VisionAgent</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;