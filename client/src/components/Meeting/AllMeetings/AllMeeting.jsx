import "./AllMeeting.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import OneMeeting from "../OneMeeting/OneMeeting";

const AllMeeting = () => {
  const [meetings, setMeetings] = useState([]);
  const user = localStorage.getItem("user");
  const logedUser = JSON.parse(user);
  const { _id } = logedUser;

  useEffect(() => {
    const fetchMeeting = async () => {
      const allMeeting = await axios.get(
        `http://localhost:5000/api/meetings/${_id}`
      );
      setMeetings(allMeeting.data);
    };
    fetchMeeting();
  }, []);
  return (
    <div className="all-meeting-container">
      {meetings.length > 0 &&
        meetings.map((meeting) => {
          return <OneMeeting id={_id} meeting={meeting} key={meeting._id} />;
        })}
      {meetings.length === 0 && <h2>No Appointments were scheduled</h2>}
    </div>
  );
};

export default AllMeeting;
