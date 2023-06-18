import React from "react";
import { SigninPage } from "./Components/Signin/Signin";
import { Navbar } from "./Components/Navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <SigninPage />
    </>
  );
};
