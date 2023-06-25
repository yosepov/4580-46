import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../Components/HomePage/Navbar/Navbar02";
import { SigninPage } from "../Components/Signin/Signin";
import { NotSigned } from "../Components/HomePage/NotSigned/NotSigned";
import Blog from "../Components/HomePage/Signedin/Blog";
import SignedNav from "../Components/HomePage/Signedin/SignedNav";
import Home from "../Components/HomePage/Home/Home";




export const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <SigninPage />
      </>
    ),
    children: [
      {
        path: "/guestPage",
        element: (
          <>
            <NotSigned />
          </>
        ),
      },
    ],
  },
  {
    path: "/home",
    element: (
      <>
      <SignedNav />
      <Outlet />
        < Home/>
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
      <SignedNav />
      <Outlet />
        < Blog/>
      </>
    ),
  }
]);
