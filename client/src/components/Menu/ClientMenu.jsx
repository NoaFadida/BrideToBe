import React from "react";
import { useState } from "react";
import NewMeeting from "../NewMetting/NewMeeting";
import "./Menu.scss";

const ClientMenu = () => {
  const user = localStorage.getItem("user");
  const parseUser = JSON.parse(user);
  const { username } = parseUser;

  const [pageIndex, setPageIndex] = useState(0);
  const options = [
    ,
    <NewMeeting />,
    "Future Meetings",
    "Meeting History",
  ];

  const changePageIndex = (index) => {
    if (pageIndex !== index) setPageIndex(index);
  };

  return (
    <div className="user-menu">
      <div className="user-menu-nav">
        <ul>
          <li>Hello {username} !</li>
          <li onClick={() => changePageIndex(1)}>New Meeting</li>
          <li onClick={() => changePageIndex(2)}>Future Meeting</li>
          <li onClick={() => changePageIndex(3)}>Meeting History</li>
        </ul>
      </div>
      <div className="user-menu-data">{options[pageIndex]}</div>
    </div>
  );
};

export default ClientMenu;
