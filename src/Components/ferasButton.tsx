import React from 'react'
import './ferasButtonStyle.css'

export const FerasButton = (): JSX.Element => {
    const AlertMe = () =>{
        alert("Feras Amer");
    }
    return (
        <>
            <button className='glow-on-hover' onClick={AlertMe}>Feras Amer !</button>
        </>
    )
}