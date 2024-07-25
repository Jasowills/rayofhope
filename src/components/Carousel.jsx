import React from 'react';
import Slider from 'react-slick';
import "../styles/campaigns.css";
import campaignData from './campaignData'; // Adjust the path according to your project structure
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true, // Enables auto-scroll
        autoplaySpeed: 3000, // Time in milliseconds between slide changes
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

  return (
    <Slider {...settings}>
      {campaignData.map((item, index) => (
        <div className='carousel-card'>
            <div key={index} className="card">
          <img src={item.image} alt={`Campaign ${index + 1}`} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="card-actions">
            <a href="#read-more" className="read-more">Read More</a>
            <button className="donate-button width">Donate</button>
          </div>
        </div>
        </div>
        
      ))}
    </Slider>
  );
};

export default Carousel;
