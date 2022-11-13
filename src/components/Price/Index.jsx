import React from "react";
import "./style.css";

import { price } from "../../utils/price";
export default function Price() {
  return (
    <div className="price_wrap container">
      <div className="price_cards">
        {price?.map((item) => {
          return (
            <div className="price_card_item">
              <p className="card_title">{item.title}</p>
              <p className="card_desc">{item?.desc}</p>
              <div className="per_wrap">
                <p className="per_price">{item?.price}</p>
                <div className="per_text">
                  <p className="per_status">$</p>
                  <p className="per_type">Per/month</p>
                </div>
              </div>
              <p className="card_operators">{item?.operators}</p>
              <p className="card_add_one">{item?.add_one}</p>
              <p className="card_add_one">{item?.add_two}</p>
              <button className="card_btn">Order Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}