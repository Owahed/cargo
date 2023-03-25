import React from "react";
import "./Hero.scss";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-bg-img">
        <img
          src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/banner_image.png"
          alt=""
        />
      </div>
      <div className="hero-section elementor-container">
        <Fade left>
          <div className="hero-text">
            <h3>Plan your trip now</h3>
            <h2>
              Save <span>big</span> with our car rental
            </h2>
            <p>
              To contribute to positive change and achieve our sustainability{" "}
              goals with many extraordinary
            </p>
            <div className="hero-button">
              <button className="button-color ">
                Book Ride
                <span>
                  <AiFillCheckCircle />
                </span>
              </button>
              <button>
                Learn More
                <span>
                  <BsFillArrowRightCircleFill />
                </span>
              </button>
            </div>
          </div>
        </Fade>
        <div className="hero-img">
          <Fade right duration={2000}>
            <img
              src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/banner_car.png"
              alt=""
            />
          </Fade>
        </div>
      </div>
      {/* <div>
        <div className="hero-img"></div>
        <img
          src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/banner_car.png"
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Hero;
