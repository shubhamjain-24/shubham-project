import React from "react";
import "./Blogs.css";
// import img1 from "../../asset/thread.png";
import img1 from "../../asset/blog1.jpg";
import img2 from "../../asset/BLOGimage2.jpg";
import img3 from "../../asset/blog3.jpg";

import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Blogs = () => {
  return (
    <>
      <div className="Blogs_mainContainer">
        {/* <div className="Blogs_HeadContainer">
          <h1 className="Blogs_heading">Green Journal</h1>
          <h3 className="Blogs_subText">
            Your guide to sustainable fashion and eco-conscious living.
          </h3>
        </div> */}
        <div className="Blogs_gridContainer">
          <div className="Blogs_cardDiv">
            <img src={img1} alt="" className="blogs_image" />
            <h1 className="blogs_tittle">
            Embracing slow fashion: Tantukosh's Sustainable Journey Towards Change
            </h1>
            <p className="blogs_description">
              In the bustling landscape of modern fashion, where trends come and
              go in the blink of an eye, one thing remains constant: the
              undeniable toll that fast fashion takes on .......
            </p>
            <NavLink to="/blogpage">
              <button className="blogs_button">
                Read More <FaArrowRightLong style={{ marginLeft: "10px" }} />
              </button>
            </NavLink>
          </div>

          {/* blog 2 */}
          <div className="Blogs_cardDiv">
            <img src={img2} alt="" className="blogs_image" />
            <h1 className="blogs_tittle">
              Unveiling the Green Revolution: How Hemp Fibers are Reshaping the
              Fashion Landscape
            </h1>
            <p className="blogs_description">
              In a world where the fashion industry often prioritizes trends
              over sustainability, a quiet revolution is taking place. Step into
              a world where every stitch tells a story—a story of
              innovation.......
            </p>
            <NavLink to="/blogpage2">
              <button className="blogs_button">
                Read More <FaArrowRightLong style={{ marginLeft: "10px" }} />
              </button>
            </NavLink>
          </div>

          {/* blog 3 */}
          <div className="Blogs_cardDiv">
            <img src={img3} alt="" className="blogs_image" />
            <h1 className="blogs_tittle">
            Green is the New Black:
Tips for Building a Sustainable Wardrobe
            </h1>
            <p className="blogs_description">
            Hey, Green Warrior! Welcome to another blog that will take you towards a greener path. Today, let’s curate a wardrobe that reflects your values and reduces your environmental footprint which is not only stylish but also kind to the planet.......
            </p>
            <NavLink to='/blogpage3'>

            <button className="blogs_button">
              Read More <FaArrowRightLong style={{ marginLeft: "10px" }} />
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
