import React from "react";

import "./style.css"
import chart from "../../media/images/chart.png";

export default function Join() {
  return (
    <div className="join">
      <div className="join-left">
        <h2 className="join--title font-size_3248">
          Join 100 Compannies who boost their business with Product
        </h2>
        <button className="join--btn">Get This</button>
      </div>
      <div className="join-right">
        <img src={chart} alt="" />
      </div>
    </div>
  );
}
