import React from "react";
import "./Contributors.css";

const Contributors = () => {
  const logos = [
    "https://avatars.githubusercontent.com/u/166749819?v=4", // vansh-codes
    "https://avatars.githubusercontent.com/u/114163734?v=4", // codingkatty
    "https://avatars.githubusercontent.com/u/51405537?v=4", // BVPKARTHIKEYA
    "https://avatars.githubusercontent.com/u/66561968?v=4", // sayanp607
    "https://avatars.githubusercontent.com/u/43720662?v=4", // Mr-DK07
    "https://avatars.githubusercontent.com/u/118537885?v=4", // anshika-1102
    "https://avatars.githubusercontent.com/u/100042504?v=4", // LitZeus
    "https://avatars.githubusercontent.com/u/97246703?v=4", // eshalshaikh07
    "https://avatars.githubusercontent.com/u/114344002?v=4", // Jay-1409
    "https://avatars.githubusercontent.com/u/114320116?v=4", // Tamanna225
    "https://avatars.githubusercontent.com/u/95753872?v=4", // bhaviya18
    "https://avatars.githubusercontent.com/u/96165784?v=4", // T-Fathima
    "https://avatars.githubusercontent.com/u/116092719?v=4", // kanduru-abhiram
    "https://avatars.githubusercontent.com/u/103523495?v=4", // HarshitShukla-dev
    "https://avatars.githubusercontent.com/u/133632274?v=4", // bhavanireddy57
    "https://avatars.githubusercontent.com/u/114339979?v=4", // sanika1345
    "https://avatars.githubusercontent.com/u/109064356?v=4", // MimanshaKaur
    "https://avatars.githubusercontent.com/u/117363578?v=4", // Bhumika-00
    "https://avatars.githubusercontent.com/u/136078978?v=4", // Ujjwal5705
    "https://avatars.githubusercontent.com/u/72916018?v=4", // heizshubham
    "https://avatars.githubusercontent.com/u/97246960?v=4", // Tanushree084
    "https://avatars.githubusercontent.com/u/137758239?v=4", // VidhanThakur09
    "https://avatars.githubusercontent.com/u/121725403?v=4", // azfar-2
  ];

  // Generate random animation properties for each logo
  const generateRandomStyle = () => {
    const duration = `${5 + Math.random() * 5}s`; // Random duration between 5 and 10 seconds
    const delay = `${Math.random() * 2}s`; // Random delay up to 2 seconds
    const direction = Math.random() > 0.5 ? "normal" : "reverse"; // Random animation direction

    return {
      animationDuration: duration,
      animationDelay: delay,
      animationDirection: direction,
      left: `${Math.random() * 80}vw`, // Random start position within viewport width
      top: `${Math.random() * 80}vh`, // Random start position within viewport height
    };
  };

  return (
    <div className="contributors-container">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Contributor ${index + 1}`}
          className="contributor-logo"
          style={generateRandomStyle()} // Apply random styles
        />
      ))}
    </div>
  );
};

export default Contributors;
