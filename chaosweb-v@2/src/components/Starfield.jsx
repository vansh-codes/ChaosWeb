import React, { useEffect, useState } from 'react';
import './Starfield.css'; // Import CSS for star, moon, and cloud animations

const Starfield = () => {
  const [stars, setStars] = useState([]);

  // Function to generate random star positions
  const generateStars = () => {
    const starArray = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setStars(starArray);
  };

  useEffect(() => {
    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <div className="starfield">
      {/* Moon */}
      <div className="moon"></div>

      {/* Clouds */}
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>

      {/* Stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            animationDuration: `${Math.random() * 5 + 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
