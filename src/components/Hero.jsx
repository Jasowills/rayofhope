import React, { useState, useEffect } from 'react';
import "../styles/Hero.css"

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Restoring Hope and Justice";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the typing speed (milliseconds per character) as needed

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className='hero'>
      <div className="text-container">
        <h1>{typedText}</h1>
        <p>Dedicated to Legal Reform and Welfare support for  Prisoners in Nigeria.</p>
        <div className='button-container'>
          <button className='get-involved'>Get Involved</button>
          <button className='donate-button'>Donate Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
