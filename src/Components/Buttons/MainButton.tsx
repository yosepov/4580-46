import React from 'react';
import './mainButton.css'
interface MainButtonProps {
    title: string;
    handlOnClick: () => void;
}

export const MainButton = ({title, handlOnClick}: MainButtonProps) => {

    return <button onClick={handlOnClick} className='mainButton'>{title}</button>
}