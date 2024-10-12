import React, { useState } from "react";
import monkeyImage from "/src/assets/monkey.jpg";
import hamsterSound from "/src/assets/hamsterSound.mp3"

const Popup = ({ showPopup, setShowPopup }) => {
  const [isImageVisible, setIsImageVisible] = useState(false); // State to control image visibility

  const handleOpen = () => {
    const audio = new Audio(hamsterSound); // Create a new audio object with the hamster sound
    audio.play(); // Play the audio
    setShowPopup(false); // close the popup
  };

  const handleClose = () => {
    setIsImageVisible(true); // This will display the image
    setShowPopup(false); // Close the popup
  };

  const handleImageClick = () => {
    setIsImageVisible(false); // Hide the monkey image
    setShowPopup(false); // Close the popup
  };

  // If the popup is not visible, return null
  if (!showPopup && !isImageVisible) return null; // Prevent rendering if neither is visible

  const popupOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9998,
  };

  const popupContentStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };

  const buttonStyle = {
    margin: "10px",
    padding: "10px 20px",
    cursor: "pointer",
  };

  // Styles for the full-screen image
  const imageOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)", 
    zIndex: 9999, 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {showPopup && (
        <div style={popupOverlayStyle}>
          <div style={popupContentStyle}>
            <h2>🎉 Congratulations, You've Found a Hidden Treasure! 🎉</h2>
            <p>Choose your fate:</p>
            <button style={buttonStyle} onClick={handleOpen}>
              I won't click! What if it's a digital virus disguised as a treasure? 🦠
            </button>
            <button style={buttonStyle} onClick={handleClose}>
              Come on! What's the worst that could happen? I'll just reboot my brain! 🤪
            </button>
          </div>
        </div>
      )}

      {/* Full-screen overlay for the monkey image */}
      {isImageVisible && (
        <div style={imageOverlayStyle} onClick={handleImageClick}>
          <img src={monkeyImage} alt="Monkey" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      )}
    </>
  );
};

export default Popup;
