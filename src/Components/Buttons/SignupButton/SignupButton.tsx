import React from 'react';
import './SignupButton.css'
interface SignupButtonProps {
    text: string;
    handleOnClick:()=> void;
}

export const SignupButton = ({text, handleOnClick}: SignupButtonProps) => {

    return <button onClick={handleOnClick} className='signupButton'>{text}</button>
}