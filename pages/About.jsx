import React from 'react'
import "../src/styles/About.css"
import AboutContainer from '../src/components/AboutContainer'
import Vision from '../src/components/Vision'
import CoreValues from '../src/components/CoreValues'
import YourRole from '../src/components/YourRole'

const About = () => {
  return (
    <div>
      <AboutContainer/>
      <Vision/>
      <CoreValues/>
      <YourRole/>
    </div>
  )
}

export default About
