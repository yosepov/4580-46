import React from 'react';
import './Signin.css'
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton';
import { SignupMsg } from '../Signin/SignupMsg';
import {useState} from "react";
export const SigninPage = () => {

    const [isSignedin, setIsSignin] = useState<boolean>(true);
    const [count, setCount] = useState<number>(1);


    const handleIsSignin = () => {
        setIsSignin(!isSignedin);
    }

    const handleCount = () => {
        setCount(count + 1)
    }

    return (
        <div className='signinContainer'>
            <div className='signBox'>
                <h1 className='signinTitle' onClick={() => console.log('wow')}>test</h1>
                <h1 className='signinTitle' onClick={handleCount}>{count}</h1>
                <h1 className='signinTitle'>{isSignedin ? "Login" : 'Signup'}</h1>
                <InputText placeholder='username' type='text' />
                <InputText placeholder='password' type='password' />
                {!isSignedin && <InputText placeholder='repassword' type='password'/>}
                <MainButton title={isSignedin ? "Signin" : "Signup"} />
                <SignupMsg text={isSignedin ? "Not a user yet? click here to Signup" : "already have an account? Signin"} handleOnClick={handleIsSignin}/>
            </div>
        </div>
    )
}