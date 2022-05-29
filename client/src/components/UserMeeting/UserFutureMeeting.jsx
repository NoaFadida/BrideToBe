import React, { useEffect } from "react";
import axios from "axios";
import OneMeeting from "../Meeting/OneMeeting/OneMeeting";
import { useDispatch } from "react-redux";
import { meetingActions } from "../../store/index";
import { useSelector } from "react-redux";

const UserFutureMeeting = () => {
  const user = localStorage.getItem("user");
  const logedUser = JSON.parse(user);
  const { _id } = logedUser;
  const dispatch = useDispatch();
  const userMeeting = useSelector((state) => state.userMeetings);

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
        (meeting) => new Date() - new Date(meeting.Date) < 0
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
      {userMeeting?.length > 0 &&
        userMeeting.map((meeting) => {
          return (
            <OneMeeting
              userIndex={true}
              userId={_id}
              meeting={meeting}
              key={meeting._id}
            />
          );
        })}
      {userMeeting.length === 0 && <h2>No Appointments were scheduled</h2>}
    </div>
  );
};

export default UserFutureMeeting;
