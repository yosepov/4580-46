import "./AddressForm.css";
import React, { useState } from "react";
import InputTemplate from "./InputTemplate";
import Button from "@mui/material/Button";

// interface addressProps {
//   firstName: string;
//   updateFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
interface addressProps {
  updateUserAddress: (a: any) => void;
}

const AddressForm = ({ updateUserAddress }: addressProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleClick = () => {
    updateUserAddress({
      firstName: firstName + " ",
      lastName,
      street,
      city,
      country,
      zipcode,
    });
  };

  return (
    <div className="addressContainer">
      <div className="addressFContainer">
        <div className="col1">
          <InputTemplate
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputTemplate
            label="Address"
            onChange={(e) => setStreet(e.target.value)}
          />
          <InputTemplate
            label="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="col2">
          <InputTemplate
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputTemplate
            label="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <InputTemplate
            label="Zipcode"
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
      </div>
      <div className="addressFormBtn">
        <Button variant="contained" size="small" onClick={handleClick}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddressForm;
