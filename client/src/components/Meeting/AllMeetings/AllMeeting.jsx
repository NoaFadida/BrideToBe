import "./AllMeeting.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import OneMeeting from "../OneMeeting/OneMeeting";
import { useContext } from 'react';
import { MeetingContext } from '../../../context/meetingContext';

const AllMeeting = () => {
  const { setCurrentMeeting, currentMeeting } = useContext(MeetingContext)
  const [meetings, setMeetings] = useState([]);
  const user = localStorage.getItem("user");
  const logedUser = JSON.parse(user);
  const { _id } = logedUser;

  useEffect(() => {
    const fetchMeeting = async () => {
      const {data} = await axios.get(
        `http://localhost:5000/api/meetings/${_id}`
      );
      const AllMeeting = data.sort(function (a, b) {
        let editedA = a.Date.split('/')
        editedA = `${editedA[1]}/${editedA[0]}/${editedA[2]}` 
        let editedB = b.Date.split('/')
        editedB = `${editedB[1]}/${editedB[0]}/${editedB[2]}` 
        return new Date(editedB) - new Date(editedA);
      });
      setCurrentMeeting(AllMeeting)
      setMeetings(AllMeeting);
    };
    fetchMeeting();
  }, []);

  return (
    <div className="all-meeting-container">
      {meetings.length > 0 &&
        meetings.map((meeting) => {
          return (
            <OneMeeting userId={_id} meeting={meeting} key={meeting._id} />
          ) 
        })}
      {meetings.length === 0 && <h2>No Appointments were scheduled</h2>}
    </div>
  );
};

export default AllMeeting;
