import React from "react";
import Booking from "../components/booking/Booking";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/navbar/navbar";
import Rental from "../components/rental/Rental";
import TripPlan from "../components/tripPlan/TripPlan";
import CarAbout from "../components/CarAbout/CarAbout";
import Poster from "../components/poster/Poster";
import ChooseUs from "../components/ChooseUs/ChooseUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Booking />
      <TripPlan />
      <Rental />
      <CarAbout />
      <Poster />
      <ChooseUs />
    </>
  );
};

export default Home;
