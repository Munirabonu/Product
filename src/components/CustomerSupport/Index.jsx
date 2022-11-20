import React from "react";

import { customerData } from "../../utils/customerData";

import customer from "../../media/images/customer-support.png";
import "./style.css";

export default function CustomerSupport() {
  return (
    <div className="customer-support container">
      <div className="customer-support__left">
        <img src={customer} alt="customer-bg" />
      </div>
      <div className="customer-support__right">
        <h5 className="font-size_1626">Easier decision making for</h5>
        <h3 className="font-size_3248">Customer Support</h3>
        <p className="customer-support__text font-size_1626">
          The Myspace page defines the individual, his or her characteristics,
          traits, personal choices and the overall personality of the person.
        </p>
        <div className="customer-support__map">
          {customerData?.map(({ id, icon, text }) => (
            <div className="customer-support__map--item" key={id}>
              <div className="item__icon">{ icon}</div>
              <p className="item__text font-size_1626">{ text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
