import React from "react";
import s from "../Styles/Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.card}>
      <button onClick={props.onClose} className={s.btn}>
        X
      </button>
      <h4>{props.name}</h4>
      <div className={s.middleDiv}>
        <div>
          <p>Min</p>
          <p>{Math.floor(props.min)}°</p>
        </div>
        <div>
          <p>Max</p>
          <p>{Math.floor(props.max)}°</p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt={"img"}
        />
      </div>
    </div>
  );
}
