import React from 'react';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="logo"><img src={logo} alt="logo" /></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><a href="#menu">Order-online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
