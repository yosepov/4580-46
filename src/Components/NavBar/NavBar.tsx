import React from "react";
import "./NavBar.css";
import NavButton from "./NavbarButtons/NavbarButton";
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logoutUser } from "../../utils/userSigninFunctions";
const NavBar = () => {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    }

    const handleLogout = () => {
        logoutUser()
        navigate('/signin');
    }
    const user = getCurrentUser();


    return (
        <div className="navContainer">
            <div className="navLogo">
                <span className="logoHeader">Steal</span>
            </div>
            <div className="navButtons">
                <span className="links" onClick={() => handleNavigate('/home')} >Home</span>
                <span className="links" onClick={() => handleNavigate('/store')} >Store</span>
                <span className="links" onClick={() => handleNavigate('/about')} >About</span>
                {user && <span className="links" onClick={() => handleNavigate('/favorites')} >Favorites</span>}
            </div>
            <div className="navAvatar">
                {user && <img onClick={() => handleNavigate('/profile')} className="img" src="/avatar.jpg" alt="avatar" />}
                <h3 onClick={user ? () => handleLogout() : () => handleNavigate('/signin')} >{user ? 'logout' : 'signin'}</h3>
            </div>
        </div>
    );
};

export default NavBar;
