import React from 'react';
import { SigninPage } from './Components/Signin/Signin';
import { GameCard } from './Components/GameCard/GameCard';






export const App = () => {
  const img = " https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1685123076"

  return (
    <>
  {/* <SigninPage /> */}
  <GameCard title={'APEX'} imageUrl={img} description={'Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.'} price={50} geners={['Action, Adventure']}/>
    </>
  );
}