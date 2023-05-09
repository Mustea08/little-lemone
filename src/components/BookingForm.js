import React, { useState } from "react";
import Resrvation from "./Resrvation";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [number, setNumber] = useState(1);
  const [time, setTime] = useState(["5:00pm","6:00pm","7:00pm","8:00pm","9:00pm","10:00pm","11:00pm"]);
  // const handleNumber = (e) => setNumber(e.target.value);
  // const handleChange = (e) => setDate(e.target.value);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setDate("");
  //   setNumber(1);
  // }
  const timeList = time.map((t) => {
    return  <option>{t}</option>
})

  return (
    <>
      <Resrvation
        date={date}
        setDate={setDate}
        number={number}
        setNumber={setNumber}
        // handleSubmit={handleSubmit}
        time={time}
        timeList={timeList}
        setTime={setTime}
      />
    </>
  );
};

export default BookingForm;
