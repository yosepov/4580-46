import React from "react"
import './ofek.css'

export const OfekButton = (): JSX.Element => {

const showAlert = () => {
    alert("Ofek Button Cliked!");
}
    return (
        <>
        <button className="myBtn" onClick={showAlert}>My Button</button>
        </>
    )
}