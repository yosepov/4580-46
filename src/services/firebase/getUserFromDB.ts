import { doc, getDoc } from "firebase/firestore"
import { database } from "./firebaseConfig"

export const getUserFromDB = async (uid: string) => {
    const userRef = doc(database, "users", uid);
    const user = getDoc(userRef);
    return user;
}