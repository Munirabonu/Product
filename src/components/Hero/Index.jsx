import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import hero from "../../media/images/hero.png";
import { TriangleOfWatchVideo } from "../../media/icons";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-left">
        <h1>Work at the speed of thought</h1>
        <p>
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div className="hero__btn-group">
          <button className="btn font-size_1626">
            Get started
          </button>
          <Link className="watch-video font-size_1626">
            <TriangleOfWatchVideo />
            Watch the Video
          </Link>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="hero-bg" />
      </div>
    </div>
  );
}
