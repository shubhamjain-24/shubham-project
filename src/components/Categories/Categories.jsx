import React from "react";
import "./Categories.css";
import img2 from "../../asset/cat11.jpg";
import img1 from "../../asset/cat2111.jpg";
import img3 from "../../asset/cat333.png";

const Categories = () => {
  return (
    <>
      <div className="categories_mainContainer">
        <div className="categories_textContainer">
          <div className="categories_headText">From Earth To Wardrobe</div>
          <div className="categories_subText">
            Step into a world of eco-luxury
          </div>
        </div>
        <div className="categories_flexContainer">

            {/* CARD */}
          <div className="categories_cardDiv">
            <div className="categories_image_div">
                <div className="categories_image_shadow">
                Discover eco-chic attire, embodying strength, grace, and sustainable elegance for women.
                </div>
              <img src={img1} alt="" className="categories_card_image" />
            </div>
            <div className="categories_cardText_container">
              <div className="categories_card_head">Women</div>
              <div className="categories_card_subtext">
                Elevate your style by wearing eco-chic elegance
              </div>
            </div>
          </div>

            {/* CARD */}
            <div className="categories_cardDiv">
            <div className="categories_image_div">
                <div className="categories_image_shadow">
                Explore sustainable menswear, uniting style, comfort, and eco-friendly craftsmanship in every garment
                </div>
              <img src={img2} alt="" className="categories_card_image" />
            </div>
            <div className="categories_cardText_container">
              <div className="categories_card_head">Men</div>
              <div className="categories_card_subtext">
              Style that aligns sophistication and sustainability
              </div>
            </div>
          </div>

            {/* CARD */}
            <div className="categories_cardDiv">
            <div className="categories_image_div">
                <div className="categories_image_shadow">
                Discover eco-chic attire, embodying strength, grace, and sustainable elegance for women.
                </div>
              <img src={img3} alt="" className="categories_card_image" />
            </div>
            <div className="categories_cardText_container">
              <div className="categories_card_head">Home Essentials</div>
              <div className="categories_card_subtext">
              Adorn your living spaces with mindful choices
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Categories;
