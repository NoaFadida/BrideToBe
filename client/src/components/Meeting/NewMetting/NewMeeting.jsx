import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "./NewMetting.scss";
import "./Calander.css";
import {
  halfHourMeeting,
  oneHourMeeting,
  twoHourMeeting,
  meetingTypes,
} from "../consts";

const NewMeeting = ({ id }) => {
  const [value, onChange] = useState(new Date());
  const [admins, setAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState({});
  const [designer, setDesigner] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [meetingsTime, setMeetingsTime] = useState([]);
  const [eventType, setEventType] = useState("");
  const [filteredMeetingTime, setFilteredMeetingTime] = useState([]);

  useEffect(() => {
    const fetchMeeting = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/meetings/${selectedAdmin._id}`
      );
      const filteredMeeting = data.map((meeting) => {
        let editedDate = meeting.Date.split("/");
        editedDate = `${editedDate[1]}/${editedDate[0]}/${editedDate[2]}`;
        return { ...meeting, Date: editedDate };
      });
      const futureMeetings = filteredMeeting.filter(
        (meeting) => new Date() - new Date(meeting.Date) < 0
      );
      const israelDatesFormat = futureMeetings.map((meeting) => {
        let editedDate = meeting.Date.split("/");
        editedDate = `${editedDate[1]}/${editedDate[0]}/${editedDate[2]}`;
        return { ...meeting, Date: editedDate };
      });
      const formattedDate = formatDate(value);
      const filteredFutureMeetings = israelDatesFormat.filter(
        (meeting) => meeting.Date === formattedDate
      );
      const freeMeetingsTimes = [];
      meetingsTime.map((time) => {
        const foundMeeting = filteredFutureMeetings.find(
          (futureMeeting) => futureMeeting.Time === time
        );
        if (!foundMeeting) freeMeetingsTimes.push(time);
      });
      setFilteredMeetingTime(freeMeetingsTimes);
    };
    fetchMeeting();
  }, [selectedAdmin, value, meetingsTime]);

  useEffect(() => {
    const getAdmins = async () => {
      const { data: adminsData } = await axios.get(
        "http://localhost:5000/api/users/admins"
      );
      setAdmins(adminsData);
    };
    getAdmins();
  }, []);

  useEffect(() => {
    const onChangeHandler = () => {
      const { Fitting, InitialMeeting, PickUpDress } = selectedAdmin || {};
      if (eventType === "" || selectedAdmin === {}) return;
      else if (eventType === "Initial Meeting") {
        if (InitialMeeting === "30") setMeetingsTime(halfHourMeeting);
        else if (InitialMeeting === "60") setMeetingsTime(oneHourMeeting);
        else setMeetingsTime(twoHourMeeting);
      } else if (eventType === "Fitting") {
        if (Fitting === "30") setMeetingsTime(halfHourMeeting);
        else if (Fitting === "60") setMeetingsTime(oneHourMeeting);
        else setMeetingsTime(twoHourMeeting);
      } else if (eventType === "Pick Up Dress") {
        if (PickUpDress === "30") setMeetingsTime(halfHourMeeting);
        else if (PickUpDress === "60") setMeetingsTime(oneHourMeeting);
        else setMeetingsTime(twoHourMeeting);
      }
      setType(eventType);
    };
    onChangeHandler();
  }, [selectedAdmin, eventType]);

  useEffect(() => {
    const getAdmin = async () => {
      if (designer === "") return;
      const { data } = await axios.get(
        `http://localhost:5000/api/users/?username=${designer}`
      );
      setSelectedAdmin(data);
    };
    getAdmin();
  }, [designer]);

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
        <select onChange={(e) => setEventType(e.target.value)}>
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
          {filteredMeetingTime.map((item) => {
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
