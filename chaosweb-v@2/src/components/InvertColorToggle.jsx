
import  { useState, useEffect } from "react";

const InvertColorToggle = () => {

  const [isInverted, setIsInverted] = useState(false);

  const handleToggle = (event) => {

    event.stopPropagation(); // Prevent click event from bubbling up

    setIsInverted(!isInverted);
  };

  useEffect(() => {
    if (isInverted) {

      document.body.classList.add("inverted");
    } else {
      document.body.classList.remove("inverted");
    }
  }, [isInverted]);
  

  return (
    <button onClick={handleToggle} className="toggle-button">

      {isInverted ? "Revert" : "Invert"}


    </button>

  );
};


export default InvertColorToggle;
