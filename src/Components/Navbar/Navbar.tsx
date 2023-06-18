import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <a className="logo" href="index.html">
        <span className="">Steal</span>
      </a>

      <div className="divNbar">
        <ul className="ulNbar">
          <li className="liNbar">
            <a className="aNbar" href="#">
              store
            </a>
          </li>
          <li className="liNbar">
            <a className="aNbar" href="index.html">
              Library
            </a>
          </li>
          <li className="liNbar">
            <a className="aNbar" href="index.html">
              favorites
            </a>
          </li>
          <li className="liNbar">
            <a className="aNbar" href="index.html">
              about
            </a>
          </li>
          <li className="liNbar">
            <a className="aNbar" href="index.html">
              login
            </a>
          </li>
        </ul>
      </div>

      {/* <div id="mobile">
        <GiHamburgerMenu />

        <FaTimes />
      </div> */}
    </nav>
  );
};
