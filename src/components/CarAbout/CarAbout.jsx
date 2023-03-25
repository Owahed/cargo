import React from "react";
import "./CarAbout.scss";
import ImageOne from "../../Img/about_image.jpg";
import { TbBrandYoutube } from "react-icons/tb";

const CarAbout = () => {
  return (
    <div className="car-about">
      <div className="elementor-container car-about-section">
        <div className="car-about-img">
          <img src={ImageOne} alt="" />
          <a href="https://www.youtube.com/watch?v=a2S6JMgjPmI" target="_blank">
            <TbBrandYoutube size={200} />
          </a>
        </div>
        <div>
          <h3>About Company</h3>
          <h1>You start the engine and your adventure begins</h1>
          <p>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <hr />
          <div>
            <div>
              <img
                src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/transportation.png"
                alt=""
              />
              <div>
                <span>20</span>
                <span>Car Types</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarAbout;
