import React from "react";
import "./NavBar.css";
import NavButton from "./NavbarButtons/NavbarButton";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import VideogameAssetTwoToneIcon from '@mui/icons-material/VideogameAssetTwoTone';


const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="navLogo">
        <VideogameAssetTwoToneIcon style={{ fontSize: '3rem' }} className="gameIcon"/>
        <span className="logoHeader">Steal</span>
      </div>
      <div className="navButtons">
        <NavButton text={"Store"} />
        <NavButton text={"Library"} />
        <NavButton text={"Favorites"} />
        <NavButton text={"About"} />
      </div>
      <div className="navAvatar">
        <img onClick={() => '/userprofile'} className="img" src="/avatar.jpg" alt="avatar" />
        <NavButton text={"Sign In"} />
      </div>
    </div>
  );
};

export default NavBar;
