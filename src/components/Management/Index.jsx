import React from "react";

import management from "../../media/images/management-img.png";
import "./style.css";

export default function Management() {
  return (
    <div className="management container">
      <div className="management--left">
        <h5 className="font-size_1626">Effortless Validation for</h5>
        <h3 className="font-size_3248">Management</h3>
        <p className="font-size_1626">
          The Myspace page defines the individual, his or her characteristics,
          traits, personal choices and the overall personality of the person.
        </p>
        <h6 className="font-size_1626">Accessory makers</h6>
        <p className="font-size_1626">
          While most people enjoy casino gambling, sports betting, lottery and
          bingo playing for the fun
        </p>
        <h6 className="font-size_1626">Alterationists</h6>
        <p className="font-size_1626">
          If you are looking for a new way to promote your business that won’t
          cost you more money,
        </p>
      </div>
      <div className="management--right">
        <img src={management} alt="management-bg" />
      </div>
    </div>
  );
}
