import React, { useEffect } from 'react';
import '../index.css';

const Navbar = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const navbar = document.querySelector('.navbar');
      const items = document.querySelectorAll('.nav-item');
      const { clientX } = event;
      const { left, width } = navbar.getBoundingClientRect();
      const centerX = left + width / 2;
      const deltaX = clientX - centerX;
      const skewX = deltaX / width * 20;

      items.forEach(item => {
        item.style.transform = `skewX(${skewX}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='relative h-screen w-64 bg-gradient-to-b from-purple-800 to-indigo-900 overflow-hidden navbar'>
      {/* Spinning Logo */}
      <div className='absolute top-6 left-6 w-20 h-20 animate-spin-slow'>
        <img src='/logo.png' alt='ChaosWeb Logo' className='opacity-80 hover:opacity-100' />
      </div>

      {/* Header */}
      <h1
        id='chaos-header'
        className='absolute top-24 left-8 rotate-[-10deg] text-2xl font-bold text-pink-400 whitespace-nowrap transition-all duration-300 hover:rotate-12'
      >
        ChaosWeb
      </h1>
      <h2
        className='absolute top-40 left-4 text-sm text-yellow-300 opacity-70 whitespace-pre-line tracking-wider animate-pulse transition-all duration-300 hover:rotate-6'
      >
        The Disorderly UI Experiment
      </h2>

      {/* Randomly Placed Links */}
      <ul className='absolute top-64 space-y-4 text-white font-semibold'>
        {['Home', 'About', 'Gallery', 'Contact'].map((item) => (
          <li
            key={item}
            className='text-lg hover:text-yellow-400 transition-colors duration-500 ml-4 nav-item'
            style={{
              transform: `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`,
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Floating Boxes */}
      <div className='absolute bottom-16 left-8 flex space-x-4'>
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <div
              key={idx}
              className='w-8 h-8 bg-indigo-400 rounded-md hover:scale-150 transition-transform duration-500 shadow-lg'
              style={{
                animation: `float ${1 + idx}s ease-in-out infinite alternate`,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Navbar;