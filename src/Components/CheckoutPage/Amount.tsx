import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Amount = () => {
  const [amount, setAmount] = useState(1);
  const increaseAmount = () => {
    setAmount(amount + 1);
  };
  const decreaseAmount = () => {
    amount > 1 && setAmount(amount - 1);
  };

  return (
    <>
      <h1>quantity:</h1>
      <RemoveIcon onClick={decreaseAmount} style={{ fontSize: "small" }} />
      <span className="amount">{amount}</span>
      <AddIcon onClick={increaseAmount} style={{ fontSize: "small" }} />
    </>
  );
};

export default Amount;
