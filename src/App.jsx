import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About/AboutUs";
import Blogs from "./Pages/Blogs/Blogs";
import BlogPage from "./Pages/Blogs/BlogPage/BlogPage";
import Blogpage2 from "./Pages/Blogs/BlogPage2/Blogpage2";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Layout from "./Layout";
import Shop from './Pages/Shop/Shop'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} path="/" index />
          <Route element={<AboutUs />} path="/about" />
          <Route element={<Blogs />} path="/blog" />
          <Route element={<BlogPage />} path="/blogpage" />
          <Route element={<Blogpage2 />} path="/blogpage2" />
          <Route element={<ContactUs />} path="/contactus"></Route>
          <Route element={<Shop />} path="/shop"></Route>
        </Route>
       
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
