import React from "react";
import "./NavBar.css";
import NavButton from "./NavbarButtons/NavbarButton";
import { Link, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="navLogo">
        <Link to="/" className="noUnderline">
          <span className="logoHeader">Steal</span>
        </Link>
      </div>
      <div className="navButtons">
        <Link to="/StorePage">
          <NavButton text={"Store"} />
        </Link>
        <Link to="/LibraryPage">
          <NavButton text={"Library"} />
        </Link>
        <Link to="/FavoritesPage">
          <NavButton text={"Favorites"} />
        </Link>
        <Link to="/AboutPage">
          <NavButton text={"About"} />
        </Link>
      </div>
      <div className="navAvatar">
        <Link to="/ProfileUser">
          <img className="img" src="/avatar.jpg" alt="avatar" />
        </Link>
        <Link to="/SigninPage">
          <NavButton text={"Sign In"} />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
