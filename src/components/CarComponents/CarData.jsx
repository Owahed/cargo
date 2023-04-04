import React from "react";
import CarsData from "./AllCarData";
import CarComponents from "./CarComponents";
import "./CarData.scss";

const CarData = () => {
  return (
    <div className="car-data elementor-container">
      {CarsData.map((car, i) => (
        <CarComponents key={i + 1} car={car} />
      ))}
    </div>
  );
};

export default CarData;
