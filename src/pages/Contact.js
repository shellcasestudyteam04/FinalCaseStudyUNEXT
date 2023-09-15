import React from "react";
import PizzaLeft from "../assets/contact_shell.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <p>At Shell, we are committed to improve our services to you, to ensure you receive the best customer service and as part of our ongoing improvement program to deliver best in market customer experience.</p><br></br><br></br><br></br>
        <h2>Shell India Markets Private Limited</h2>
        <p>Campus 4A,<br></br>
RMZ Millenia Business Park,<br></br>
No. 143, Dr. M.G.R Road,<br></br>
Kandanchavady,<br></br>
Perungudi, Chennai - 600 096<br></br>
Tel : +91 44 4345 0000<br></br>
Fax : +91 44 4345 1516</p>
      </div>
    </div>
  );
}

export default Contact;
