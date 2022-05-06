import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Login from "../components/Auth/Login/Login";
import Navbar from "../components/Navbar/Navbar";

const LoginPage = () => {
  return (
    <>
      <Announcment />
      <Navbar />
      <Login />
    </>
  );
};

export default LoginPage;
