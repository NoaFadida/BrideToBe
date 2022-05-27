import "./AllMeeting.scss";
import axios from "axios";
import { useEffect } from "react";
import OneMeeting from "../OneMeeting/OneMeeting";
import { useSelector, useDispatch } from "react-redux";
import { meetingActions } from "../../../store/index";

const AllMeeting = () => {
  const dispatch = useDispatch();
  const storeMeetings = useSelector((state) => state.meeting);
  const user = localStorage.getItem("user");
  const logedUser = JSON.parse(user);
  const { _id } = logedUser;
  let meetings = storeMeetings;

  useEffect(() => {
    const fetchMeeting = async () => {
      if (meetings.length === 0) {
        const { data } = await axios.get(
          `http://localhost:5000/api/meetings/${_id}`
        );
        meetings = data;
      }

      const AllMeeting = meetings.sort(function (a, b) {
        let editedA = a.Date.split("/");
        editedA = `${editedA[1]}/${editedA[0]}/${editedA[2]}`;
        let editedB = b.Date.split("/");
        editedB = `${editedB[1]}/${editedB[0]}/${editedB[2]}`;
        return new Date(editedB) - new Date(editedA);
      });
      dispatch(meetingActions.setMeeting(AllMeeting));
    };
    fetchMeeting();
  }, [meetings]);

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

export default AllMeeting;
