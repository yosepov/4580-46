import React from 'react';
import { SigninPage } from './Components/Signin/Signin';
import NavBar from "./Components/Navbar/NavBar";

export const  App = () => {
  return (
      <>
      <NavBar />
      <SigninPage />
    </>
  );
}