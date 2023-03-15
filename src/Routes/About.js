import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg3 from '../Components/Heroimg3'
import AboutSpan from '../Components/AboutSpan'
// import Pricingcard from '../Components/Pricingcard'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg3 heading="ABOUT." text="Trying to defeat myself."/>
      <AboutSpan/>
      {/* <Pricingcard/> */}
<Footer/>
    </div>
  )
}

export default About
