import React from "react";
import "./five-star-rating.scss";

const FiveStarRating = ({
  rating,
  filledColor = "#ffc107",
  emptyColor = "#ccc",
  gap = "4px",
  size = "24px",
}) => {
  return (
    <div className="rating" style={{ gap }}>
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return (
            <span
              key={star}
              className="star"
              style={{ color: filledColor, fontSize: size }}
            >
              &#9733;
            </span>
          );
        } else if (rating >= star - 0.5) {
          return (
            <span
              key={star}
              className="star"
              style={{
                color: filledColor,
                fontSize: size,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  width: "50%",
                  overflow: "hidden",
                }}
              >
                &#9733;
              </span>
              <span style={{ color: emptyColor }}>&#9733;</span>
            </span>
          );
        } else {
          return (
            <span
              key={star}
              className="star"
              style={{ color: emptyColor, fontSize: size }}
            >
              &#9733;
            </span>
          );
        }
      })}
    </div>
  );
};

export default FiveStarRating;
