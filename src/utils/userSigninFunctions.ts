import { UserType } from "../Types/UserType";

    // getCurrentUser that returns the user that currently is signedin
    export const getCurrentUser = () => {
        // take the value of currentUser from localstorage and assign it to user
        const user = localStorage.getItem('currentUser');
        // check if user is truthy
        if (user) {
            // in case u8ser is truthy, return the parsed json and assign it userType
            return JSON.parse(user) as UserType
        } else {
            // in case user is falsy,  we return null as currentUser
            return null
        }
    }

    // logoutUser signout our currentUser
    export const logoutUser = () => {
        // we set the value of current user to null in localStorage
        localStorage.setItem('currentUser', 'null')
    }