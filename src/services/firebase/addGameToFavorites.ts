import { doc,  updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";
import { UserType } from "../../Types/UserType";
import { getUserFromDB } from "./getUserFromDB";

export const addGameToFavorites = async (user: UserType, gameId: string) => {
    try{
        const myUser = await getUserFromDB(user.id);
        const userData = myUser.data() as UserType;
        userData.games.push(gameId);
        const docRef = doc(database, "users", user.id);
       await updateDoc(docRef, {
        games: userData.games
    })
    return userData;
    }catch(err){
        console.log(err)
    }
}

export const removeGameFromFavorites = async (user: UserType, gameId: string) => {
    try{
        const myUser = await getUserFromDB(user.id);
        const userData = myUser.data() as UserType;
        const newArray = [];
        for(const game of userData.games){
            if(game !== gameId){
                newArray.push(game);
            }
        }
        const docRef = doc(database, "users", user.id);
       await updateDoc(docRef, {
        games: newArray
    })
    return userData;
    }catch(err){
        console.log(err)
    }
}