import React from "react";
import { InputBase } from "../atomos/InputBase";

export const AutenticationPassword = () => {
  return (
    <div className="autenticationPassword">
      <label text="Password" />
      <InputBase img="icon password" type="password" />
    </div>
  );
};
