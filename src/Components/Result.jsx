import React from "react";

function Result({ positions }) {
  return (
    <div className="result-box">
      {/* Placeholder Sections */}
      <div className="placeholder-section false-section">False</div>
      <div className="placeholder-section not-sure-section">Not sure</div>
      <div className="placeholder-section true-section">True</div>

      {/* Render dots */}
      {positions.map((pos, index) => (
        <div
          key={index}
          className="result-dot"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            transform: `translateZ(${pos.z}px)` // Apply 3D depth transformation
          }}
        ></div>
      ))}
    </div>
  );
}

export default Result;
