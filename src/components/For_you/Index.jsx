import React from "react";

import {
  FirstClickTest,
  PreferenceTest,
  DesignSurveys,
  FiveSecondTest,
} from "../../media/icons";
import "./style.css";

export default function ForYou() {
  const card = [
    {
      id: 1,
      icon: <FirstClickTest />,
      title: "First click tests",
      text: "While most people enjoy casino gambling,",
    },
    {
      id: 2,
      icon: <PreferenceTest />,
      title: "Design surveys",
      text: "Sports betting, lottery and bingo playing for the fun",
    },
    {
      id: 3,
      icon: <DesignSurveys />,
      title: "Preference tests",
      text: "The Myspace page defines the individual.",
    },
    {
      id: 4,
      icon: <FiveSecondTest />,
      title: "Five second tests",
      text: "Personal choices and the overall personality of the person. ",
    },
  ];

  return (
    <div className="wrap">
      <div className="for_you container">
        <h1 className="title font-size_3248">
          Product was Built Specifically for You
        </h1>
        <div className="card_con">
          {card?.map(({ id, text, title, icon }) => {
            return (
              <div className="card_item" key={id}>
                <div className="icon_wrap">{icon}</div>
                <div className="card_title font-size_2233">{title}</div>
                <div className="card_text font-size_1626">{text}</div>
              </div>
            );
          })}
        </div>
        <button className="btn sign-up--btn font-size_1626">SIGN UP NOW</button>
      </div>
    </div>
  );
}
