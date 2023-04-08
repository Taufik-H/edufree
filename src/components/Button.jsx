import React from "react";

function Button({ className, label, icon }) {
  return (
    <div>
      <button className={`${className}`}>
        {label} {icon}
      </button>
    </div>
  );
}

export default Button;
