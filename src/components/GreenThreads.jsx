import React from "react";
import img from "../asset/thread.png";
import { FaArrowRightLong } from "react-icons/fa6";

const GreenThreads = () => {
  return (
    <div className=" w-full h-full">
      <div className="flex justify-center mt-5 flex-col items-center gap-7">
        <h1 className="text-[#5c5c5c] font-bold text-4xl">GREEN THREADS</h1>
        <p className="text-[#985b2f] lg:text-2xl text-xl text-center">
          <i>"UNVEILING TANTUKOSH'S SUSTAINABLE STYLE CHRONICLES"</i>
        </p>
      </div>
      <div className="mt-20 flex lg:flex-row justify-between flex-col">
        <div className="lg:w-2/3 w-full h-full flex-col flex gap-10">
          <div className="w-full h-full bg-white rounded-2xl flex lg:flex-row flex-col p-5 justify-between gap-10">
            <div className="lg:w-2/5 w-full min-h-full">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="lg:w-3/5 w-full text-center lg:text-start flex flex-col justify-between p-10 pl-0 pr-0 h-full">
              <div className="flex flex-col gap-5">
                <p className="lg:text-4xl text-2xl text-[#5c5c5c]">
                  SUSTAINABLE FASHION: THE INS AND OUTS OF CLOTHES RECYCLING
                </p>
                <p className="text-[#985b2f] lg:text-2xl text-lg lg:mt-0 mt-5">
                  Would you like to live a zero-waste, sustainable life? Well,
                  here are some bite-sized <u>recycling facts</u> for you. Did
                  you know that in the US alone, more than 16.9 million
                  tons......
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button className="lg:text-3xl text-lg font-thin flex gap-3 items-center justify-center flex-row mt-10">
                  Read more <FaArrowRightLong className="lg:text-2xl text-lg"/>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-full bg-white rounded-2xl flex lg:flex-row flex-col p-5 justify-between gap-10">
            <div className="lg:w-2/5 w-full min-h-full">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="lg:w-3/5 w-full text-center lg:text-start flex flex-col justify-between p-10 pl-0 pr-0 h-full">
              <div className="flex flex-col gap-5">
                <p className="lg:text-4xl text-2xl text-[#5c5c5c]">
                  SUSTAINABLE FASHION: THE INS AND OUTS OF CLOTHES RECYCLING
                </p>
                <p className="text-[#985b2f] lg:text-2xl text-lg lg:mt-0 mt-5">
                  Would you like to live a zero-waste, sustainable life? Well,
                  here are some bite-sized <u>recycling facts</u> for you. Did
                  you know that in the US alone, more than 16.9 million
                  tons......
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <button className="lg:text-3xl text-lg font-thin flex gap-3 items-center justify-center flex-row mt-10">
                  Read more <FaArrowRightLong className="lg:text-2xl text-lg"/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/5 w-full mt-10 lg:mt-0 min-h-full  flex items-center justify-center p-3 place-content-center ">
          <div className="flex flex-col gap-10 h-fit w-full">
            <p className="lg:text-4xl text-2xl text-center font-semibold text-[#5c5c5c]">
              FASHION WITH A PURPOSE: READ OUR BLOGS
            </p>
            <button className="p-5 border border-black w-full rounded-2xl text-3xl font-thin pt-2 pb-2 ">
              BLOGS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenThreads;
