// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { FirebaseAppConfig } from "../../Types/FirebaseAppConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyAAZkbO9GtYG_CgEnDe3I6fOVi6uvBxc0E",
    authDomain: "steal-a26f5.firebaseapp.com",
    projectId: "steal-a26f5",
    storageBucket: "steal-a26f5.appspot.com",
    messagingSenderId: "901912332443",
    appId: "1:901912332443:web:53ec64490dd9435e635e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();