import React, { useState } from 'react';
import { styled as style } from '@mui/material/styles';
import './Signednav.css';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import CloseIcon from '@mui/icons-material/Close';
import { SigninPage } from '../../Signin/Signin';
import { useNavigate } from 'react-router';
import ErrorAlert from '../NotSigned/ErrorAlert/ErrorAlert';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };
  const [selectedImage, setSelectedImage] = useState(false);

  const handleImageClick = () => {
    setSelectedImage(!selectedImage);
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <h3 id='links' onClick={() => handleNavigate("/home")}  >Steal</h3>
          </div>
          <ul className="links">
            <li>
              <h3 id='links' onClick={() => handleNavigate("/home")} >Home</h3>
            </li>
            <li>
              <h3 id='links' onClick={() => handleNavigate("/blog")}>Blog</h3>
            </li>
            <li>
              <h3 id='links'>Contact</h3>
            </li>
          </ul>
          <div className="profileImg"  >
          <img src='./avatar.jpg' />
          </div>
          <div className="bars-btn" onClick={handleClick}>
            <i>{!isOpen ? <ViewWeekIcon /> : <CloseIcon />}</i>
          </div>
        </div>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <h3 id='links' onClick={() => handleNavigate("/home")}>Home</h3>
            </li>
            <li>
              <h3 id='links' onClick={() => handleNavigate("/blog")}>Blog</h3>
            </li>
            <li>
              <h3 id='links'>Contact</h3>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
