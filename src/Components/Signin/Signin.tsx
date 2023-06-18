import React from 'react';
import './Signin.css'
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton';
import { SignupMsg } from '../Signin/SignupMsg';
export const SigninPage = () => {

    const SignupPrompt = "Not a user yet? Click to SignUp!"

    return (
        <div className='signinContainer'>
            <div className='signBox'>
                <h1 className='signinTitle'>Login</h1>
                <InputText placeholder='username' type='text' />
                <InputText placeholder='password' type='password' />
                <MainButton title='Signin' />
                <SignupMsg text={SignupPrompt} handleOnClick={() => console.log("signup")}/>
            </div>
        </div>
    )
}