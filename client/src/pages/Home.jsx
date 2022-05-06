import React from "react";
import Announcment from "../components/Announcment/Announcment";
import HomeMessage from "../components/HomeMessage/HomeMessage";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Announcment />
      <Navbar />
      <HomeMessage />
    </>
  );
};

export default Home;
