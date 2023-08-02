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
        const index = userData.games.findIndex(g => g === gameId);
        console.log(userData.games)
        let newArr = userData.games.length <= 1 ? [] : userData.games.slice(index, 1)
           console.log(newArr)
        const docRef = doc(database, "users", user.id);
       await updateDoc(docRef, {
        games: newArr
    })
    return userData;
    }catch(err){
        console.log(err)
    }
}