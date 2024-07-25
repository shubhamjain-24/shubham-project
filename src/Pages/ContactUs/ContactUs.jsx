import React from "react";
import "./ContactUs.css";
import img1 from "../../asset/phone.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";

const ContactUs = () => {
  return (
    <>
      <div className="contactUs_mainContainer">
        <div className="ContactUs_headTExt_container">

        <h1 className="contactUs_heading">Contact Us</h1>
        <h3 className="contactUs_subText">
          Get in tune with all things sustainable.
        </h3>
        </div>
        <div className="contactUs_subContainer">
          <div className="ContactUs_description">
            <p className="ContactUs_head">You can call/whatsapp us on:</p>
            <a href="https://wa.me/919373058171" className="ContactUs_subtext">+91 9373058171</a>

            <p className="ContactUs_head">For general enquiries or feedback:</p>
            <a href="mailto:tantu.india2230@gmail.com" className="ContactUs_subtext">tantu.india2230@gmail.com</a>

            <div style={{fontStyle:"italic",width:"50%",marginTop:"30px"}} className="ContactUs_subtext quote">
            "Join our journey towards a greener world! Follow us on social media for the latest updates and exclusive insights into our sustainable efforts"
            </div>
            <div className="ContactUs_subtext_logos">
              <a href="https://www.instagram.com/tantukosh.india/?igsh=eXRtc2pvaTI0dHZs">
              <FaInstagram style={{marginRight:"10px",cursor:"pointer"}}/>
              </a>
              <a href="https://wa.me/919373058171" target="_blank" rel="noopener noreferrer">
  <FaWhatsapp style={{marginRight: "10px", cursor: "pointer"}}/>
</a>
              <SlSocialLinkedin style={{marginRight:"10px",cursor:"pointer",marginTop:"-3px"}}/>
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
