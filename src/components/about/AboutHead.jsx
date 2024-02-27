import React from 'react'
import './AboutHead.css'
import img1 from '../../asset/abouthead.jpeg'

const AboutHead = () => {
  return (
    <>
    <div className="aboutHead_mainContainer">
            <img src={img1}alt="" className="aboutHeadImg" />
        <div className="aboutHead_backContainer">
            <div className="aboutUseadText">FROM THE EARTH BACK TO ITS BIRTH</div>
        </div>

    </div>
    </>
  )
}

export default AboutHead
