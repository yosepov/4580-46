import { collection, getDocs, query } from "firebase/firestore"
import { database } from "./firebaseConfig"
import { GameType } from "../../Types/GameType";

export const getAllGamesFromDB = async () => {
    // creating a query to get all docs in "games" collection
    const q = query(collection(database, "games"));
    // get the docs with the query
    const games = await getDocs(q);
    // create new array with all games
    const allgames = games.docs.map(game => game.data()) as GameType[]
    // return the games array (type GameType[])
    return allgames
}