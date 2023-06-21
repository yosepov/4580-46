import React from "react";
import "./NavBar.css";
import NavButton from "./NavbarButtons/NavbarButton";
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    }



    return (
        <div className="navContainer">
            <div className="navLogo">
                <span className="logoHeader">Steal</span>
            </div>
            <div className="navButtons">
                <span className="links" onClick={() => handleNavigate('/home')} >Home</span>
                <span className="links" onClick={() => handleNavigate('/store')} >Store</span>
                <span className="links" onClick={() => handleNavigate('/about')} >About</span>
                <span className="links" onClick={() => handleNavigate('/favorites')} >Favorites</span>
            </div>
            <div className="navAvatar">
                <img onClick={() => handleNavigate('/profile')} className="img" src="/avatar.jpg" alt="avatar" />
                <h3 onClick={() => handleNavigate('/signin')} >Signin</h3>
            </div>
        </div>
    );
};

export default NavBar;
