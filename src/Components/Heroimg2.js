import "./Heroimg2styles.css"
import pexels2 from "../Assets/pexels2.jpg"
import React from 'react'
import { Component } from "react"

class Heroimg2 extends Component {
render() {
    return (
        <div className="hero-img">
            <img className="into-img" src={pexels2} alt="projet2" />
            <div className="heading">
             <h1>{this.props.heading}</h1>
             <p>{this.props.text}</p>
            </div>
        </div>
      );
}

  
}

export default Heroimg2;
