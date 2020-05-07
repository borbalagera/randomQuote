import React from "react";
import "./button.css";

const Button = ({ buttonDisplayName, clickHandler }) => (
  <button className="btn" onClick={clickHandler}>
    {buttonDisplayName}
  </button>
);

export default Button;
