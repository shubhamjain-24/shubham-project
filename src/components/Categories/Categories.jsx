import React from "react";
import "./Categories.css";
// import img2 from "../../asset/model2.jpeg";
import img2 from "../../asset/mensprod.jpeg";
import img3 from "../../asset/cat3333.png";
// import img1 from "../../asset/model1.jpeg";
import img1 from "../../asset/girlprod.jpeg";

const Categories = () => {
  return (
    <>
      <div className="categories_mainContainer">
        <div className="categories_textContainer">
          <div className="categories_headText">From the earth to your wardrobe</div>
          <div className="categories_subText">
            Step into a world of eco-luxury
          </div>
        </div>
        <div className="categories_flexContainer">

            {/* CARD */}
          <div className="categories_cardDiv">
            <div className="categories_image_div">
                <div className="categories_image_shadow">
                Discover attires that embody strength, grace, and sustainable elegance for women.
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
                Explore sustainable menswear, harmonizing style, comfort, and eco-friendly craftsmanship in every garment.
                </div>
              <img src={img2} alt="" className="categories_card_image" />
            </div>
            <div className="categories_cardText_container">
              <div className="categories_card_head">Men</div>
              <div className="categories_card_subtext">
              Style that aligns with sophistication
              </div>
            </div>
          </div>

            {/* CARD */}
            <div className="categories_cardDiv">
            <div className="categories_image_div">
                <div className="categories_image_shadow">
                Find a curated selection of eco-conscious home essentials for every corner of your home.
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
