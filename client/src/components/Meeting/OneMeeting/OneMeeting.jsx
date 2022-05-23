import React from "react";
import "./OneMeeting.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineDelete } from 'react-icons/ai';

const OneMeeting = ({ meeting, userId, index }) => {
  const { Members, Time, Type, Date, _id: customerId } = meeting;
  const [customer, setCustomer] = useState({});
  useEffect(() => {
    const fetchCustomer = async () => {
      const customer = Members.find((member) => member !== userId);
      const res = await axios.get(
        `http://localhost:5000/api/users/?userId=${customer}`
      );
      setCustomer(res.data);
    };
    fetchCustomer();
  }, [userId, Members]);

  const deleteMettingHandler = async  () => {
    const res = await axios.delete(
      `http://localhost:5000/api/meetings/${customerId}`
    );
    (!res.status === 200) && alert('the meeting cannot be removed!')
  }

  return (
    <div className="one-meeting-container">
      <h4>{Date}</h4>
      <h4>{customer.username}</h4>
      <h4>{Time}</h4>
      <h4>{Type}</h4>
     {index && <AiOutlineDelete className='one-meeting-container-icon' onClick={deleteMettingHandler}/>}
    </div>
  );
};

export default OneMeeting;
