import './roey.css';
import { useState } from 'react';

export const RoeyButton = () => {
  const [buttonText, setButtonText] = useState('Roey Ha Hatih');
  const [showFireworks, setShowFireworks] = useState(false);

  const handleClick = () => {
    alert('Erez, do you want to be my friend? Please!');
    setButtonText("Congratz we are friends now!");
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 1000); // Hide the fireworks after 1 second
  };

  const renderFireworks = () => {
    const fireworksElements = [];
    for (let i = 0; i < 30; i++) { // Adjust the number of fireworks as needed
      fireworksElements.push(<div key={i} className="fireworks" style={getRandomPosition()} />);
    }
    return fireworksElements;
  };

  const getRandomPosition = () => {
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    return { top: `${yPos}px`, left: `${xPos}px` };
  };

  return (
    <>
      <button onClick={handleClick} className="roey">
        {buttonText}
      </button>
      {showFireworks && renderFireworks()}
    </>
  );
};
