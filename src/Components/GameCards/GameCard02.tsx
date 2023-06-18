import React, { useState } from "react";
import "./GameCard02.css";
import { Tilt } from "react-tilt";
import { GiPistolGun, GiCrossedPistols } from "react-icons/gi";
import { ImFacebook2, ImYoutube, ImInstagram, ImTwitter } from "react-icons/im";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineHome, AiOutlineDownload } from "react-icons/ai";

interface GameCard02Props {
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  genres: string[];
  titleImg: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  discord?: string;
  home: string;
  download: string;
}
const genres = ["Action", "Horror", "Adventure"];

export const GameCard02 = ({
  title,
  imageUrl,
  description,
  price,
  genres,
  titleImg,
  facebook,
  instagram,
  twitter,
  youtube,
  discord,
  home,
  download,
}: GameCard02Props) => {
  return (
    <div className="body">
      <div className="gameCardContainer">
        <Tilt className="tilt-card" options={{ max: 10, speed: 400 }}>
          <div
            className="card">
            <span className="span"></span>
            <div className="content">
              <h2 className="title">
                <span className="titkeSpan">
                  <img src={titleImg} className="titleImg" />
                </span>
                {title}
              </h2>
              <h6>
                {genres.map((genre, index) => (
                  <p key={index} className="game-card__genre">
                    <GiPistolGun /> {genre}
                  </p>
                ))}
              </h6>
              <div className="descriptionDiv">
                <p className="description">{description}</p>
              </div>
              <div className="icons">
                <a href={facebook} target="_blank">
                  <ImFacebook2 className="icon" />
                </a>
                <a href={twitter} target="_blank">
                  <ImTwitter className="icon" />
                </a>
                <a href={youtube} target="_blank">
                  <ImYoutube className="icon" />
                </a>
                <a href={instagram} target="_blank">
                  <ImInstagram className="icon" />
                </a>
                <a href={discord} target="_blank">
                  <BsDiscord className="icon" />
                </a>
                </div>
                <div className="lobbyIcons">
                  <a href={home} target="_blank">
                    <AiOutlineHome className="homeIcon" />
                  </a>
                  <a href={download} target="_blank">
                    <AiOutlineDownload className="homeIcon" />
                  </a>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

 {/* <GameCard02 facebook='https://www.facebook.com/WarRockOfficial/'  home='https://warrock.papayaplay.com/warrock.do' instagram='#' download='https://warrock.papayaplay.com/warrock.do?tp=download' twitter='https://twitter.com/WarRock_EU' youtube='https://youtu.be/PxQddJvaoPY?t=13' discord='https://discord.com/invite/warrock'   description='War Rock is a fast-paced, large-scale multiplayer first person shooter that combines old-school tactical combat with explosive vehicular warfare. Choose your profession and battle in close quarters combat, vehicular warfare and terrifying Zombie Survival encounters!.' genres={['Action']} imageUrl='https://www.indiroyunu.com/wp-content/uploads/2016/01/War-Rock-ekran-g%C3%B6r%C3%BCnt%C3%BCs%C3%BC-4.jpg' price={90} title='WarRock' titleImg='https://th.bing.com/th/id/R.552b7ca5bb28d1b6d0d96e15a67a3604?rik=2oH0hxL2NcxvXQ&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2010%2f02%2f03%2f3560134%2f0_WarRock.jpg&ehk=XT9Rf8Xnmlf7GBHE4Lrzhyf00dPz6O0hKsgr3Vini0Q%3d&risl=&pid=ImgRaw&r=0'   /> */}
