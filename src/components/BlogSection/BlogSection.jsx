import React from "react";
import "./BlogSection.css";
import img1 from "../../asset/blog1.jpg";
import img2 from "../../asset/BLOGimage2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const BlogSection = () => {
  return (
    <>
      <div className="BlogSection_mainContainer">
        <div className="BlogSection_TextContainer">
          <div className="BlogSection_HeadText">Eco Tales</div>
          <div className="BlogSection_SubText">
            Your guide to sustainable fashion and eco-conscious living.
          </div>
        </div>
        <div className="BlogSection_FlexContainer">
          <div className="blogSection_flex1">
            {/* blog1 */}
            <div className="BlogSection_blogDiv">
              <div className="BlogSection_image_Container">
                <img src={img1} alt="" className="BlogSection_image" />
              </div>
              <div className="BlogSection_TextDiv">
                <div className="BlogSectionText_head">
                  Embracing Slow Fashion: Tantukosh's Sustainable Journey Towards Change 
                </div>
                <div className="BlogSectionText_sub">
                  In the bustling landscape of modern fashion, where trends come
                  and go in the blink of an eye, one thing remains constant: the
                  undeniable toll that fast fashion takes on .......
                </div>
                <NavLink to="/blogpage">
                  <div className="Blogsection_textDiv_button">
                    Read More
                    <FaArrowRightLong style={{ marginLeft: "5px" }} />
                  </div>
                </NavLink>
              </div>
            </div>

            {/* blog1 */}
            <div className="BlogSection_blogDiv" style={{ marginTop: "20px" }}>
              <div className="BlogSection_image_Container">
                <img src={img2} alt="img" className="BlogSection_image" />
              </div>
              <div className="BlogSection_TextDiv">
                <div className="BlogSectionText_head">
                  Unveiling the Green Revolution: How Hemp Fibers are Reshaping
                  the Fashion Landscape
                </div>
                <div className="BlogSectionText_sub">
                  In a world where the fashion industry often prioritizes trends
                  over sustainability, a quiet revolution is taking place. Step
                  into a world where every stitch tells a story—a story of
                  innovation.......
                </div>
                <NavLink to="/blogpage2">
                <div className="Blogsection_textDiv_button">
                  Read More
                  <FaArrowRightLong style={{ marginLeft: "5px" }} />
                </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="blogSection_flex2">
            <div className="BlogSection_flex2_textContainer">
              <div className="BlogSection_flex2_text">
              INSIGHTS TO SUSTAINABILITY BEGIN HERE

              </div>
              <NavLink to="/blog">
              <div className="BlogSection_flex2_Button">EXPLORE BLOGS</div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
