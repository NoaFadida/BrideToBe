import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../components/AboutUs/AboutUs";
import "./main.scss";

const AboutPage = () => {
  return (
    <div className="pages-container">
      <Announcment />
      <Navbar />
      <AboutUs />
    </div>
  );
};

export default AboutPage;
