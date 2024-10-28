import React, {useState} from 'react';

const ChaosInteractions=()=>{

    const [isButtonDelayed , setIsButtonDelayed]=useState(false);
    const [sliderValue, setSliderValue] = useState(50);
  
  
  const handleButtonClick = () => {
    setIsButtonDelayed(true); 

    // Introduce a 5-second delay before the button actually performs the action
    setTimeout(() => {
      setIsButtonDelayed(false);
      alert("Button clicked after chaos delay!");
    }, 5000);
  };

  
  const handleSliderChange = (event) => {
    const randomDelay = Math.floor(Math.random() * 3000);  
    const newValue = event.target.value;

    setTimeout(() => {
      setSliderValue(newValue);
    }, randomDelay);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      
      <button 
        onClick={handleButtonClick} 
        disabled={isButtonDelayed} 
        style={{
          backgroundColor: isButtonDelayed ? 'grey' : 'blue',
          color: 'white',
          padding: '10px 20px',
          cursor: isButtonDelayed ? 'not-allowed' : 'pointer'
        }}
      >
        {isButtonDelayed ? 'Processing...' : 'Click Me'}
      </button>
      
      <br /><br />
      <label>Chaotic Slider: </label>
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderValue} 
        onChange={handleSliderChange} 
        style={{
          width: '300px',
          transition: 'width 1s ease-out',
          cursor: 'pointer'
        }}
      />
      <span> {sliderValue}</span>

    </div>
  );
};

export default ChaosInteractions;
