import React from 'react'
import './signuplink.css'

interface SignUpLinkProps {
    text: string;
    handleOnClick: () => void;
}

export const SignUpLink = ({text, handleOnClick}:SignUpLinkProps) =>{
    return <p className='SignUpLink' onClick={handleOnClick}>{text}</p>
}