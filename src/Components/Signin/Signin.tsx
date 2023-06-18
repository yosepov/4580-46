import React from 'react';
import './Signin.css'
import { InputText } from '../Form/Input/InputText';
import { MainButton } from '../Buttons/MainButton/MainButton'
import { SignupButton } from '../Buttons/SignupButton/SignupButton';
import { NavBar } from '../NavBar/NavBar';
import { GameCard } from '../GameCard/GameCard';

export const SigninPage = () => {
    
    return (  
        <div className='signinContainer'>
            <div className='navBox'>
                <NavBar />
            </div>
            <div className='signBox'>
                <h1 className='signinTitle'>Login</h1>
                <InputText placeholder='username' type='text' />
                <InputText placeholder='password' type='password' />
                <MainButton title='Signin' />
                <SignupButton handleOnClick={() => alert('hi')} text="Not a user? Click to signup!"/>
                {/* <GameCard description='hjjhjhj' geners={['action','']} imageUrl='https://i.scdn.co/image/ab6761610000e5ebae9c8d8bb91a1030ef1bc223' price={35} title='game' /> */}
            </div>
        </div>
    )
}