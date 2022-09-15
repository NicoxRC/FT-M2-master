import React, { useState } from "react";
import s from "../Styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  function handleInputChange(e) {
    setCity(e.target.value);
  }

  return (
    <div className={s.container}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
          e.target.reset();
        }}
      >
        <input
          type="text"
          className={s.input}
          placeholder=" Ciudad..."
          onChange={(e) => handleInputChange(e)}
        />
        <input className={s.btn} type="submit" value="Agregar" />
      </form>
    </div>
  );
}
