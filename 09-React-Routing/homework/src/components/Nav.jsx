import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "../img/logoHenry.png";
import s from "../Styles/Nav.module.css";

export default function Nav({ onSearch }) {
  return (
    <nav className={s.container}>
      <Link to="/">
        <span className={s.spanContainer}>
          <img src={Logo} alt="HenryLogo" />
          <h3>Henry - Weather App</h3>
        </span>
      </Link>
      <Link to="/about">
        <span className={s.spanContainer}>
          <h3>About</h3>
        </span>
      </Link>
      <SearchBar className={s.bar} onSearch={onSearch} />
    </nav>
  );
}
