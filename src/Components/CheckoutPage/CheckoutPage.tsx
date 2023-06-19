import React from "react";
import "./CheckoutPage.css";
import Amount from "./Amount";

interface ProductsProps {}

const CheckoutPage = () => {
  return (
    <div className="checkoutContainer">
      <div className="checkoutBox">
        <div className="title">
          <h1>Checkout</h1>
        </div>
        <div className="products">sdfsdf</div>
        <div className="details">
          <Amount />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
