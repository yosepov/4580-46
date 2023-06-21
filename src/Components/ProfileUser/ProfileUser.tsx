
import "./profileUser.css";

import { Likes } from "../Likes/Likes";
import React from "react";

  interface ProfileUserProps {
    img: string;
    username: string;
    nickname: string;
    country: string;
    email: string;
  }

export const ProfileUser =({img,country , username, nickname, email}: ProfileUserProps) => {
    // destructurisation props

  return ( 
    <>
    <div className="block-page">
      <div className="user-info">
        
        <img
          src="./assets/avatar.jpeg"
          width={200}
          alt="avatar"
          className="avatar"
        />
        <h1>{img}</h1>
        <div className="about-user">
        <h2>Name: {username}</h2>
        <p className="nikname">{nickname}</p>
        <p className="country">{country}</p>
        <p className="country">{email}</p>
        </div>
        <h2 className="level">
          Lavel: <span>6</span>
        </h2>
        <button>Edit profile</button>
      </div>
      <div className="main">
        <ul className="list-games">
      
          <li >
            <img
              width={100}
              src="./assets/sims.jpeg"
              alt="Sims 4 photo"
              className="game-avatar"
            />
           
            <p className="name-game">Sims 4</p>
            <p className="last-activity">1 day ago </p>
            <Likes/>
            <button className="Play-button">Play</button>
          </li>
         
          <li>
            <img
              width={100}
              src="./assets/gta5.jpeg"
              alt="GTA5 photo"
              className="game-avatar"
            />
            <p className="name-game">GTA 5</p>
            <p className="last-activity">5 day ago </p>
            <Likes/>
            <button className="Play-button">Play</button>
          </li>
          <li>
            <img
              width={100}
              src="./assets/warcraft.jpeg"
              alt="Warkraft photo"
              className="game-avatar"
            />
            <p className="name-game">Warkraft</p>
            <p className="last-activity">1 hours ago </p>
            <Likes/>
            
            <button className="Play-button">Play</button>
          </li>
          <li>
            <img
              width={100}
              src="./assets/1.jpeg"
              alt="Warkraft photo"
              className="game-avatar"
            />
            <p className="name-game">Songs of Conquest</p>
            <p className="last-activity">13 hours ago </p>
            <Likes/>
            <button className="Play-button">Play</button>
          </li>
          <li>
            <img
              width={100}
              src="./assets/2.png"
              alt="Warkraft photo"
              className="game-avatar"
            />
            <p className="name-game">Diablo IV (4)</p>
            <p className="last-activity">6 hours ago </p>
            <Likes/>
            <button className="Play-button">Play</button>
          </li>
          <li>
            <img
              width={100}
              src="./assets/3.jpeg"
              alt="Warkraft photo"
              className="game-avatar"
            />
            <p className="name-game">Assassin's Creed Mirage</p>
            <p className="last-activity">9 hours ago </p>
            <Likes/>
            <button className="Play-button">Play</button>
          </li>
         
        
        </ul>
        <div className="paremetrs-user">
          <h2 className="activity">Ofline </h2>
          <ul className="paremetrs">
            <li className="nav-parametrs">
              <a href="#">Achive</a>
            </li>
            <li className="nav-parametrs">
              <a href="#">
                Games 
              </a>
            </li>
            <li className="nav-parametrs">
              <a href="#">
                Screen 
              </a>
            </li>
            <li className="nav-parametrs">
              <a href="#">
              Inventory
              </a>
            </li>
            <li className="nav-parametrs">
              <a href="#">
              Video
              </a>
            </li>
          </ul>

          <ul className="friends">
            <li>
              <img
                width={100}
                src="./assets/User234.jpeg"
                alt="avatar-photo"
                className="friends"
              />
              <p className="name">Olia</p>
              <p className="online"></p>
            </li>
            <li>
              <img
                width={100}
                src="./assets/Andriy.jpeg"
                alt="avatar-photo"
                className="friends"
              />
              <p className="name">Jonh</p>
              <p className="online">Online</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProfileUser;
