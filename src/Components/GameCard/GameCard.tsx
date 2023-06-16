import React from "react";
import './gameCard.css'
import { useState } from 'react';





interface GameCardProps {
    title: string;
    imageUrl: string;
    description: string;
    price: number;
    geners: string[];
}


export const GameCard = ({ title, imageUrl, description, price, geners }: GameCardProps) => {
    const [showNewDiv, setShowNewDiv] = useState(false);
  
    const handleMouseEnter = () => {
      setShowNewDiv(true);
    };
  
    const handleMouseLeave = () => {
      setShowNewDiv(false);
    };
  
    return (
      <div className='Container' onMouseLeave={handleMouseLeave}>
        <img
          className='gameCardImg'
          src={imageUrl}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
  
        {showNewDiv ? (
          <div className='NewDiv'>
            <div className='videoContainer'>
              <video
                className='video'
                controls
                autoPlay
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <source src="https://cdn.akamai.steamstatic.com/steam/apps/256947248/movie480_vp9.webm?t=1684341130"  />
              </video>
            </div>
            <p>Play Apex Legends™</p>
          </div>
        ) : (
          <>
            <h1 className='gameCardTitle'>{title}</h1>
            <p className='gameCardGeners'>{geners}</p>
            <h2 className='gameCardDescription'>{description}</h2>
            <p className='gameCardPrice'>Price: ${price}</p>
            <button className='btn'>Add to cart</button>
          </>
        )}
      </div>
    );
  };