import React from "react";

import pitch from  "../../media/images/pitch.png";
import design from "../../media/images/design.png";
import app from "../../media/images/app.png";
import web from "../../media/images/web.png";

import "./style.css";
export default function Process() {
  return (
    <div className="process">
      <div className="container">
        <h1>Quick & Easy Process</h1>
        <p>
          Do you require some help for your project: Conception workshop,
          prototyping, marketing strategy, landing page, Ux/UI?
        </p>
        <div className="cards">

        <div className="cards_col">
          <div className="card_item">
              <img src={pitch} alt="" />
            <p>I can take care of your pitch</p>
          </div>
          <div className="card_item right">
            <p>I can take care of your pitch</p>
              <img src={design} alt="" />
          </div>
        </div>
        
        <div className="cards_col">
          <div className="card_item">
              <img src={app} alt="" />
            <p>I can take care of your pitch</p>
          </div>
          <div className="card_item right">
            <p>I can take care of your pitch</p>
              <img src={web} alt="" />
          </div>
        </div>
        </div>

        <button className="btn">Contact our expert</button>
      </div>
    </div>
  );
}
