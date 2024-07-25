import React from 'react'
import sect1 from "../assets/images/sect1.png"
import sect2 from "../assets/images/sect3.png"
import sect3 from "../assets/images/sect2.png"


const HalfSection = () => {
  return (
    <div className='half-section'>
      <div className="sect">
        <img src={sect1} alt="" />
        <p>16 wrongfully arrested inmates released</p>
      </div>
      <div className="sect">
        <img src={sect2} alt="" />
        <p>Donated relief materials worth $4k+</p>
      </div>
      <div className="sect">
        <img src={sect3} alt="" />
        <p>Donated the first reusable pad in West Africa to female inmates</p>
      </div>
      </div>
  )
}

export default HalfSection
