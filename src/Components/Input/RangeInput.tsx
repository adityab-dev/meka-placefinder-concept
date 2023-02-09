import "./Input.css";
import { useState } from "react";
import { OnChange } from "../../Types/Types";
import { rangeChangeHandler } from "../../helper-functions/helper-functions";
import { lowerLimit, upperLimit } from "../../constants/input-names";


// const dispatch = store.dispatch();

function RangeInput() {

  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(1);
  const [slider1, setSlider1] = useState(0);
  const [slider2, setSlider2] = useState(100);

  const handle1 = (e: OnChange) => {
    const value = parseInt(e.target.value);
    if (value < slider2 - 5) {
      setSlider1(value);
      let minVal = slider1;
      setLeft((minVal / 100) * 100);
      rangeChangeHandler(e);
    }
  };

  const handle2 = (e: OnChange) => {
    const value = parseInt(e.target.value);
    if (value > slider1 + 5) {
      setSlider2(value);
      let maxVal = slider2;
      setRight(100 - (maxVal / 100) * 100);
      rangeChangeHandler(e);
    }
  };

  return (
    <div className="slider-wrapper">
      <div className="slider">
        <div
          className="progress"
          style={{ left: `${left}%`, right: `${right}%` }}
        ></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          name={lowerLimit}
          value={slider1}
          onChange={handle1}
        />
        <input
          type="range"
          className="range-max"
          name={upperLimit}
          value={slider2}
          onChange={handle2}
        />
      </div>
    </div>
  );
}

export default RangeInput;
