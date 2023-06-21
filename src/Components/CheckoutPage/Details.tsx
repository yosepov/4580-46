import React from "react";
import "./Details.css";
import PaymentPreceded from "./PaymentPreceded";
import { CardData } from "./PaymentForm";
import InputTemplate from "./InputTemplate";

interface Details {
  name: string;
  adress: { street: string; city: string; country: string; zipcode: string };
  price: number;
  cardData?: CardData;
  payment: () => void;
  adressF: () => void;
}

const Details = ({
  name,
  adress,
  price,
  cardData,
  adressF,
  payment,
}: Details) => {
  const hideCCNum = (cardNum?: string) => {
    if (!cardNum) return "**** **** **** 1234"
    const hiddenNums = "*".repeat(12);
    const lastFourDigits = cardNum.slice(-4);
    return formatCardNumber(hiddenNums + lastFourDigits);
  };

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
    <div className="detailsContainer">
      <div className="adressInfo">
        <div className="adressDetails">
          <h2>{name ? name : "Full Name"}</h2>
          <p>
            {adress.street ? adress.street : "Street"}
            <br />
            {adress.city ? adress.city : "City"}, {" "} 
            {adress.zipcode ? adress.zipcode : "12345"}
            <br />
            {adress.country ? adress.country : "Country"}
          </p>
        </div>
        <div className="adressBtn">
          <button onClick={adressF}>Edit</button>
        </div>
      </div>

      <div className="paymentInfo">
        <div className="infoDetails">
          <h2>Payment Info</h2>
          <p>{hideCCNum(cardData?.number)}</p>
          <p>{`${cardData?.expDate || "MM/YY"}, ${cardData?.cvv || "CVV"}`}</p>
        </div>
        <div className="paymentBtn">
          <button onClick={payment}>Edit</button>
        </div>
      </div>
      <div className="copun">
        <div className="copunInfo">
        <h2>Discount</h2>
        <p>Any copun code you have can be applied here:</p>
        </div>
        {/* <input type="text" placeholder="Your code here" /> */}
        <div className="CopunBtn">
        <InputTemplate label="Your Code Here" />
        <button className="applyBtn">APPLY</button>
        </div>
      </div>
      <div className="checkoutInfo">
        <h2>Checkout</h2>
        <p>
          Subtotal: ${price}
          <br />
          Shipping: FREE!
          <br />
          Discount: $0.00
        </p>
        <p className="totalPrice">Total: ${price}</p>
      </div>
      <div className="confirmBtn">
      <PaymentPreceded />
      </div>
    </div>
  );
};

export default Details;
