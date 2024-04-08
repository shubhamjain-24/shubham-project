import React from "react";
import AboutHead from "../../components/about/AboutHead";
import Footer from "../../components/Footer/Footer";
import LearnMore from "../../components/Learnmore/LearnMore";
import Whyhemp from "../../components/WhyHemp/Whyhemp";
import Categories from "../../components/Categories/Categories";
import BlogSection from "../../components/BlogSection/BlogSection";

const Home = () => {
  return (
    <>
      <AboutHead />
      <Categories />
      <LearnMore />
      <Whyhemp />
      <BlogSection />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
