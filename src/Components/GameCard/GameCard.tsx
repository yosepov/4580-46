import React from 'react'
import './GameCard.css'

interface GameCardProps {
    title: string;
    imageUrl: string;
    description: string;
    price: number;
    geners: string[];

}

export const GameCard = (props: GameCardProps) => {
    return <div>
            <h1> {props.title}</h1>
            <img src={props.imageUrl} ></img>
            <p> {props.description}</p>
            <p> {props.price}</p>
            <p>{props.geners}</p>

        </div>

}