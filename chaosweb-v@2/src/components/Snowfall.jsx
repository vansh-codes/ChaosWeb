import React, { useEffect, useRef } from 'react';
import './Snowfall.css'; // Make sure to import the CSS file

const Snowfall = () => {
  const snowContainer = useRef(null);

  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.textContent = '❄'; // Unicode character for snowflake
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
      snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
      snowflake.style.opacity = `${Math.random() * 0.5 + 0.5}`;

      snowContainer.current.appendChild(snowflake);

      // Remove snowflake after animation ends to avoid memory leaks
      setTimeout(() => {
        snowflake.remove();
      }, (Math.random() * 3 + 2) * 1000);
    };

    // Create a snowflake at intervals
    const interval = setInterval(createSnowflake, 200);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return <div ref={snowContainer} className="snowfall-container"></div>;
};

export default Snowfall;
