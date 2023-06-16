import React from 'react';
import { SigninPage } from './Components/Signin/Signin';
import { GameCard } from './Components/GameCard/GameCard';

const img = "https://cdn.akamai.steamstatic.com/steam/apps/648800/capsule_616x353.jpg?t=1655744208"
export const App = () => {
  return (
    <>
      <GameCard description={`Raft throws you and your friends into an epic oceanic adventure!`} geners={["Survival, ", "Adventure, ", "Indie"]} imageUrl={img} price={21} title='Counter strike global offensive' />
    </>
  );
}