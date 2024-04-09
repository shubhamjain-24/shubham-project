import React from 'react'
import img1 from '../../asset/ThreadsImage.jpg'
import './LearnMore.css'
import { NavLink } from 'react-router-dom'

const LearnMore = () => {
  return (
    <>
    <div className="LearnMore_MainDiv">
        <div className="LearnMore_flexDiv">
            <div className="LearnMore_textDiv">
              <div className="Learnmore_text">
              A brand built on a deep-rooted commitment to nature, sustainability. Today, we stand as a beacon of hope for eco-conscious consumers who seek not just the products, but a purpose-driven lifestyle.
              </div>
              <NavLink to="/about">
            <div className="LearnMoreButton">
              Learn More
            </div>
              </NavLink>
            </div>
            <div className="LearnMore_imageDiv">
                <img src={img1} alt="" className="LearnmoreImage" />
            </div>
        </div>
    </div>
    </>
  )
}

export default LearnMore
