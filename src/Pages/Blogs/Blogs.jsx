import React from 'react'
import './Blogs.css'
import img1 from "../../asset/thread.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Blogs = () => {
  return (
    <>
        <div className="Blogs_mainContainer">
            <div className="Blogs_HeadContainer">
                <h1 className="Blogs_heading">
                Green Journal
                </h1>
                <h3 className="Blogs_subText">
                Your guide to sustainable fashion and eco-conscious living.
                </h3>
            </div>
            <div className="Blogs_gridContainer">
                <div className="Blogs_cardDiv">
                    <img src={img1} alt="" className="blogs_image" />
                    <h1 className="blogs_tittle">
                    Sustainable Fashion: The Ins and Outs of Clothes Recycling
                    </h1>
                    <p className="blogs_description">
                    Would you like to live a zero-waste, sustainable life?  Well, here are some bite-sized recycling facts for you. Did you know that in the US alone, more than 16.9 million tons.......
                    </p>
                    <button className="blogs_button">
                        Readmore <FaArrowRightLong style={{ marginLeft: "10px" }} />
                    </button>
                </div>

                {/* blog 2 */}
                <div className="Blogs_cardDiv">
                    <img src={img1} alt="" className="blogs_image" />
                    <h1 className="blogs_tittle">
                    Sustainable Fashion: The Ins and Outs of Clothes Recycling
                    </h1>
                    <p className="blogs_description">
                    Would you like to live a zero-waste, sustainable life?  Well, here are some bite-sized recycling facts for you. Did you know that in the US alone, more than 16.9 million tons.......
                    </p>
                    <button className="blogs_button">
                        Readmore <FaArrowRightLong style={{ marginLeft: "10px" }} />
                    </button>
                </div>

                {/* blog 3 */}
                <div className="Blogs_cardDiv">
                    <img src={img1} alt="" className="blogs_image" />
                    <h1 className="blogs_tittle">
                    Sustainable Fashion: The Ins and Outs of Clothes Recycling
                    </h1>
                    <p className="blogs_description">
                    Would you like to live a zero-waste, sustainable life?  Well, here are some bite-sized recycling facts for you. Did you know that in the US alone, more than 16.9 million tons.......
                    </p>
                    <button className="blogs_button">
                        Readmore <FaArrowRightLong style={{ marginLeft: "10px" }} />
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blogs
