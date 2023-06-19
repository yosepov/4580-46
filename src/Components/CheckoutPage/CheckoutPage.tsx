import React from "react";
import "./CheckoutPage.css";
import Amount from "./Amount";
import Payment from "./Payment";
import BasicModal from "./Payment";

interface ProductsProps {}

const CheckoutPage = () => {
  return (
    <div className="checkoutContainer">
      <div className="checkoutBox">
        <div className="title">
          <h1>Checkout</h1>
        </div>
        <div className="products">sdfsdddf</div>
        <div className="details">
          <BasicModal />
          <Amount />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
