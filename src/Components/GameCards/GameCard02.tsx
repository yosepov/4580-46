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
