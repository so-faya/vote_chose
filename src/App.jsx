import React, { useState } from "react";
import "./App.css";
import Result from "./Components/Result"; // Import the Result component
import colorfullImage from './assets/colorfull.jpg'

function App() {
  const [positions, setPositions] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleDotDrag = (e) => {
    const box = e.target.parentElement;
    const boxRect = box.getBoundingClientRect();
    const x = e.clientX - boxRect.left;
    const y = e.clientY - boxRect.top;

    // Constrain movement within the box
    const constrainedX = Math.max(0, Math.min(boxRect.width - e.target.offsetWidth, x));
    const constrainedY = Math.max(0, Math.min(boxRect.height - e.target.offsetHeight, y));

    e.target.style.left = `${constrainedX}px`;
    e.target.style.top = `${constrainedY}px`;

    // Add a 3D z-axis position (for demonstration purposes, randomize z-axis)
    const z = Math.random() * 100; 

    setPositions((prev) => [...prev, { x: constrainedX, y: constrainedY, z }]);
  };

  return (
    <div className="container">
      <h1>Interactive Gradient Box</h1>

      {/* Picture Section */}
      <div className="image-section">
        <img src={colorfullImage} alt="Descriptive Image" className="image" />
      </div>

      {/* Question Section */}
      <div className="question-section">
        <h2>
          The Image is colorful? 
        </h2>
        <p>(Drag the dot to "Right" if true, "Left" if false, <br></br> or "Center" if not sure!)</p>
      </div>

      {/* Gradient Box */}
      <div className="gradient-box">
        <div
          className="dot"
          draggable
          onDragEnd={handleDotDrag}
        ></div>
      </div>

      <button onClick={() => setShowResults(true)} className="result-btn">Show Results</button>

      {/* Show results when button is clicked */}
      {showResults && <Result positions={positions} />}
    </div>
  );
}

export default App;
