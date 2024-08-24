import React from "react";
import "./contect.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contect = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "26ce52d0-cf79-454d-8ac6-f5d267f470f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contect" className="contect">
      <div className="contect-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contect-section">
        <div className="contect-left">
          <h1>Let's talk</h1>
          <p>
            i am currently abaliable to take on new project, so feel free to
            send me a massage about anything that you want me to work on. You
            can contect anytime
          </p>
          <div className="contect-details">
            <div className="contect-detail">
              <img src={mail_icon} alt="" />
              <p>jsnikhil00@gmail.com</p>
            </div>
            <div className="contect-detail">
              <img src={call_icon} alt="" />
              <p>6392848646</p>
            </div>
            <div className="contect-detail">
              <img src={location_icon} alt="" />
              <p>New Delhi</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contect-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write your massage here</label>
          <textarea
            name="massage"
            rows="8"
            placeholder="Enter Your Massage"
          ></textarea>
          <button type="submit" className="contect-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contect;
