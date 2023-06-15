import React from 'react';
import './mainButton.css'
interface MainButtonProps {
    title: string;
}

export const MainButton = ({title}: MainButtonProps) => {

    return <button className='mainButton' >{title}</button>
}