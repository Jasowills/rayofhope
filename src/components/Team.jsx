import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../styles/team.css";

// Import images
import NurudeenImage from '/src/assets/images/Nurudeen.png';
import StephenImage from '/src/assets/images/stephen.png';
import SeunImage from '/src/assets/images/seun.png';

const members = [
  {
    name: "Nurudeen Hassana",
    image: NurudeenImage,
    details: "Co-Founder, Ray of Hope Prison Outreach"
  },
  {
    name: "Ogunyinka Stephen Temitope",
    image: StephenImage,
    details: "Co-founder, Ray of Hope Prison Outreach."
  },
  {
    name: "Seunfunmi Awofodu-Johnson",
    image: SeunImage,
    details: "Chairman, Ray of Hope Prison Outreach."
  }
];

const Team = () => {
  useEffect(() => {
    const initAOS = () => {
      if (window.innerWidth >= 768) {
        AOS.init({
          duration: 1000,
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
    <section className='team' id='team'>
      <div className="head">
        <h1>Our <span className='highlight'>Team</span></h1>
      </div>
      <div className="team-container">
        {members.map((member, index) => (
          <div className="members" key={index} data-aos="fade-up">
            <div className="img">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="details">
              <h3>{member.name}</h3>
              <p>{member.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
