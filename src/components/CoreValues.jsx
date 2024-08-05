import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/CoreValues.css";
import icon1 from "../assets/images/justice.png";
import icon2 from "../assets/images/compassion.png";
import icon3 from "../assets/images/integrity.png";
import icon4 from "../assets/images/collaboration.png";

const CoreValues = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='values'>
      <div className="head-text">
        <h1>Our <span className='highlight-ex'>Core Values</span> </h1>
      </div>
      <div className="value-list">
        <div className="frame" data-aos="fade-up">
          <div className="icon">
            <img src={icon1} alt="Justice" />
          </div>
          <div className="frame-text">
            <h3>Justice</h3>
            <p>We believe in the fundamental right to a fair trial and work tirelessly to ensure that every inmate receives just treatment.</p>
          </div>
        </div>
        <hr />
        <div className="frame" data-aos="fade-up">
          <div className="icon">
            <img src={icon2} alt="Compassion" />
          </div>
          <div className="frame-text">
            <h3>Compassion</h3>
            <p>We approach our work with empathy, understanding the unique challenges faced by inmates and their families.</p>
          </div>
        </div>
        <hr />
        <div className="frame" data-aos="fade-up">
          <div className="icon">
            <img src={icon3} alt="Integrity" />
          </div>
          <div className="frame-text">
            <h3>Integrity</h3>
            <p>We uphold the highest standards of honesty and transparency in all our actions and interactions.</p>
          </div>
        </div>
        <hr />
        <div className="frame" data-aos="fade-up">
          <div className="icon">
            <img src={icon4} alt="Collaboration" />
          </div>
          <div className="frame-text">
            <h3>Collaboration</h3>
            <p>We work closely with other Human Rights Organizations and stakeholders to advance our cause and create a collective impact.</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default CoreValues;
