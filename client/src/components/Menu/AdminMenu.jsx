import React from "react";
import { useState } from "react";
import "./Menu.scss";

const AdminMenu = () => {
  const user = localStorage.getItem("user");
  const parseUser = JSON.parse(user);
  const { username } = parseUser;

  const [pageIndex, setPageIndex] = useState(0);
    const options = [
    "Edit Profile",
    "Edit Future Meetings",
    "View All Meetings" ,
    "Add Unaviable Dates",
    "Set Types Of Meetings",
    "Statistical Information"
  ];

  const changePageIndex = (index) => {
    if (pageIndex !== index) setPageIndex(index);
  };

  return (
    <div className="user-menu">
      <div className="user-menu-nav">
        <ul>
          <li>Hello {username} !</li>
          <li onClick={() => changePageIndex(0)}>Edit Profile</li>
          <li onClick={() => changePageIndex(1)}>Edit Future Meetings</li>
          <li onClick={() => changePageIndex(2)}>View All Meetings</li>
          <li onClick={() => changePageIndex(3)}>Add Unaviable Dates</li>
          <li onClick={() => changePageIndex(4)}>Set Types Of Meetings</li>
          <li onClick={() => changePageIndex(5)}>Statistical Information</li>
        </ul>
      </div>
      <div className="user-menu-data">{options[pageIndex]}</div>
    </div>
  );
};

export default AdminMenu;