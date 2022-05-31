import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "./UnavailableDates.scss";
import "../Meeting/NewMetting/Calander.scss";
import { oneHourMeeting } from "../Meeting/consts";

const UnavailableDates = () => {
  const [value, onChange] = useState(new Date());
  const [startingTime, setStartingTime] = useState('')
  const [endingTime, setEndingTime] = useState('')
  const user = localStorage.getItem("user");
  const logedUser = JSON.parse(user);
  const { _id: id } = logedUser;

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };
  const formattedDate = formatDate(value);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const scheduledDayOff = {
      date: formattedDate,
      startingTime,
      endingTime,
      id
    }
    await axios.post(
      `http://localhost:5000/api/meetings/add-unavailble`, scheduledDayOff
    );
  }

  return (
    <form className="container-unaviable-dates">
      <div className="user-input">
        <select onChange={(e) => setStartingTime(e.target.value)}>
          <option disabled selected>
            Starting Time
          </option>
          {oneHourMeeting.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
        <select onChange={(e) => setEndingTime(e.target.value)}>
          <option disabled selected>
            Ending Time
          </option>
          {oneHourMeeting.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
        <button onClick={handleSubmit} type='submit' className="submit-buuton">Submit</button>
      </div>

      <div className="calendar-data">
        <Calendar onChange={onChange} value={value} calendarType="US" />
      </div>
    
    </form>
  );
};

export default UnavailableDates;
