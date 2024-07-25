import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/Mission.css";
import image from "../assets/images/groupimg.png";

const MissionSection = () => {
  useEffect(() => {
    const initAOS = () => {
      if (window.innerWidth >= 768) {
        AOS.init({
          duration: 1000,
          delay: 200,
        });
      } else {
        AOS.init({
          disable: true, // Disable AOS on mobile
        });
      }
    };

    initAOS();
    window.addEventListener('resize', initAOS);

    return () => {
      window.removeEventListener('resize', initAOS);
    };
  }, []);

  return (
    <section className='section' id='about'>
      <div className='image-side'>
        <img src={image} alt="Group" />
      </div>
      <div className='text-side'>
        <h2>
          Our <span className='highlight'>Mission</span>
        </h2>
        <article>
          <p data-aos="fade-up" data-aos-delay="200">Ray of Hope is dedicated to raising awareness about the conditions within Nigerian prisons and advocating for the rights of unjustly imprisoned individuals.</p>
          <p data-aos="fade-up" data-aos-delay="400">We provide legal assistance, material support, and educational opportunities to inmates, striving to restore dignity, justice, and hope.</p>
          <p data-aos="fade-up" data-aos-delay="600">Our mission is to foster a more just and humane society by empowering the marginalized and working towards systemic prison reforms.</p>
        </article>
        <button className='get-involved-button'>Get Involved</button>
      </div>
    </section>
  );
};

export default MissionSection;
