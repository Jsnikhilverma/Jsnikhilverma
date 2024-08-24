import "./hero.css";
import React from "react";
import profile2_img from "../../assets/profile2_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div className="hero">
      <img id="home" src={profile2_img} alt="" />
      <h1>
        <span>I am Nikhil Verma,</span> Frontend developer based on MERN{" "}
      </h1>
      <p>
        Hello! I'm a passionate MERN stack developer with 1 years of experience
        in building dynamic, scalable, and user-centric web applications. 
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contect">Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
