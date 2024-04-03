import React from 'react'
import  img2 from '../../asset/Whyhemp.jpg'
import './Whyhemp.css'

const Whyhemp = () => {
  return (
    <>
        <div className="why_mainContaniner">
            <div className="why_flexContainer">
                <div className="why_flexDiv1">
                    <div className="why_div1_head">
                        Why Wear Hemp?
                    </div>
                </div>
                <div className="why_flexDiv2">
                    <div className="why_div2_listContainer">
                        <div className="why_div2_listItem">
                        Biodegradable
                        </div>
                        <div className="why_div2_listItem">
                            
                            Anti - bacterial
                        </div>
                        <div className="why_div2_listItem">
                            Naturally UV - resistant
                        </div>
                        <div className="why_div2_listItem">
                            Strongest natural fiber
                        </div>
                        <div className="why_div2_listItem">
                            Help mitigate climate change
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Whyhemp
