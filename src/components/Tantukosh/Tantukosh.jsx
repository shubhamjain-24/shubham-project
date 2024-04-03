import React from "react";
import img1 from "../../asset/TantuMeans.png";
import './Tantukosh.css'
const Tantukosh = () => {
  return (
    <>
      <div className="tantu_mainContainer">
        <div className="tantu_flexContainer">
          <div className="tantu_div1">
            <div className="tantu_div1_imageDiv">
              <img src={img1} alt="" className="tantu_div1_image" />
            </div>
            <div className="tantu_div1_textBox">
                <div className="tantu_div_text">
                तंतु: सूत।
              <br />
              कोष: खज़ाना
                </div>
                <div className="tantu_div_text text_div_2">
                TANTU: THREAD
                <br />
                KOSH: TREASURE
                </div>
            
            </div>
          </div>
          <div className="tantu_div2">
            <div className="tantu_textDiv">
              <div className="tantu_text1">
                Weaving a world where every thread tells a tale of
                sustainability.
              </div>
              <div className="tant_text2">
                "Tantukosh" is derived from two Sanskrit words, where "Tantu"
                means thread and "Kosh" means treasure. Together, the name
                signifies the essence of a treasure made of threads.
                <br />
                <br />
                Tantukosh represents a brand that celebrates the beauty and
                value of natural threads, emphasizing their inherent richness
                and importance in today's world, and in the future. Each product
                reflects the idea of a precious collection of threads,
                highlighting the brand's focus on quality and the authentic
                beauty found in natural fibers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tantukosh;
