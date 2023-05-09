import React from 'react';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <nav className='topnav' id="myTopnav">
      <Link to="/" className="logo"><img src={logo} alt="logo" /></Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#menu">Menu</a></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><a href="/#menu">Order-online</a></li>
        <li><a href="/#login">Login</a></li>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i class="fa fa-bars"></i>
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
