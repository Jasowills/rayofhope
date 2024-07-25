import React, { useState, useEffect } from 'react';
import Navbar from './components/Header';
import MobileNavbar from './components/MobileNavbar';
import "../src/styles/index.css";
import Hero from './components/Hero';
import MissionSection from './components/MissionSection';
import Campaigns from './components/Campaigns';
import HalfSection from './components/HalfSection';
import Team from './components/Team';
import Footer from './components/Footer';
import "../src/styles/index.css"

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='body'>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      <Hero />
      <MissionSection />
      <Campaigns />
      <HalfSection />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
