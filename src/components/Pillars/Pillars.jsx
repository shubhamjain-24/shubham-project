import React from "react";
import "./Pillars.css";
import img1 from "../../asset/pillar11.png";
import img2 from "../../asset/pillar22.png";
import img3 from "../../asset/pillar33.png";
import img4 from "../../asset/pillar44.png";

const Pillars = () => {
  return (
    <>
      <div className="Pillars_mainContainer">
        <div className="pillars_textContainer">
          <div className="pillars_headText">GREEN PILLARS</div>
          <div className="pillars_subText">Meeting Earth's natural Wonder</div>
        </div>
        <div className="pillars_flexContainer">

          {/* div1 */}
          <div className="pillarDiv1_container">
            <div className="pillarDiv1">
              <img src={img1} alt="" className="pillarImage" />
            </div>
            <div className="pillars_card_text">Global Shipping</div>
          </div>
         
          {/* div2 */}
          <div className="pillarDiv1_container">
            <div className="pillarDiv1">
              <img src={img2} alt="" className="pillarImage" />
            </div>
            <div className="pillars_card_text">Transparent supply chain</div>
          </div>

           {/* div3 */}
           <div className="pillarDiv1_container">
            <div className="pillarDiv1">
              <img src={img4} alt="" className="pillarImage" />
            </div>
            <div className="pillars_card_text">Ethically sustainable sourcing</div>
          </div>

           {/* div4 */}
           <div className="pillarDiv1_container">
            <div className="pillarDiv1">
              <img src={img3} alt="" className="pillarImage" />
            </div>
            <div className="pillars_card_text">Handcreafted</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pillars;
