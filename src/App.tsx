import React from 'react';
import { SigninPage } from './Components/Signin/Signin';
import {GameCard} from "./Components/Card/GameCard";

export const  App = () => {
  return (
    <>
      <GameCard review={95} title={'Picture'} imageUrl={'https://image.api.playstation.com/cdn/UP0002/CUSA04762_00/LHc8qTz6JmLL46EdNWYEvqZEsIEYCbhy.png'} description={'This game is very very very very  very very very  very very very very great'} price={80} genres={['Action, Adventure']} />
  <SigninPage />
    </>
  );
}