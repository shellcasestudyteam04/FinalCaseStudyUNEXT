import React from "react";
import { Link } from "react-router-dom";
import BannerVideo from "../assets/Shell_vid.mp4";
import "../styles/Home.css";
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="home">
     
      <video autoPlay loop muted className="video-background">
        <source src={BannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="headerContainer">
        <h1>Shell India Market Pvt. Ltd.</h1>
        <p>Make The Future</p>
        <p>Renewable Energy Tracking and Management System</p>
        <Link to="/menu"></Link>
      </div>
    </div>
  );
}



export default Home;

