import React from "react";
import "./CarComponents.scss";
import { FaShoppingCart, FaHeart, FaRandom, FaSearch } from "react-icons/fa";

const CarComponents = ({ car }) => {
  return (
    <div>
      <div className="product-grid">
        <div className="product-image">
          <a href="#">
            <img loading="lazy" className="pic-1" src={car.img} />
            <img loading="lazy" className="pic-2" src={car.img} />
          </a>
          <span className="product-trend-label">{car.trend}</span>
          <span className="product-discount-label">{car.discount}%</span>
          <ul className="social">
            <li>
              <a href="#" data-tip="Add to Cart">
                <FaShoppingCart />
              </a>
            </li>
            <li>
              <a href="#" data-tip="Wishlist">
                <FaHeart />
              </a>
            </li>
            <li>
              <a href="#" data-tip="Compare">
                <FaRandom />
              </a>
            </li>
            <li>
              <a href="#" data-tip="Quick View">
                <FaSearch />
              </a>
            </li>
          </ul>
        </div>
        <div className="product-content">
          <h2>{car.name}</h2>
          <h3 className="title">
            <a href="#">per day</a>
          </h3>
          <div className="price discount">
            <span>${car.price}</span> ${car.priceDiscount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarComponents;
