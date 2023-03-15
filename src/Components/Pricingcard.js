import "./Pricingcardstyles.css"
import calci from "../Assets/calci.jpg"
import textutils from "../Assets/textutils.jpg"
import game from "../Assets/game.jpg"
import React from 'react'
import { NavLink } from "react-router-dom"
// import Anime from "../Components/Anime"


const Pricingcard = () => {
  return (
    <div className="pricing-card">
        
<div className="card-container">

    <div className="card">
    <img className="into-img" src={calci} alt="projet1" />
     <div className="head"><h1>Calculator</h1>
     </div>
     <div className="para">
     <p> The first solid-state electronic calculator was created in the early 1960s. Pocket-sized devices became available in the 1970s, especially after the Intel 4004. </p>
     </div>
     <NavLink to="https://www.youtube.com/watch?v=P8YuWEKTeuE"className="btn">view</NavLink>

        </div>
    

        <div className="card">
    <img className="into-img" src={textutils} alt="projet1" />
     <div className="head"><h1>text-play </h1>
     </div>
     <div className="para">
     <p>inside this app,you can easily count your words and charecters and also ypu can manipulate text in desired form such as converting in uppercase,lowercase and much more. </p>
     </div>
     <NavLink to="https://www.youtube.com/watch?v=P8YuWEKTeuE"className="btn">view</NavLink>

        </div>

        {/* <div className="card-main">
   <Anime/>
        </div> */}
    
        <div className="card">
    <img className="into-img" src={game} alt="projet1" />
     <div className="head"><h1>tic-tac-toe</h1>
     </div>
     <div className="para">
     <p>The tic-tac-toe game is for two players. One player plays X and the other plays O. The players take turns placing their marks on a grid of three-by-three cells.defeat your friend and enjoy</p>
     </div>
   
   <NavLink to="https://www.youtube.com/watch?v=P8YuWEKTeuE"className="btn">view</NavLink>
        </div>

        <div className="card">
    <img className="into-img" src={calci} alt="projet1" />
     <div className="head"><h1>clock</h1>
     </div>
     <div className="para">
     <p>Better three hours too soon than a minute too late. – William Shakespeare. Better spend time waiting for the opportunity to take an action than miss the chance. just for your GK</p>
     </div>
   
   <NavLink to="https://www.youtube.com/watch?v=P8YuWEKTeuE"className="btn">view</NavLink>
        </div>
</div>
    
    </div>
  )
}

export default Pricingcard
