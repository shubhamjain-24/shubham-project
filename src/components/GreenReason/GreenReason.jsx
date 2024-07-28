import React from "react";
import "./GreenReason.css";
import Marquee from "react-fast-marquee";
import img1 from "../../asset/Earth.png";
const GreenReason = () => {
 
  return (
    <>
      <div className="GreenReason_mainContainer">
      <Marquee className="GreenReasonMarquee">
            Your Green Reason. &nbsp;  Your Green Reason.  Your Green Reason. &nbsp;  Your Green
            Reason. &nbsp;  Your Green Reason. &nbsp;  Your Green Reason  &nbsp;  &nbsp;
          </Marquee>
       <div className="GreenReason_gridContainer">
        <div className="GreenReason_gridDiv1">
          <div className="GreenREason_divText">
          "You are not just making a purchase; you are making a statement which means you care about the world we live in"
          </div>
        </div>
        <div className="GreenReason_gridDiv1">
          <div className="GreenReason_imageDiv">
           
           <img src={img1} alt="" className="GreenReason_image" />
          </div>
        </div>
        <div className="GreenReason_gridDiv1">
        <div className="GreenREason_divText">
        "Join us in our mission to weave together a world where fashion and nature coexist in perfect harmony."
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default GreenReason;
