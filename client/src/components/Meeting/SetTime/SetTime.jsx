import React, { useState } from "react";
import "./SetTime.scss";
import { meetingTypes, chooseTime } from "../consts";
import axios from "axios";

const SetTime = () => {
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const user = localStorage.getItem("user");
  const parseUser = JSON.parse(user);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (type === "" || time === "") {
      alert("Meeting type and time must be selected!");
      return;
    }
    const editedType = type.split(" ").join("");
    const body = { ...parseUser, [editedType]: time };
    const { data } = await axios.put(
      `http://localhost:5000/api/users/admin/${parseUser._id}`,
      body
    );
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <form onSubmit={submitHandler} className="set-metting">
      <div className="user-input">
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
          {chooseTime.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </div>
      <div className="create-meeting">
        <button type="submit">Update Meeting</button>
      </div>
    </form>
  );
};

export default SetTime;
