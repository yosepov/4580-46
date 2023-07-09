import { useState,useEffect } from 'react'
import { GameCard02 } from "../GameCards/GameCard02"
import { getGameFromDB } from '../../services/firebase/getGameFromDB'
import { GameType } from '../../Types/GameType'

export const HomePage = () => {
    const [ game, setGame ] = useState<GameType>()
    useEffect(() => {
        const fetchGame = async () => {
            const gameReq = await getGameFromDB('2d7fd48e-66d9-4f7d-8c1c-dd91d94adb46')
            const gameData = gameReq.data() as GameType;
            setGame(gameData)
        }
        fetchGame()
    },[])

    return (
        <>
        {game ? <>
            <GameCard02 
        description={game.description}
        download=''
        genres={[game.category]}
        home=''
        imageUrl={game.coverUrl}
        price={game.price}
        title={game.name}
        titleImg={game.coverUrl}
        discord=''
        facebook=''
        instagram=''
        youtube=''
        />
        </>
        : <h1>Loding..</h1>}
        </>
    )
}