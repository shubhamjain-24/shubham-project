import React from "react";
import "./Blogpage.css";
import img1 from "../../../asset/blog1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();

  const goToPreviousPath = () => {
    navigate(-1); // Go back one page
  };
  return (
    <>
      <div className="BlogPage_mainContainer">
        <div className="Blogpage_subContainer">
          <h1 className="BlogTittle">
            Who doesn’t love to dress up and turn heads?
            <br />
            We all do! But at what cost to our planet?
          </h1>
          <h6 className="BlogWriter"> April 2024</h6>
          <div className="blogContent_container">
            <div className="blogpage_imageContainer">
              <img src={img1} alt="" className="BlogPage_image" />
            </div>

            <div className="BlogPage_description">
              In the bustling landscape of modern fashion, where trends come and
              go in the blink of an eye, one thing remains constant: the
              undeniable toll that fast fashion takes on our planet. As
              consumers become increasingly aware of the true cost of their
              clothing, a shift towards sustainability has emerged as a beacon
              of hope for a better future.
              <br />
              <br />
              The fast fashion industry, fueled by consumer demand for cheap,
              disposable clothing, has become a powerhouse of environmental
              destruction. The rise in textile consumption is alarming!
              <br />
              <br />
               Consider
              this: the fashion industry is responsible for a staggering 10% of
              global carbon emissions, surpassing the emissions of all
              international flights and maritime shipping combined. These
              emissions are largely due to the energy-intensive processes
              involved in textile production, transportation, and disposal. But
              the impact of fast fashion goes beyond carbon emissions. Here are
              some facts that will compel you to ponder and spur action to make
              a conscious choice while purchasing garments.
              <li className="blogPage_listItems">
                Every year, the fashion industry generates an estimated 92
                million tons of textile waste, much of which ends up in
                landfills. To illustrate the gravity of this statistic, it
                equates to a truckload of discarded clothing dumped into
                landfills every single second.
              </li>
              <li className="blogPage_listItems">
                It takes an estimated 2,700 liters of water to produce a single
                cotton t-shirt, enough to sustain one person's drinking water
                needs for two and a half years. 
              </li>
              <li className="blogPage_listItems">
                Add to that the use of pesticides and fertilizers that degrades
                the soil quality with time.
              </li>
              <br />
              From releasing 10% of microplastics into the ocean annually via
              textiles to consuming 20,000 liters of water to produce one
              kilogram of cotton the apparel industry's global emissions are
              projected to double by the decade's end, but there is hope on the
              horizon. 
              <br />
              <br />

               We at Tantukosh are leading the charge towards a more
              sustainable future, rejecting the harmful practices of fast
              fashion in favor of a slower, more mindful approach to clothing
              and lifestyle products.  At the heart of our ethos lies a
              commitment to sustainability in every aspect of our business. 
              <br />
              Our
              flagship material hemp is a versatile and eco-friendly alternative
              to conventional fabrics, which requires significantly less water
              and fewer pesticides to grow. Not only that, but hemp fibers are
              incredibly durable, ensuring that Tantukosh products are built to
              last, reducing the need for constant replacements and minimizing
              waste. But our commitment to sustainability doesn't end there. We
              also prioritize ethical manufacturing practices, ensuring that
              every person involved in the production process is treated with
              dignity and respect.
              <br />
              <br />
               What sets our brand apart isn't merely an
              array of facts and knowledge but a commitment to making a tangible
              impact by embracing the concept of a ‘rightful fashionability'.
              
              <br />
              <br /> As we embark on this journey
              towards a more sustainable future, we invite you to join us. By
              choosing Tantukosh, you're not just buying clothing and lifestyle
              products—you're supporting a movement towards positive change.
              Together, we can redefine the fashion industry and pave the way
              for a greener, more sustainable world.
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

export default BlogPage;
