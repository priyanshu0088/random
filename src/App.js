import React from "react";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Project from "./Routes/Project";
import "./index.css";

import { Route, Routes } from "react-router-dom";

function App () {
  return (
    <>
    {/* <Home/>  */}
    
      <Routes>
      
        <Route path="/" element={<Home />} /> 
        <Route path="/About" element={<About />} />  
        
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
       
      </Routes>
    </>
  );
};

export default App;
