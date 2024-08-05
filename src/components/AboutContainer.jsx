import React from 'react';
import 'animate.css';
import "../styles/About.css";

const AboutContainer = () => {
  return (
    <div className='about' id='about'>
      <div className="about-text animate__animated animate__fadeInUp">
        <h1>About us</h1>
          <p>Ray Of Hope was established by a group of passionate advocates for justice who saw the need for reform in Nigeria's correctional system.
          <br />
          <br />
          Believing that everyone deserves a second chance, we have provided legal aid, secured releases for unjustly imprisoned inmates, and offered support services for inmates' rehabilitation. Our work is driven by a commitment to justice, compassion, and respect for human dignity.</p>
      </div>
    </div>
  );
}

export default AboutContainer;
