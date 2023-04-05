import React from "react";
import NavigateHeader from "../components/NavigateHeader/NavigateHeader";
import Testimonials from "../components/Testimonials/Testimonials";
import CarAbout from "../components/CarAbout/CarAbout";
import CallToBook from "../components/CallToBook/CallToBook";
import Footer from "../components/Footer/Footer";

const TestimonialsPage = () => {
  return (
    <div>
      <NavigateHeader text={"Testimonials"} />
      <Testimonials />
      <CarAbout />
      <CallToBook />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
