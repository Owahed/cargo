import React from "react";
import "./NavigateHeader.scss";

const NavigateHeader = ({ text }) => {
  return (
    <div className="nav-header">
      <div className="navigate-img"></div>
      <div className="elementor-container nav-header-section">
        <h1>{text}</h1>
        <h4>Home / {text}</h4>
      </div>
    </div>
  );
};

export default NavigateHeader;
