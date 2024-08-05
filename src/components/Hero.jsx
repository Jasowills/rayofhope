import React, { useState, useEffect } from 'react';
import "../styles/Hero.css"
import { Link } from 'react-router-dom';
import "animate.css"
const Hero = () => {
  
  return (
    <div className='hero'>
      <div className="text-container animate__animated animate__fadeInUp">
        <h1>Restoring Hope and Justice</h1>
        <p>Dedicated to Legal Reform and Welfare support for  Prisoners in Nigeria.</p>
        <div className='button-container'>
         <Link to="/get-involved"> <button className='get-involved'>Get Involved</button></Link>
   <Link to="/donate">  <button className='donate-button'>Donate Now</button></Link>  
        </div>
      </div>
    </div>
  )
}

export default Hero;
