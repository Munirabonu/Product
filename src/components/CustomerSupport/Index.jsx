import React from "react";

import "./style.css";
import customer from "../../media/customer-support.png";
import {
  OrangeCheckedIcon,
  RedCheckedIcon,
  BlueCheckedIcon,
} from "../../media/icons";
export default function CustomerSupport() {
  const customerData = [
    {
      id: 1,
      icon: <OrangeCheckedIcon />,
      text: "Never worry about overpaying for your energy again. ",
    },
    {
      id: 2,
      icon: <RedCheckedIcon />,
      text: "We will only switch you to energy companies that we trust and will treat you right",
    },
    {
      id: 3,
      icon: <BlueCheckedIcon />,
      text: "We track the markets daily and know where the savings are.",
    },
  ];
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
