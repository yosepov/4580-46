import React, { useState } from 'react';
import './Signin.css'
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton';
import { SignupMsg } from '../Signin/SignupMsg';
export const SigninPage = () => {
    // Logic for the component
    const [isSignin, setIsSignin] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");

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

    const handleSigninUser = () => {
        if(isSignin){
            // ... if user is in database / localstorage
        }else{
            if(password === rePassword){
                // push user to database / localstorage
                alert("Signedin!")
            }else{
                alert("Passwords not match")
            }
        }
    }
    

    return (
        <div className='signinContainer'>
            <div className='signBox'>
                <h1 className='signinTitle'>{isSignin ? "Login" : "Signup"}</h1>
                <InputText handleOnChange={handleUsername}  placeholder='username' type='text' />
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