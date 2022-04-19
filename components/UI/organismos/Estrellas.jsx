import React, { useRef, useState, useEffect } from "react";

export const Estrellas = () => {
  const form = useRef();
  const valueLocal = () => {
    if (typeof window !== "undefined") {
      return Number(localStorage.getItem("value"));
    }
  };
  const [value, setValue] = useState(valueLocal);

  useEffect(() => {
    localStorage.setItem("value", String(value));
    if (value === Number(form.current[4].value)) {
      form.current[4].checked = true;
      localStorage.setItem("value", String(value));
    } else if (value === Number(form.current[3].value)) {
      form.current[3].checked = true;
      localStorage.setItem("value", String(value));
    } else if (value === Number(form.current[2].value)) {
      form.current[2].checked = true;
      localStorage.setItem("value", String(value));
    } else if (value === Number(form.current[1].value)) {
      form.current[1].checked = true;
      localStorage.setItem("value", String(value));
    } else if (value === Number(form.current[0].value)) {
      form.current[0].checked = true;
      localStorage.setItem("value", String(value));
    }
  }, [value]);

  const startSelect = ({ target }) => {
    setValue(target.value);
  };

  return (
    <form ref={form} id="form">
      <p className="clasificacion">
        <input
          onChange={startSelect}
          id="radio1"
          type="radio"
          name="estrellas"
          defaultValue={5}
        />
        <label className="label-form" htmlFor="radio1">
          ★
        </label>
        <input
          onChange={startSelect}
          id="radio2"
          type="radio"
          name="estrellas"
          defaultValue={4}
        />
        <label className="label-form" htmlFor="radio2">
          ★
        </label>
        <input
          onChange={startSelect}
          id="radio3"
          type="radio"
          name="estrellas"
          defaultValue={3}
        />
        <label className="label-form" htmlFor="radio3">
          ★
        </label>
        <input
          onChange={startSelect}
          id="radio4"
          type="radio"
          name="estrellas"
          defaultValue={2}
        />
        <label className="label-form" htmlFor="radio4">
          ★
        </label>
        <input
          onChange={startSelect}
          id="radio5"
          type="radio"
          name="estrellas"
          defaultValue={1}
        />
        <label className="label-form" htmlFor="radio5">
          ★
        </label>
      </p>
    </form>
  );
};
