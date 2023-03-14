import "./Pricingcardstyles.css"
import pexels2 from "../Assets/pexels2.jpg"
import React from 'react'
import { NavLink } from "react-router-dom"
// import Anime from "../Components/Anime"


const Pricingcard = () => {
  return (
    <div className="pricing-card">
        
<div className="card-container">

    <div className="card">
    <img className="into-img" src={pexels2} alt="projet1" />
     <div className="head"><h1>hello</h1>
     </div>
     <div className="para">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam corrupti nisi exercitationem assumenda voluptates iste blanditiis sapiente adipisci consequuntur?</p>
     </div>
     <NavLink to="https://www.yputube.com/watch?v=P8YuWEKTeuE"className="btn">view</NavLink>

        </div>
    

        <div className="card">
    <img className="into-img" src={pexels2} alt="projet1" />
     <div className="head"><h1>hello</h1>
     </div>
     <div className="para">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam corrupti nisi exercitationem assumenda voluptates iste blanditiis sapiente adipisci consequuntur?</p>
     </div>
     <NavLink to="https://www.yputube.com/watch?v=P8YuWEKTeuE"className="btn">view</NavLink>

        </div>

        {/* <div className="card-main">
   <Anime/>
        </div> */}
    
        <div className="card">
    <img className="into-img" src={pexels2} alt="projet1" />
     <div className="head"><h1>hello</h1>
     </div>
     <div className="para">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam corrupti nisi exercitationem assumenda voluptates iste blanditiis sapiente adipisci consequuntur?</p>
     </div>
   
   <NavLink to="https://www.yputube.com/watch?v=P8YuWEKTeuE"className="btn">view</NavLink>
        </div>

        <div className="card">
    <img className="into-img" src={pexels2} alt="projet1" />
     <div className="head"><h1>hello</h1>
     </div>
     <div className="para">
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam corrupti nisi exercitationem assumenda voluptates iste blanditiis sapiente adipisci consequuntur?</p>
     </div>
   
   <NavLink to="https://www.yputube.com/watch?v=P8YuWEKTeuE"className="btn">view</NavLink>
        </div>
</div>
    
    </div>
  )
}

export default Pricingcard
