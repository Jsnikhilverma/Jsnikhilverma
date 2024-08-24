import "./about.css";
import React from "react";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm a passionate MERN stack developer with 1 years of
              experience in building dynamic, scalable, and user-centric web
              applications.
            </p>
            <p>
              My expertise lies in leveraging the power of MongoDB, Express.js,
              React, and Node.js to create robust full-stack solutions that
              drive business goals and enhance user experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js </p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievemts">
        <div className="about-achievement">
          <h1>0</h1>
          <p>Year Of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6</h1>
          <p>Project Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
