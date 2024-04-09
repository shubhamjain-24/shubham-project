import React from 'react'
import './Footer.css'
import img1 from '../../asset/footerimage.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { NavLink } from 'react-router-dom';



const Footer = () => {
  return (
    <>
        <div className="footermainDiv">
            <div className="footerGridContainer">
                <div className="footer_div1">
                    <img src={img1} alt="logo" srcset="" className='Footer_image'/>
                </div>
                <div className="footer_div2">
                    <NavLink to ='/'>

                    <p className='logo_head'>COMPANY</p>
                    </NavLink>
                    <div className="footer_list">
                        <NavLink to="/shop">
                        <p className='footer_listItem'>Shop</p>
                        </NavLink>
                        <NavLink to='blog'>
                        <p className='footer_listItem'>Blog</p>
                        </NavLink>
                        <NavLink to='about'>
                        <p className='footer_listItem'>Journey</p>
                        </NavLink>
                        <NavLink to='contactus'>
                        <p className='footer_listItem'> Contact Us</p>
                        </NavLink>
                    </div>
                </div>
                <div className="footer_div3">
                <p className='logo_head'>CATEGORIES</p>
                    <div className="footer_list">
                        <p className='footer_listItem'>Women</p>
                        <p className='footer_listItem'>Men</p>
                        <p className='footer_listItem'>Bedlines</p>
                    </div>
                </div>
                <div className="footer_div4">
                <p className='logo_head'>GREENHUB</p>
                <p className='footer_blog'>
                Embark on a sustainable journey. Explore fashion narratives, craftsmanship, and conscious style. Start reading for a fashion-forward, eco-conscious lifestyle.
                </p>
                <NavLink to='/blog'>
                <div className="footerBlogButton">Visit 
                <div className="footer_arrow"></div>
                <FaArrowRightLong className="arrow_icon" />
                 </div>
                </NavLink>
                </div>
            </div>
        </div>
            <div className="footerBase">
                <div className="footerline"></div>
                <div className="footer_baseContent">
                    <div className="foortericons">
                        <FaFacebook className='footerIcon'/>
                        <AiFillInstagram className='footerIcon'/>
                        <FaSquareXTwitter className='footerIcon'/>
                        <IoLogoWhatsapp className='footerIcon'/>
                    </div>
                    <div className="footercopyrightText">
                    Copyright by tantukosh. All rights reserved.
                    </div>
                </div>
            </div>
    </>
  )
}

export default Footer
