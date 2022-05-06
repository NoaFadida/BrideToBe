import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Navbar from "../components/Navbar/Navbar";
import Menu from '../components/Menu/Menu';

const PersonalInfo = () => {
  return (
    <div>
      <Announcment />
      <Navbar />
      <Menu />
      {/* <h2>Personal Info HERE</h2> */}
    </div>
  );
};

export default PersonalInfo;
