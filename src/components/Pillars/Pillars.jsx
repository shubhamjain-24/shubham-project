import React from "react";
import "./Pillars.css";
import img1 from "../../asset/pillar111.png";
import img2 from "../../asset/pillar222.png";
import img3 from "../../asset/pillar33.png";
import img4 from "../../asset/pillar44.png";

const Pillars = () => {
  return (
    <>
      <div className="Pillars_mainContainer">
        <div className="pillars_textContainer">
          <div className="pillars_headText">GREEN PILLARS</div>
        </div>
        <div className="pillars_flexContainer">

          {/* div1 */}
          <div className="pillarDiv1_container">
            <div className="pillarDiv1">
              <img src={img1} alt="" className="pillarImage" />
            </div>
            <div className="pillars_card_text">Small Batches</div>
          </div>
         
          {/* div2 */}
          <div className="pillarDiv1_container">
            <div className="pillarDiv1">
              <img src={img2} alt="" className="pillarImage" />
            </div>
            <div className="pillars_card_text">Natural Fibers</div>
          </div>

           {/* div3 */}
           <div className="pillarDiv1_container">
            <div className="pillarDiv1">
              <img src={img4} alt="" className="pillarImage" />
            </div>
            <div className="pillars_card_text">Ethically Sourced</div>
          </div>

           {/* div4 */}
           <div className="pillarDiv1_container">
            <div className="pillarDiv1">
              <img src={img3} alt="" className="pillarImage" />
            </div>
            <div className="pillars_card_text">Handcrafted</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pillars;
