import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Register from "../components/Auth/Register/Register";
import Navbar from "../components/Navbar/Navbar";
import "./main.scss";

const RegisterPage = () => {
  return (
    <div className="pages-container">
      <Announcment />
      <Navbar />
      <Register />
    </div>
  );
};

export default RegisterPage;
