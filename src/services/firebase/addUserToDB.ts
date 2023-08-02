import { User } from "firebase/auth";
import { UserType } from "../../Types/UserType";
import { doc, setDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";



export const addUserToDB = async (user: User) => {
    try {
    const newUser: UserType = {
        id: user.uid,
        email: user.email ? user.email : "",
        games: [],
        photoURL: user.photoURL?user.photoURL: "" 
    }

    setDoc(doc(database,"users", user.uid), newUser);
    
    return newUser;
    } catch (err) {
        console.log(err)
    }
}