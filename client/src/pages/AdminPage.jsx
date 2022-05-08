import React from "react";
import Announcment from "../components/Announcment/Announcment";
import Navbar from "../components/Navbar/Navbar";
import AdminMenu from '../components/Menu/AdminMenu';

const AdminPage = () => {
  return (
    <div>
      <Announcment />
      <Navbar />
      <AdminMenu />
      {/* <h2>Admin Info HERE</h2> */}
    </div>
  );
};

export default AdminPage;