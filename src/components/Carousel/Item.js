import React from "react";
import str1 from "../../media/images/str1.png";
import str2 from "../../media/images/str2.png";
import str3 from "../../media/images/str3.png";
function Item() {
  const imageData = [
    {
      id: 1,
      img: str1,
      paragraph: "By Wahid Ari |  03 March 2019",
      text: "Increasing Prosperity With Positive Thinking",
    },
    {
      id: 2,
      img: str2,
      paragraph: "By Wahid Ari |  03 March 2019",
      text: "Motivation Is The First Step To Success",
    },
    {
      id: 3,
      img: str3,
      paragraph: "By Wahid Ari |  03 March 2019",
      text: "Success Steps For Your Personal Or Business",
    },
  ];
  return (
    <>
      {imageData.map((item) => (
          <div className="carousel-item" key={item.id}>
          <img src={item.img} alt="" />
            <div>
              <h6>{item.paragraph}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default Item;
