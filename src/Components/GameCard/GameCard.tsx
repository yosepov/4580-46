import React from 'react'
import './gameCard.css'

interface GameCardProps {
    title: string;
    imageUrl: string;
    description: string;
    price: number;
    geners: string[];
}

export const GameCard = ({ title, imageUrl, description, price, geners }: GameCardProps) => {
    return (
        <div className='gameCardContainer'>
                <img className='gameCardImg' src={imageUrl} alt={title} />
                <textarea className='gameCardDescription' value={`${description}`}/>
                <p className='gameCardPrice'>Price: ${price}</p>
                <p className='gameCardGeners'>Geners: {geners}</p>
                <button className='downloadButton' >▼</button>
            </div>
    )
}