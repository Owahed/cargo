import React from "react";
import Team from "../components/Team/Team";
import NavigateHeader from "../components/NavigateHeader/NavigateHeader";
import Testimonials from "../components/Testimonials/Testimonials";
import CallToBook from "../components/CallToBook/CallToBook";
import Footer from "../components/Footer/Footer";

const OurTeam = () => {
  return (
    <div>
      <NavigateHeader text={"Our Team"} />
      <Team />
      <Testimonials />
      <CallToBook />
      <Footer />
    </div>
  );
};

export default OurTeam;
