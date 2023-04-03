import React from "react";
import "./CallToBook.scss";
import { IoIosCall } from "react-icons/io";

const CallToBook = () => {
  return (
    <div className="call-to-book">
      <div className="elementor-container call-to-book-section">
        <h2>Book a car by getting in touch with us</h2>
        <div>
          <span>
            {" "}
            <IoIosCall style={{ marginRight: "10px" }} size={17} /> Call to book
          </span>
          <h2>(562) 498-4600</h2>
        </div>
      </div>
    </div>
  );
};

export default CallToBook;
