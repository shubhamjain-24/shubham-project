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
              Tantukosh was founded on a belief to create an ecosystem where fashion, lifestyle, and eco-responsibility walk hand in hand. Genuine care for the environment, unwavering faith in the impact of thoughtful choices, and a passion for textiles shaped this dream into a reality.
              <br />
              Tantukosh is not just a lifestyle brand but is a way of living, a soulful and sustainable life.
              <br />
              “Our goal is to create awareness and build an ecosystem from start to end. We aspire beyond mere sustainability".
              <br />
              Our vision extends to creating a world where fashion nurtures, rather than depletes, our planet. We are dedicated to making each step of our production process as green as the fields that grow our materials.
              <br />
              Together, let’s embark on a mission to create a community and redefine a lifestyle that benefits humankind and the planet.
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
