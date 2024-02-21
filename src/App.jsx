import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MotherNature from "./components/MotherNature";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<MotherNature />} path="/mother-nature" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
