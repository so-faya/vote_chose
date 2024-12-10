import React, { useState } from "react";

const useHandleDot = () => {
  const [positions, setPositions] = useState([]);

  const handleDotDrag = (e) => {
    const box = e.target.parentElement;
    const boxRect = box.getBoundingClientRect();
    const x = e.clientX - boxRect.left;
    const y = e.clientY - boxRect.top;

    const constrainedX = Math.max(0, Math.min(boxRect.width - e.target.offsetWidth, x));
    const constrainedY = Math.max(0, Math.min(boxRect.height - e.target.offsetHeight, y));

    e.target.style.left = `${constrainedX}px`;
    e.target.style.top = `${constrainedY}px`;

    const z = Math.random() * 100;

    setPositions((prev) => [...prev, { x: constrainedX, y: constrainedY, z }]);
  };

  return { positions, handleDotDrag };
};

export default useHandleDot;
