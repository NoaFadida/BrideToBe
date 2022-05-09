import React from "react";
import Announcment from "../components/Announcment/Announcment";
import HomeMessage from "../components/HomeMessage/HomeMessage";
import Navbar from "../components/Navbar/Navbar";
import ContactUs from '../components/common/ContactUs';
import BorderBottom from '../components/common/BorderBottom';

const Home = () => {
  return (
    <>
      <Announcment />
      <Navbar />
      <HomeMessage />
      <ContactUs />
      <BorderBottom />
    </>
  );
};

export default Home;
