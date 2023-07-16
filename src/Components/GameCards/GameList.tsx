import { useEffect, useState } from "react"
import { getAllGamesFromDB } from "../../services/firebase/getAllGamesFromDB"
import { GameType } from "../../Types/GameType"
import { Box, CircularProgress } from "@mui/material"
import { CardGame } from "./CardGame"


export const GameList = () => {
    // creating a games state
    const [games, setGames] = useState<GameType[]>([])

    // creating an effect to run once at the beginning
    useEffect(() => {
        // fetch all games
        const fetchGames = async () => {
            const getGames = await getAllGamesFromDB();
            // enter the games from DB to games state
            setGames(getGames)
        }
        // run the fetch games
        fetchGames()
    }, [])




    return <>
        <Box display={'flex'} flexWrap={'wrap'} rowGap={'20px'} columnGap={'20px'} justifyContent={'space-evenly'}>
        {games.length === 0 ? 
        <CircularProgress />:  
            games.map(game => <CardGame game={game} />)
        }
        </Box>
    </>
}


