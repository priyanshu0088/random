import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'

import Heroimg2 from '../Components/Heroimg2'


const Contact = () => {
  return (
    <div>
    <Navbar/>

    <Heroimg2 heading="CONTACT." text="lets have a chat"/>
    <ContactForm/>
<Footer/>

    </div>
  )
}

export default Contact
