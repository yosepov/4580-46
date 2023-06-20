import React from 'react';
import { SigninPage } from './Components/Signin/Signin';
import NavBar from './Components/NavBar/NavBar';
import { CheckoutPage } from './Components/CheckoutPage/CheckoutPage';

export const  App = () => {
  return (
    <>
    <NavBar />
  {/* <SigninPage /> */}
  <CheckoutPage Products={[]}/>
  </>
  );
}