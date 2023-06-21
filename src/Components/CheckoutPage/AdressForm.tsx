import "./AdressForm.css";
import React, { useState } from "react";
import InputTemplate from "./InputTemplate";
import Button from "@mui/material/Button";

// interface adressProps {
//   firstName: string;
//   updateFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }
interface adressProps {
  updateUserAdress: (a: any) => void;
}

const AdressForm = ({updateUserAdress}: adressProps) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [zipcode, setZipcode] = useState("")

  
  const handleClick = () => {
    updateUserAdress({firstName: firstName + " ", lastName, street, city, country, zipcode})
  }


  return (
    <div className="adressContainer">
    <div className="adressFContainer">
      <div className="col1">
        <InputTemplate label="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <InputTemplate label="Adress" onChange={(e) => setStreet(e.target.value)}/>
        <InputTemplate label="Country" onChange={(e) => setCountry(e.target.value)}/>
      </div>
      <div className="col2">
        <InputTemplate label="Last Name" onChange={(e) => setLastName(e.target.value)} />
        <InputTemplate label="City" onChange={(e) => setCity(e.target.value)}/>
        <InputTemplate label="Zipcode" onChange={(e) => setZipcode(e.target.value)}/>
      </div>
    </div>
      <div className="adressFormBtn">
      <Button variant="contained" size="small" onClick={handleClick}>Save</Button>
      </div>
    </div>
  );
};

export default AdressForm;
