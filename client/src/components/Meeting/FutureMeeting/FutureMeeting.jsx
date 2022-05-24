import { useEffect, useState } from "react";
import OneMeeting from "../OneMeeting/OneMeeting";
import "./FutureMeeting.scss";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { meetingActions } from "../../../store";

const FutureMeeting = () => {
  const dispatch = useDispatch();
  const storeMeetings = useSelector((state) => state.meeting);
  const [futureMeetings, setFutureMeetings] = useState([]);
  const user = localStorage.getItem("user");
  const logedUser = JSON.parse(user);
  const { _id } = logedUser;

  useEffect(() => {
    const fetchMeeting = async () => {
      let meetings = storeMeetings;
      if (meetings.length === 0) {
        const { data } = await axios.get(
          `http://localhost:5000/api/meetings/${_id}`
        );
        await dispatch(meetingActions.setMeeting(data));
        meetings = data;
      }
      const filteredMeeting = meetings.map((meeting) => {
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
      setFutureMeetings(israelDatesFormat);
    };
    fetchMeeting();
  }, [storeMeetings, _id]);
  return (
    <div className="all-meeting-container">
      {futureMeetings.length > 0 &&
        futureMeetings.map((meeting) => {
          return (
            <OneMeeting
              index={true}
              userId={_id}
              meeting={meeting}
              key={meeting._id}
            />
          );
        })}
      {futureMeetings.length === 0 && <h2>No Appointments were scheduled</h2>}
    </div>
  );
};

export default FutureMeeting;
