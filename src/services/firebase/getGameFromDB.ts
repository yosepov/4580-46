import { doc, getDoc } from "firebase/firestore"
import { database } from "./firebaseConfig"
import { GameType } from "../../Types/GameType";

export const getGameFromDB = async (gameId: string) => {
    const gameRef = doc(database, "games", gameId);
    const game = await getDoc(gameRef);
    return game.data() as GameType;
}