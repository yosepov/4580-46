import { doc, setDoc } from "firebase/firestore";
import { GameType } from "../../Types/GameType";
import { v4 as uuid } from 'uuid'
import { database } from "./firebaseConfig";

export const addGameToDB = async (game: GameType) => {
    try{
        const gameId = uuid();
        const newGame: GameType = {
            id: gameId,
            name: game.name,
            description: game.description,
            coverUrl: game.coverUrl,
            videoUrl: game.videoUrl,
            price: game.price,
            company: game.company,
            release: game.release,
            console: game.console,
            category: game.category,
            imageUrl: [],
            rating: [],
            version: ""
        }

        setDoc(doc(database, "games", gameId), newGame);
    }catch(err){
        console.log(err)
    }
}