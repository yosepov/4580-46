import React from 'react'
import './inputText.css'

interface InputTextProps {
    type: string;
    placeholder: string;
}

export const InputText = ({type, placeholder}:InputTextProps ) => {
    return <input className='inputText' type={type} placeholder={placeholder} />
}