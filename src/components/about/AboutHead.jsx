import React from 'react'
import './AboutHead.css'
import img1 from '../../asset/IntroImage.jpg'

const AboutHead = () => {
  return (
    <>
    <div className="aboutHead_mainContainer">
            <img src={img1}alt="" className="aboutHeadImg" />
        <div className="aboutHead_backContainer">
            <div className="aboutUseadText">
              Chic. Green. Unseen
              <div  className="aboutUseadText2">
              Style that sustains,
            </div>
            <div  className="aboutUseadText2">
              fashion that matters.
            </div>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default AboutHead
