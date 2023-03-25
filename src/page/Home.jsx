import React from "react";
import Booking from "../components/booking/Booking";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/navbar/navbar";
import Rental from "../components/rental/Rental";
import TripPlan from "../components/tripPlan/TripPlan";
import CarAbout from "../components/CarAbout/CarAbout";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Booking />
      <TripPlan />
      <Rental />
      <CarAbout />
    </>
  );
};

export default Home;
