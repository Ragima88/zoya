import React, { useState, useRef } from "react";
import "./price-range-slider.scss";

const PriceRangeSlider = ({ min = 0, max = 1000, step = 10 }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const sliderRef = useRef(null);

  const calculateValue = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.min(
      Math.max((clientX - rect.left) / rect.width, 0),
      1
    );
    return Math.round((percentage * (max - min)) / step) * step + min;
  };

  const handleTrackClick = (e) => {
    const value = calculateValue(e.touches ? e.touches[0].clientX : e.clientX);
    const distanceToMin = Math.abs(value - minValue);
    const distanceToMax = Math.abs(value - maxValue);

    if (distanceToMin < distanceToMax) {
      if (value < maxValue) setMinValue(value);
    } else {
      if (value > minValue) setMaxValue(value);
    }
  };

  const handleThumbMove = (e, thumbType) => {
    const value = calculateValue(e.touches ? e.touches[0].clientX : e.clientX);
    if (thumbType === "min" && value < maxValue) setMinValue(value);
    if (thumbType === "max" && value > minValue) setMaxValue(value);
  };

  const handleThumbStart = (e, thumbType) => {
    e.stopPropagation();
    const moveHandler = (ev) => handleThumbMove(ev, thumbType);
    const stopHandler = () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", stopHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("touchend", stopHandler);
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", stopHandler);
    window.addEventListener("touchmove", moveHandler);
    window.addEventListener("touchend", stopHandler);
  };

  return (
    <div
      className="price-range-slider"
      ref={sliderRef}
      onClick={handleTrackClick}
      onTouchStart={handleTrackClick}
    >
      <div className="track">
        <div
          className="highlight"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        />
        <div
          className="thumb min-thumb"
          style={{ left: `${((minValue - min) / (max - min)) * 100}%` }}
          onMouseDown={(e) => handleThumbStart(e, "min")}
          onTouchStart={(e) => handleThumbStart(e, "min")}
        />
        <div
          className="thumb max-thumb"
          style={{ left: `${((maxValue - min) / (max - min)) * 100}%` }}
          onMouseDown={(e) => handleThumbStart(e, "max")}
          onTouchStart={(e) => handleThumbStart(e, "max")}
        />
      </div>
      <div className="label">
        Price: ${minValue} - ${maxValue}
      </div>
    </div>
  );
};

export default PriceRangeSlider;
