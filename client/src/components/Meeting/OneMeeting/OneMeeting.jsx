import React from "react";
import "./OneMeeting.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { meetingActions } from "../../../store";

const OneMeeting = ({ meeting, userId, index, userIndex }) => {
  const { Members, Time, Type, Date, _id: meetingId } = meeting;
  const [customer, setCustomer] = useState({});
  const dispatch = useDispatch();
  const storeMeetings = useSelector((state) => state.meeting);
  const storeUserMeeting = useSelector((state) => state.userMeetings);

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

  const deleteMeetingHandler = async () => {
    const res = await axios.delete(
      `http://localhost:5000/api/meetings/${meetingId}`
    );
    if (res.status === 200) {
      if (index) {
        const filteredMeeting = storeMeetings.filter(
          (meeting) => meeting._id !== meetingId
        );
        dispatch(meetingActions.setMeeting(filteredMeeting));
      } else {
        const filteredMeeting = storeUserMeeting.filter(
          (meeting) => meeting._id !== meetingId
        );
        dispatch(meetingActions.setUserMeeting(filteredMeeting));
      }
    } else {
      alert("the meeting cannot be removed!");
      return;
    }
  };

  return (
    <div className="one-meeting-container">
      <h4>{Date}</h4>
      <h4>{customer.username}</h4>
      <h4>{Time}</h4>
      <h4>{Type}</h4>
      {(index || userIndex) && (
        <AiOutlineDelete
          className="one-meeting-container-icon"
          onClick={deleteMeetingHandler}
        />
      )}
    </div>
  );
};

export default OneMeeting;
