import React, { useState, useEffect } from 'react';
import "./BarrelRoll.css"
function BarrelRoll() {
  const [roll, setRoll] = useState(false);

  const handleBarrelRoll = () => {
    setRoll(true);
    setTimeout(() => setRoll(false), 2000);
  };

  const createStars = () => {
    const stars = [];
    for (let i = 0; i < 20; i++) {
      const starStyle = {
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 2}s`
      };
      stars.push(<div key={i} className="star" style={starStyle} />);
    }
    return stars;
  };

  return (
    <div className={`App ${roll ? 'barrel-roll' : ''}`} style={{position:"absolute",top:"0px",left:"0px",width:"100%",overflow:"hidden"}}>
      <div className="title">Do a Barrel Roll!</div>
      <div className="instructions">
        Press the button below to spin the entire page. Enjoy the cosmic journey!
      </div>
      <button className="button" onClick={handleBarrelRoll}>Barrel Roll!</button>
      {createStars()}
    </div>
  );
}

export default BarrelRoll;
