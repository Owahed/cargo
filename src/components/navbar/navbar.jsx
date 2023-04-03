import React, { useState } from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [value, setValue] = useState(false);
  return (
    <div className="navbar-section elementor-container">
      <nav className={value ? "navbar-content  height" : "navbar-content  "}>
        <div>
          <Link className="navbar-logo" to="/">
            CAR-GO
          </Link>
        </div>
        <div onClick={() => setValue(!value)} className="nav-toggle ">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={value ? "navbar-name" : "navbar-name active"}>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "var(--orange)" : "var(--black)",
            })}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "var(--orange)" : "var(--black)",
            })}
            to="about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "var(--orange)" : "var(--black)",
            })}
            to="vehicle-models"
          >
            Vehicle Models
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "var(--orange)" : "var(--black)",
            })}
            to="testimonials"
          >
            Testimonials
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "var(--orange)" : "var(--black)",
            })}
            to="our-team"
          >
            Our team
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "var(--orange)" : "var(--black)",
            })}
            to="contact"
          >
            Contact
          </NavLink>
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
