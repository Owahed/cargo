import React from "react";
import NavigateHeader from "../components/NavigateHeader/NavigateHeader";
import CarAbout from "../components/CarAbout/CarAbout";
import TripPlan from "../components/tripPlan/TripPlan";
import Poster from "../components/poster/Poster";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import CallToBook from "../components/CallToBook/CallToBook";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <NavigateHeader text={"About"} />
      <CarAbout />
      <TripPlan text={"How It Works"} />
      <Poster />
      <ChooseUs />
      <Testimonials />
      <CallToBook />
      <Footer />
    </>
  );
};

export default About;
