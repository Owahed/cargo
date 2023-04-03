import React from "react";
import Booking from "../components/booking/Booking";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/navbar/navbar";
import Rental from "../components/rental/Rental";
import TripPlan from "../components/tripPlan/TripPlan";
import CarAbout from "../components/CarAbout/CarAbout";
import Poster from "../components/poster/Poster";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import DownloadApp from "../components/DownloadApp/DownloadApp";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <Booking />
      <TripPlan text={"Plan your trip now"} />
      <Rental />
      <CarAbout />
      <Poster />
      <ChooseUs />
      <Testimonials />
      <FAQ />
      <DownloadApp />
      <Footer />
    </>
  );
};

export default Home;
