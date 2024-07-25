import React from "react";
import "./Footer.css";
// import img1 from "../../asset/footerimage.png";
import img1 from "../../asset/footerlogo2.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footermainDiv">
        <div className="footerGridContainer">
          <div className="footer_div1">
            <img src={img1} alt="logo" srcset="" className="Footer_image" />
          </div>
          <div className="footer_div2">
            <NavLink to="/">
              <p className="logo_head">COMPANY</p>
            </NavLink>
            <div className="footer_list">
            <NavLink to="/about">
              <p className="footer_listItem">Our Story</p>
              </NavLink>
              <NavLink to="/shop">
                <p className="footer_listItem">Shop</p>
              </NavLink>
              <NavLink to="blog">
                <p className="footer_listItem">Eco Tales</p>
              </NavLink>
              <NavLink to="about"></NavLink>
              <NavLink to="contactus">
                <p className="footer_listItem"> Contact Us</p>
              </NavLink>
            </div>
          </div>
          <div className="footer_div3">
            <p className="logo_head">CATEGORIES</p>
            <div className="footer_list">
              <p className="footer_listItem">Women</p>
              <p className="footer_listItem">Men</p>
              <p className="footer_listItem">Home Essesntials</p>
            </div>
          </div>
          <div className="footer_div4">
            <p className="logo_head">STAY CONNECTED</p>
            <p className="footer_blog">
              We are building a digital community! Connect, Inspire, Engage, and
              Follow our Journey.
            </p>
            <a href="https://www.instagram.com/tantukosh.india/?igsh=eXRtc2pvaTI0dHZs">
              <div className="footerBlogButton">
                <AiFillInstagram style={{marginRight:"5px"}} />
                Visit our Instagram
                <div className="footer_arrow"></div>
                <FaArrowRightLong className="arrow_icon" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footerBase">
        <div className="footerline"></div>
        <div className="footer_baseContent">
          {/* <div className="foortericons">
            <FaFacebook className="footerIcon" />
            <AiFillInstagram className="footerIcon" />
            <FaSquareXTwitter className="footerIcon" />
            <IoLogoWhatsapp className="footerIcon" />
          </div> */}
          <div className="footercopyrightText">
          © @tantukosh2024
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
