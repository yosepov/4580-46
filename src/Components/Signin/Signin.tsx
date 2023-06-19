import React, { useState } from 'react';
import './Signin.css'
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton';
import { SignupMsg } from '../Signin/SignupMsg';
export const SigninPage = () => {


    const [isSignin, setIsSignin] = useState<boolean>(false);


    const handleIsSiginin = () => {
        setIsSignin(!isSignin);
        console.log(isSignin);
    }





    return (
        <div className='signinContainer'>
            <div className='signBox'>
    
                <h1 className='signinTitle'>{isSignin ? "Login" : "Signup"}</h1>
                <InputText placeholder='username' type='text' />
                <InputText placeholder='password' type='password' />
                {!isSignin && <InputText placeholder='paswword' type='password' />}
                <MainButton title={isSignin ? 'Signin' : "signup" }/>
                <SignupMsg text={isSignin ? "Not a user yet? Click to SignUp!": "already jave an accouny? signin!"} handleOnClick={handleIsSiginin} />
            </div>
        </div>
    )
}