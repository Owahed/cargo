import React from "react";
import "./ContainerForm.scss";

const ContainerForm = () => {
  return (
    <div className="container-form">
      <div class="container">
        <form>
          <ul>
            <li>
              <label htmlFor="name">
                <span>
                  Name <span class="required-star">*</span>
                </span>
              </label>
              <input type="text" id="name" name="user_name" />
            </li>
            <li>
              <label htmlFor="mail">
                <span>
                  Email <span class="required-star">*</span>
                </span>
              </label>
              <input type="email" id="mail" name="user_email" />
            </li>
            <li>
              <label htmlFor="msg">
                <span>Message</span>
              </label>
              <textarea rows="4" cols="50"></textarea>
            </li>
            <li>
              <input type="submit" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default ContainerForm;
