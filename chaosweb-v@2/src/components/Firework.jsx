import React, { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

const Firework = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fireworks = new Fireworks(canvasRef.current, {
      speed: 1, // Speed of fireworks
      acceleration: 1.05, // Acceleration of the fireworks
      friction: 0.95, // Friction applied to the fireworks
      gravity: 1, // Gravity applied to the fireworks
      particles: 100, // Number of particles in each firework
      explosion: 5, // Number of explosions per firework
      sound: false, // Enable or disable sound
      colors: ['#ff0000', '#00ff00', '#0000ff'], // Colors of fireworks
    });

    fireworks.start();

    return () => {
      fireworks.stop(); // Cleanup on component unmount
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Prevent interaction
        zIndex: 1000,
      }}
    />
  );
};

export default Firework;
