import React from 'react';
import "../styles/footer.css";
import logo from "../assets/images/rayofhope.png";
import x from "../assets/images/Icon.png";
import insta from "../assets/images/insta.png";
import link from "../assets/images/Vector.png";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-logo'>
          <img src={logo} className='logo-footer' alt='Ray of Hope' />
          <div className='footer-social'>
            <a href='#'><img src={x} alt='Twitter' /></a>
            <a href='#'><img src={insta} alt='Instagram' /></a>
            <a href='#'><img src={link} alt='LinkedIn' /></a>
          </div>
        </div>
        <div className='footer-links'>
          <div className='footer-column'>
            <h4>Quick Links</h4>
            <ul>
              <li><a href='/about'>About Us</a></li>
              <li><a href='/campaigns'>Campaigns</a></li>
              <li><a href='/involved'>Get Involved</a></li>
              <li><a href='/contact'>Contact us</a></li>
            </ul>
          </div>
          <div className='footer-column'>
            <h4>Support Us</h4>
            <ul>
              <li><a href='/donate'>Donate now</a></li>
              <li><a href='/volunteer'>Volunteer</a></li>
            </ul>
          </div>
          <div className='footer-column'>
            <h4>Get In Touch</h4>
            <ul>
              <li>+234-816-132-9129</li>
              <li>21, Sunmonu Street, Ogba, Lagos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
