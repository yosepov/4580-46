import { doc,  deleteDoc } from "firebase/firestore"
import { database } from "./firebaseConfig"

export const deleteGameFromDB = async (gameId: string) => {
    const gameRef = doc(database, "games", gameId);
     await deleteDoc(gameRef);
}