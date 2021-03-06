import React from "react";
import "./Rate.css";

const Rate = ({ starIndex, rating }) => {
  const stars = (x) => {
    let starArray = [];
    console.log(x);
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span
            className="rating"
            key={i}
            style={{ cursor: "pointer" }}
            onClick={() => starIndex(i)}
          >
            ★
          </span>
        );
      } else {
        starArray.push(
          <span
            className="rating"
            key={i}
            style={{ cursor: "pointer", width: "50px" }}
            onClick={() => starIndex(i)}
          >
            ☆
          </span>
        );
      }
    }
    console.log(starArray);
    return starArray;
  };

  return <div>{stars(rating)}</div>;
};

Rate.defaultProps = {
  starIndex: () => {},
  rating: 1,
};

export default Rate;
