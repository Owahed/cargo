import React, { useState } from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState(false);
  return (
    <div className="navbar-section elementor-container">
      <nav className={value ? "navbar-content  height" : "navbar-content  "}>
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

          <NavLink to="about">About </NavLink>

          <a href="/about">Vehicle Models</a>
          <a href="#">Testimonials</a>
          <a href="/"> Our team</a>
          <a href="#">Contact</a>
        </div>

        <div className={value ? "login-bar" : "login-bar active"}>
          <a href="#">Sign in </a>
          <a href="#">Register</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
