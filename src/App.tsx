import React from "react";
import { Signin } from "./Components/Signin/Signin";
import { NavBar } from "./Components/NavBar/NavBar";
import { HomePage } from "./HomePage/HomePage";
import { StorePage } from "./StorePage/StorePage";
import { LibraryPage } from "./LibraryPage/LibraryPage";
import { FavoritesPage } from "./FavoritesPage/FavoritesPage";
import { AboutPage } from "./AboutPage/AboutPage";
import { ProfileUser } from "./Components/ProfileUser/ProfileUser";
import {Signup} from "./Components/signUp/SignUp";
import { Routes, Route } from "react-router-dom";
import {ForgotPassword} from './ForgotPassword/ForgotPassword';
import { ErrorPage} from './ErrorPage/ErrorPage'

export const App = () => {
  return (
















    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="StorePage" element={<StorePage />} />
        <Route path="LibraryPage" element={<LibraryPage />} />
        <Route path="FavoritesPage" element={<FavoritesPage />} />
        <Route path="AboutPage" element={<AboutPage />} />
        <Route path="AboutPage" element={<AboutPage />} />
        <Route
          path="ProfileUser"
          element={
            <ProfileUser
              img=""
              country="Israel"
              nickname="Wild"
              username="Ilia"
              email="Bezlikii@gmail.com"
            />
          }
        />
        <Route path="SigninPage" element={<Signin />} />
        <Route path="SignupPage" element={<Signup />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
          {/* loading component */}
      </Routes>
    </>
  );
};
