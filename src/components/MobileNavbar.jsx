import React, { useState } from 'react';
import '../styles/MobileNavbar.css';
import logo from "../assets/images/mobilelogo.jpg";

const MobileNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='mobile-navbar-container'>
      <header className="mobile-header">
        <div className="mobile-logo">
          <a href="/"><img src={logo} className='logo-m' alt="Ray of Hope" /></a>
        </div>
        <div className="mobile-menu-icon" onClick={toggleNav}>
          {isNavOpen ? '✕' : '☰'}
        </div>
        <nav className={`mobile-nav ${isNavOpen ? 'open' : ''}`}>
          <a href="#home" onClick={toggleNav}>Home</a>
          <a href="#about" onClick={toggleNav}>About Us</a>
          <a href="#campaigns" onClick={toggleNav}>Campaigns</a>
          <a href="#involved" onClick={toggleNav}>Get Involved</a>
          <a href="#involved" className='donate' onClick={toggleNav}>Donate Now</a>
        </nav>
      </header>
    </div>
  );
};

export default MobileNavbar;
