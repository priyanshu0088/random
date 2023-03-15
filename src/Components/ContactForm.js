import "./ContactFormStyles.css"
// import pexels4 from "../Assets/pexels4.jpg"
import React from 'react'

const ContactForm = () => {
  return (
<div className="all">

    <div className="form">

      <form>
<label>Your name</label>
<input type="text" ></input>
<label>Email</label>
<input type="email" ></input>
<label>Subject</label>
<input type="text" ></input>
<label>Message</label>
<textarea rows="10" placeholder="Type Your message Here"/>
    <button className="btn">submit</button>
      </form>
    </div>

    </div>
  );
};

export default ContactForm
