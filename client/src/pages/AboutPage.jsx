import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from '../components/AboutUs/AboutUs';

const AboutPage = () => {
  return (
    <div>
      <Announcment />
      <Navbar />
      <AboutUs />
    </div>
  );
};

export default AboutPage;