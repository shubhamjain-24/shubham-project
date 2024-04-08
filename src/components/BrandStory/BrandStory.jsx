import React from "react";
import "./BrandStory.css";
import img1 from "../../asset/plant2.png";
import img2 from "../../asset/backstorybg.png";
const BrandStory = () => {
  return (
    <>
      <div className="brandStory_mainContainer">
        <div className="brandStory_flexContainer">
          <div className="bS_textContainer">
            <img className="sB_textbackimg" src={img2} alt="" />
            <div className="bS_heading">Brand Story</div>
            <div className="bS_text">
              Hey green warrior! <br />
              Tantukosh is founded by two childhood best friends who shared a
              dream – a dream of a world where fashion, lifestyle and
              eco-responsibility walk hand in hand. This dream was born out of
              their genuine concern for the environment and their unwavering
              belief in the power of conscious choices and love for textiles.
              <br />
              Tantukosh is not just a clothing or a lifetsyle brand but is a way
              of living, a soulful and sustainable life.
              <br />
              “Our goal is to create awareness and build and eco-system from
              start to end”
              <br />
              Together, let’s embark on a mission to create a community and
              redefine a lifestyle that benefits the mankind and the planet.
            </div>
          </div>
          <div className="bS_imgContainer">
            <img className="bS_image" src={img1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandStory;
