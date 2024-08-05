import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from "../assets/images/rayofhope.png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Close the nav menu when a link is clicked
  };

  // Helper function to determine if a link is active
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className='container'>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} className='logo' alt="Ray of Hope" />
          </Link>
        </div>
        <div className='flex'>
          <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
            <Link
              to="/"
              className={isActive("/")}
              onClick={handleNavLinkClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={isActive("/about")}
              onClick={handleNavLinkClick}
            >
              About Us
            </Link>
            <Link
              to="/get-involved"
              className={isActive("/get-involved")}
              onClick={handleNavLinkClick}
            >
              Get Involved
            </Link>
          </nav>
          &nbsp;
          &nbsp;
          &nbsp;
          <Link
              to="/donate"
              onClick={handleNavLinkClick}
            >  <button className="donate-button bounce">Donate Now</button></Link> 
        </div>
        <div className="menu-icon" onClick={toggleNav}>
          {isNavOpen ? '✕' : '☰'}
        </div>
      </header>
    </div>
  );
}

export default Header;
