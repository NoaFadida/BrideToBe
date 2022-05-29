import React, { useEffect, useState } from "react";
import axios from "axios";
import OneMeeting from "../Meeting/OneMeeting/OneMeeting";
import { useDispatch } from "react-redux";
import { meetingActions } from "../../store/index";

const MeetingsHistory = () => {
  const user = localStorage.getItem("user");
  const logedUser = JSON.parse(user);
  const { _id } = logedUser;
  const [meetings, setMeeting] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMeeting = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/meetings/${_id}`
      );
      const filteredMeeting = data.map((meeting) => {
        let editedDate = meeting.Date.split("/");
        editedDate = `${editedDate[1]}/${editedDate[0]}/${editedDate[2]}`;
        return { ...meeting, Date: editedDate };
      });
      const futureMeetings = filteredMeeting.filter(
        (meeting) => new Date() - new Date(meeting.Date) > 0
      );

      const sortMeeting = futureMeetings.sort(function (a, b) {
        return new Date(b.Date) - new Date(a.Date);
      });
      const israelDatesFormat = sortMeeting.map((meeting) => {
        let editedDate = meeting.Date.split("/");
        editedDate = `${editedDate[1]}/${editedDate[0]}/${editedDate[2]}`;
        return { ...meeting, Date: editedDate };
      });
      dispatch(meetingActions.setUserMeeting(israelDatesFormat));
      setMeeting(israelDatesFormat);
    };
    fetchMeeting();
  }, []);

  return (
    <div className="all-meeting-container">
      <div className="meeting-container-title">
        <h4>Date</h4>
        <h4>Name</h4>
        <h4>Time</h4>
        <h4>Type Of Meeting</h4>
      </div>
      {meetings.length > 0 &&
        meetings.map((meeting) => {
          return (
            <OneMeeting userId={_id} meeting={meeting} key={meeting._id} />
          );
        })}
      {meetings.length === 0 && <h2>No Appointments were scheduled</h2>}
    </div>
  );
};

export default MeetingsHistory;
