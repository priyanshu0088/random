import "./FooterStyles.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk,FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer-container">
         <div className="left1">
            <div className="location">
                <FaHome size={20} style={{color:"white",marginRight: "2rem"}}/>
                <div>
                    <p>123 Housing Society</p>
                    <p>India</p>
                </div>
            </div>
            <div className="Phone">
                <h4><FaPhone size={20} style={{color:"white",marginRight: "2rem"}}/>+917489025984</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"white",marginRight: "2rem"}}/> vishwakarmapriyanshu98@gmail.com</h4>
            </div>
            </div>   
         <div className="right1">
            <h4>About Me</h4>
            <p>student,learning web-dev. trying to become the best version of me.</p>
            <div className="social">
            <FaFacebook size={30} style={{color:"white",marginRight: "1rem"}}/>
            <FaTwitter size={30} style={{color:"white",marginRight: "1rem"}}/>
            <FaLinkedin size={30} style={{color:"white",marginRight: "1rem"}}/>
            </div>
         </div>
        </div> 
    </div>
  )
}

export default Footer
