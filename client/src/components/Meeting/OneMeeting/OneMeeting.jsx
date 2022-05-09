import React from "react";
import "./OneMeeting.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const OneMeeting = ({ meeting, id }) => {
  const { Members, Time, Type, Date } = meeting;
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    const fetchCustomer = async () => {
      const customer = Members.find((member) => member !== id);
      const res = await axios.get(
        `http://localhost:5000/api/users/?userId=${customer}`
      );
      setCustomer(res.data);
    };
    fetchCustomer();
  }, [id, Members]);
  return (
    <div className="one-meeting-container">
      <h4>{Date}</h4>
      <h4>{customer.username}</h4>
      <h4>{Time}</h4>
      <h4>{Type}</h4>
    </div>
  );
};

export default OneMeeting;
