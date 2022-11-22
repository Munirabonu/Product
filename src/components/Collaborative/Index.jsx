import React from "react";

import collaborative from "../../media/images/collaborative-img.png";
import "./style.css";

export default function Collaborative() {
  return (
    <div className="collaborative container">
      <div className="collaborative--left">
        <h5 className="font-size_1626">Optimisation for</h5>
        <h3 className="font-size_3248">Collaborative</h3>
        <p className="font-size_1626">
          Few would argue that, despite the advancements of feminism over the
          past three decades, women still face a double standard when it comes
          to their behavior.
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
      <div className="collaborative--right">
        <img src={collaborative} alt="collaborative-bg" />
      </div>
    </div>
  );
}
