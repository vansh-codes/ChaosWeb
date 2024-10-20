import React, {useState} from "react";
import './ChaosMania.css'; // Importing the CSS for cube styles
import Snowfall from "../components/Snowfall";
import snowyImage from "../assets/snowstruct.png";
import FireRain from "../components/FireRain";
import Starfield from "../components/Starfield";
import FloatingRain from "../components/FloatingRain";
import Firework from "../components/Firework";
const games = [
  { name: "Hyptonic Chaos", link: "/hypnotic" },
  { name: "Button Collection", link: "/ButtonCollection" },
  { name: "Maze", link: "/maze" },
  { name: "Simon Game", link: "/#" },
  { name: "Sample", link: "/#" },
];

const ChaosMania = () => {
  const [issnowing, setsnowing] = useState(true);
  const handleCubeClick = (link) => {
    window.location.href = link;
  };

  return (
    <div id = "fullpage">
    <button className="back-home-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    
      <Starfield />
    {issnowing ? (
      <>
        <Firework />
        <FloatingRain />
        <FireRain />
      </>
    ) : (
      <>
      <Snowfall />
      </>
    )}
    

    <h1 className = "snowy-heading">
      ChaosMania
    </h1>
    <div className="cube-container">
      {games.map((game, index) => (
        <div 
          key={index} 
          className="cube" 
          onClick={() => handleCubeClick(game.link)}
          onMouseOver={() => setsnowing(false)}
          onMouseLeave={() => setsnowing(true)}
        >
          <div>
            <div className="cube-face">
            <span className="cube-text">{game.name}</span>
            </div>
            <div className="cube-face">
            </div>
            <div className="cube-face"></div>
            <div className="cube-face cube-face-melting">
            </div>
            <div className="cube-face">
            </div>
            <div className="cube-face">
            </div>
          </div>
        </div>
        
      ))}
      
    </div>
    <div style={{ height: '100px' }} />
    <div className="imaging">
      <img src={snowyImage} alt="ChaosMania"  style={{ 
                    width: '100%', 
                    objectFit: 'cover' 
                }}  />
    </div>
    </div>
  );
};

export default ChaosMania;
