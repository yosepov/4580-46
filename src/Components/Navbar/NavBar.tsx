import React from 'react';
import {NavButton} from "./NavBar Buttons/NavButton";
import './navBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="avatar">
                <img src="/avatar.png" alt="Avatar" />
            </div>
            <div className="buttons">
                <NavButton text={'Sign In'} />
                <NavButton text={'About'} />
                <NavButton text={'Library'} />
                <NavButton text={'Store'} />
                <NavButton text={'Favorites'} />
            </div>
        </div>
    );
};

export default NavBar;