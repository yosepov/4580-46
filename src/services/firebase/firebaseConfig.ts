// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FirebaseAppConfig } from "../../Types/FirebaseAppConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyAozImnYxdptLdZx7GhyAE4-em4HjLKoZI",
    authDomain: "steal-6c69c.firebaseapp.com",
    projectId: "steal-6c69c",
    storageBucket: "steal-6c69c.appspot.com",
    messagingSenderId: "300223775983",
    appId: "1:300223775983:web:d2cad4a8709fd713bf871a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const database = getFirestore(app);