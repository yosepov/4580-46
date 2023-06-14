import React from 'react';
import './Signin.css'
import { InputText } from '../Form/Input/InputText';

export const SigninPage = () => {

    return (
        <div className='signinContainer'>
            <div className='signBox'>
                <h1 className='signinTitle'>Login</h1>
                <InputText placeholder='username' type='text' />
                <InputText placeholder='password' type='password' />
            </div>
        </div>
    )
}