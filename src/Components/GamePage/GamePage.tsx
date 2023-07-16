import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getGameFromDB } from "../../services/firebase/getGameFromDB";
import { GameType } from "../../Types/GameType";
import { Box, CardMedia, CircularProgress, Typography } from "@mui/material";



export const GamePage = () => {
    const { id } = useParams();
    const [game, setGame] = useState<GameType>()

    useEffect(() => {
        const fetchGame = async () => {
            if (id) {
                const getGame = await getGameFromDB(id)
                setGame(getGame);
            }
        }
        fetchGame()
    }, [])

    return <>
        <Box display={'flex'} flexDirection={'column'} flexWrap={'wrap'} rowGap={'20px'} columnGap={'20px'} alignItems={"center"} alignContent={'center'} textAlign={'center'} justifyContent={'center'}>
            {game ? <>
            <Box  maxWidth={"650px"} >
                <Typography variant="h4">{game.name}</Typography>
                <br/>
                <CardMedia
                    sx={{ height: 300 }}
                    image={game.coverUrl}
                    title={game.name}
                    />
                <br/>
                <Typography variant="body2">Release date: {game.release}</Typography>
                <br/>
                <Typography variant="body2">{game.description}</Typography>
       
                    <br/>
                <Typography variant="body2">Category: {game.category}</Typography>
                    <br/>
                <Typography variant="body2">Developer: {game.company}</Typography>
                    <br/>
                <Typography variant="body2">Price: ${game.price}</Typography>
                    <br/>
                    </Box>

            </>
                : <CircularProgress />
            }
        </Box>
    </>
}