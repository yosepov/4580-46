import React, { useEffect, useState } from "react";
import "./CheckoutPage.css";
import Amount from "./Amount";
import Button from "@mui/material/Button";
import PaymentForm, { CardData } from "./PaymentForm";
import Details from "./Details";
import GameItem from "./GameItem";
import AdressForm from "./AdressForm";

const CheckoutPage = () => {
  const [payment, setPayment] = useState(false);
  const handlePayment = () => {
    setPayment(!payment);
  };

  const [adress, setAdress] = useState(false);
  const handleAdress = () => {
    setAdress(!adress);
  };

  const [cardData, setCardData] = useState<CardData>();
  useEffect(() => {
    console.log(cardData);
  }, [cardData]);

  const [userAdress, setUserAdress] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    country: "",
    zipcode: "",
  });

  const gamesArr = [
    {
      id: 1,
      gameName: "Fortnite",
      gamePrice: "10",
      gameDesc:
        "Fortnite is a third-person shooter game where up to 100 players compete to be the last person or team standing. You can compete alone or join a team of up to four. You progress through the game by exploring the island, collecting weapons, building fortifications and engaging in combat with other players.",
      gameImg:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      gameName: "Call of Duty: Warzone",
      gamePrice: "20",
      gameDesc:
        "Warzone allows online multiplayer combat among 150 players and features both cross-platform play and cross-platform progression between the three aforementioned titles. Call of Duty: Warzone. Developer(s) Raven Software.",
      gameImg:
        "https://image.api.playstation.com/vulcan/ap/rnd/202211/1717/6Of7qTgej2FBAKH0xZ1ZFEi7.png",
    },
    {
      id: 3,
      gameName: "CS:GO",
      gamePrice: "30",
      gameDesc:
        "Counter-Strike: Global Offensive is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series",
      gameImg:
        "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1683566799",
    },
    {
      id: 4,
      gameName: "CS:GO",
      gamePrice: "30",
      gameDesc:
        "Counter-Strike: Global Offensive is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series",
      gameImg:
        "https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1683566799",
    },
  ];

  return (
    <div className="checkoutContainer">
      <div className="checkoutBox">
        <div className="title">
          <h1>Checkout</h1>
        </div>
        <div className="mainBox">
          {payment ? (
            <PaymentForm handleSubmit={(data) => setCardData(data)} />
          ) : adress ? (
            <AdressForm updateUserAdress={setUserAdress} />
          ) : (
            gamesArr.map((g) => (
              <GameItem key={g.id}
                gameName={g.gameName}
                gamePrice={g.gamePrice}
                gameImg={g.gameImg}
                gameDesc={g.gameDesc}
              />
            ))
          )}
        </div>
        <div className="details">
          <Details
            cardData={cardData}
            adressF={handleAdress}
            payment={handlePayment}
            name={userAdress.firstName + userAdress.lastName}
            adress={{
              street: userAdress.street,
              city: userAdress.city,
              country: userAdress.country,
              zipcode: userAdress.zipcode,
            }}
            price={70}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
