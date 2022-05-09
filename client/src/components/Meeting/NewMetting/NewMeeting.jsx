import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "./NewMetting.scss";
import "./Calander.css";
import { meetingTime, meetingTypes } from "../consts";

const NewMeeting = ({ id }) => {
  const [value, onChange] = useState(new Date());
  const [admins, setAdmins] = useState([]);
  const [designer, setDesigner] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const getAdmins = async () => {
      const res = await axios.get("http://localhost:5000/api/users/admins");
      setAdmins(res.data);
    };
    getAdmins();
  }, []);

  const createMeetingHandler = async (e) => {
    e.preventDefault();
    if (!value || type === "" || designer === "" || time === "") {
      alert("Please Complete all the Field");
      return;
    }
    try {
      const formattedDate = formatDate(value);
      const designerInfo = await axios.get(
        `http://localhost:5000/api/users/?username=${designer}`
      );
      const { _id } = designerInfo.data;
      const savedMeeting = {
        Members: [id, _id],
        Type: type,
        Time: time,
        Date: formattedDate,
      };
      axios.post("http://localhost:5000/api/meetings/create", savedMeeting);
      alert("Your meeting was successfully scheduled");
    } catch (error) {
      alert(error);
    }
  };

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };

  return (
    <form onSubmit={createMeetingHandler} className="new-metting">
      <div className="user-input">
        <select onChange={(e) => setDesigner(e.target.value)}>
          <option disabled selected>
            Designer
          </option>
          {admins.map((admin) => {
            const { username } = admin;
            return <option key={username}>{username.toUpperCase()}</option>;
          })}
        </select>
        <select onChange={(e) => setType(e.target.value)}>
          <option disabled selected>
            Meeting Type
          </option>
          {meetingTypes.map((item) => {
            return <option key={item.name}>{item.name}</option>;
          })}
        </select>
        <select onChange={(e) => setTime(e.target.value)}>
          <option disabled selected>
            Meeting Time
          </option>
          {meetingTime.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </div>
      <div className="calendar-data">
        <Calendar onChange={onChange} value={value} calendarType="US" />
      </div>
      <div className="create-meeting">
        <button type="submit">Create Meeting</button>
      </div>
    </form>
  );
};

export default NewMeeting;
