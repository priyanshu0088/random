import "./heroimg3styles.css"
import back1 from "../Assets/back1.jpg"
import React from 'react'
import { Component } from "react"

class Heroimg3 extends Component {
render() {
    return (
        <div className="hero-img">
            <img className="into-img" src={back1} alt="projet2" />
            <div className="heading">
             <h1>{this.props.heading}</h1>
             <p>{this.props.text}</p>
            </div>
        </div>
      );
}

  
}

export default Heroimg3;
