import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import ErrorPage from "../page/ErrorPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Router;
