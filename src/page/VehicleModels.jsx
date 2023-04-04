import React from "react";
import NavigateHeader from "../components/NavigateHeader/NavigateHeader";
import CarData from "../components/CarComponents/CarData";
import Poster from "../components/poster/Poster";
import TripPlan from "../components/tripPlan/TripPlan";
import CallToBook from "../components/CallToBook/CallToBook";
import Footer from "../components/Footer/Footer";

const VehicleModels = () => {
  return (
    <div>
      <NavigateHeader text={"Vehicle Models"} />
      <CarData />
      <Poster />
      <TripPlan text={"How It Works"} />
      <CallToBook />
      <Footer />
    </div>
  );
};

export default VehicleModels;
