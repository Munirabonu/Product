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
        <h1 className="font-size_3248">Quick & Easy Process</h1>
        <p className="font-size_1626">
          Do you require some help for your project: Conception workshop,
          <br />
          prototyping, marketing strategy, landing page, Ux/UI?
        </p>
        <div className="cards">
          <div className="cards_col">
            <div className="card_item">
              <img src={pitch} alt="" />
              <p className="font-size_1626">I can take care of your pitch</p>
            </div>
            <div className="card_item">
              <p className="font-size_1626">I can design you website</p>
              <img src={design} alt="" />
            </div>
          </div>

          <div className="cards_col">
            <div className="card_item">
              <p className="font-size_1626">I can prototype your app</p>
              <img src={app} alt="" />
            </div>
            <div className="card_item">
              <img src={web} alt="" />
              <p className="font-size_1626">I can help marketing strategy</p>
            </div>
          </div>
        </div>

        <button className="btn process__btn">Contact our expert</button>
      </div>
    </div>
  );
}
