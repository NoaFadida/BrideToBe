import React, { useEffect, useState } from "react";
import Chart from "./Chart/Chart";
import "./StatisticsPage.scss";
import axios from "axios";
import { allMonth } from "./consts";

const StatisticsPage = () => {
  const [allMeeting, setAllMeeting] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [month, setMonth] = useState([]);

  useEffect(() => {
    const getUsersAndMeeting = async () => {
      const { data: users } = await axios.get(
        "http://localhost:5000/api/users/all-users"
      );
      setAllUsers(users);
      const { data: meetings } = await axios.get(
        "http://localhost:5000/api/meetings/all-meetings"
      );
      setAllMeeting(meetings);
    };
    getUsersAndMeeting();
  }, []);

  useEffect(() => {
    const monthMeetings = allMeeting.filter(
      (meeting) => meeting.Date.split("/")[1] === month
    );
    setMeetings(monthMeetings);
  }, [allMeeting, month]);

  useEffect(() => {
    const monthMeetings = allUsers.filter(
      (user) => user.createdAt.split("-")[1] === month
    );
    setUsers(monthMeetings);
  }, [allUsers, month]);

  return (
    <div className="chart">
      <select onChange={(e) => setMonth(e.target.value)}>
        <option disabled selected>
          Month
        </option>
        {allMonth.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
      <div className="section">
        <h2>Statistics Of New Users</h2>
        <div className="meetings">
          <Chart key={month} month={users.length} all={allUsers.length} />
        </div>
      </div>

      <div className="section">
        <h2>Statistics Of Meetings</h2>
        <div className="meetings">
          <Chart key={month} month={meetings.length} all={allMeeting.length} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
