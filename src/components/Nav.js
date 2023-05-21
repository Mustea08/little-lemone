import React,{useState} from 'react';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav = () => {
  const [state, setstate] = useState(false);

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    setstate(!state)
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
        <span /*href="javascript:void(0);"*/ className="icon" onClick={myFunction}>
          {state === true ?
            <i className="fa-sharp fa-solid fa-x"></i>
            :
            <i className="fa fa-bars"></i>
          }
        </span>
      </ul>
    </nav>
  );
}

export default Nav;
