import React from "react";

const GradientBox = ({ handleDotDrag }) => {
  return (
    <div className="gradient-box">
      <div
        className="dot"
        draggable
        onDragEnd={handleDotDrag}
      ></div>
    </div>
  );
};

export default GradientBox;
