import React from 'react'
import "../styles/campaigns.css"
import Carousel from './Carousel'


const Campaigns = () => {
  return (
    <section className='campaigns' id='campaigns'>
      <div className="campaign-container">
        <h2>Our <span className='highlight-ex'> Campaigns</span></h2>
        <p>Our Campaigns focus on providing basic needs, free legal and medical services, inmate rehabilitation
           and collaborating with Human Rights Organizations to promote justice in Nigeria</p>
           <br />
        <button className="get-involved purple">Get Involved</button>
      </div>
      <div className='campaign-cards'>
        <Carousel/>
      </div>
    </section>
  )
}

export default Campaigns
