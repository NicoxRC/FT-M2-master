import React from "react";
import s from "../Styles/SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={s.container}>
      <input type="text" placeholder="Ciudad..." />
      <button className={s.btn} onClick={props.onSearch}>
        Agregar
      </button>
    </div>
  );
}
