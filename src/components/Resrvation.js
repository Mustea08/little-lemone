import React from "react";
import "./reservation.css";
import Footer from "./Footer";
import restaurant from "../images/restaurant.jpg";
import chef from "../images/chef.jpg";
import food from "../images/restauranfood.jpg";

const Resrvation = () => {

  function handleSubmit(e){
    e.preventDefault()
    // the rest is coming soon
  }
  return (
    <>
      <div className="reservation">
        <div className="reservOne">
          {/* <button>&larr;</button> */}
          <h1>Little Lemone</h1>
          <h3>Cairo</h3>
          <p>find a table for any occasion</p>
          <form action="" onSubmit={handleSubmit}>
            <input type="date" name="date" placeholder="Date" required />
            <input type="time" name="time" placeholder="Time" required />
            <input
              type="number"
              name="numberOfDiners"
              id="numberOfDiners"
              placeholder="Number of diners"
              required
              min="1"
            />
            <input
              list="occasions"
              name="occasion"
              id="occasion"
              placeholder="Occasion"
            />
            <datalist id="occasions">
              <option value="anniversary">anniversary</option>
              <option value="birthday">birthday</option>
              <option value="engagement">engagement</option>
            </datalist>
            <p className="option">Seating option</p>
            <label htmlFor="standard"><span>standard</span>
            <input
              type="radio"
              name="seating-option"
              id="standard"
              value="standard"
            /></label>
            <label htmlFor="outside"><span>outside</span>
            <input
              type="radio"
              name="seating-option"
              id="outside"
              value="outside"
            /></label>
            <button>Let's go</button>
          </form>
        </div>
        <div className="reservImage">
          <img src={restaurant} alt="reserv a table" />
          <img src={chef} alt="reserv your table" />
          <img src={food} alt="reserv your table" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Resrvation;
