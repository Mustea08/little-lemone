import React from "react";
import { Link } from "react-router-dom";
import food from "../images/restauranfood.jpg";
import salad from "../images/greek salad.jpg";
import bruchete from "../images/burch.png";
import lemon from "../images/lemon dessert.jpg";
import karma from "../assets/e.png";
import linda from "../assets/d.png";
import suzi from "../assets/b.png";
import sam from "../assets/a.png";
import restaurant from "../images/restaurant.jpg";
import chef from "../images/chef.jpg";
import "./main.css";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <main>
        <section className="mainC">
          <div className="content">
            <h1>Little Lemon</h1>
            <h3>Cairo</h3>
            <p>
              little lemon is a charming neighborhood bistro that serves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced.
            </p>
            <button><Link to="/reservation" className="btn">reserve table</Link></button>
          </div>
          <div className="image">
            <img src={food} alt="" />
          </div>
        </section>

        <section className="special" id="menu">
          <div className="lr">
            <h2>This weeks specials!</h2>
            <button>order online</button>
          </div>
          <div className="parent">
            <div className="card">
              <img src={salad} alt="greece salad" />
              <h4>
                <strong>Greece salad</strong>
                <span>$12.99</span>
              </h4>
              <p>
                green salad content salad ,cucumber, tomato and some other stuff
              </p>
              <p>order a delivery </p>
            </div>
            <div className="card">
              <img src={bruchete} alt="greece salad" />
              <h4>
                <strong>Brochette</strong> <span>$12.99</span>
              </h4>
              <p>
                Bruschetta is a classic Italian appetizer that is easy to make
                at home.
              </p>
              <p>order a delivery </p>
            </div>
            <div className="card">
              <img src={lemon} alt="greece salad" />
              <h4>
                <strong>Lemon Dessert</strong> <span>$12.99</span>
              </h4>
              <p>
                lemon pudding, cream cheese and whipped topping combine in this
                layered lemon dessert!
              </p>
              <p>order a delivery </p>
            </div>
          </div>
        </section>

        <section className="testimony" id="reservation">
          <h1>Testimony</h1>
          <div className="card">
            <div className="rate">
              <p>⭐⭐⭐ 4.7</p>
              <img src={karma} alt="personal img" />
              <h4>karma</h4>
              <p>
                Thank you little lemone for the serves provided, amazing
                restaurant
              </p>
            </div>
            <div className="rate">
              <p>⭐⭐⭐4.8</p>
              <img src={linda} alt="personal img" />
              <h4>linda</h4>
              <p>
                Thank you little lemone for the serves provided, best restaurant
              </p>
            </div>
            <div className="rate">
              <p>⭐⭐⭐4.5</p>
              <img src={suzi} alt="personal img" />
              <h4>suzi</h4>
              <p>Thank you little lemone for the serves provided, fantastic</p>
            </div>
            <div className="rate">
              <p>⭐⭐⭐4.9</p>
              <img src={sam} alt="personal img" />
              <h4>sam</h4>
              <p>Thank you little lemone for the serves provided, incredible</p>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="contents">
            <h1>Little Lemon</h1>
            <h3>Cairo</h3>
            <p>
              little lemon website provide different types of foods and
              different types of drinks, welcome to our restaurant anytime. our
              restaurant is in st.34 downtown .our restaurant is in st.34
              downtown
            </p>
          </div>
          <div className="pictures">
            <img src={restaurant} alt="discreption images" />
            <img src={chef} alt="discreption images" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Main;
