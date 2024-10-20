import React, { useState } from 'react';
import './ButtonCollection.css';
import Popup from "../components/popup";


const ButtonCollection = () => {
  const [explodedIndex, setExplodedIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false); 
  const handleClickMe = () => {
    setShowPopup(true); // Show popup
  };

  const handleMouseEnter = (index) => {
    setExplodedIndex(index);
    setTimeout(() => setExplodedIndex(null), 1000); 
  };

  const handleMouseLeave = () => {
    setExplodedIndex(null);
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#e0e0e0] p-10">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 drop-shadow-md">
          Button Mania
        </h1>
        <p className="text-lg text-gray-400">Explre the Unknown with our buttons</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 shake-slow">
        {/* Game Card with Explosion Effect */}
        <div
          onMouseEnter={() => handleMouseEnter(1)}
          className={`relative bg-[#27293d] p-8 rounded-3xl shadow-lg transition-transform duration-500 ${
            explodedIndex === 1 ? 'scale-0' : 'scale-100'
          }`}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#f39c12]">Click Me!</h2>
            <p className="text-gray-400 mb-6">Lets see if U can Click ME!</p>
            <button className="w-full py-3 bg-[#f39c12] text-[#1a1a2e] font-semibold rounded-full hover:bg-[#e67e22] transition-all duration-300 animate-shrink" onClick={handleClickMe}>
              Click Click
            </button>
          </div>
          {explodedIndex === 1 && (
            <div className="absolute inset-0 grid grid-cols-3 gap-2 pointer-events-none">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className={`bg-[#f39c12] opacity-75 rounded-full transform transition-all duration-300`}
                  style={{
                    width: '20px',
                    height: '20px',
                    transform: `translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh)`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Shrinking Text Effect */}
        <div
          onMouseEnter={() => handleMouseEnter(2)}
          className={`relative bg-[#27293d] p-8 rounded-3xl shadow-lg transition-transform duration-500 ${
            explodedIndex === 2 ? 'scale-0' : 'scale-100'
          }`}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#f39c12]">Broken Button!</h2>
            <p className="text-gray-400 mb-6">I am Broken! Click to know How?</p>
            <button className="w-full py-3 bg-[#f39c12] text-[#1a1a2e] font-semibold rounded-full hover:bg-[#e67e22] transition-all duration-300 animate-shrink">
              Click Click
            </button>
          </div>
          {explodedIndex === 2 && (
            <div className="absolute inset-0 grid grid-cols-3 gap-2 pointer-events-none">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className={`bg-[#f39c12] opacity-75 rounded-full transform transition-all duration-300`}
                  style={{
                    width: '20px',
                    height: '20px',
                    transform: `translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh)`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

    </div>
  );
};

export default ButtonCollection;
