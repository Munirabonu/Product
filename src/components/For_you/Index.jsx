import React from "react";

import { card } from "../../utils/card";
import "./style.css";

export default function ForYou() {
  
  return (
    <div className="wrap">
      <div className="for_you container">
        <h1 className="title font-size_3248">
          Product was Built Specifically for You
        </h1>
        <div className="card_con">
          {card?.map(({ id, text, title, icon }) => {
            return (
              <div className="card_item" key={id}>
                <div className="icon_wrap">{icon}</div>
                <div className="card_title font-size_2233">{title}</div>
                <div className="card_text font-size_1626">{text}</div>
              </div>
            );
          })}
        </div>
        <button className="btn sign-up--btn font-size_1626">SIGN UP NOW</button>
      </div>
    </div>
  );
}
