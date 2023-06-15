import React from 'react'
import './gameCard.css'

interface GameCardProps {
    title: string;
    imageUrl: string;
    description:string;
    price: number;
    genres: string[];
    review: number;
}

export const GameCard = ({title, imageUrl, description, price,review, genres}: GameCardProps) => {
    return (
        <>
            <div className='cardContainer'>
                <div className='gameImg'>
                    <img className='gameImage' src={imageUrl} alt={title}/>
                </div>
                <div className='gameGenres'>
                    <p className='genres'>{genres}</p>
                </div>
                <div className='gameReview'>
                    <button className='review'>{review}</button>
                    <p className='reviewP'> - By metascore</p>
                </div>
                <div className='gameDescription'>
                    <p className='description'>Desc : {description}</p>
                </div>
                <div className='gamePrice'>
                    <p className='price'> Price : {price}$</p>
                </div>
                <div className='cartContainer'>
                    <button className='cartButton'>Add to cart</button>
                </div>
            </div>
        </>
    )
}
