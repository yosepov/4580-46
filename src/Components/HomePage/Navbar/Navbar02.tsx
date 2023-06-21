import React, { useState } from 'react';
import { styled as style } from '@mui/material/styles';
import './NavStyle.css';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import CloseIcon from '@mui/icons-material/Close';
import { SigninPage } from '../../Signin/Signin';
import Blog from '../Blog';

const NavbarContainer = style('div')({
  // Define your navbar container styles here
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignin, setIsSignin] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleIsSignin = () => {
    setIsSignin(!isSignin);
  };

  const handleSigninToggle = () => {
    setIsSignin(!isSignin);
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <a href="#">Steal</a>
          </div>
          <ul className="links">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="http://localhost:3000/blog">Blog</a>
            </li>
            <li>
              <a href="games">Games</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
          <a className="action-btn" onClick={handleIsSignin}>
            Signin
          </a>
          <div className="bars-btn" onClick={handleClick}>
            <i>{!isOpen ? <ViewWeekIcon /> : <CloseIcon />}</i>
          </div>
        </div>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="games">Games</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
            <li>
            <a className="action-btn" onClick={handleIsSignin}>
            Signin
          </a>
            </li>
          </ul>
        </div>
        <div className={`signinDiv ${isSignin ? 'open' : ''}`}>
          <SigninPage handleSigninToggle={handleSigninToggle} />
        </div>
      </header>
    </>
  );
};

export default Navbar;
