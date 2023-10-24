import React from "react";
import "../assets/styles/Button.scss";

const Button = ({ text, icon, ...rest }) => {
  return (
    <button {...rest}>
      {icon && <span className="button-icon">{icon}</span>}
      {text && <span className="text">{text}</span>}
    </button>
  );
};

export default Button;
