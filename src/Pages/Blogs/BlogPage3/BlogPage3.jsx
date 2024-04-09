import React from "react";
import "./BlogPage.css";
import img1 from "../../../asset/blog3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BlogPage3 = () => {
  const navigate = useNavigate();

  const goToPreviousPath = () => {
    navigate(-1); // Go back one page
  };
  return (
    <>
      <div className="BlogPage_mainContainer">
        <div className="Blogpage_subContainer">
          <h1 className="BlogTittle">
            Green is the New Black:
            <br />
            Tips for Building a Sustainable Wardrobe
          </h1>
          <h6 className="BlogWriter">Ranya 04 April 2024</h6>
          <div className="blogContent_container">
            <div className="blogpage_imageContainer">
              <img src={img1} alt="" className="BlogPage_image" />
            </div>
            <div className="BlogPage_description">
              Hey, Green Warrior! Welcome to another blog that will take you
              towards a greener path. Today, let’s curate a wardrobe that
              reflects your values and reduces your environmental footprint
              which is not only stylish but also kind to the planet. Get ready
              to discover how to make green the new black in your closet, all
              while having fun and making a positive impact on the planet!
              <br />
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "20px",
                }}
                className="blog_page_subText"
              >
                Start with a Closet Cleanse
              </div>
              Let's kick things off with a fun activity! Take some time to go
              through your current wardrobe and assess what you already have.
              Identify pieces that you love and wear regularly, as well as items
              that no longer serve you. As you declutter, consider donating
              gently used clothing to local charities or hosting a clothing swap
              with friends. Clearing out your closet not only creates space for
              new sustainable pieces but also helps reduce textile waste.
              <br />
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "20px",
                }}
                className="blog_page_subText"
              >
                Explore Eco-Friendly Fabrics
              </div>
              One of the joys of sustainable fashion is discovering eco-friendly
              fabrics! From organic cotton and hemp to Tencel and bamboo, there
              are plenty of options to choose from. Take some time to research
              and explore different materials, considering factors such as
              comfort, durability, and environmental impact.
              <br />
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "20px",
                }}
                className="blog_page_subText"
              >
                Mix and Match with Versatilit
              </div>
              Building a sustainable wardrobe is all about versatility. Look for
              pieces that can be mixed and matched to create a variety of
              outfits, maximizing wearability and minimizing the need for excess
              clothing. A classic button-down shirt, for example, can be styled
              in countless ways—from office-chic with tailored trousers to
              weekend-cool with a skirt . Get creative and see how many outfits
              you can create with just a few key pieces!
              <br />
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "20px",
                }}
                className="blog_page_subText"
              >
                Care for Your Clothes with Love
              </div>
              Last but not least, let's talk about clothing care. Taking care of
              your clothes is essential for preserving their longevity and
              minimizing waste. Follow care instructions on garment labels, wash
              clothes in cold water to save energy, and air dry whenever
              possible to reduce your carbon footprint. Mend any minor repairs
              promptly to prevent further damage and extend the lifespan of your
              clothing. Remember, a little love goes a long way in keeping your
              wardrobe looking fresh and fabulous!
              <br />
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "20px",
                }}
                className="blog_page_subText"
              >
                Practice Mindful Consumption
              </div>
              Before making a purchase, take a moment to consider whether you
              truly need the item and how it aligns with your style and values.
              Avoid impulse buying and trendy pieces that will quickly end up in
              the back of your closet. Instead, focus on investing in pieces
              that bring you joy and that you'll wear for years to come.
              <br />
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "20px",
                }}
                className="blog_page_subText"
              >
                Educate Yourself
              </div>
              Stay informed about the environmental and social impact of the
              fashion industry and educate yourself about sustainable fashion
              practices. Follow ethical fashion bloggers, read books and
              articles on sustainability, and engage with communities dedicated
              to promoting conscious consumerism. By continuously learning and
              evolving, you can make informed choices that align with your
              values and contribute to positive change in the fashion industry.
              <br />
              <br />
              Building a sustainable wardrobe is not only good for the planet
              but also a rewarding and fulfilling journey. And with your help,
              the future of fashion looks brighter than ever.
              <br />
              <br />
              Let's redefine fashion and show the world that sustainability is
              always in vogue!
              <br />
            </div>
          </div>
        </div>
        <button onClick={goToPreviousPath} className="BlogPageButton">
          Back <FaArrowRightLong style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </>
  );
};

export default BlogPage3;
