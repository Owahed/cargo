import React from "react";
import "./DownloadApp.scss";
import GooglePlay from "../../Img/google-app-download.svg";
import AppStore from "../../Img/ios-app-btn.svg";

const DownloadApp = () => {
  return (
    <div className="download-app">
      <div className="download-app-components">
        <div className="elementor-container d-a-text">
          <div className="d-a-content">
            <h1>Download our app to get most out of it</h1>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div>
              <img src={GooglePlay} alt="" />
              <img src={AppStore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
