import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from "../assets/images/rayofhope.png";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setIsNavOpen(false); // Close the nav menu when a link is clicked
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = 'home';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container'>
      <header className="header">
        <div className="logo">
          <a href="/"><img src={logo} className='logo' alt="Ray of Hope" /></a>
        </div>
        <div className='flex'>
          <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
            <a
              href="#home"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleNavLinkClick('home')}
            >
              Home
            </a>
            <a
              href="#about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleNavLinkClick('about')}
            >
              About Us
            </a>
            <a
              href="#campaigns"
              className={activeLink === 'campaigns' ? 'active' : ''}
              onClick={() => handleNavLinkClick('campaigns')}
            >
              Campaigns
            </a>
            <a
              href="#involved"
              className={activeLink === 'involved' ? 'active' : ''}
              onClick={() => handleNavLinkClick('involved')}
            >
              Get Involved
            </a>
          </nav>
    <a href="https://sandbox-flw-web-v3.herokuapp.com/donate/n6uibtheaiei"><button className="donate-button bounce">Donate Now</button></a>     
        </div>
        <div className="menu-icon" onClick={toggleNav}>
          {isNavOpen ? '✕' : '☰'}
        </div>
      </header>
    </div>
  );
}

export default Header;
