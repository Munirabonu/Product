import React from "react";

import "./style.css";
import { StarColored, StarUnColored } from "../../media/icons";
import clientOne from "../../media/client-one.png";
import clientTwo from "../../media/client-two.png";
import clientThree from "../../media/client-three.png";

export default function ClientFeedback() {
  const clientData = [
    {
      id: 1,
      text: "Product helps you see how many more days you need to work to reach your financial goal.",
      clientImg: clientOne,
      clientNickname: "Wahid Ari",
      clientJob: "Designer",
    },
    {
      id: 2,
      text: "Product helps you see how many more days you need to work to reach your financial goal.",
      clientImg: clientTwo,
      clientNickname: "Wahid Ari",
      clientJob: "Designer",
    },
    {
      id: 3,
      text: "Product helps you see how many more days you need to work to reach your financial goal.",
      clientImg: clientThree,
      clientNickname: "Wahid Ari",
      clientJob: "Designer",
    },
  ];
  return (
    <div className="client-feedback container">
      <h1 className="font-size_3451">What Clients Say</h1>
      <p className="client-feedback__text">
        Problems trying to resolve the conflict between <br /> the two major
        realms of Classical physics: Newtonian mechanics
      </p>
      <div className="client-feedback__map">
        {clientData?.map(
          ({ id, text, clientImg, clientNickname, clientJob }) => (
            <div className="client-feedback__map--item">
              <div className="star-box">
                <StarColored />
                <StarColored />
                <StarColored />
                <StarColored />
                <StarUnColored />
              </div>
              <p>
                Product helps you see how many more days you need to work to
                reach your financial goal.
              </p>
              <div className="client-info__box">
                <img src={clientImg} alt="" />
                <div className="client-name__box">
                  <h5>{clientNickname}</h5>
                  <h6>{clientJob}</h6>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
