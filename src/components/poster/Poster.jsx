import React from "react";
import "./Poster.scss";

const Poster = () => {
  return (
    <div className="poster">
      {/* <div></div> */}
      <div className="poster-section-bg-img"></div>

      <div className="elementor-container poster-text">
        <div>
          <h1>Save big with our cheap car rental!</h1>
          <h4>Top Airports. Local Suppliers. 24/7 Support.</h4>
        </div>
        <div>
          <button className="button-color">Book Right</button>
        </div>
      </div>
    </div>
  );
};

export default Poster;
