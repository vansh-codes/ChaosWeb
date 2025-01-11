import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Ensure you import the custom CSS for navbar styles

const Navbar = () => {
  const [isSpinning, setIsSpinning] = useState(false); // State to track if the logo should spin

  useEffect(() => {
    const handleMouseMove = (event) => {
      const navbar = document.querySelector('.navbar');
      const items = document.querySelectorAll('.nav-item');
      const { clientX } = event;
      const { left, width } = navbar.getBoundingClientRect();
      const centerX = left + width / 2;
      const deltaX = clientX - centerX;
      const skewX = (deltaX / width) * 20;

      items.forEach((item) => {
        item.style.transform = `skewX(${skewX}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleSpin = () => {
    setIsSpinning(!isSpinning); // Toggle spin state on click
  };

  return (
    <div className="navbar">
      {/* Spinning Logo */}
      <div className="logo" onClick={toggleSpin}>
        <img
          src="/logo.png"
          alt="ChaosWeb Logo"
          className={`logo-img ${isSpinning ? 'spin' : ''}`} // Add 'spin' class dynamically based on state
        />
      </div>

      {/* Randomly Placed Links */}
      <ul className="nav-links">
        {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
          <li
            key={item}
            className="nav-item roll-animation"
            style={{
              transform: `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`,
            }}
          >
            <a href={`#${item.toLowerCase()}`} className="button">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
