import React from "react";
import {Link} from "react-router-dom"

import logo from "../image/Vector.svg";

export default Header;

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Место" />
      <p className='header__email'>{props.email}</p>
      <Link className='header__link' to={props.link}>{props.linkText}</Link>
    </header>
  );
}
