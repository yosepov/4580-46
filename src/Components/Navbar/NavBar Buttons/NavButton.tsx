import React from "react";
import './navButton.css';

interface NavButtonProps {
    text: string;
}

export const NavButton = ({text}: NavButtonProps) => {
    return (
        <button className='navButton' disabled>{text}</button>
    )
}