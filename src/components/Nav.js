import React from 'react';
import logo from '../images/Logo.svg';
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <a href="#home"><img src={logo} alt="logo" /></a>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservation">Reservation</a></li>
        <li><a href="#menu">Order-online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
