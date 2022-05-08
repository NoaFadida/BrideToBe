import React from "react";
import Announcment from "../components/Announcment/Announcment";
import HomeMessage from "../components/HomeMessage/HomeMessage";
import Navbar from "../components/Navbar/Navbar";
import ContactUs from '../components/common/ContactUs';

const Home = () => {
  return (
    <>
      <Announcment />
      <Navbar />
      <HomeMessage />
      <ContactUs />
    </>
  );
};

export default Home;
