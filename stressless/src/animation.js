import React from "react";
import "../src/css/animation.css";
import cycle from "../src/images/cyclist.gif";
import cycle2 from "../src/images/cycling2.gif";

const Animation = () => {
  return (
    <div className="animation">
      <div className="cycle-container">
        <img src={cycle} alt="cycle" className="cycle" />
      </div>
      <div className="cycle-container">
        <img src={cycle2} alt="cycle" className="cycle" />
      </div>
    </div>
  );
};

export default Animation;