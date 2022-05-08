import React from "react";
import { useState } from "react";
import NewMeeting from "../NewMetting/NewMeeting";
import "./ClientMenu.scss";

const ClientMenu = () => {
  const user = localStorage.getItem("user");
  const parseUser = JSON.parse(user);
  const { username } = parseUser;

  const [pageIndex, setPageIndex] = useState(0);
  const options = [
    <NewMeeting />,
    "Future Meetings",
    "Meeting History",
    "Send Email",
  ];

  const changePageIndex = (index) => {
    if (pageIndex !== index) setPageIndex(index);
  };

  return (
    <div className="client-menu">
      <div className="client-menu-nav">
        <ul>
          <li>Hello {username}!</li>
          <li onClick={() => changePageIndex(0)}>New Metting</li>
          <li onClick={() => changePageIndex(1)}>Future Metting</li>
          <li onClick={() => changePageIndex(2)}>Metting History</li>
          <li onClick={() => changePageIndex(3)}>Send Email</li>
        </ul>
      </div>
      <div className="client-menu-data">{options[pageIndex]}</div>
    </div>
  );
};

export default ClientMenu;
