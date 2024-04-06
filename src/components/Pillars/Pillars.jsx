import React from 'react'
import './Pillars.css'
import img1 from '../../asset/Pillar1.png'
import img2 from '../../asset/pillar2.png'
import img3 from '../../asset/pillar3.png'
import img4 from '../../asset/pillar4.png'

const Pillars = () => {
  return (
    <>
        <div className="Pillars_mainContainer">
          <div className="pillars_textContainer">
            <div className="pillars_headText">
                GREEN PILLARS
            </div>
            <div className="pillars_subText">
            Meeting Earth's natural Wonder
            </div>
          </div>
            <div className="pillars_flexContainer">
              <div className="pillarDiv1">
                <img src={img1} alt="" className="pillarImage" />
                <div className="pillars_card_text">
                Sustainanble
                </div>
              </div>
              <div className="pillarDiv1">
              <img src={img2} alt="" className="pillarImage" />
              <div className="pillars_card_text">
              Biodegradable
                </div>
                </div>
                <div className="pillarDiv1">
                <img src={img3} alt="" className="pillarImage" />
                <div className="pillars_card_text">
                Natural UV resistant
                </div>
                </div>
                <div className="pillarDiv1">
                <img src={img4} alt="" className="pillarImage" />
                <div className="pillars_card_text">
                Natural strong fibre
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Pillars
