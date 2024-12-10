import React from "react";
import colorfullImage from '../assets/colorfull.jpg';

const Picture = () => {
  return (
    <div className="image-section">

      <img src={colorfullImage} alt="Descriptive" 
      className="image" />

    </div>
  );
};

export default Picture;
