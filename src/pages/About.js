import React from "react";
import MultiplePizzas from "../assets/about-shell.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Shell is an international energy company with expertise in the exploration, production, refining and marketing of oil and natural gas, and the manufacturing and marketing of chemicals. 
        </p>
        <p>
We use advanced technologies and take an innovative approach to help build a sustainable energy future. We invest in power, including from renewable sources such as wind and solar. We also invest in electric vehicle charging and low-carbon fuels for transport, such as advanced biofuels and hydrogen
        </p>
      </div>
    </div>
  );
}

export default About;
