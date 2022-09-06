import React from "react";
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <>
      {props.cities.map((e) => (
        <Card
          max={e.main.temp_max}
          min={e.main.temp_min}
          name={e.name}
          img={e.weather[0].icon}
          onClose={() => alert(e.name)}
        />
      ))}
    </>
  );
}
