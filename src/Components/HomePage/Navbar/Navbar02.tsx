import React, { useState } from 'react';
import { styled as style } from '@mui/material/styles';
import './NavStyle.css';
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

  const handleErrorAlert = () => {
    setIsErrorAlertOpen(true);
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <h3 id='links' >Steal</h3>
          </div>
          <ul className="links">
            <li>
              <h3 id='links' onClick={() => handleNavigate("/guestPage")} >Home</h3>
            </li>
            <li>
              <h3 id='links' onClick={handleErrorAlert} >Blog</h3>
            </li>
            <li>
              <h3 id='links' onClick={handleErrorAlert} >Games</h3>
            </li>
            <li>
              <h3 id='links' onClick={handleErrorAlert} >Contact</h3>
            </li>
          </ul>
          <h4 className="action-btn" onClick={() => handleNavigate('/')}>
            Signin
          </h4>
          <div className="bars-btn" onClick={handleClick}>
            <i>{!isOpen ? <ViewWeekIcon /> : <CloseIcon />}</i>
          </div>
        </div>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <h3 id='links' onClick={() => handleNavigate("/guestPage")}>Home</h3>
            </li>
            <li>
              <h3 id='links' onClick={handleErrorAlert} >About</h3>
            </li>
            <li>
              <h3 id='links' onClick={handleErrorAlert} >Games</h3>
            </li>
            <li>
              <h3 id='links' onClick={handleErrorAlert} >Contact</h3>
            </li>
            <li>
              <h4 className="action-btn" onClick={() => handleNavigate('/')}>
                Signin
              </h4>
            </li>
          </ul>
        </div>
      </header>
      {isErrorAlertOpen && <ErrorAlert alertMessage='NOT SIGNEDIN' />}
    </>
  );
};

export default Navbar;
