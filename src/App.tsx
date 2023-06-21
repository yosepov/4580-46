import React from 'react';
import { SigninPage } from './Components/Signin/Signin';
import NavBar from './Components/NavBar/NavBar';
import { GameCard } from './Components/GameCards/GameCard';
import { GameCard02 } from './Components/GameCards/GameCard02';
import {CheckoutPage} from './Components/Checkout/CheckoutPage';

export const  App = () => {
  return (
    <>
    <NavBar />
    <CheckoutPage products={[]}/>
    {/* <SigninPage /> */}
    {/* <GameCard  home='https://warrock.papayaplay.com/warrock.do' 
    download='https://warrock.papayaplay.com/warrock.do?tp=download' 
    description='War Rock is a fast-paced, large-scale multiplayer first person shooter that combines old-school tactical combat with explosive vehicular warfare. Choose your profession and battle in close quarters combat, vehicular warfare and terrifying Zombie Survival encounters. Enlist in War Rock today!' 
    genres={['Action']} 
    imageUrl='https://www.indiroyunu.com/wp-content/uploads/2016/01/War-Rock-ekran-g%C3%B6r%C3%BCnt%C3%BCs%C3%BC-4.jpg' price={90} title='WarRock' titleImg='https://th.bing.com/th/id/R.552b7ca5bb28d1b6d0d96e15a67a3604?rik=2oH0hxL2NcxvXQ&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2010%2f02%2f03%2f3560134%2f0_WarRock.jpg&ehk=XT9Rf8Xnmlf7GBHE4Lrzhyf00dPz6O0hKsgr3Vini0Q%3d&risl=&pid=ImgRaw&r=0' 
    facebook='https://www.facebook.com/WarRockOfficial/' 
    instagram='#' twitter='https://twitter.com/WarRock_EU' 
    youtube='https://youtu.be/PxQddJvaoPY?t=13' 
    discord='https://.com/invite/warrock' /> */}
    </>
  );
}