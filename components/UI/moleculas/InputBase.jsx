import React from "react";

export const InputBase = ({ img, tipo, label }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <img src={img} alt="logo user" />
        <input type={tipo} />
      </div>
    </div>
  );
};
