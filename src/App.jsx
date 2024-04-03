import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MotherNature from "./components/MotherNature";
import Layout from "./components/Layout";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import AboutUs from "./Pages/About/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} path="/" index/>
          <Route element={<AboutUs />} path="/about" />
        </Route>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
