import React from "react";
import "./ContactUs.css";
import img1 from "../../asset/phone.png";

const ContactUs = () => {
  return (
    <>
      <div className="contactUs_mainContainer">
        <div className="ContactUs_headTExt_container">

        <h1 className="contactUs_heading">Contact Us</h1>
        <h3 className="contactUs_subText">
          Reach out to us for sustainable fashion inquiries and eco-friendly
          clothing solutions.
        </h3>
        </div>
        <div className="contactUs_subContainer">
          <div className="ContactUs_description">
            <p className="ContactUs_head">You can call/what's app us on:</p>
            <div className="ContactUs_subtext">+91 XXXXXXXXXX</div>
            <p className="ContactUs_head">For general enquires mail:</p>
            <div className="ContactUs_subtext">support@tantukosh.com</div>
            <p className="ContactUs_head">We are located at</p>
            <div className="ContactUs_subtext">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus cumque nulla totam deserunt rem, mollitia non culpa
              corporis velit eius, corrupti, sed asperiores!
            </div>
          </div>
          <div className="contactUs_imageContainer">
            <img src={img1} alt="image" className="contactUs_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
