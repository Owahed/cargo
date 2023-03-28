import "./Testimonials.scss";
import user from "../../Img/user.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <div>
      <div className="elementor-container tes-section">
        <div className="tes-text-section ">
          <h3>Reviewed by People</h3>
          <h1>Clients' Testimonials</h1>
          <p>
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed.
          </p>
        </div>
        <div className="slider">
          <>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-slide">
                <div>
                  <h3>
                    "The rem value is the same as the em value displayed above.
                    Both units are scalable."
                  </h3>
                  <div className="tes-user">
                    <img src={user} alt="" />
                    <div>
                      <h4>Kimberly Garcia</h4>
                      <h6>Boston Area</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div>
                  <h3>
                    "The rem value is the same as the em value displayed above.
                    Both units are scalable."
                  </h3>
                  <div className="tes-user">
                    <img src={user} alt="" />
                    <div>
                      <h4>Kimberly Garcia</h4>
                      <h6>Boston Area</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div>
                  <h3>
                    "The rem value is the same as the em value displayed above.
                    Both units are scalable."
                  </h3>
                  <div className="tes-user">
                    <img src={user} alt="" />
                    <div>
                      <h4>Kimberly Garcia</h4>
                      <h6>Boston Area</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide> */}
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
