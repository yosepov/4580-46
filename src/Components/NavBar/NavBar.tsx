import React from "react";
import "./NavBar.css";
import NavButton from "./NavbarButtons/NavbarButton";

const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="navLogo">
        <span className="logoHeader">Steal</span>
      </div>
      <div className="navButtons">
        <NavButton text={"Store"} />
        <NavButton text={"Library"} />
        <NavButton text={"Favorites"} />
        <NavButton text={"About"} />
      </div>
      <div className="navAvatar">
        <img className="img" src="/avatar.jpg" alt="avatar" />
        <NavButton text={"Sign In"} />
      </div>
    </div>
  );
};

export default NavBar;
