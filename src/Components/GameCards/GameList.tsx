import { useEffect, useState } from "react"
import { getAllGamesFromDB } from "../../services/firebase/getAllGamesFromDB"
import { GameType } from "../../Types/GameType"
import { Box, CircularProgress } from "@mui/material"
import { CardGame } from "./CardGame"
import { deleteGameFromDB } from "../../services/firebase/deleteGameFromDB"


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
    }, [games])


    const handleDeleteGame = async (gameId: string) => {
        await deleteGameFromDB(gameId);
        setGames([]);
    }

    return <>
        <Box display={'flex'} flexWrap={'wrap'} rowGap={'20px'} columnGap={'20px'} justifyContent={'space-evenly'}>
        {games.length === 0 ? 
        <CircularProgress />:  
            games.map((game, index) => <CardGame handleDelete={() =>handleDeleteGame(game.id)} key={index} game={game} />)
        }
        </Box>
    </>
}


