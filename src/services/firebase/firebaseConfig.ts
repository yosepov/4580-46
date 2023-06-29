// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FirebaseAppConfig } from "../../Types/FirebaseAppConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyBWe8d8e8FjxxMIUiqVXmLEXWxY-32jkKQ",
    authDomain: "steal-8b1bc.firebaseapp.com",
    projectId: "steal-8b1bc",
    storageBucket: "steal-8b1bc.appspot.com",
    messagingSenderId: "710866545074",
    appId: "1:710866545074:web:7113e237c9e0d6d5665cab"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);