import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { imageData } from "../../utils/car";
import Card from "../Card/Index";

const items = imageData.map(({ id, img, by,date, text }) => {
  return <Card id={id} img={img} by={by} date={date} text={text} />;
});


const Car = () => {
  return (
    <div className="container">
      <AliceCarousel
        items={items}
        arrows={false}
        mouseTracking
        mouseDragEnabled
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
export default Car;
