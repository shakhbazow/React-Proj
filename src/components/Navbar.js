// src/components/Navbar.js

import React, { useState } from 'react';
import '../styles/Navbar.css';
import Contact from './Contact'
import {BroweserRouter, Router, Route} from 'react-router-dom'

function Navbar() {

  const [showContact, setShowContact] = useState(false); // State to manage visibility of Contact component

  const handleContactClick = () => {
    setShowContact(true);
  }
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">My PortfolioOOOOOOOO</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><button onClick={handleContactClick}>Contact</button></li> {/* Contact button with onClick handler */}
      </ul>
      {showContact && <Contact />} {/* Render the Contact component if showContact is true */}
    </nav>
  );
}

export default Navbar;
