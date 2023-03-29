import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [value, setValue] = useState(false);
  return (
    <div className="navbar-section elementor-container">
      <div className={value ? "navbar-content  height" : "navbar-content  "}>
        <div>
          <span>CAR-RO</span>
        </div>
        <div onClick={() => setValue(!value)} className="nav-toggle ">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={value ? "navbar-name" : "navbar-name active"}>
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="/">Vehicle Models</a>
          <a href="#">Testimonials</a>
          <a href="/"> Our team</a>
          <a href="#">Contact</a>
        </div>

        <div className={value ? "login-bar" : "login-bar active"}>
          <a href="#">Sign in </a>
          <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
