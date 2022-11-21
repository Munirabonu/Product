import React from "react";

import "./style.css";
import { price } from "../../utils/price";

export default function Price() {
  return (
    <div className="price_wrap container">
      <div className="title_wrap">
      <h1 className="font-size_3248">Price Table</h1>
      <p className="text font-size_1626">We offer competitive price</p>
      </div>
      <div className="price_cards">
        {price?.map((item) => {
          return (
            <div className="price_card_item" key={item.id}>
              <p className="card_title font-size_2440">{item.title}</p>
              <p className="card_desc font-size_1626">{item?.desc}</p>
              <div className="per_wrap">
                <p className="per_price">{item?.price}</p>
                <div className="per_text">
                  <p className="per_status font-size_2233">$</p>
                  <p className="per_type font-size_1626">Per/month</p>
                </div>
              </div>
              <p className="card_add card_operators font-size_1626">{item?.operators} Operators</p>
              <p className="card_add font-size_1626">{item?.add_one}</p>
              <p className="card_add font-size_1626">{item?.add_two}</p>
              <button className="card_btn btn">Order Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
