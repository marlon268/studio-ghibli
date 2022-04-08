import React, {useState} from "react";
import "./estrellas.scss";

export const Estrellas = () => {

  const [valor, setValor] = useState(0);

  const getValor = (e) => {

  }

  return (
    <form id="form">
      <p className="clasificacion">
        <input  id="radio1" type="radio" name="estrellas" defaultValue={5} />
        <label htmlFor="radio1">★</label>
        <input  id="radio2" type="radio" name="estrellas" defaultValue={4} />
        <label htmlFor="radio2">★</label>
        <input  id="radio3" type="radio" name="estrellas" defaultValue={3} />
        <label htmlFor="radio3">★</label>
        <input  id="radio4" type="radio" name="estrellas" defaultValue={2} />
        <label htmlFor="radio4">★</label>
        <input  id="radio5" type="radio" name="estrellas" defaultValue={1} />
        <label htmlFor="radio5">★</label>
      </p>
    </form>
  );
};
