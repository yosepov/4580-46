import React from 'react'
import './SignupMsg.css'

interface SignupMsgProps {
    text: string;
    handleOnClick: () => void;
}

export const SignupMsg = ({text, handleOnClick}: SignupMsgProps) => {
    return <span className="SignupMsg" onClick={handleOnClick}>{text}</span>
}