import "./AboutSpanStyles.css";
import React from "react";
import htmli1 from "../Assets/htmli1.png";
import reacti1 from "../Assets/reacti1.png"
import cssi1 from "../Assets/cssi1.jpg"
import jsi from "../Assets/jsi.png"

const AboutSpan = () => {
  return (

    <div className="about-back">
    <div className="about-container">
      <h1>Skills</h1>
      <div className="single">

      <div className="rightimg">
    <img className="into-img" src={htmli1} alt="projet1" />
        </div>
    

        <div className="description">
          <div className="heap">
          <h1 className="heads">HTML</h1>
          <div className="parag">
            <p>
            HTML (Hypertext Markup Language) HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.
            </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="single">
        <div className="description">
          <div className="heap">
          <h1 className="heads">CSS</h1>
          <div className="parag">
            <p>
            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
            </p>
            </div>
          </div>
        </div>
        <div className="rightimg">
    <img className="into-img" src={cssi1} alt="projet1" />
     
    

        </div>
    
      </div>
      <div className="single">

<div className="rightimg">
<img className="into-img" src={jsi} alt="projet1" />
  </div>


  <div className="description">
    <div className="heap">
    <h1 className="heads">javascript</h1>
    <div className="parag">
      <p>
      JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
      </p>
      </div>
    </div>
  </div>
        
      </div>
      <div className="single">
        <div className="description">
          <div className="heap">
          <h1 className="heads">React</h1>
          <div className="parag">
            <p>
            React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. We'll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.
            </p>
            </div>
          </div>
        </div>
        <div className="rightimg">
    <img className="into-img" src={reacti1} alt="projet1" />
        </div>
    
      </div>
    </div>
    </div>
  );
};

export default AboutSpan;
