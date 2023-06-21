import React from 'react'
import { styled as style } from '@mui/material/styles';
import './style.css';
import Navbar from './Navbar/Navbar02';
import Home from './HomeHead.tsx/HomeHead';
import Main from './Main/Main';
import { GameCard02 } from '../GameCards/GameCard02';
import Card from './Cards/Card';


const Container = style('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });
  


const HomePage = () => {
  return (
    <div className="homePage">

    
  <div className='head'>
    <div className="navbar">
    <Navbar/>
    </div>
    <div className="home">
      <Home />
    </div>
  </div>
  <div className="mainPage">
    <Main />
   
  </div>
  </div>
  )
}

export default HomePage