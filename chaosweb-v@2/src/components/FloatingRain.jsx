import React, { useEffect, useRef } from 'react';
import './FloatingRain.css'; // Ensure to import the CSS file

const shapes = ['cuboid', 'sphere', 'pyramid'];

const getRandomShape = () => {
  return shapes[Math.floor(Math.random() * shapes.length)];
};

const FloatingRain = () => {
  const rainContainer = useRef(null);

  useEffect(() => {
    const createShape = () => {
      const shape = document.createElement('div');
      shape.classList.add('shape', getRandomShape()); // Add a random shape class
      shape.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      shape.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration
      shape.style.fontSize = `${Math.random() * 20 + 10}px`; // Random size
      shape.style.opacity = `${Math.random() * 0.5 + 0.5}`; // Random opacity

      rainContainer.current.appendChild(shape);

      // Remove shape after animation ends to avoid memory leaks
      setTimeout(() => {
        shape.remove();
      }, (parseFloat(shape.style.animationDuration) * 1000));
    };

    // Create a shape at intervals
    const interval = setInterval(createShape, 500); // Adjust the interval for more or fewer shapes

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return <div ref={rainContainer} className="rain-container"></div>;
};

export default FloatingRain;
