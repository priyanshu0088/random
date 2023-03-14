import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimg2 from '../Components/Heroimg2'
import AboutSpan from '../Components/AboutSpan'
// import Pricingcard from '../Components/Pricingcard'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT." text="i m a friendly guy."/>
      <AboutSpan/>
      {/* <Pricingcard/> */}
<Footer/>
    </div>
  )
}

export default About
