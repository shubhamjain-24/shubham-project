import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About/AboutUs";
import Blogs from "./Pages/Blogs/Blogs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} path="/" index/>
          <Route element={<AboutUs />} path="/about" />
          <Route element={<Blogs />} path="/blog" />
        </Route>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
