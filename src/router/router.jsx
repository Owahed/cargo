import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import ErrorPage from "../page/ErrorPage";
import VehicleModels from "../page/VehicleModels";
import TestimonialsPage from "../page/TestimonialsPage";
import OurTeam from "../page/OurTeam";
import Contact from "../page/Contact";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehicle-models" element={<VehicleModels />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default Router;
