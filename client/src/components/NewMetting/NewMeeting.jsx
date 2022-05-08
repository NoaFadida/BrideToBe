import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import axios from "axios";
import "./NewMetting.scss";

const NewMeeting = () => {
  const [date, setDate] = useState(new Date());
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const getAdmins = async () => {
      const res = await axios.get("http://localhost:5000/api/users/admins");
      setAdmins(res.data);
    };
    getAdmins();
  }, []);

  return (
    <div className="new-metting">
      <select>
        <option disabled selected>
          choose
        </option>
        {admins.map((admin) => {
          const { username } = admin;
          return <option key={username}>{username.toUpperCase()}</option>;
        })}
      </select>
      <DatePicker value={date} onChange={setDate} />
    </div>
  );
};

export default NewMeeting;
