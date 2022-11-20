import React from "react";

import "./style.css";
import { StarColored, StarUnColored } from "../../media/icons";
import { clientData } from "../../utils/clientData";

export default function ClientFeedback() {
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
            <div className="client-feedback__map--item" key={id}>
              <div className="star-box">
                <StarColored />
                <StarColored />
                <StarColored />
                <StarColored />
                <StarUnColored />
              </div>
              <p className="font-size_1626">
                {text}
              </p>
              <div className="client-info__box">
                <img src={clientImg} alt="client" />
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
