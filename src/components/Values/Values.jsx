import React from 'react'
import './Values.css'

const Values = () => {
  return (
    <>
        <div className="values_mainContainer">
            <div className="values_headContainer">
                <div className="values_headText">
                Fabric of our Values
                </div>
                <div className="values_subText">
                We believe that every thread has the potential to make a difference. That's why we are committed to using 100% plant based fabric, with Hemp as our flagship material along with various natural fibers like bamboo, lyocell, banana etc.
                </div>
            </div>

            {/* image DIV */}
            <div className="values_imageContainer">

                {/* image */}
                <div className="value_imageDiv">
                <img src="https://images.unsplash.com/photo-1682687219612-b12805df750d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="values_image" />
                <div className="value_imageText">Tantukosh</div>
                </div>

                {/* image */}
                <div className="value_imageDiv">
                <img src="https://images.unsplash.com/photo-1710964041322-4b6538294762?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" className="values_image" />
                <div className="value_imageText">Tantukosh</div>
                </div>

                {/* image */}
                <div className="value_imageDiv">
                <img src="https://images.unsplash.com/photo-1710598586974-a2acd673c04e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8" alt="" className="values_image" />
                <div className="value_imageText">Tantukosh</div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Values
