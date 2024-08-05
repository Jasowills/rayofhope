import React from "react";
import "animate.css"
const DonateHero = () => {
  return (
    <div className="donate-hero">
      <div className="involved-text animate__animated animate__fadeInUp">
        <h1>Be a Ray of Hope, Donate today</h1>
        <p>
          Thank you for considering a donation to Ray of Hope. Your generosity
          fuels our mission to bring positive change to the lives of those in
          need. With your help, we can continue to provide essential support,
          advocacy, and opportunities for those who need it most.
        </p>
        <a href="https://sandbox-flw-web-v3.herokuapp.com/donate/n6uibtheaiei">
          <button className="donate-button">Donate Now</button>
        </a>
      </div>
    </div>
  );
};

export default DonateHero;
