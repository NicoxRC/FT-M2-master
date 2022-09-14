import React from "react";
import Card from "./Card";
import s from "../Styles/Cards.module.css";

export default function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className={s.container}>
        <ul className={s.cards}>
          {cities.map((e) => (
            <li>
              <Card
                max={e.max}
                min={e.min}
                name={e.name}
                img={e.img}
                key={e.id}
                onClose={() => onClose(e.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
