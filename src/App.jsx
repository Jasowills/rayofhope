import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileNavbar from './components/MobileNavbar';
import About from '../pages/About';
import Campaigns from './components/Campaigns';
import Team from './components/Team';
import Home from '../pages/Home';
import './styles/index.css';
import Footer from './components/Footer';
import Getinvolved from '../pages/Getinvolved';
import Donatenow from '../pages/Donatenow';

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
    <Router>
      <div className='body'>
        {isMobile ? <MobileNavbar /> : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/team" element={<Team />} />
          <Route path='/get-involved' element={<Getinvolved/>} />
          <Route path='/donate' element={<Donatenow/>} />

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
