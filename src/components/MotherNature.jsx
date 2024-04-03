import React, { useState } from "react";
import mother1 from "../asset/mother1.png";
import mother2 from "../asset/mother2.png";
import mother3 from "../asset/mother3.png";
import GreenThreads from "./GreenThreads";
import "./MotherNature.css";

const MotherNature = () => {
  const [firstTintOpen, setFirstTintOpen] = useState(false);
  const [secondTintOpen, setSecondTintOpen] = useState(false);
  const [thirdTintOpen, setThirdTintOpen] = useState(false);

  return (
    <div className="w-full h-full lg:p-20 p-10 flex flex-col flex-wrap">
      <div className="w-full h-full">
        <div className="flex justify-center">
          <h1 className="lg:text-4xl text-2xl font-semibold text-gray-600 text-center mother-nature-title">
            Wear the Beauty of Mother Nature
          </h1>
        </div>

        <div className="flex justify-center w-full h-full">
          <div className="flex justify-between gap-5 lg:mt-20 mt-10 flex-wrap md:flex-nowrap h-full w-full lg:max-w-[1200px] max-w-full mother-nature-cards">
            {/* First image */}
            <div
              className="drop-shadow-xl h-full lg:w-1/3 w-full md:w-1/2 bg-white cursor-pointer relative mother-nature-card"
              onMouseEnter={() => setFirstTintOpen(true)}
              onMouseLeave={() => setFirstTintOpen(false)}
            >
              <div className="w-full h-full p-2">
                <div className="relative cursor-pointer overflow-hidden">
                  <img
                    src={mother1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute backdrop-brightness-0 h-full w-full top-0 opacity-0 bg-black transition-opacity duration-500 ${
                      firstTintOpen ? "opacity-50" : "opacity-0"
                    }`}
                  />
                  <div
                    className={`w-full h-1/2 absolute flex justify-center items-center bottom-0 right-0 p-10 md:bottom-8 lg:bottom-0 transition-opacity duration-500 ${
                      firstTintOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-2xl lg:text-2xl md:text-base text-center text-white font-thin">
                      Discover eco-chic attire, embodying strength, grace, and
                      sustainable elegance for women.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-1 flex justify-center flex-col items-center gap-2 p-2">
                <h4 className="text-3xl md:text-2xl font-semibold mother-nature-card-title">
                  WOMEN
                </h4>
                <p className="text-gray-800 text-lg md:text-center underline-on-hover mother-nature-card-text">
                  Feminine Grace in Sustainable Threads
                </p>
              </div>
            </div>
            {/* Second image */}
            <div
              className="drop-shadow-xl h-full lg:w-1/3 w-full md:w-1/2 bg-white cursor-pointer relative mother-nature-card"
              onMouseEnter={() => setSecondTintOpen(true)}
              onMouseLeave={() => setSecondTintOpen(false)}
            >
              <div className="w-full h-full p-2">
                <div className="relative cursor-pointer overflow-hidden">
                  <img
                    src={mother2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute backdrop-brightness-0 h-full w-full top-0 opacity-0 bg-black transition-opacity duration-500 ${
                      secondTintOpen ? "opacity-50" : "opacity-0"
                    }`}
                  />
                  <div
                    className={`w-full h-1/2 absolute flex justify-center items-center bottom-0 right-0 p-10 md:bottom-8 lg:bottom-0 transition-opacity duration-500 ${
                      secondTintOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-2xl lg:text-2xl md:text-base text-center text-white font-thin">
                      Explore sustainable menswear, uniting style, comfort, and
                      eco-friendly craftsmanship in every garment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-1 flex justify-center flex-col items-center gap-2 p-2">
                <h4 className="text-3xl md:text-2xl font-semibold mother-nature-card-title">
                  MEN
                </h4>
                <p className="text-gray-800 text-lg md:text-center underline-on-hover mother-nature-card-text">
                  Refined style in Natural Fibers
                </p>
              </div>
            </div>
            {/* Third image */}
            <div
              className="drop-shadow-xl h-full lg:w-1/3 w-full md:w-1/2 bg-white cursor-pointer relative mother-nature-card"
              onMouseEnter={() => setThirdTintOpen(true)}
              onMouseLeave={() => setThirdTintOpen(false)}
            >
              <div className="w-full h-full p-2">
                <div className="relative cursor-pointer overflow-hidden">
                  <img
                    src={mother3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute backdrop-brightness-0 h-full w-full top-0 opacity-0 bg-black transition-opacity duration-500 ${
                      thirdTintOpen ? "opacity-50" : "opacity-0"
                    }`}
                  />
                  <div
                    className={`w-full h-1/2 absolute flex justify-center items-center bottom-0 right-0 p-10 md:bottom-8 lg:bottom-0 transition-opacity duration-500 ${
                      thirdTintOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-2xl lg:text-2xl md:text-base text-center text-white font-thin">
                      Discover eco-chic attire, embodying strength, grace, and
                      sustainable elegance for women.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-1 flex justify-center flex-col items-center gap-2 p-2">
                <h4 className="text-3xl md:text-2xl font-semibold mother-nature-card-title">
                  Home Essentials
                </h4>
                <p className="text-gray-800 text-lg md:text-center underline-on-hover mother-nature-card-text">
                  Feminine Grace in Sustainable Threads
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-20">
        <GreenThreads />
      </div> */}
    </div>
  );
};

export default MotherNature;
