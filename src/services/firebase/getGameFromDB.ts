import { doc, getDoc } from "firebase/firestore"
import { database } from "./firebaseConfig"

export const getGameFromDB = async (gameId: string) => {
    const gameRef = doc(database, "games", gameId);
    const game = getDoc(gameRef);
    return game;
}