import React from "react";
import "./Blogs.css";
// import img1 from "../../asset/thread.png";
import img1 from "../../asset/blog1.jpg";
import img2 from "../../asset/blog2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Blogs = () => {
  return (
    <>
      <div className="Blogs_mainContainer">
        <div className="Blogs_HeadContainer">
          <h1 className="Blogs_heading">Green Journal</h1>
          <h3 className="Blogs_subText">
            Your guide to sustainable fashion and eco-conscious living.
          </h3>
        </div>
        <div className="Blogs_gridContainer">
          <div className="Blogs_cardDiv">
            <img src={img1} alt="" className="blogs_image" />
            <h1 className="blogs_tittle">
              Who doesn’t love to dress up and turn heads? We all do! But at
              what cost to our planet?
            </h1>
            <p className="blogs_description">
              In the bustling landscape of modern fashion, where trends come and
              go in the blink of an eye, one thing remains constant: the
              undeniable toll that fast fashion takes on .......
            </p>
            <NavLink to="/blogpage">
              <button className="blogs_button">
                Readmore <FaArrowRightLong style={{ marginLeft: "10px" }} />
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
                Readmore <FaArrowRightLong style={{ marginLeft: "10px" }} />
              </button>
            </NavLink>
          </div>

          {/* blog 3 */}
          <div className="Blogs_cardDiv">
            <img src={img1} alt="" className="blogs_image" />
            <h1 className="blogs_tittle">
              Sustainable Fashion: The Ins and Outs of Clothes Recycling
            </h1>
            <p className="blogs_description">
              Would you like to live a zero-waste, sustainable life?  Well, here
              are some bite-sized recycling facts for you. Did you know that in
              the US alone, more than 16.9 million tons.......
            </p>
            <button className="blogs_button">
              Readmore <FaArrowRightLong style={{ marginLeft: "10px" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
