import React from "react";
import "./CarAbout.scss";
import ImageOne from "../../Img/about_image.jpg";
import { TbBrandYoutube } from "react-icons/tb";
import car from "../../Img/icon/transportation.png";
import parking from "../../Img/icon/parking.png";
import carTwo from "../../Img/icon/car.png";
import CountUp from "react-countup";

const CarAbout = () => {
  return (
    <div className="car-about">
      <div className="elementor-container car-about-section">
        <div className="car-about-img">
          <img src={ImageOne} alt="" />
          <a href="https://www.youtube.com/watch?v=a2S6JMgjPmI" target="_blank">
            <TbBrandYoutube className="icon-youtube-one" size={200} />
          </a>
        </div>
        <div className="car-about-text">
          <h3>About Company</h3>
          <h1>You start the engine and your adventure begins</h1>
          <p>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite is see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <hr />
          <div className="car-about-count">
            <div>
              <img src={car} alt="" />
              <div className="count-co">
                <CountUp enableScrollSpy={true} end={20} />
                <p>Car Types</p>
              </div>
            </div>
            <div>
              <img src={parking} alt="" />
              <div className="count-co">
                <CountUp enableScrollSpy={true} end={85} />
                <p>Car Types</p>
              </div>
            </div>
            <div>
              <img src={carTwo} alt="" />
              <div className="count-co">
                <CountUp enableScrollSpy={true} end={75} />
                <p>Car Types</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAbout;
