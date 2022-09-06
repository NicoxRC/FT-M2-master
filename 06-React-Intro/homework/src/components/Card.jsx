import React from "react";

export default function Card(props) {
  // acá va tu código
  return (
    <>
      <button onClick={props.onClose}>X</button>
      <h1>{props.name}</h1>
      <p>Min: {props.min}</p>
      <p>Max: {props.max}</p>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="weather"
      />
    </>
  );
}
