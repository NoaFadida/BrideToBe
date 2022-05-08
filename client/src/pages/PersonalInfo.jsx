import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Navbar from "../components/Navbar/Navbar";
import ClientMenu from "../components/Menu/ClientMenu";

const PersonalInfo = () => {
  return (
    <div>
      <Announcment />
      <Navbar />
      <ClientMenu />
      {/* <h2>Personal Info HERE</h2> */}
    </div>
  );
};

export default PersonalInfo;
