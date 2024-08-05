import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MobileNavbar.css';
import logo from "../assets/images/rayofhope.png";

const MobileNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='mobile-navbar-container'>
      <header className="mobile-header">
        <div className="mobile-logo">
          <Link to="/"><img src={logo} className='logo-m' alt="Ray of Hope" /></Link>
        </div>
        <div className="mobile-menu-icon" onClick={toggleNav}>
          {isNavOpen ? '✕' : '☰'}
        </div>
        <nav className={`mobile-nav ${isNavOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleNav}>Home</Link>
          <Link to="/about" onClick={toggleNav}>About Us</Link>
          <Link to="/get-involved" onClick={toggleNav}>Get Involved</Link>
          <Link to="/donate" className='donate' onClick={toggleNav}>Donate Now</Link>
        </nav>
      </header>
    </div>
  );
};

export default MobileNavbar;
