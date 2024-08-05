import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section className='team' id='team'>
      <div className="head">
        <h1>Our <span className='highlight'>Team</span></h1>
      </div>
      <div className="team-container">
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
};

const MemberCard = ({ member }) => {
  return (
    <motion.div
      className="members"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="img">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="details">
        <h3>{member.name}</h3>
        <p>{member.details}</p>
      </div>
    </motion.div>
  );
};

export default Team;
