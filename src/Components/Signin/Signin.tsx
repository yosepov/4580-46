// we first of all, import libraries
import React, { useState } from 'react';
// only then we import components from our repository
import './Signin.css'
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton';
import { SignupMsg } from '../Signin/SignupMsg';
import { UserType } from '../../Types/UserType';
import { ErrorMessage } from '../Form/Errors/ErrorMessage';

// Create Signin component (visual component - thats why it ends with tsx)
export const SigninPage = () => {

    // Logic for the component
    // creating here our states for the Signin component
    const [isSignin, setIsSignin] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    const [usernameError, setUsernameError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [rePasswordError, setRePasswordError] = useState<string>("");
    const [signinError, setSigninError] = useState<string>("");

    // getAllUser which brings me the users array from localStorage
    const getAllUsers = () => {
        // take the value of "users" from localstorage and assign it into users 
        const users = localStorage.getItem('users');
        // check if users is truthy
        if (users) {
            // return the parsed json and assign it a userType[]
            return JSON.parse(users) as UserType[];
        } else {
            // in case users is falsy we want to return an empty array
            return []
        }
    }

    // getCurrentUser that returns the user that currently is signedin
    const getCurrentUser = () => {
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
    const logoutUser = () => {
        // we set the value of current user to null in localStorage
        localStorage.setItem('currentUser', 'null')
    }

    // setCurrentUser is getting a user and add it to localstorage as "currentUser" value
    const setCurrentUser = (user: UserType) => {
        // we stringfy the user and assign it to userStr variable
        const userStr = JSON.stringify(user)
        // we set the value of currentUser in localstorage to the userStr
        localStorage.setItem('currentUser', userStr)
    }

    // setUsers that gets users array and save them in "users" at the localStorage
    const setUsers = (users: UserType[]) => {
        // we convert the users array to string and assign it to usersStr
        const usersStr = JSON.stringify(users)
        // update "users" with the new variable of usersStr in localStorage
        localStorage.setItem('users', usersStr)
    }

    // updateUsers he gets a new user, push it to users array and return it back
    const updateUsers = (user: UserType) => {
        // we get the users array from localstorage and assign it to users variable
        const users = getAllUsers();
        // we push the new user into users array
        users.push(user);
        // we return the updated users array back
        return users;
    }

    // createNewUser has the logic when we creating a new user with argument of user
    const createNewUser = (user: UserType) => {
        // we call the updateUsers function and send it a user and then assign it to users
        const users = updateUsers(user);
        // we call setUsers with the updated users array
        setUsers(users);
        // we call setCurrentUser and send it the new user
        setCurrentUser(user);
    }

    // handleIsSignin is for handling the isSignIn state
    const handleIsSignin = () => {
        // we call setIsSignin and set the opposite of isSignin value
        setIsSignin(!isSignin);
    }

    // handleUsername get's one arg called value and set it to username state
    const handleUsername = (value: string) => {
        // we call setUsername and assign to it the value we get from the input
        setUsername(value);
    }

    // handlePassword that gets value and set it to the password state
    const handlePassword = (value: string) => {
        // we get the value, send it to the setPassword hook and update "password" state
        setPassword(value)
    }

    // handleRePassword that gets value and set it to the password state
    const handleRePassword = (value: string) => {
        // we get the value, send it to the setRePassword hook and update "rePassword" state
        setRePassword(value)
    }

    // checkUserLogin gets users array, and check if any of the users
    // is exists compared to our states!!!!! 
    const checkUserLogin = (users: UserType[]) => {
        // we run on all users array
        for (const user of users) {
            // we check if there is any user that has the current username and password
            // compared to the states (the values that just inserted)
            if (user.username === username && user.password === password) {
                // if we find that the "if" is true, we return true
                return true
            }
        }
        // if we end running on all users without have any success, return false
        return false
    }

    // checkUserSignup gets users array, and check if we already have any username
    // that is already exists
    const checkUserSignup = (users: UserType[]) => {
        // we run on all users array
        for (const user of users) {
            // we check each user if he has the same username that 
            // inserted inside our username state
            if (user.username === username) {
                // if exists - we return false
                return false
            }
        }
        // if we finished without any exception, we return true
        return true
    }


    // handleSigninUser handles the signup and signin for our component
    const handleSigninUser = () => {
        // we call getAllUsers and assign to users
        const users = getAllUsers()
        // we check if isSignin is true - it means we are trying to login/signin
        if (isSignin) {
            // we call checkUserLogin and make sure that our user can login
            // and assign it to isOkay
            const isOkay = checkUserLogin(users);
            // if isOkay is true
            if (isOkay) {
                // we create new user object with our states
                const currentUser: UserType = { username, password }
                // setCurrentUser to localStorage
                setCurrentUser(currentUser)
                // alert that the user signed in successfully!
                alert('Signedin!')
                // if isOkay is false
            } else {
                // alert 'Incorrect username or password'
                alert('Incorrect username or password')
            }
            // if isSignin is false - it means the user trying to signup
        } else {
            // check if password and rePassword is matched
            if (password === rePassword) {
                // we call checkUserSignup and assign the answer to isOkay
                const isOkay = checkUserSignup(users);
                // if isOkay is true
                if (isOkay) {
                    // then we create new user
                    const newUser = { username, password } as UserType
                    // we call createNewUser and send it the newUser
                    createNewUser(newUser);
                    // we alert 'User created succesfully!'
                    alert('User created succesfully!')
                } else {
                    // if isOkay is false, it means the user already exists!
                    alert('User already exists!')
                }
            } else {
                // if password and rePassword is not match, we alert the user
                alert("Passwords not match")
            }
        }
    }

    // return the visual part of the component (one JSX element)
    return (
        // we return one div that is the container for the component
        <div className='signinContainer'>
            {/* we create a signBox div, to wrap the signin and signedup elements*/}
            <div className='signBox'>
                {/* create the title for our signinBox, and render different titles
                that depends on the value of isSignin*/}
                <h1 className='signinTitle'>{isSignin ? "Signin" : "Signup"}</h1>
                {/* call InputText component and send it handleOnChange placeholder and type props*/}
                
                <InputText handleOnChange={handleUsername} placeholder='username' type='text' />
                <ErrorMessage errorMsg={usernameError} />
                <InputText handleOnChange={handlePassword} placeholder='password' type='password' />
                <ErrorMessage errorMsg={passwordError} />
                {/* we render another InputText compnent that depends on isSignin value */}
                {!isSignin && <InputText handleOnChange={handleRePassword} placeholder='repassword' type='password' />}
                <ErrorMessage errorMsg={rePasswordError} />
                <ErrorMessage errorMsg={signinError} />
                {/* we render the MainButton custom component that gets 2 props, and the title depends on isSinin value */}
                <MainButton handlOnClick={handleSigninUser} title={isSignin ? "Signin" : "Signup"} />
                {/* we render the SignupMsg with 2 props, that the text has a dependency on isSignin value */}
                <SignupMsg
                    text={isSignin ? "Not a user yet? Click to SignUp!" : "already have an account? Signin!"}
                    handleOnClick={handleIsSignin} />
            {/* we close the box!*/}
            </div>
            {/* we close the container!*/}
        </div>
    )
// here we end the component
}
// thanks