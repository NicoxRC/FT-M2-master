import React from "react";
import SearchBar from "./SearchBar";
import Logo from "../logoHenry.png";
import s from "../Styles/Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <div className={s.container}>
      <img className={s.logoHenry} src={Logo} alt="HenryLogo" />
      <h3>Henry - Weather App</h3>
      <SearchBar />
    </div>
  );
}
