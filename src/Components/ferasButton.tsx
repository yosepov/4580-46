import React from 'react'
import './ferasButtonStyle.css'

export const FerasButton = (): JSX.Element => {
    const AlertMe = () =>{
        alert("Feras Amer");
    }
    return (
        <>
            <button className='ferasButton' onClick={AlertMe}>Feras Amer !</button>
        </>
    )
}