import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Login from "../components/Auth/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import "./main.scss";

const LoginPage = () => {
  return (
    <div className="pages-container">
      <Announcment />
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;
