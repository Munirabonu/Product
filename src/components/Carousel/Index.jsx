import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { imageData } from "../../utils/car";
import Card from "../Card/Index";
import "./style.css";
const items = imageData.map(({ id, img, by, date, text }) => {
  return <Card id={id} img={img} by={by} date={date} text={text} />;
});

const Carousel = () => {
  return (
    <div className="car container">
      <h1 className="font-size_3451">Contents Strategies</h1>
      <p className="font-size_1626">We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
      <AliceCarousel
        autoPlay
        autoPlayInterval={1500}
        mouseTracking
        infinite
        disableButtonsControls
        items={items}
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }}
      />
    </div>
  );
};
export default Carousel;
