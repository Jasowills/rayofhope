import React from 'react';
import Hero from '../src/components/Hero';
import MissionSection from '../src/components/MissionSection';
import Campaigns from '../src/components/Campaigns';
import HalfSection from '../src/components/HalfSection';
import Team from '../src/components/Team';
import Footer from '../src/components/Footer';
import About from './About';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <MissionSection />
      <Campaigns />
      <HalfSection />
      <Team />
    </div>
  );
};

export default Home;
