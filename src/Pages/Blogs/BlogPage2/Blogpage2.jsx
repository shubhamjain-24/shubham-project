import React from "react";
import "./BlogPage2.css";
import img1 from "../../../asset/BLOGimage2.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Blogpage2 = () => {
  const navigate = useNavigate();

  const goToPreviousPath = () => {
      navigate(-1); // Go back one page
  }
  return (
    <>
      <div className="BlogPage_mainContainer">
        <div className="Blogpage_subContainer">
          <h1 className="BlogTittle">
            Unveiling the Green Revolution:  <br />
            How Hemp Fibers are Reshaping the Fashion Landscape
          </h1>
          <h6 className="BlogWriter">April 2024</h6>
          <div className="blogContent_container">
            <div className="blogpage_imageContainer">
              <img src={img1} alt="" className="BlogPage_image" />
            </div>
            <div className="BlogPage_description">
              In a world where the fashion industry often prioritizes trends
              over sustainability, a quiet revolution is taking place. Step into
              a world where every stitch tells a story—a story of innovation,
              responsibility, and respect for our planet. 
              <br />
              <br />
              Join us as we unravel
              the wonders of this extraordinary fiber and explore how it's
              transforming the way we think about clothing, one fiber at a time.
              <br />
              <br />
              Imagine a fabric that's not only luxuriously soft and breathable
              but also environmentally friendly and incredibly durable. That's
              the magic of hemp. Unlike traditional textiles, which often come
              with a hefty environmental price tag, hemp offers a sustainable
              solution that's as kind to the earth as it is to your skin. But
              what makes hemp so special?
              <br />
              <br />
              Let's break it down.
              <li className="blogPage_listItems">
                Eco- Warrior: Hemp is a true eco-warrior. It requires minimal
                water and no pesticides to grow, making it one of the most
                sustainable crops on the planet. In fact, hemp can thrive in a
                variety of climates and soil types, making it an ideal choice
                for eco-conscious farmers and fashion brands alike.
              </li>
              <li className="blogPage_listItems">
                Carbon Sequestration: Hemp plants absorb CO2 from the atmosphere
                as they grow, making effective carbon sequestration. This helps
                to mitigate climate change by reducing greenhouse gas emissions
                in the atmosphere.
              </li>
              <li className="blogPage_listItems">
                Durability: It is one of the strongest natural fibers, making it
                ideal for use in the fashion industry.
              </li>
              <li className="blogPage_listItems">
                 Antibacterial Properties: Hemp fabric has natural antibacterial
                properties, which help to inhibit the growth of odor-causing
                bacteria on the skin. This can help keep clothing fresh and
                odor-free, even after prolonged wear.{" "}
              </li>
              <li className="blogPage_listItems">
                Soil Regeneration: Hemp has deep roots that help to prevent soil
                erosion and improve soil health. Additionally, hemp plants have
                a natural ability to absorb toxins and heavy metals from the
                soil, helping to detoxify and regenerate land over time.{" "}
              </li>
              <br />
              But perhaps the most remarkable thing about hemp is its versatility.
            From clothing and accessories to building materials and biofuels,
            hemp can be used in a wide range of applications, making it a truly
            sustainable solution for the future. 
            <br /><br />
            So why choose hemp? The real
            question is, why not? With its miraculous benefits and endless
            possibilities, hemp is leading the charge towards a greener, more
            sustainable future for fashion. And at Tantukosh, we believe that
            fashion should be as kind to the earth as it is to the wearer.
            <br /><br /> Join
            us as we embrace the power of hemp with other sustainable materials
            and pave the way towards a brighter tomorrow—one stylish,
            sustainable garment at a time. Together, we can make a difference
            and change the world for the better.
            </div>
          </div>
         
        </div>
        <button onClick={goToPreviousPath} className="BlogPageButton">
            Back <FaArrowRightLong style={{marginLeft:"10px"}}/>
        </button>
      </div>
    </>
  );
};

export default Blogpage2;
