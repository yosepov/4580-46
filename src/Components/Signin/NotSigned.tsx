import React from 'react';
import './notSigned.css'
interface NotSignedProps {
    text: string;
    handleOnClick: () => void;
}

export const NotSigned = ({text, handleOnClick}: NotSignedProps) => {
    return (
        <>
            <p className='notSigned' onClick={handleOnClick}>{text}</p>
        </>
    )
}