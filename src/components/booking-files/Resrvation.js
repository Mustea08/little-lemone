import React, { useState } from "react";
import "./reservation.css";
import Footer from "../Footer";
import restaurant from "../../images/restaurant.jpg";
import chef from "../../images/chef.jpg";
import food from "../../images/restauranfood.jpg";
import { submitAPI } from "../fake-api/fakeapi";
import { Link, useNavigate } from "react-router-dom";

const Resrvation = () => {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(1);
  const [radios, setRadios] = useState(false);
  const select = [
    { id: 0, value: "5:00pm" },
    { id: 1, value: "6:00pm" },
    { id: 2, value: "7:00pm" },
    { id: 3, value: "8:00pm" },
    { id: 4, value: "9:00pm" },
    { id: 5, value: "10:00pm" },
    { id: 6, value: "11:00pm" },
    { id: 7, value: "12:00pm" },
  ];
  const occa = [
    { value: "pick an occasion" },
    { value: "anniversary" },
    { value: "Birthday" },
    { value: "engagement" },
  ];
  const [tim, setTim] = useState({ value: "select time" });
  const [occasion, setOccasion] = useState(occa[0].value);

  const timeList = select.map((t) => <option key={t.id}>{t.value}</option>);
  const occaList = occa.map((list) => (
    <option key={list.value}>{list.value}</option>
  ));
const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    setDate("");
    setNumber(1);
    setTim({ value: "select time" });
    setOccasion(occa[0].value);
    setRadios(false);
    // alert("your form is submited successfully");
    if(date && tim && radios){
      navigate("/confirmed");

    }
  }
  return (
    <>
      <div className="reservation">
        <div className="reservOne">
          {/* <button>&larr;</button> */}
          <h1>Book Now</h1>
          <h3>Cairo</h3>
          <p>find a table for any occasion</p>
          <form action="" onSubmit={handleSubmit}>
            <div className="date-time">
              <div>
                <label htmlFor="date">choose date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  id="date"
                  required
                />
              </div>
              <div>
                <label htmlFor="time">choose time</label>
                <select
                  value={tim}
                  id="time"
                  required
                  onChange={(e) => setTim(e.target.value)}
                >
                  <option value="">pick a time</option>
                  {timeList}
                </select>
              </div>
            </div>
            <label htmlFor="number">number of guests</label>
            <input
              type="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
              min="1"
              max="15"
            />
            <label htmlFor="occasions">occasions</label>
            <select
              id="occasions"
              value={occasion}
              required
              onChange={(e) => setOccasion(e.target.value)}
            >
              {/* <option value="pick an occation">pick an occation</option>
              <option value="anniversary">anniversary</option>
              <option value="birthday">birthday</option>
              <option value="engagement">engagement</option> */}
              {occaList}
            </select>

            <p className="option">Seating option</p>
            <div className="radios">
              <div>
                <label htmlFor="standard">
                  <span>standard</span>
                  <input
                    type="radio"
                    name="seating-option"
                    id="standard"
                    value="standard"
                    checked={radios}
                    onChange={() => setRadios(true)}
                    required
                  />
                </label>
              </div>
              <div>
                <label htmlFor="outside">
                  <span>outside</span>
                  <input
                    type="radio"
                    name="seating-option"
                    id="outside"
                    value="outside"
                    checked={radios}
                    onChange={() => setRadios(true)}
                    required
                  />
                </label>
              </div>
            </div>
            <button type="submit" aria-label="on click">
              Let's go
            </button>
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
