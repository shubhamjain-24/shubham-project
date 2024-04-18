import React from 'react'
import './Values.css'
import img1 from '../../asset/bamboofinal.jpg'
import img2 from '../../asset/Bananafinal.jpg'
import img3 from '../../asset/HempFinal.jpg'

const Values = () => {
  return (
    <>
        <div className="values_mainContainer">
            <div className="values_headContainer">
                <div className="values_headText">
                Fabric of our Values
                </div>
                <div className="values_subText">
                We believe that every thread has the potential to make a difference. That's why we are committed to using 100% plant-based fabric, with Hemp as our flagship material, along with various natural fibers like bamboo, lyocell, banana, etc
                </div>
            </div>

            {/* image DIV */}
            <div className="values_imageContainer">

                {/* image */}
                <div className="value_imageDiv">
                <img src={img2} alt="" className="values_image" />
                <div className="value_imageText">Banana Extract</div>
                </div>

                {/* image */}
                <div className="value_imageDiv">
                <img src={img1} alt="" className="values_image" />
                <div className="value_imageText">Bamboo Extract</div>
                </div>

                {/* image */}
                <div className="value_imageDiv">
                <img src={img3} alt="" className="values_image" />
                <div className="value_imageText">Hemp Extract</div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Values
