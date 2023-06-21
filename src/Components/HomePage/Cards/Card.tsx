import React from 'react'
import './Card.css'

interface CardProps {
    image01: string;
    image02: string;
    image03: string;
    image04: string;
    image05: string;
    image06: string;
  } 

  
const Card = ( {
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
   }:CardProps) => {
  return (
    <div className="container">
        <div className="images">
            <img src={image01} alt="" />
            <img src={image02} alt="" />
            <img src={image03} alt="" />
            <img src={image04} alt="" />
            <img src={image05} alt="" />
            <img src={image06} alt="" />
        </div>
        </div>
  )
}

export default Card