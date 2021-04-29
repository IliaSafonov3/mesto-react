import React from "react";
import logo from "../image/Vector.svg";

export default Header;

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место" />
    </header>
  );
}
