import React from "react";
import img1 from "../../asset/hempleaf.png";
import "./Whyhemp.css";

const Whyhemp = () => {
  return (
    <>
      <div className="why_mainContaniner">
        <div className="why_flexContainer">
          <div className="why_flexDiv1">
            <div className="why_div1_head">Why Wear Hemp?</div>
          </div>
          <div className="why_flexDiv2">
            <div className="why_div2_listContainer">
              <div className="why_div2_listItem">
                <div className="why_div2_item">
                  <img src={img1} alt="" className="why_div2_image" />
                  Biodegradable
                </div>
              </div>
              <div className="why_div2_listItem">
                <div className="why_div2_item">
                  <img src={img1} alt="" className="why_div2_image" />
                  Anti - bacterial
                </div>
              </div>
              <div className="why_div2_listItem">
                <div className="why_div2_item">
                  <img src={img1} alt="" className="why_div2_image" />
                  Naturally UV - resistant
                </div>
              </div>
              <div className="why_div2_listItem">
                <div className="why_div2_item">
                  <img src={img1} alt="" className="why_div2_image" />
                  Strongest natural fiber
                </div>
              </div>
              <div className="why_div2_listItem">
                <div className="why_div2_item">
                  <img src={img1} alt="" className="why_div2_image" />
                  Fight climate change
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyhemp;
