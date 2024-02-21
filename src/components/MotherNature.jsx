import React, { useState } from "react";
import mother1 from "../asset/mother1.png";
import mother2 from "../asset/mother2.png";
import mother3 from "../asset/mother3.png";
import GreenThreads from "./GreenThreads";

const MotherNature = () => {
  const [firsttintOpen, setFirstTintOpen] = useState(false);
  const [secondtintOpen, setSecondintOpen] = useState(false);
  const [thirdtintOpen, setThirdTintOpen] = useState(false);

  const handleFirstMouseHoverEnter = (e) => {
    setFirstTintOpen(true);
  };

  const handleFirstMouseHoverExit = (e) => {
    setFirstTintOpen(false);
  };

  const handleSecondMouseHoverEnter = (e) => {
    setSecondintOpen(true);
  };

  const handleSecondMouseHoverExit = (e) => {
    setSecondintOpen(false);
  };

  const handleThirdMouseHoverEnter = (e) => {
    setThirdTintOpen(true);
  };

  const handleThirdMouseHoverExit = (e) => {
    setThirdTintOpen(false);
  };
  return (
    <div className="w-full h-full lg:p-20 p-10 flex flex-col flex-wrap ">
      <div className="w-full h-full ">
        <div className="flex justify-center">
          <h1 className="lg:text-4xl text-2xl font-semibold text-gray-600 text-center">
            Wear the Beauty of Mother Nature
          </h1>
        </div>

        <div className="flex justify-center w-full h-full">
          <div className="flex justify-between gap-5 lg:mt-20 mt-10 flex-wrap md:flex-nowrap h-full w-full lg:max-w-[1200px] max-w-full">
            <div
              className="drop-shadow-xl h-full lg:w-1/3 w-full md:w-1/2 bg-white  cursor-pointer"
              onMouseEnter={handleFirstMouseHoverEnter}
              onMouseLeave={handleFirstMouseHoverExit}
            >
              <div className="w-full h-full p-2  ">
                <div className="relative cursor-pointer overflow-hidden">
                  <img
                    src={mother1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {firsttintOpen ? (
                    <div className="h-full w-full ">
                      <div className="absolute backdrop-brightness-0 h-full w-full top-0 opacity-30 right-0 rounded-b-none overflow-hidden cursor-pointer " />
                      <div className="w-full h-1/2 absolute flex justify-center items-center bottom-0 right-0 p-10 md:bottom-8 lg:bottom-0">
                        <p className="text-2xl lg:text-2xl md:text-base text-center text-white font-thin">
                          Discover eco-chic attire, embodying strength, grace,
                          and sustainable elegance for women.
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mt-1 flex justify-center flex-col items-center gap-2 p-2">
                <h4 className="text-3xl md:text-2xl  font-semibold">WOMEN</h4>
                <p className="text-gray-800 text-lg md:text-center">
                  Feminine Grace in Sustainable Threads
                </p>
              </div>
            </div>
            <div
              className="drop-shadow-xl h-full lg:w-1/3 w-full md:w-1/2 bg-white  cursor-pointer"
              onMouseEnter={handleSecondMouseHoverEnter}
              onMouseLeave={handleSecondMouseHoverExit}
            >
              <div className="w-full h-full p-2  ">
                <div className="relative cursor-pointer">
                  <img
                    src={mother2}
                    alt=""
                    className="w-full h-full object-cover  "
                  />
                  {secondtintOpen ? (
                    <div className="h-full w-full">
                      <div className="absolute backdrop-brightness-0 h-full w-full top-0 right-0  opacity-30 rounded-b-none overflow-hidden cursor-pointer " />
                      <div className="w-full h-1/2 absolute flex justify-center items-center bottom-0 right-0 p-5 md:bottom-8 lg:bottom-0">
                        <p className="text-2xl lg:text-2xl md:text-base text-center text-white font-thin">
                          Explore sustainable menswear, uniting style, comfort,
                          and eco-friendly craftsmanship in every garment
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mt-1 flex justify-center flex-col items-center gap-2 p-2">
                <h4 className="text-3xl md:text-2xl font-semibold">MEN</h4>
                <p className="text-gray-800 text-lg md:text-center">
                  Refined style in Natural Fibers
                </p>
              </div>
            </div>
            <div
              className="drop-shadow-xl h-full lg:w-1/3 w-full md:w-1/2 bg-white  cursor-pointer"
              onMouseEnter={handleThirdMouseHoverEnter}
              onMouseLeave={handleThirdMouseHoverExit}
            >
              <div className="w-full h-full p-2  ">
                <div className="relative cursor-pointer">
                  <img
                    src={mother3}
                    alt=""
                    className="w-full h-full object-cover  "
                  />
                  {thirdtintOpen ? (
                    <div className="h-full w-full">
                      <div className="absolute backdrop-brightness-0 h-full w-full top-0 right-0  opacity-30 rounded-b-none overflow-hidden cursor-pointer " />
                      <div className="w-full h-1/2 absolute flex justify-center items-center bottom-0 right-0 p-10 md:bottom-8 lg:bottom-0">
                        <p className="text-2xl lg:text-2xl md:text-base text-center text-white font-thin">
                          Discover eco-chic attire, embodying strength, grace,
                          and sustainable elegance for women.
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="mt-1 flex justify-center flex-col items-center gap-2 p-2">
                <h4 className="text-3xl md:text-2xl font-semibold">
                  Home Essentials
                </h4>
                <p className="text-gray-800 text-lg md:text-center">
                  Feminine Grace in Sustainable Threads
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <GreenThreads />
      </div>
    </div>
  );
};

export default MotherNature;
