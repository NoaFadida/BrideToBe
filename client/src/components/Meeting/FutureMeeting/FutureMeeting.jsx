import axios from "axios";
import { useEffect, useState } from "react";
import OneMeeting from "../OneMeeting/OneMeeting";
import './FutureMeeting.scss';

const FutureMeeting = () => {
    const [meetings, setMeetings] = useState([]);
    const user = localStorage.getItem("user");
    const logedUser = JSON.parse(user);
    const { _id } = logedUser;
  
    useEffect(() => {
      const fetchMeeting = async () => {
        const {data} = await axios.get(
          `http://localhost:5000/api/meetings/${_id}`
          );
          const filteredMeeting = data.map(meeting => {
            let editedDate = meeting.Date.split('/')
              editedDate = `${editedDate[1]}/${editedDate[0]}/${editedDate[2]}` 
              meeting.Date = editedDate
              return meeting
          }) 
          const futureMeetings = filteredMeeting.filter(meeting => new Date() - new Date(meeting.Date) < 0)
          
          const sortMeeting = futureMeetings.sort(function (a, b) {
              return new Date(b.Date) - new Date(a.Date);
            });
        setMeetings(sortMeeting);
      };
      fetchMeeting();
    }, []);

    return (
      <div className="all-meeting-container">
        {meetings.length > 0 &&
          meetings.map((meeting) => {
            return (
              <OneMeeting index={true} userId={_id} meeting={meeting} key={meeting._id} />
            ) 
          })}
        {meetings.length === 0 && <h2>No Appointments were scheduled</h2>}
      </div>
    );
  }

export default FutureMeeting
