import React from "react";
import "./GameCard.css";
import { GiPistolGun, GiCrossedPistols } from "react-icons/gi";
import { ImFacebook2, ImYoutube, ImInstagram, ImTwitter } from "react-icons/im";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineHome, AiOutlineDownload } from "react-icons/ai";
import { Tilt } from 'react-tilt';

interface GameCardProps {
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
  video: string;
}

export const GameCard = ({
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
  video,
}: GameCardProps) => {
  return (
    <>
      <div className="body">
        <div className="card-container">
<Tilt className="tilt-card" options={{ max: 10, speed: 400 }}>
          <div className="card">
      
    
            <div className="content">
              <div className="image-container">
                <img src={imageUrl} />
              </div>

              <div className="game-price">${price}</div>
              <hr />

              <div className="game-genres">
                <div className="game-card__genres">
                  {genres.map((genre, index) => (
                    <p key={index} className="game-card__genre">
                      <GiPistolGun /> {genre}
                    </p>
                  ))}
                </div>
              </div>

              <div className="card-title">{title}</div>
              <div className="titleImage">
                <img src={titleImg} />
              </div>
            </div>
            <div className="card-description">
              <p className="descriptionTitle">
                <GiCrossedPistols className="titleicon" /> {title}{" "}
                <GiCrossedPistols className="titleicon" />
              </p>
              <p>{description}</p>
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
            
            <div className="video">
              <iframe src={video} title="Warrock"></iframe>
            </div>
          </div>
</Tilt>
        </div>
      </div>
    </>
  );
};

  {/* <GameCard  home='https://warrock.papayaplay.com/warrock.do' download='https://warrock.papayaplay.com/warrock.do?tp=download' description='War Rock is a fast-paced, large-scale multiplayer first person shooter that combines old-school tactical combat with explosive vehicular warfare. Choose your profession and battle in close quarters combat, vehicular warfare and terrifying Zombie Survival encounters. Enlist in War Rock today!' genres={['Action']} imageUrl='https://www.indiroyunu.com/wp-content/uploads/2016/01/War-Rock-ekran-g%C3%B6r%C3%BCnt%C3%BCs%C3%BC-4.jpg' price={90} title='WarRock' titleImg='https://th.bing.com/th/id/R.552b7ca5bb28d1b6d0d96e15a67a3604?rik=2oH0hxL2NcxvXQ&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2010%2f02%2f03%2f3560134%2f0_WarRock.jpg&ehk=XT9Rf8Xnmlf7GBHE4Lrzhyf00dPz6O0hKsgr3Vini0Q%3d&risl=&pid=ImgRaw&r=0' facebook='https://www.facebook.com/WarRockOfficial/' instagram='#' twitter='https://twitter.com/WarRock_EU' youtube='https://youtu.be/PxQddJvaoPY?t=13' discord='https://discord.com/invite/warrock' /> */}
