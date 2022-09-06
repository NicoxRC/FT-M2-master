import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <>
      <input type="text" placeholder="Ciudad" />
      <button onClick={props.onSearch}>Agregar</button>
    </>
  );
}
