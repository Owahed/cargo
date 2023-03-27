import React from "react";
import AllCar from "../../Img/display_car_image-1024x449.png";
import drive from "../../Img/icon/drive.png";
import charge from "../../Img/icon/charge.png";
import price from "../../Img/icon/price.png";
import "./ChooseUs.scss";

const ChooseUs = () => {
  return (
    <div className="choose-us">
      <div className="elementor-container choose-us-section">
        <div>
          <img src={AllCar} alt="" />
        </div>
        <div className="choose-us-content">
          <div>
            <h3>Why Choose Us</h3>
            <h1>Best valued deals you will ever find</h1>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <button className="button-color">Find Deals</button>
          </div>
          <div>
            <div>
              <img src={drive} alt="" />
              <div>
                <h3>Cross Country Drive</h3>
                <p>
                  Speedily say has suitable disposal add boy. On forth doubt
                  miles of child. Exercise joy man children rejoiced.
                </p>
              </div>
            </div>
            <div>
              <img src={price} alt="" />
              <div>
                <h3>All Inclusive Pricing</h3>
                <p>
                  Yet uncommonly his ten who diminution astonished. Demesne new
                  manners savings staying had,
                </p>
              </div>
            </div>
            <div>
              <img src={charge} alt="" />
              <div>
                <h3>No Hidden Charges</h3>
                <p>
                  Under folly balls death own point now men. Match way these she
                  avoid see. She whose drift their fat off. d.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
