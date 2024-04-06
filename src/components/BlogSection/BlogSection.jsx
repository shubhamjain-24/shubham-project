import React from "react";
import "./BlogSection.css";
import img1 from "../../asset/thread.png";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogSection = () => {
  return (
    <>
      <div className="BlogSection_mainContainer">
        <div className="BlogSection_TextContainer">
          <div className="BlogSection_HeadText">Green Journal</div>
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
                  SUSTAINABLE FASHION: THE INS AND OUTS OF CLOTHES RECYCLING
                </div>
                <div className="BlogSectionText_sub">
                  Would you like to live a zero-waste, sustainable life?  Well,
                  here are some bite-sized recycling facts for you. Did you know
                  that in the US alone, more than 16.9 million tons.......{" "}
                </div>
                <div className="Blogsection_textDiv_button">
                  Read More
                  <FaArrowRightLong style={{ marginLeft: "5px" }} />
                </div>
              </div>
            </div>

            {/* blog1 */}
            <div className="BlogSection_blogDiv" style={{ marginTop: "20px" }}>
              <div className="BlogSection_image_Container">
                <img src={img1} alt="" className="BlogSection_image" />
              </div>
              <div className="BlogSection_TextDiv">
                <div className="BlogSectionText_head">
                  SUSTAINABLE FASHION: THE INS AND OUTS OF CLOTHES RECYCLING
                </div>
                <div className="BlogSectionText_sub">
                  Would you like to live a zero-waste, sustainable life?  Well,
                  here are some bite-sized recycling facts for you. Did you know
                  that in the US alone, more than 16.9 million tons.......{" "}
                </div>
                <div className="Blogsection_textDiv_button">
                  Read More
                  <FaArrowRightLong style={{ marginLeft: "5px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="blogSection_flex2">
            <div className="BlogSection_flex2_textContainer">
              <div className="BlogSection_flex2_text">
                INSIGHTS TO SUSTAINABLE FASHION AND ECO-CONCIOUS LIVING
              </div>
              <div className="BlogSection_flex2_Button">
                EXPLORE BLOGS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
