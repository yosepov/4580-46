import React, { FormEvent, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./PaymentForm.css";
import Button from "@mui/material/Button";
import InputTemplate from "./InputTemplate";

interface InputInfo {
  handleSubmit: (data: any) => void;
}

const PaymentForm = ({ handleSubmit }: InputInfo) => {
  const [nameCard, setNameCard] = useState("CARDHOLDER NAME");
  const [numCard, setNumCard] = useState("");
  const [expDateCard, setExpDate] = useState("MM/YY");
  const [cvvCard, setCvv] = useState("CVV");

  const [cardData, setCardData] = useState<CardData>({
    name: "CARDHOLDER NAME",
    number: "",
    expDate: "MM/YY",
    cvv: "CVV",
  });

  const handleClick = () => {
    setCardData({
    ...cardData,
    name: nameCard,
    number: numCard,
    expDate: expDateCard,
    cvv: cvvCard,
    });
  };

  useEffect(() => {
    handleSubmit(cardData);
  }, [cardData])

  function formatCardNumber(numCard: string) {
    const chars = [];
    for (let i = 1; i < numCard.length + 1; i++) {
      chars.push(numCard[i - 1]);
      if (i % 4 === 0) {
        chars.push(" ");
      }
    }
    return chars.join("");
  }

  return (
    <div className="gridContainer">
    <div className="paymentContainer">
      <div className="CC">
        <div className="bankTitle">
          <span className="bankTitle">BANK</span>
        </div>
        <div className="cardImgs">
          <div className="cardChip">
            <img src="https://usa.visa.com/dam/VCOM/regional/na/us/pay-with-visa/images/card-chip-800x450.png" />
          </div>
          <div className="cardContactless">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56">
              <path
                fill="none"
                stroke="#f9f9f9"
                strokeWidth="6"
                strokeLinecap="round"
                d="m35,3a50,50 0 0,1 0,50M24,8.5a39,39 0 0,1 0,39M13.5,13.55a28.2,28.5
0 0,1 0,28.5M3,19a18,17 0 0,1 0,18"
              />
            </svg>
            {/* <WifiIcon /> */}
          </div>
        </div>
        <div className="cardDetails">
          <div className="cardNum">
            <span className="cardNumSpan">
              {cardData.number
                ? formatCardNumber(cardData.number)
                : "1234 5678 9012 3456"}
            </span>
          </div>
          <div className="moreInfo">
            <span>{cardData.name ? cardData.name : "cardholder name"}</span>
            <span>{cardData.expDate ? cardData.expDate : "MM/YY"}</span>
            <span>{cardData.cvv ? cardData.cvv : "CVV"}</span>
          </div>
        </div>
      </div>
      <div className="inputsContainer">
        <InputTemplate
          label="Cardholder Name"
          onChange={(e) => setNameCard(e.target.value)}
        />
        <InputTemplate
          label="Card Number"
          onChange={(e) => setNumCard(e.target.value)}
        />
        <InputTemplate
          label="Exp Date"
          onChange={(e) => setExpDate(e.target.value)}
        />
        <InputTemplate label="CVV" onChange={(e) => setCvv(e.target.value)} />
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          size="small"
          onClick={handleClick}
        >
          Confirm
        </Button>
      </div>
    </div>
    </div>
  );
};
export default PaymentForm;

export type CardData = {
  name: string;
  number: string;
  expDate: string;
  cvv: string;
};
