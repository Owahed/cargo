import React from "react";
import "./Booking.scss";
import { AiFillCar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const Booking = () => {
  return (
    <div className="booking">
      <div className="elementor-container ">
        <Fade bottom duration={3000}>
          <div className="booking-section">
            <h2>Book a car</h2>
            <div className="booking-bar">
              <div>
                <label htmlFor="cars">
                  <AiFillCar size={20} />
                  Select Your Car Type
                </label>

                <select id="cars" name="cars">
                  <option>Select your car type</option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div>
                <label htmlFor="carsPick">
                  <MdLocationOn size={20} />
                  Select Your Car Type
                </label>

                <select id="carsPick" name="carsPick">
                  <option value="volvo">
                    Santa Monica - 2102 Lincoln Blvd
                  </option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div>
                <label htmlFor="carsDrop">
                  <MdLocationOn size={20} />
                  Select Your Car Type
                </label>

                <select id="carsDrop" name="carsDrop">
                  <option value="volvo">
                    3669 Oliver Street Wedgwood Texas
                  </option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div>
                <label htmlFor="Pick">
                  <FaCalendarAlt size={20} />
                  Pick-up
                </label>

                <input type="date" id="Pick" name="Pick" />
              </div>
              <div>
                <label htmlFor="Drop">
                  <FaCalendarAlt size={20} />
                  Drop-of
                </label>

                <input type="date" id="Drop" name="Drop" />
              </div>
              <div>
                <button className="button-color " type="submit">
                  Search
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Booking;
