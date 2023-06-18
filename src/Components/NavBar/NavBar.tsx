import React from 'react'
import './NavBar.css'
import '../Buttons/MainButton/MainButton'
import { MainButton } from '../Buttons/MainButton/MainButton'

// interface NavBarProps {
//     type: string;
//     placeholder: string;
// }

export const NavBar = () => {
    return <nav className='navBar'>
            <h1> STEAL</h1>
            <MainButton title='Signin' />
            <MainButton title='about' />
            <MainButton title='Library' />
            <MainButton title='Store' />
            <MainButton title='Favorites' />
        </nav>
}