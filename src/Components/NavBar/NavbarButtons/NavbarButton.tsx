import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarButtons.css";

interface NavbarButtonsProps {
  text: string;
  path: string;
  onClick: () => void;
}

const NavButton = ({ text, path, onClick }: NavbarButtonsProps) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(path)

  return <button onClick={handleClick} className="button">{text}</button>;
};

export default NavButton;
