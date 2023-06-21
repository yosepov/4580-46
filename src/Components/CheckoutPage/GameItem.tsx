import React from 'react'
import Amount from './Amount';
import "./GameItem.css"

interface Props {
    gameName: string;
    gamePrice: string;
    gameImg: string;
    gameDesc: string;
    amount?: number;
}

const GameItem = ({ gameName, gamePrice, gameImg, gameDesc, amount }: Props) => {
  return (
    <div className="itemsContainer">
        <div className="item">
            <div className="gameDetailsA">
                <img className="gamePic" src={gameImg} />
                <div className="gameName">
                <h2>{gameName}</h2>
                <p>{gameDesc}</p>
                </div>
            </div>
            <div className="gameDetailsB">
                <p>Price: ${gamePrice}</p>
                <p>Amount: <Amount /></p>
            </div>
        </div>
    </div>
  )
}

export default GameItem