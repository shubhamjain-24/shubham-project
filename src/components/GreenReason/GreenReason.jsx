import React from "react";
import "./GreenReason.css";
import Marquee from "react-fast-marquee";
import img1 from "../../asset/Yourgreenreason.png";
const GreenReason = () => {
  return (
    <>
      <div className="GreenReason_mainContainer">
        <div className="GreenRason_backContainer">
          <Marquee className="GreenReasonMarquee">
            Your Green Reason. &nbsp;  Your Green Reason.  Your Green Reason. &nbsp;  Your Green
            Reason. &nbsp;  Your Green Reason. &nbsp;  Your Green Reason  &nbsp;  &nbsp;
          </Marquee>
        </div>
        <div className="GreenReason_frontContainer">
          <img src={img1} alt="" className="greenreasonImage" />
          <div className="greenReasonDivtext">
            You are not just making a purchase; you are making a statement. Your
            purchase means you care about the world we live in.
            <br />
            <br />
            Join us in our mission to weave together a world where fashion and
            nature coexist in perfect harmony.
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenReason;
