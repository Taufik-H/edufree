import React from "react";

const Button = ({ className, label, icon }) => {
  return (
    <button className={`${className}`}>
      {label} {icon}
    </button>
  );
};

export default Button;
