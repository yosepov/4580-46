import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import NavButton from "./NavbarButtons/NavbarButton";

const NavBar = () => {

  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="navContainer">
      <div className="navLogo">
        <span onClick={() => handleNavigation('/')} className="logoHeader">Steal</span>
      </div>
      <div className="navButtons">
        <NavButton path="/store" onClick={() => handleNavigation('/store')} text={"Store"} />
        <NavButton path="/library" onClick={() => handleNavigation('/library')} text={"Library"} />
        <NavButton path="/favorite" onClick={() => handleNavigation('/favorite')}  text={"Favorites"} />
        <NavButton path="/about" onClick={() => handleNavigation('/about')} text={"About"} />
      </div>
      <div className="navAvatar">
        <img onClick={() => '/userprofile'} className="img" src="/avatar.jpg" alt="avatar" />
        <NavButton path="/signin" onClick={() => '/signin'} text={"Sign In"} />
      </div>
    </div>
  );
};

export default NavBar;
