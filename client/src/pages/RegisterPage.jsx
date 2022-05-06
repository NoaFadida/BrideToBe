import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Register from "../components/Auth/Register/Register";
import Navbar from "../components/Navbar/Navbar";

const RegisterPage = () => {
  return (
    <>
      <Announcment />
      <Navbar />
      <Register />
    </>
  );
};

export default RegisterPage;
