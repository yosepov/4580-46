import { doc,  updateDoc } from "firebase/firestore";
import { GameType } from "../../Types/GameType";
import { database } from "./firebaseConfig";

export const editGameToDB = async (game: GameType, id: string) => {
    try{
        const docRef = doc(database, "games", id);
       await updateDoc(docRef, {
            name: game.name,
            description: game.description,
            coverUrl: game.coverUrl,
            videoUrl: game.videoUrl,
            price: game.price,
            company: game.company,
            release: game.release,
            console: game.console,
            category: game.category
        })
    }catch(err){
        console.log(err)
    }
}