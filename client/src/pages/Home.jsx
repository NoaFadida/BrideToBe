import React from "react";
import Announcment from "../components/Announcment/Announcment";
import HomeMessage from "../components/HomeMessage/HomeMessage";
import Navbar from "../components/Navbar/Navbar";
import BorderBottom from '../components/common/BorderBottom/BorderBottom';
import ContactUs from '../components/common/Contactus/ContactUs';
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
