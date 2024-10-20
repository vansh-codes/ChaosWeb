import React, { useEffect, useRef } from 'react';
import './FireRain.css'; // Ensure to import the CSS file

const FireRain = () => {
  const fireContainer = useRef(null);

  useEffect(() => {
    const createFireDrop = () => {
      const fireDrop = document.createElement('div');
      fireDrop.classList.add('fire-drop');
      fireDrop.style.left = `${Math.random() * 100}vw`;
      fireDrop.style.animationDuration = `${Math.random() * 3 + 2}s`;
      fireDrop.style.opacity = `${Math.random() * 0.5 + 0.5}`;

      fireContainer.current.appendChild(fireDrop);

      // Remove fire drop after animation ends to avoid memory leaks
      setTimeout(() => {
        fireDrop.remove();
      }, (Math.random() * 3 + 2) * 1000);
    };

    // Create a fire drop at intervals
    const interval = setInterval(createFireDrop, 200);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return <div ref={fireContainer} className="fire-rain-container"></div>;
};

export default FireRain;
