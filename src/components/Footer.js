import React from "react";
import logo from "../images/Logo.svg";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="navigator">
        <div className="card-f logo">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="card-f dormant">
          <h5>dormant navigation</h5>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#menu">menu</a>
            </li>
            <li>
              <a href="#reservation">reservation</a>
            </li>
            <li>
              <a href="#menu">order onlin</a>
            </li>
            <li>
              <a href="#">login</a>
            </li>
          </ul>
        </div>
        <div className="card-f contact">
          <h5>contact-us</h5>
          <ul>
            <li>
              <a href="#"> st.34 downtown</a>
            </li>
            <li>
              <a href="#">00201234567891</a>
            </li>
            <li>
              <a href="#">little-lemone@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="card-f media">
          <h5>social media links</h5>
          <ul>
            <li>
              <a href="#">facebook</a>
            </li>
            <li>
              <a href="#">instagram</a>
            </li>
            <li>
              <a href="#">whatsapp</a>
            </li>
            <li>
              <a href="#">email</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
