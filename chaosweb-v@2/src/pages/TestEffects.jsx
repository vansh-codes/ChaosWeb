import React, { useState } from "react";
import "./ColorEffect.css";

const TestEffects = () => {
  const [effects, setEffects] = useState([]);

  const handleClick = (e) => {
    const { clientX: x, clientY: y } = e;

    const isShatter = Math.random() > 0.5;
    const newEffects = Array.from({ length: 50 }).map(() => ({
      x,
      y,
      offsetX: isShatter ? (Math.random() - 0.5) * 300 : (Math.random() - 0.5) * 300,
      offsetY: isShatter ? (Math.random() - 0.5) * 300 : (Math.random() - 0.5) * 300,
      rotation: isShatter ? Math.random() * 360 : 0,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      id: Math.random(),
      type: isShatter ? "shatter" : "splash",
    }));

    setEffects((prev) => [...prev, ...newEffects]);

    setTimeout(() => {
      setEffects((prev) => prev.slice(newEffects.length));
    }, 1000);
  };

  return (
    <div className="color-effect-container" onClick={handleClick}>
      {effects.map(({ x, y, offsetX, offsetY, rotation, color, id, type }) => (
        <div
          key={id}
          className={`effect ${type}`}
          style={{
            left: x + offsetX,
            top: y + offsetY,
            backgroundColor: color,
            transform: `rotate(${rotation}deg) translate(${offsetX}px, ${offsetY}px)`,
          }}
        />
      ))}
      <h1 style={{textAlign:"center",fontSize:"50px"}}>Click anywhere for a random color effect!</h1>
    </div>
  );
};

export default TestEffects;
