import React from "react";
import "./Footer.scss";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="elementor-container ">
        <div className="footer-section">
          <div className="footer-carro">
            <h2>CAR-RO</h2>
            <p>
              Use securing confined his shutters. Delightful as he it acceptance
              an solicitude discretion.
            </p>

            <a href="#">
              <IoIosCall size={25} />
              <span>(123) 498-4600</span>
            </a>

            <a href="#">
              <MdEmail size={25} />
              <span>example@carrental.com</span>
            </a>
          </div>
          <div className="footer-company">
            <h2>COMPANY</h2>
            <li>
              <a href="#">New York</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">How we work</a>
            </li>
          </div>
          <div className="footer-working-hours">
            <h2>WORKING HOURS</h2>
            <li>
              <span className="p">Mon - Fri: </span> 09:00AM - 09:00PM
            </li>
            <li>
              <span className="p">Sat: </span> 09:00AM - 07:00PM
            </li>
            <li>
              <span className="p">Sun: </span> Closed
            </li>
          </div>
          <div className="footer-subscription">
            <h2>SUBSCRIPTION</h2>
            <p>Subscribe your Email address for latest news & updates.</p>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Enter Email Address"
              required
            />
            <button className="button-color">Submit</button>
          </div>
        </div>
        <div className="footer-icon">
          <p>
            ©{new Date().getFullYear()} <span>Car-ro.</span>All Rights Reserved
          </p>
          <div className="footerIcons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
