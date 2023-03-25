import React from "react";
import Booking from "../components/booking/Booking";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/navbar/navbar";
import TripPlan from "../components/tripPlan/TripPlan";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Booking />
      <TripPlan />
    </>
  );
};

export default Home;
