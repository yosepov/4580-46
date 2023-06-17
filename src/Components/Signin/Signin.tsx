import React from 'react';
import './Signin.css'
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton';
import { SignUpLink } from '../SignupLink/SignUpLink';
export const SigninPage = () => {

    return (
        <div className='signinContainer'>
            <div className='signBox'>
                <h1 className='signinTitle'>Login</h1>
                <InputText placeholder='username' type='text' />
                <InputText placeholder='password' type='password' />
                <MainButton title='Signin' />
                <SignUpLink handleOnClick={()=>{}} text='not a user? Click to signup!' />
            </div>
        </div>
    )
}