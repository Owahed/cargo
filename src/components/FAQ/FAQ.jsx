import React, { useEffect, useState } from "react";
import "./FAQ.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const FAQ = () => {
  const [textShowOne, setTextShowOne] = useState(true);
  const [textShowTwo, setTextShowTwo] = useState(false);

  const handelShow = (e) => {
    if (e === 1) {
      setTextShowOne(!textShowOne);
      setTextShowTwo(false);
    }
    if (e === 2) {
      setTextShowTwo(!textShowTwo);
      setTextShowOne(false);
    }
  };

  return (
    <div className="faq">
      <div className="elementor-container ">
        <div className="faq-text">
          <h3>FAQ</h3>
          <h1>Frequently Asked Questions</h1>
          <p>
            Use securing confined his shutters. Delightful as he it acceptance
            an solicitude discretion reasonably. Carriage we husbands advanced
            an perceive greatest.
          </p>
        </div>
        <div className="faq-nested-section">
          <div className="faq-nested-component">
            <div
              // onClick={() => setTextShowOne(!textShowOne)}
              onClick={() => handelShow(1)}
              className={
                textShowOne ? "button-color show" : "hide normal-button "
              }
            >
              <span>1. What is special about comparing rental car deals?</span>
              {!textShowOne && <MdOutlineKeyboardArrowDown size={25} />}
              {textShowOne && <MdOutlineKeyboardArrowUp size={25} />}
            </div>
            {textShowOne && (
              <span>
                <p>
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </p>
              </span>
            )}
          </div>
          <div className="faq-nested-component">
            <div
              // onClick={() => setTextShowTwo(!textShowTwo)}
              onClick={() => handelShow(2)}
              className={
                textShowTwo ? "button-color show" : "hide normal-button "
              }
            >
              <span>2. What is special about comparing rental car deals?</span>
              {!textShowTwo && <MdOutlineKeyboardArrowDown size={25} />}
              {textShowTwo && <MdOutlineKeyboardArrowUp size={25} />}
            </div>
            {textShowTwo && (
              <span>
                <p>
                  Use securing confined his shutters. Delightful as he it
                  acceptance an solicitude discretion reasonably. Carriage we
                  husbands advanced an perceive greatest. Totally dearest
                  expense on demesne ye he. Curiosity excellent commanded in me.
                  Unpleasing impression themselves to at assistance acceptance
                  my or.
                </p>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
