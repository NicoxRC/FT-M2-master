import React from "react";
import { Link } from "react-router-dom";
import s from "../Styles/Card.module.css";

export default function Card(props) {
  return (
    <div className={s.card}>
      <button onClick={props.onClose} className={s.btn}>
        X
      </button>
      <Link to={`/ciudad/${props.id}`}>
        <h4>{props.name}</h4>
      </Link>
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
