import React from 'react';
import logo from '../images/Logo.svg'

const Nav = () => {
  return (
    <nav>
      <a href="#"><img src={logo} alt="logo" /></a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservation</a></li>
        <li><a href="#">Order-online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
