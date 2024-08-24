import React from "react";
import "./footer.css";
import logo1 from "../../assets/logo1.png";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo1} alt="" />
          <p>
            I am a frontend developer from india with 0 year of experience I'm a
            passionate MERN stack developer with 1 years of experience in
            building dynamic, scalable, and user-centric web applications.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">Copy Right</p>
        <div className="footer-bottom-right">
          <p>Term Of Services</p>
          <p>Privacy Policy</p>
          <p>Contect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
