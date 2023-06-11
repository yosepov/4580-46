import { useState } from 'react';

export const RoeyButton = () => {
  const [buttonText, setButtonText] = useState('Roey Ha Hatih');

  const handleClick = () => {
    alert('Erez do you want to be my friend? Please!')
    setButtonText("Congratz we are friends now!!");
  };

  return (
    <>
      <button onClick={handleClick} className="roey">
        {buttonText}
      </button>
    </>
  );
};