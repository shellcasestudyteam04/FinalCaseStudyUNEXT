import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/shell_india_official/?igshid=Yzg5MTU1MDY%3D"><InstagramIcon /> </a><a href="https://twitter.com/Shell_India"><TwitterIcon /></a><a href="https://www.facebook.com/Shell"> <FacebookIcon /></a><a href="https://www.linkedin.com/company/shell"> <LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 shell.in</p>
    </div>
  );
}

export default Footer;
