import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://espacecrocos.fr/wp-content/uploads/2018/05/Logo.jpg"
        alt="logo club Nimes Olympique"
      />

      <Link className="nav-homepage" to="/">
        <h1 className="title">NIMES OLYMPIQUE</h1>
        <h2 className="title">"Impossible n'est pas nimois !"</h2>
      </Link>
    </div>
  );
}
export default Header;
