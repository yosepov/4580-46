
import React, { useState } from 'react';
import './Signin.css'
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton';
import { SignupMsg } from '../Signin/SignupMsg';
import { UserType } from '../Types/UserType';
export const SigninPage = () => {
    // Logic for the component
    const [isSignin, setIsSignin] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");

    const getAllUsers = () => {
        const users = localStorage.getItem('users');
        if (users) {
            return JSON.parse(users) as UserType[];
        } else {
            return []
        }
    }

    const getCurrentUser = () => {
        const user = localStorage.getItem('currentUser');
        if (user) {
            return JSON.parse(user) as UserType
        } else {
            return null
        }
    }


    const logoutUser = () => {
        localStorage.setItem('currentUser', 'null')
    }

    const setCurrentUser = (user: UserType) => {
        const userStr = JSON.stringify(user)
        localStorage.setItem('currentUser', userStr)
    }

    const setUsers = (users: UserType[]) => {
        const usersStr = JSON.stringify(users)
        localStorage.setItem('users', usersStr)
    }

    const updateUsers = (user: UserType) => {
        const users = getAllUsers();
        users.push(user);
        return users;
    }

    const createNewUser = (user: UserType) => {
        const users = updateUsers(user);
        setUsers(users);
        setCurrentUser(user);
    }

    const handleIsSignin = () => {
        setIsSignin(!isSignin);
    }

    const handleUsername = (value: string) => {
        setUsername(value);
    }

    const handlePassword = (value: string) => {
        setPassword(value)
    }

    const handleRePassword = (value: string) => {
        setRePassword(value)
    }

    const checkUserLogin = (users: UserType[]) => {
        for (const user of users) {
            if (user.username === username && user.password === password) {
                return true
            }
        }
        return false
    }

    const checkUserSignup = (users: UserType[]) => {
        for (const user of users) {
            if (user.username === username) {
                return false
            }
        }
        return true
    }

    const handleSigninUser = () => {
        const users = getAllUsers()
        if (isSignin) {
            const isOkay = checkUserLogin(users);
            if (isOkay) {
                const newUser = { username, password } as UserType
                setCurrentUser(newUser)
                alert('Signedin!')
            } else {
                alert('Incorrect username or password')
            }
        } else {
            if (password === rePassword) {
                const isOkay = checkUserSignup(users);
                if (isOkay) {
                    const newUser = { username, password } as UserType
                    createNewUser(newUser);
                    alert('User created succesfully!')
                } else {
                    alert('User already exists!')
                }
            } else {
                alert("Passwords not match")
            }
        }
    }


    return (
        <div className='signinContainer'>
            <div className='signBox'>
                <h1 className='signinTitle'>{isSignin ? "Login" : "Signup"}</h1>
                <InputText handleOnChange={handleUsername} placeholder='username' type='text' />
                <InputText handleOnChange={handlePassword} placeholder='password' type='password' />
                {!isSignin && <InputText handleOnChange={handleRePassword} placeholder='repassword' type='password' />}
                <MainButton handlOnClick={handleSigninUser} title={isSignin ? "Signin" : "Signup"} />
                <SignupMsg
                    text={isSignin ? "Not a user yet? Click to SignUp!" : "already have an account? Signin!"}
                    handleOnClick={handleIsSignin} />
            </div>
        </div>
    )
}