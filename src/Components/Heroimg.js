import "./Heroimgstyles.css";
import pexels1 from "../Assets/pexels1.jpg"
import React from 'react'
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="Hero">
        <div className="Mask">
            <img className="into-img" src={pexels1} alt="projet1" />
        </div>
        <div className="content">
            <p> HI, IT'S PRIYANSHU HERE</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/Project" className="btn">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}
   
export default Heroimg
